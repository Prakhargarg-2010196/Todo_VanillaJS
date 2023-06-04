// Functions Used Repeatedly in creation of DOM and also in other functionalities

// creates the element with a className to the DOM 
export function createElement(tag,className) {
    const element = document.createElement(tag);
    addCSSClass(element, className);
    return element;
}

// selects the element from the DOM
export function getElement(selector) {
    const element = document.querySelector(selector);
    return element;
    
}

// For CSS classes 
export function addCSSClass(element,className) {
    element.classList.add(className);
    return element;
}
export function removeCSSClass(element, className) {
    element.classList.remove(className);
    return element;
}
export function toggleCSSClass(element, className) {
    element.classList.toggle(className);
    return element;
}

