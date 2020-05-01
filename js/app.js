const subjectInput = document.querySelector('#subject-input');
const messageInput = document.querySelector('#message-input');
const send = document.querySelector('#send');
const display = document.querySelector(".displ");

send.addEventListener('click', sendMessage);

function sendMessage() {
    let html = `
    <h5 class="subj">${subjectInput.value}</h5>
        <p class="msg-body">${messageInput.value}</p>
        <span class="info">Message delivered</span>
    `;
    alert('Message sent');
    display.innerHTML = html;
    subjectInput.value = '';
    messageInput.value = '';
}
