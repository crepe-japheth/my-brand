const messageContent = document.querySelector('.msg-card')
const currentURL = " http://localhost:3000" //https://poised-crab-miniskirt.cyclic.app
const id = new URLSearchParams(window.location.search).get('id')

const viewMessage = async() => {
    const res = await fetch(currentURL + '/messages/' + id)
    const msg = await res.json()

    const template = `
    <h3>name : ${msg.name}</h3>
    <h3>email : ${msg.email}</h3>
    <p> ${msg.body} </p>

    `
    messageContent.insertAdjacentHTML('afterbegin', template)
}

viewMessage()