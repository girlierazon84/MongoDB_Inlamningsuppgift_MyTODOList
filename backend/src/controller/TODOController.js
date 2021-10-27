import TODOModel from "../models/TODOModel.js";
import Logger from '../utils/Logger.js'

// CRUD operation
//Create = POST
const createTODO = async ( req, res ) => {
    Logger.http ( req.body )

    const TODO = new TODOModel ( {
        todo: req.body.todo,
        status: req.body.status,
        assignedTo: req.body.assignedTo,
    } )

    Logger.debug ( TODO )

    try {
        const response = await TODO.save ()
        Logger.debug ( response )
        res.status ( 200 ).send ( response )
    } catch ( error ) {
        res.status ( 500 ).send ( { message: error.message } )
    }
}

// Read = GET
const getAllMyToDoLists = async ( req, res ) => {
    try {
        const response = await TODOModel.find ( {} )
        Logger.debug ( response )
        res.status ( 200 ).send ( response )
    } catch ( error ) {
        res.status ( 500 ).send ( { message: error.message } )
    }
}

const getMyToDoListById = async ( req, res ) => {
    const id = req.params.id
    try {
        Logger.http ( `req.params.id: ${ id }` )
        const response = await TODOModel.findById ( id )
        Logger.debug ( response )
        res.status ( 200 ).send ( response )
    } catch ( error ) {
        res.status ( 500 ).send ( {
            message: `Error occurred while retrieving TODO with id ${ id }`,
            error: error.message
        } )
    }
}

// Update = PUT
const updateMyToDoList = async ( req, res ) => {
    let queryId
    let body

    try {
        queryId = req.params.id
        body = req.body
        Logger.http ( `queryId: ${ queryId }` )
        Logger.http ( `body: ${ body }` )

        if ( !body ) {
            res.status ( 400 ).send ( `Can't update TODO with empty values` )
        }

        let response = await TODOModel.findByIdAndUpdate( queryId, {
            todo: body.todo,
            status: body.status,
            assignedTo: body.assignedTo,
        }, { new: true } )
        Logger.debug(response)
        response.length !== 0
            ? res.status(200).send(response)
            : res.status(404).send(`Couldn't find TODO with id: "${ queryId }" `)
    } catch ( error ) {
        res.status ( 500 ).send ( {
            message: `Error occurred while trying to update TODO with id ${ queryId }`,
            error: error.message
        } )
    }
}

// Delete - DELETE
const deleteMyToDoListById = async (req, res) => {
    let queryId
    try {
        queryId = req.params.id
        Logger.http(queryId)
        const response = await TODOModel.findByIdAndDelete(queryId)
        Logger.debug(response)
        res.status(200).send({
            message: `You're successfully deleted todo: "${ response.todo }" and id: "${ queryId }"`
        })
    } catch (error) {
        res.status(500).send({
            message: `Error occurred while trying to delete TODO with ID ${ queryId }`,
            error: error.message
        })
    }
}


export default {
    createTODO,
    getAllMyToDoLists,
    getMyToDoListById,
    updateMyToDoList,
    deleteMyToDoListById
}