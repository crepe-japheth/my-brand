const parentBtns = document.querySelector('.post-insert')
const currentURL = " http://localhost:3000" //https://poised-crab-miniskirt.cyclic.app


const deletePost = async(id) => {
    const res = await fetch(currentURL + '/posts/' + id, {
        method: 'DELETE'
    })
}

parentBtns.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.preventDefault()
        const id = e.target.getAttribute('id')
        deletePost(id)

    }
})