const loginForm = document.querySelector('.login-form')
const username = loginForm['username']
const textArea = loginForm['password']

const login = async(e) => {
    e.preventDefault();

    const res = await fetch('https://poised-crab-miniskirt.cyclic.app/users')
    const user = await res.json()
        // window.location.replace('/UI/index.html')
}

blogForm.addEventListener('submit', login)