import { LitElement, html } from "../../assets/js/lit.js";

export class Newsletter extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="newsletter newsletter--lowerd">
        <div class="container">
          <div class="newsletter__wrapper">
            <div class="row justify-content-center">
              <div class="col-lg-6">
                <div class="newsletter__content text-center">
                  <div class="common-header">
                    <p class="subtitle">Get Update</p>
                    <h3>Get Latest Updates <br />and Deals</h3>
                  </div>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Your Email"
                      aria-label="Subscirbe to Newsletter"
                      aria-describedby="newsletter-input"
                    />
                    <button class="subscribe-btn" id="newsletter-input">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("newsletter-section", Newsletter);
