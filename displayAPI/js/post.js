function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayData(data))
}

function displayData(posts) {
    const userId = document.getElementById('display-post')
    for (const post of posts) {
        const div = document.createElement('div')
        div.classList.add('post')
        div.innerHTML = `
        <h4> user id : ${post.id} </h4>
        <h5> title: ${post.title} </h5>
        <p> posts: ${post.body} </p>
        `
        userId.appendChild(div)
    }
}


loadPost();