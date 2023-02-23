const contactForm = document.querySelector('.form-contact')
const inputName = contactForm['fullname']
const inputEmail = contactForm['email']
const textMessage = contactForm['message']
const currentURL = " http://localhost:3000" //https://poised-crab-miniskirt.cyclic.app
console.log(contactForm)

const createMessage = async(e) => {
    e.preventDefault();
    const message = {
        name: inputName.value,
        email: inputEmail.value,
        body: textMessage.value,
        date: new Date()
    }

    await fetch(currentURL + '/messages', {
        method: 'POST',
        body: JSON.stringify(message),
        headers: { 'Content-Type': 'application/json' }
    })
    window.location.replace('/UI/index.html')
}

contactForm.addEventListener('submit', createMessage)