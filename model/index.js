/*
This file will basically describe the data layer of the project and perform following functions
- takes the data from the controller and moves to the local storage
- gives back the data to the controller which inturn gives it back to the view layer 
*/
import LS  from "../model/localStorage.js";
// Checks if the todos are present in the local Storage and if not then store the empty array in todos
let L1 = new LS();
let todos = L1.getLS('Todos') || [];
function _saveLS(store) {
    L1.setLS('Todos', store);
}
function _getLS() {

    return L1.getLS('Todos');
}
class Model {

    constructor() {
        this.store = todos;
    }
    // private function to save data to local storage
   
    addTodo(todo) {
        this.store.push(todo);
        _saveLS(this.store);
    }
    removeTodo(todoId) {
    
        this.store=this.store.filter(todo => todoId !== todo["id"]); 
        _saveLS(this.store);
    }
    showTodos() {
        return _getLS();
    }   
    
    
}

export default  Model;