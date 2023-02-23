const inputTitle = blogForm['title']
const inputFile = blogForm['image']
const textArea = blogForm['blog']
const currentURL = "https://poised-crab-miniskirt.cyclic.app" //" http://localhost:3000" //https://poised-crab-miniskirt.cyclic.app

const createPost = async(e) => {
    e.preventDefault();
    const blog = {
        author: 'japheth',
        title: inputTitle.value,
        description: '',
        url: '',
        urlToImage: inputFile.value,
        content: textArea.value,
        likes: 0,
        publishedAt: new Date()
    }

    await fetch(currentURL + '/posts', {
        method: 'POST',
        body: JSON.stringify(blog),
        headers: { 'Content-Type': 'application/json' }
    })
    window.location.replace('/UI/index.html')
}

blogForm.addEventListener('submit', createPost)

// retrieving the blog