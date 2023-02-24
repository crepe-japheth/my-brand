const blogArticle = document.querySelector('.blog-article')
const adminPosts = document.querySelector('.post-insert')
const currentURL = "https://poised-crab-miniskirt.cyclic.app" // " http://localhost:3000" //https://poised-crab-miniskirt.cyclic.app

const renderPosts = async() => {
    let uri = currentURL + '/posts?_embed=comments'

    const res = await fetch(uri)
    const posts = await res.json()

    // let template = ''
    const postlen = posts.length
    console.log(postlen)
    posts.forEach((post, index) => {
        const adminPostTemplate = `
        <tr>
            <td>${post.title}</td>
            <td> ${post.author.length <= 20 ? post.author : 'None'} </td>
            <td>${post.publishedAt}</td>
            <td>${post.likes}</td>
            <td>${post.comments.length}</td>
            <td> <a href="../admin/update.html?id=${post.id}" class="update" id=${post.id} >update</a></td>
            <td><a href="" class="delete" id=${post.id} >delete</a> </td>
        </tr>
        `
        const template = `
        <article class = "${index == postlen - 1 ? 'first' : ''} article">
            <a href="blog-details.html?id=${post.id}">
                <img src=" ${post.urlToImage} " alt="">
                <p>${post.content.slice(0, 200) + '...'}</p>
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