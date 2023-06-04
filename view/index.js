import { createElement, getElement } from "../controller/utils.js";

class View {
    
    constructor() {
        const inputContainer = getElement('.container');
        const inputElement = createElement('input', 'text-input');
        inputContainer.appendChild(inputElement);
    }
    
    displayTodos(todos){
        console.log(todos);
    }



    
}
export default View; 



// Basically what is happening is that the View layer takes the input and then sends it to
// the handler in the controller and the handler in the controller then modifies the data using functions it has through the model.