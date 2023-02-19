const inputTitle = blogForm['title']
const inputFile = blogForm['image']
const textArea = blogForm['blog']

const createPost = async(e) => {
    e.preventDefault();
    const blog = {
        title: inputTitle.value,
        img: inputFile.value,
        body: textArea.value,
        likes: 0,
        date: new Date()
    }

    await fetch('https://poised-crab-miniskirt.cyclic.app/posts', {
        method: 'POST',
        body: JSON.stringify(blog),
        headers: { 'Content-Type': 'application/json' }
    })
    window.location.replace('/UI/index.html')
}

blogForm.addEventListener('submit', createPost)

// retrieving the blog