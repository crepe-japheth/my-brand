const loginForm = document.querySelector('.login-form')
console.log(loginForm)
const username = loginForm['username']
const textArea = loginForm['password']

const currentURL = " http://localhost:3000" //https://poised-crab-miniskirt.cyclic.app

const login = async(e) => {
    e.preventDefault();

    console.log(username.value)

    const res = await fetch(currentURL + `/users/?name=${username.value}&password=${textArea.value}`)
    const user = await res.json()
    console.log(user)
    if (user.length == 0) {
        const template = `<p style="color: brown;">invalid username or password</p>`
        loginForm.insertAdjacentHTML('beforebegin', template)
        console.log('no user with this username')
    } else {

        window.location.replace('/UI/admin/dashboard.html')
    }
}

loginForm.addEventListener('submit', login)