import { LitElement, html } from "../../assets/js/lit.js";

export class Header extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="header-holder">
        <div class="header-menu-part">
          <!-- top informational bar with phone number and address links -->
          <div class="header-top">
            <div class="container">
              <div class="header-top-area">
                <ul class="left">
                  <li>
                    <a href="tel:6202235060" target="_blank"
                      ><i class="fa-solid fa-phone"></i>
                      <span>(620) 223-5060</span></a
                    >
                  </li>
                  <li>
                    <a
                      href="https://maps.app.goo.gl/C7aGcBhCdeEAGumu6"
                      target="_blank"
                      ><i class="fa-solid fa-location-dot"></i> 2414 Horton St,
                      Fort Scott, KS 66701</a
                    >
                  </li>
                  <li>
                    <a href="book-tee-time.html" class="booking-btn"
                      ><span>Book a Tee Time</span></a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="container">
            <div
              class="header-bottom pt-2 pb-2 pt-md-0 pb-md-0 d-flex flex-wrap justify-content-between align-items-center"
            >
              <div class="brand-logo d-none d-lg-inline-block">
                <div class="logo">
                  <a href="index.html">
                    <img
                      src="images/whgc-painted-navy.svg"
                      alt="logo"
                      class="img-fluid"
                    />
                  </a>
                </div>
              </div>
              <div class="header-wrapper justify-content-lg-end">
                <div class="mobile-logo d-lg-none">
                  <a href="index.html"
                    ><img
                      src="images/whgc-painted-navy.svg"
                      alt="logo"
                  /></a>
                </div>
                <div class="menu-area">
                  <ul class="menu">
                    <li>
                      <a href="the-course.html" style="padding-right: 0px"
                        >The Course</a
                      >
                    </li>
                    <li>
                      <a href="greens-fees.html" style="padding-right: 0px"
                        >Greens Fees
                      </a>
                    </li>
                    <li>
                      <a href="events.html" style="padding-right: 0px"
                        >Events</a
                      >
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                  <a href="book-tee-time.html" class="booking-btn"
                    ><span>Book a Tee Time</span></a
                  >

                  <!-- toggle icons -->
                  <div class="header-bar d-lg-none">
                    <span></span>
                    <span></span>
                    <span></span>
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
customElements.define("header-content", Header);