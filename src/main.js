import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
<section id="header">
  <div>
    <h1>Welcome to EliteDeadshot</h1>
  </div>
</section>

<section id="info">
  <div>
    <h1>Hi I'm Nora</h1>
    <p>My name is Nora and I am a web developer</p>
  </div>
</section>

<section id="links">
  <ul>
    <li><a href="https://elitedeadshot.app/" target="_blank">Will be something</a></li>
  </ul>
</section>

<section id="spacer">
  <li><a href="https://github.com/SuperYoshi8154" target="_blank">GitHub</a></li>
</section>
`

setupCounter(document.querySelector('#counter'))
