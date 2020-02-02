
const Backend = {

    displayUsers() {
        return fetch('/users')
        .then(response => response.json())
        
        
    },

    displayAnimals() {
        return fetch('/animals')
        .then(response => response.json())
        
        
    },

    addAnimal() {
        return fetch('/animals', {method: 'POST', body: 'rat'})
        .then(response => response.json())
    }
}   

export default Backend;
