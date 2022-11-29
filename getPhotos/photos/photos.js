function getPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(picture => myphotos(picture))
}

function myphotos(picture) {
    const mypic = document.getElementById('internetPhoto')
    for (const pic of picture) {
        const displayPic = document.createElement('div')
        displayPic.innerHTML = `
        <h3>id: ${pic.id}</h3>
        <h3>title: ${pic.title}</h3>
        <img src="${pic.url}" >
        `
        mypic.appendChild(displayPic)
    }
}
getPhotos()