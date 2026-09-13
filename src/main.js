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
    <p>My name is Nora and I am a web developer</p>
  </div>
  <div>
  <ul class="card">
    <li><a href="https://elitedeadshot.app/" target="_blank">Will be something</a></li>
  </ul>
  <div>
</main>

<footer>
  <p id="contact-info">Contact me at work.elitedeadshot@gmail.com</p>
    <a href="https://github.com/SuperYoshi8154" target="_blank">GitHub</a>
</footer>
`

setupCounter(document.querySelector('#counter'))
