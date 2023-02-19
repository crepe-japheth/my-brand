const parentBtns = document.querySelector('.post-insert')


const deletePost = async(id) => {
    const res = await fetch('https://poised-crab-miniskirt.cyclic.app/posts/' + id, {
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