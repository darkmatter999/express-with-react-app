
const Backend = {

    displayUsers() {
        return fetch('/users')
        .then(response => response.json())
        
        
    }
}   

export default Backend;
