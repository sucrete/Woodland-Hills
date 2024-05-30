import { LitElement, html } from "../../assets/js/lit.js";

export class FooterContent extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div>
        <div>
          <div class="newsletter newsletter--lowerd">
            <div class="container">
              <div class="newsletter__wrapper">
                <div class="row justify-content-center">
                  <div class="col-lg-6">
                    <div class="newsletter__content text-center">
                      <div class="common-header">
                        <p class="subtitle">Subscribe to Newsletter</p>
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
        </div>
        <div
          class="footer__wrapper padding-top padding-top padding-bottom pb-0"
        >
          <div class="container gx-4 gx-sm-0">
            <div class="row g-5 pb-2">
              <div class="col-12 col-md-8 pb-4">
                <div>
                  <div class="logo__block">
                    <a class="footer__brand mb-1" href="index.html"
                      ><img
                        src="images/logo-footer.png"
                        alt="logo"
                        class="footer-logo"
                    /></a>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-md-6">
                    <div>
                      <div class="footer__about">
                        <div class="footer__block-title">
                          <h3>Info</h3>
                        </div>
                        <div class="hours pb-4 ">
                          <span><i class="fa-solid fa-clock"></i></span>
                          <span
                            >Mon-Fri 09:00-6:00 <br /><span class="subheading"
                              >(holiday hours may differ)</span
                            >
                          </span>
                        </div>

                        <div class="social__block">
                          <div>Follow Us:</div>
                          <ul class="social no-bullets">
                            <li class="social__item">
                              <a
                                href="https://www.facebook.com/shirkeygolf/"
                                class="social__link"
                                target="_blank"
                                ><i class="fab fa-facebook"></i
                              ></a>
                            </li>
                            <li class="social__item">
                              <a
                                href="https://www.instagram.com/shirkeygolfcourse/"
                                class="social__link"
                                target="_blank"
                                ><i class="fab fa-instagram"></i
                              ></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div>
                      <div class="footer__block">
                        <div class="footer__block-title">
                          <h3>Contact</h3>
                        </div>
                        <div class="footer__block-body">
                          <ul class="footer__info no-bullets">
                            <li class="footer__info-item">
                              <span><i class="fa-solid fa-phone"></i></span>
                              <a href="tel:6202235060" target="_blank">
                                <span>(620) 223-5060</span></a
                              >
                            </li>
                            <li class="footer__info-item">
                              <span
                                ><i class="fa-solid fa-location-dot"></i
                              ></span>
                              <a
                                href="https://maps.app.goo.gl/C7aGcBhCdeEAGumu6"
                                target="_blank"
                                > 
                                2414 Horton St<br />
                                Fort Scott, KS 66701</a
                              >
                            </li>
                            <!-- <li class="footer__info-item">
                              <span><i class="fa-solid fa-envelope"></i></span>
                              <a href="mailto:info@shirkeygolfcourse.com"
                                >info@shirkeygolfcourse.com</a
                              >
                            </li> -->
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4 weather">
                <div class="weather-block">
                  <div class="footer__block-title text-center">
                    <h3>Weather</h3>
                    <p class="subtitle">Fort Scott, KS</p>
                  </div>
                  <a
                    class="weatherwidget-io"
                    href="https://forecast7.com/en/37d84n94d71/fort-scott/?unit=us"
                    data-label_1=""
                    data-label_2=""
                    data-font="Helvetica"
                    data-days="3"
                    data-textcolor="#ffffff"
                    data-suncolor="#fe9400"
                    style="display: block; position: relative; height: 264px; padding: 0px; overflow: hidden; text-align: left; text-indent: -299rem;"
                    >FORT SCOTT KANSAS</a
                  >
                </div>
              </div>
            </div>

            <hr class="opacity-100" />
            <div class="footer-bottom">
              <div class="row pt-3 pb-4">
                <div class="col-12 col-md-6">
                  <p class="py-3">
                    Copyright © 2024 Woodland Hills Golf Course All Rights
                    Reserved.
                  </p>
                </div>

                <div class="col-12 col-md-6 teequest-portal">
                  <a
                    href="https://portal.teequest.net/portal"
                    target="_blank"
                    class="text-white-50 py-3"
                  >
                    <svg
                      class="svg-inline--fa fa-gears"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="gears"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                      ></path>
                    </svg>
                    <span><i>powered by TeeQuest</i></span>
                    <sup>TM</sup>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("footer-content", FooterContent);
