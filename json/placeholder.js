function dynamically() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displaymydata(data))
}
function displaymydata(data) {
    const webDisplay = document.getElementById('user-id')
    for (const user of data) {
        const li = document.createElement('li')
        li.innerText = user.address.street
        webDisplay.appendChild(li)
        console.log(user.address.street)
    }
}