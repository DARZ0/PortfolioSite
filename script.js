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

const button = document.getElementById('myButton');
button.addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
    return;
});
