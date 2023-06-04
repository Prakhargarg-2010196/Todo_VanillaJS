
class LS {
    
    getLS(key) {
        // Parses the string data to individual parsed type of data
        return JSON.parse(localStorage.getItem(key));

    }
    setLS(key, value) {
        // Sets array of todos by stringying them to a string
        localStorage.setItem(key, JSON.stringify(value));
    }

    removeLS(key) {
        // remove the Todos completely
        localStorage.removeItem(key);
    }
    
}
 export default LS;
 
