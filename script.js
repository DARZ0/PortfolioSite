function toggleMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function filterProjects() {
    const input = document.getElementById('project-filter');
    const filter = input.value.toLowerCase();
    const ul = document.getElementById('projects-list');
    const li = ul.getElementsByTagName('li');
    for (let i = 0; i < li.length; i++) {
        const text = li[i].innerText.toLowerCase();
        li[i].style.display = text.includes(filter) ? '' : 'none';
    }
}

function messageSent() {
    const message = document.getElementById('message');
    if (message.value.trim() === '') {
        alert('Please enter a message before sending.');
        return;
    }
    alert('Message sent successfully!');
    message.value = ''; // Clear the message input
}
