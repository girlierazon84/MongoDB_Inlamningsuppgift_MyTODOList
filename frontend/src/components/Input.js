import React, { useState } from 'react';
import { JsonToTable } from 'react-json-to-table';

import http from '../utils/api/TODOsApi.js';
import '../utils/global/css/global.css'

export default function Input () {// Kontrollera APIet om lever
    const [ apiStart, setApiStart ] = useState ()
    // Create - POST
    const [ toDo, setToDo ] = useState ()
    const [ status, setStatus ] = useState ()
    const [ assignedTo, setAssignedTo ] = useState ()
    // Read - GET
    const [ displayAllToDos, setDisplayAllToDos ] = useState ()
    const [ displayOneToDo, setDisplayOneToDo ] = useState ()
    const [ toDoId, setToDoId ] = useState ()
    // Update - PUT
    const [ updateId, setUpdateId ] = useState ()
    const [ updateToDo, setUpdateToDo ] = useState ()
    const [ updateStatus, setUpdateStatus ] = useState ()
    const [ updateAssignedTo, setUpdateAssignedTo ] = useState ()
    // Delete - DELETE
    const [ id, setId ] = useState ()
    //Reset
    const [ resetInput, setResetInput ] = useState ()

    // Kontrollera APIet om lever - Function
    function alive () {
        http.get ( '/' )
            .then ( function ( response ) {
                console.log ( response.data )
                setApiStart ( response.data )
            } )
            .catch ( function ( error ) {
                // Handle error
                console.log ( error )
                return 'Error'
            } )
            .then ( function () {
                // Always executed
            } )
    }

    // Create - POST - Function
    function createMyToDoList ( listTodo, listStatus, listAssignedTo ) {
        const payload = {
            "todo": listTodo,
            "status": listStatus,
            "assignedTo": listAssignedTo
        }
        http.post ( '/MyToDoLists', payload )
            .then ( function ( response ) {
                console.log ( response.data )
            } )
            .catch ( function ( error ) {
                console.log ( error )
            } )
    }

    // Read - GET - Function
    function getAllMyToDoLists () {
        http.get ( '/MyToDoLists' )
            .then ( function ( response ) {
                console.log ( response.data )
                setDisplayAllToDos ( response.data )
            } )
            .catch ( function ( error ) {
                console.log ( error )
            } )
    }

    function getMyToDoListById ( listId ) {
        http.get ( `/MyToDoLists/${ listId }` )
            .then ( function ( response ) {
                console.log ( response.data )
                setDisplayOneToDo ( response.data )
            } )
            .catch ( function ( error ) {
                console.log ( error )
            } )
    }

    // Update - PUT -Function
    function updateMyToDoList ( listId, listTodo, listStatus, listAssignedTo ) {
        console.log ( listId, listTodo, listStatus, listAssignedTo )
        const payload = {
            'id': listId,
            'todo': listTodo,
            "status": listStatus,
            "assignedTo": listAssignedTo,
        }
        console.log ( payload )
        http.put ( `/MyToDoLists/${ listId }`, payload )
            .then ( function ( response ) {
                console.log ( response.data )
            } )
            .catch ( function ( error ) {
                console.log ( error )
            } )
    }

    // Delete - DELETE - Function
    function deleteMyToDoListById ( listId ) {
        http.delete ( `/MyToDoLists/${ listId }` )
            .then ( function ( response ) {
                console.log ( response.data )
            } )
            .catch ( function ( error ) {
                console.log ( error )
            } )
    }

    // Arrow function to clear all inputs
    const handleResetInput = ( event ) => {
        setApiStart ();
        setToDo ();
        setStatus ();
        setAssignedTo ();
        setDisplayAllToDos ();
        setDisplayOneToDo ();
        setToDoId ();
        setUpdateId ();
        setUpdateToDo ();
        setUpdateStatus ();
        setUpdateAssignedTo ();
        setId ();

        Array.from ( document.querySelectorAll ( 'input' ) ).forEach ( input => ( input.value = '' )
        );
        setResetInput ( {
            itemValues: [ {} ]
        } );
        console.log ( event )
    }

    return (
        <>
            <div className="create__list__container">
                <input className="input__list"
                       id="todo"
                       type="text"
                       placeholder="Create new TODO list here..."
                       value={ toDo }
                       onChange={ event => setToDo ( event.target.value ) }/>

                <input className="input__list"
                       id="status"
                       type="text"
                       placeholder="TODO Status..."
                       value={ status }
                       onChange={ event => setStatus ( event.target.value ) }/>

                <input className="input__list"
                       id="assigned__to"
                       type="text"
                       placeholder="Assigned to whom?..."
                       value={ assignedTo }
                       onChange={ event => setAssignedTo ( event.target.value ) }/>

                <button className="add__btn"
                        onClick={ function () {
                            createMyToDoList ( toDo, status, assignedTo )
                        } }><b>Create</b>
                </button>
            </div>

            <br/>


            <div className="update__list__container ">
                <input className="input__list"
                       id="update__id"
                       type="text"
                       placeholder="ID"
                       value={ updateId }
                       onChange={ event => setUpdateId ( event.target.value ) }/>

                <input className="input__list"
                       id="update__todo"
                       type="text"
                       placeholder="Change TODO here!..."
                       value={ updateToDo }
                       onChange={ event => setUpdateToDo ( event.target.value ) }/>

                <input className="input__list"
                       id="update__status"
                       type="text"
                       placeholder="Change TODO status here!..."
                       value={ updateStatus }
                       onChange={ event => setUpdateStatus ( event.target.value ) }/>

                <input className="input__list"
                       id="update__assigned__to"
                       type="text"
                       placeholder="Assigned to whom?..."
                       value={ updateAssignedTo }
                       onChange={ event => setUpdateAssignedTo ( event.target.value ) }/>

                <button className="update__btn"
                        onChange={ getAllMyToDoLists }
                        onClick={ function () {
                            updateMyToDoList ( updateId, updateToDo, updateStatus, updateAssignedTo )
                        } }><b>Update</b>
                </button>
            </div>

            <br/>

            <div className="delete__container__list">
                <input className="input__list"
                       type='text'
                       id='delete__id'
                       placeholder="ID"
                       value={ id }
                       onChange={ event => setId ( event.target.value ) }/>
                <button className="delete__btn" onClick={ function () {
                    deleteMyToDoListById ( id )
                } }><b>Delete</b>
                </button>
            </div>

            <br/>

            <div className="get__container__list">
                <button className="alive__btn"
                        onClick={ alive }><b>Alive!</b>
                </button>

                <button className="todo__lists__btn" onClick={ getAllMyToDoLists }>
                    <b>open todo lists</b>
                </button>

                <input className="input__list"
                       type="text"
                       id="get__id"
                       placeholder="ID"
                       value={ toDoId }
                       onChange={ event => setToDoId ( event.target.value ) }/>
                <button className="get__btn"
                        onClick={ function () {
                            getMyToDoListById ( toDoId )
                } }><b>Check!</b>
                </button>
                <br/>
                <br/>
                <br/>
                <p className="alive__text"><b>{ apiStart }</b></p>
                <br/>
                <JsonToTable json={ displayAllToDos }/>
                <br/>
                <JsonToTable json={ displayOneToDo }/>
            </div>
            <br/>
            <br/>
            <div className="clear__btn__container">
                <button className="clear__btn" onClick={ function ( event ) {
                    handleResetInput ( resetInput )
                } }><b>Clear</b>
                </button>
            </div>
        </>
    );
}