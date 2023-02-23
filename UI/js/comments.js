const blogArticle = document.querySelector('.blog-article')
const insertComment = document.querySelector('.insert-comment')
const currentURL = "https://poised-crab-miniskirt.cyclic.app" //" http://localhost:3000" //https://poised-crab-miniskirt.cyclic.app

const renderPosts = async() => {
    let uri = currentURL + '/comments?_expand=post'

    const res = await fetch(uri)
    const comments = await res.json()

    // let template = ''
    comments.forEach((comment, index) => {
        const commentTemplate = `
        <tr>
            <td><img class="avatar" src="../assets/user.png" alt=""></td>
            <td>japheth</td>
            <td>2023-02-01</td>
            <td> ${comment.post.title} </td>
            <td>${comment.body} </td>
            <td><a href="" id=${comment.id} class="update">view</a> </td>
            <td><a href="" id=${comment.id} class="delete">remove</a> </td>
        </tr>
        `
        insertComment.insertAdjacentHTML('beforeend', commentTemplate)
    });
}

window.addEventListener('DOMContentLoaded', () => renderPosts())


const deleteComment = async(id) => {
    const res = await fetch(currentURL + '/comments/' + id, {
        method: 'DELETE'
    })
}

insertComment.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.preventDefault()
        const id = e.target.getAttribute('id')
        deleteComment(id)

    }
})