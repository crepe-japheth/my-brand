const messageContent = document.querySelector('.message-content')


const renderMessages = async() => {
    let uri = 'https://poised-crab-miniskirt.cyclic.app/messages'

    const res = await fetch(uri)
    const messages = await res.json()

    messages.forEach((message, index) => {
        const messageTemplate = `
        <tr>
            <td> ${message.name} </td>
            <td> ${message.date} </td>
            <td> ${message.email} </td>
            <td> ${message.body.slice(0, 10) + '...'} </td>
            <td><a href="" class="update">view</a> </td>
            <td><a href="" id=${message.id} class="delete">delete</a> </td>
        </tr>
        `
        messageContent.insertAdjacentHTML('beforeend', messageTemplate)
    });
}

window.addEventListener('DOMContentLoaded', () => renderMessages())



const deleteMessage = async(id) => {
    const res = await fetch('https://poised-crab-miniskirt.cyclic.app/messages/' + id, {
        method: 'DELETE'
    })
}

messageContent.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.preventDefault()
        const id = e.target.getAttribute('id')
        deleteMessage(id)

    }
})