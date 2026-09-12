import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
<section id="info">
  <div>
    <h1>Hi I'm Nora</h1>
    <p>this is what I am working on</p>
  </div>
</section>

<section id="links">
  <ul>
    <li><a href="https://github.com/SuperYoshi8154" target="_blank">GitHub</a></li>
    <li><a href="https://elitedeadshot.app/" target="_blank">Will be something</a></li>
  </ul>
</section>

<section id="spacer"></section>
`

setupCounter(document.querySelector('#counter'))
