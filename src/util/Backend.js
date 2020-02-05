
const Backend = {

    displayUsers() {
        return fetch('/users')
        .then(response => response.json())
        
        
    },

    displayAnimals() {
        return fetch('/animals')
        .then(response => response.json())
        
        
    },

    addAnimal(input) {
        return fetch('/animals', {method: 'POST', body: JSON.stringify({input: {animal: input}}), headers: {
            'Content-Type': 'application/json',
          }, })
        .then(response => response.json())
    },

    addUser(input, array) {
        return fetch('/users', {method: 'POST', body: JSON.stringify({input: {id: array.length + 1, username: input}}), 
        headers: {
            'Content-Type': 'application/json',
          }, })
        .then(response => response.json())
    },

    deleteUser(input) {
        return fetch('/users', {method: 'DELETE', body: JSON.stringify({input: {username: input}}), 
        headers: {
            'Content-Type': 'application/json',
          }, })
        .then(response => response.json())
    },
}   

export default Backend;
