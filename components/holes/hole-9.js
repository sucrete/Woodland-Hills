import { LitElement, html } from "../../assets/js/lit.js";

export class HoleNine extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="container contact__form px-lg-5">
        <div
          class="row d-flex flex-column-reverse flex-lg-row justify-content-between g-0"
        >
          <div class="col col-12 col-lg-5">
            <h2 class="mb-0 pt-4 pb-0 pr-0 pl-1 pt-lg-0">Hole 9</h2>

            <table class="table tee-table tee-table-top">
              <tbody>
                <tr class="par">
                  <td>Par 4 for Men and Women</td>
                </tr>
                <tr class="handicap">
                  <td>Handicap of 11 for Men | Handicap of 7 for Ladies</td>
                </tr>
              </tbody>
            </table>
            <table class="table tee-table tee-table-bottom">
              <tbody>
                <tr>
                  <td class="dot dot-blue"><span></span></td>
                  <td>Blue</td>
                  <td>415</td>
                </tr>
                <tr>
                  <td class="dot dot-yellow"><span></span></td>
                  <td>Yellow</td>
                  <td>368</td>
                </tr>
                <tr>
                  <td class="dot dot-white"><span></span></td>
                  <td>White</td>
                  <td>348</td>
                </tr>
                <tr>
                  <td class="dot dot-red"><span></span></td>
                  <td>Red</td>
                  <td>296</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col col-12 col-lg-6 ">
            <figure class="mb-0">
              <img
                src="./assets/images/1_golf_images/holes/hole9.jpeg"
                alt="image of hole nine from behind the green"
                class="rounded img-fluid"
              />
            </figure>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("hole-nine", HoleNine);
