import { LitElement, html } from '../../assets/js/lit.js';


export class Links extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
    <div class="footer__block">
             
            </div>
    `;
  }
}
customElements.define('footer-links', Links);