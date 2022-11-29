function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser(data))

}
function displayUser(data) {
    const ul = document.getElementById('user-list')
    for (const user of data) {
        // console.log(user.username)
        const li = document.createElement('li');
        li.innerText = user.username;
        ul.appendChild(li)
    }
}




// load albums from fetch api 
// api => application progamming interface
function loadAlbum() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(data => displayAlbums(data))
}
function displayAlbums(data) {
    const secondUl = document.getElementById('second-ul')
    for (album of data) {
        const li = document.createElement('li')
        // console.log(album)
        li.innerText = album.id
        secondUl.appendChild(li)
    }
}