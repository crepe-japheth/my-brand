const updateBtn = document.querySelector('#publish')
const id = new URLSearchParams(window.location.search).get('id')
const blogUpdate = document.querySelector('.blog-form')
const currentURL = " http://localhost:3000" //https://poised-crab-miniskirt.cyclic.app


const update = async() => {
    let uri = currentURL + '/posts/' + id

    const res = await fetch(uri)
    const post = await res.json()

    const template = `
        <input type="text" name="title" id="" value="${post.title}" placeholder="blog title" required>
        <input type="text" name="image" id="" value="${post.urlToImage}" placeholder="image url">
        <textarea name="blog" id="" cols="30" rows="10" placeholder="blog content here" required>${post.content}</textarea>
    `

    blogUpdate.insertAdjacentHTML('afterbegin', template)
}

window.addEventListener('DOMContentLoaded', () => update())

const updataPost = async(id, blog) => {
    try {
        const res = await fetch(currentURL + '/posts/' + id, {
            method: 'PATCH',
            body: JSON.stringify(blog),
            headers: { 'Content_Type': 'application/json' }
        })
    } catch (err) {
        console.log(err)
    }
}
blogUpdate.addEventListener('submit', e => {
        e.preventDefault()
        const titleInput = blogUpdate['title']
        const imgInput = blogUpdate['image']
        const bodyInput = blogUpdate['blog']

        const blog = {
            id: Number(id),
            title: titleInput.value,
            urlToImage: imgInput.value,
            content: bodyInput.value,
            likes: 0,
            publishedAt: "2023-02-17"
        }
        updataPost(id, blog)
            // window.location.replace('../admin/posts.html')
        console.log(blog)
    })
    // updateBtn.addEventListener('click', e => {
    //     e.preventDefault()
    //     const titleInput = blogUpdate['title']
    //     const imgInput = blogUpdate['image']
    //     const bodyInput = blogUpdate['blog']

//     const blog = {
//         id: id,
//         title: titleInput.value,
//         img: imgInput.value,
//         body: bodyInput.value,
//         likes: 0,
//         date: "2023-02-17"
//     }
//     updataPost(id, blog)
//     console.log(blog)

// })