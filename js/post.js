function loadPosts () {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}

// step-1: get the container element where you want to add the new elements
// step-2: create child element
// step-3: set innerText or innerHtml
// step-4: append child

function displayPosts (posts) {
    const postContainer = document.getElementById('posts-container');

    for (const post of posts) {
        const postDiv = document.createElement('postDiv');
        postDiv.classList.add('posts')
        postDiv.innerHTML = `
        <h4>User-${post.userId}</h4>
        <h5>Post: ${post.title} </h5>
        <p>Post Description: ${post.body} </p>
        `;
        postContainer.appendChild(postDiv);
    }
}

loadPosts();



function  createAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

}