const blogArticle = document.querySelector('.blog-article')
const adminPosts = document.querySelector('.post-insert')

const renderPosts = async() => {
    let uri = 'https://poised-crab-miniskirt.cyclic.app/posts?_embed=comments'

    const res = await fetch(uri)
    const posts = await res.json()

    // let template = ''
    posts.forEach((post, index) => {
        const adminPostTemplate = `
        <tr>
            <td>${post.title}</td>
            <td>japheth</td>
            <td>${post.date}</td>
            <td>${post.likes}</td>
            <td>${post.comments.length}</td>
            <td> <a href="../admin/update.html?id=${post.id}" class="update" id=${post.id} >update</a></td>
            <td><a href="" class="delete" id=${post.id} >delete</a> </td>
        </tr>
        `
        const template = `
        <article class=" ${index == 0 ?'first article':'third article'} ">
            <a href="blog-details.html?id=${post.id}">
                <img src="./assets/port.jpeg" alt="">
                <p>${post.body.slice(0, 200) + '...'}</p>
            </a>
        </article>
        `
        if (blogArticle) {
            blogArticle.insertAdjacentHTML("afterbegin", template)

        }
        if (adminPosts) {
            adminPosts.insertAdjacentHTML("beforeend", adminPostTemplate)
        }
    });
}

window.addEventListener('DOMContentLoaded', () => renderPosts())