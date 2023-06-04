/*
This file act as the brain that controls all the actions b/w the model and view layer 
- takes data from the input element and sends to model layer for storage
- takes data from the model layer and send back to view layer for updation
- takes updations from the view layer and modifies them and sends back to the model layer 
  with specific id of the todo to be changed.
- takes the action for deletion and tells the model to delete it using specific id
*/

class Controller{
  constructor(model,view) {
    this.model = model;
    this.view = view;
    
  }
  handleAddTodo(todo) {
    this.model.addTodo(todo);
  }
  handleRemoveTodo(todoId) {
    this.model.removeTodo(todoId);
  }
  handleUpdateTodo(todoId){
    this.model.updateTodo(todoId);
  }
  handleDisplayTodos(){
    this.view.displayTodos(this.model.showTodos());
  }
}
// console.log(Controller);
export default Controller;


