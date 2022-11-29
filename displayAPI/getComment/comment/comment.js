function getComment() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(comments => callComment(comments))
}

function callComment(comments) {
    const mycomments = document.getElementById('api-comment')
    for (const comment of comments) {
        const createComments = document.createElement('div')
        createComments.classList.add('comments')
        createComments.innerHTML = `
        
        <h1>id: ${comment.id} </h1>
        <h2>name: ${comment.name}</h2>
        <h3>email: ${comment.email} </h3>
        <p> body: ${comment.body} </p>
        `
        mycomments.appendChild(createComments)
    }
}

getComment();