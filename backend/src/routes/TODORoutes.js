import TODOController from "../controller/TODOController.js"

const routes = (app) => {
    const TODOUrl = '/MyToDoLists'
    const TODOUrlById = `${TODOUrl}/:id`

    app.post(TODOUrl, TODOController.createTODO)
    app.get(TODOUrl, TODOController.getAllMyToDoLists)
    app.get(TODOUrlById, TODOController.getMyToDoListById)
    app.put(TODOUrlById, TODOController.updateMyToDoList)
    app.delete(TODOUrlById, TODOController.deleteMyToDoListById)
}

export default {
    routes
}