const loginForm = document.querySelector('.login-form')
const username = loginForm['username']
const textArea = loginForm['password']
const currentURL = " http://localhost:3000" //https://poised-crab-miniskirt.cyclic.app

const login = async(e) => {
    e.preventDefault();

    const res = await fetch(currentURL + '/users')
    const user = await res.json()
        // window.location.replace('/UI/index.html')
}

blogForm.addEventListener('submit', login)