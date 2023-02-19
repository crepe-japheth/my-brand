const id = new URLSearchParams(window.location.search).get('id')
const blogDetails = document.querySelector('.blog-detail-article')
const postRecent = document.querySelector('.post-recent')
const popularPost = document.querySelector('.popular-post')
const youMayLike = document.querySelector('.you-may-like')
const commentForm = document.querySelector('.comment-form')

const renderDetails = async() => {
    let uri = 'https://poised-crab-miniskirt.cyclic.app/posts/' + id

    const res = await fetch(uri)
    const post = await res.json()

    const template = `
    <h1> ${post.title} </h1>
    <img src="./assets/ecom.jpeg" alt="">
    <p> ${post.body} </p>
    `

    blogDetails.insertAdjacentHTML('afterbegin', template)
}

window.addEventListener('DOMContentLoaded', () => renderDetails())

const filterPostsByComments = async() => {
    let uri = 'https://poised-crab-miniskirt.cyclic.app/posts?_embed=comments&_sort=comments&_limit=3'

    const res = await fetch(uri)
    const posts = await res.json()
    posts.forEach(post => {

        const templatePopular = `
        <div class="recent-post">
        <img src="./assets/analy.jpeg" alt="">
        <h3>${post.title}</h3>
        </div>
        `
        popularPost.insertAdjacentHTML('beforeend', templatePopular)
    });
}

window.addEventListener('DOMContentLoaded', () => filterPostsByComments())


const filterPostsByLikes = async() => {
    let uri = 'https://poised-crab-miniskirt.cyclic.app/posts?_sort=likes&_order=desc&_limit=3'

    const res = await fetch(uri)
    const posts = await res.json()
    posts.forEach(post => {


        const templateLike = `
        <div class="recent-post">
        <img src="./assets/analy.jpeg" alt="">
        <h3>${post.title}</h3>
        </div>
        `
        youMayLike.insertAdjacentHTML('beforeend', templateLike)
    });

}

window.addEventListener('DOMContentLoaded', () => filterPostsByLikes())

const filterPostsByRecent = async() => {
    let uri = 'https://poised-crab-miniskirt.cyclic.app/posts?_sort=id&_order=desc&_limit=3'

    const res = await fetch(uri)
    const posts = await res.json()
    posts.forEach(post => {

        const templateRecent = `
        <div class="recent-post">
        <img src="./assets/analy.jpeg" alt="">
        <h3> ${post.title} </h3>
        </div>
        `
        postRecent.insertAdjacentHTML('beforeend', templateRecent)
    });

}

window.addEventListener('DOMContentLoaded', () => filterPostsByRecent())



const inputName = commentForm['name']
const textArea = commentForm['comment']

const createComment = async(e) => {
    e.preventDefault();
    const comment = {
        name: inputName.value,
        body: textArea.value,
        date: new Date(),
        postId: id
    }

    await fetch('https://poised-crab-miniskirt.cyclic.app/comments', {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: { 'Content-Type': 'application/json' }
    })
    window.location.replace('/UI/index.html')
}

commentForm.addEventListener('submit', createComment)