import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
<header>
  <div>
    <h1>Welcome to EliteDeadshot</h1>
  </div>
</header>

<main>
  <div class="card">
    <h1>Hi I'm Nora</h1>
    <p>I am a web developer among other things.</p>
  </div>
  <div class="card">
   <p>Here are projects I am working on.</p>
   <a class="links" href="https://github.com/SuperYoshi8154/my-app" target="_blank">Will be something (source)</a>
  <a class="links" href="https://github.com/SuperYoshi8154/elitedeadshot" target="_blank">This website (source)</a>
  </div>
</main>

<footer>
    <a class="links"href="https://github.com/SuperYoshi8154" target="_blank">GitHub</a>
    <div id="email-container" class="links"></div>
</footer>
`
function openEmailClient() {
  const email = "work.elitedeadshot@gmail.com";
  window.location.href = `mailto:${email}`;
}

const emailAddress = "work.elitedeadshot@gmail.com";
const container = document.getElementById("email-container");

container.innerHTML = `<a class="links" href="mailto:${emailAddress}">Email Me</a>`;

function triggerMailtoLink(emailAddress) {
  const mailLink = document.createElement("a");
  mailLink.href = `mailto:${emailAddress}`;
  mailLink.click(); // Programmatically forces the email app to open
}

