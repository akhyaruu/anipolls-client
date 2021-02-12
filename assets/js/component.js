class SubsBerita extends HTMLElement {
   connectedCallback() {
     this.innerHTML = ` 
      <section id="signUpBerita" class="newsletter section">
         <div class="container">
            <div class="row">
               <div class="col-lg-6 col-12">
                  <div class="subscribe-text wow fadeInLeft">
                     <h6>Sign up Berita</h6>
                     <p>Dapatkan informasi menarik dan terbaru tentang anime kamu <br> hanya dengan Sign up berita dari
                        Anipolls.</p>
                  </div>
               </div>
               <div class="col-lg-6 col-12">
                  <div class="subscribe-form wow fadeInRight">
                     <form id="formSubscribe" class="newsletter-inner">
                        <input name="emailsubs" placeholder="Masukan email kamu" class="common-input"
                           onfocus="this.placeholder = ''" onblur="this.placeholder = 'Masukan email kamu'" required=""
                           type="email" autocomplete="off">
                        <div class="button">
                           <button class="btn mouse-dir white-bg">Subscribe! <span class="dir-part"></span></button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>`;
   }
}

class Footer extends HTMLElement {
   connectedCallback() {
     this.innerHTML = `  
      <footer class="footer">
         <div class="footer-middle">
            <div class="container">
               <div class="row">
                  <div class="col-md-4 col-12">
                     <div class="f-about single-footer">
                        <div class="logo">
                           <a href="index.html"><img src="../img/logo1.png"></a>
                        </div>
                        <p>Anipolls merupakan website polling anime berbahasa indonesia yang berfungsi sebagai wadah
                           bagi kamu untuk menampung segala aspirasi dalam dunia per-animean.</p>
                        <div class="footer-social">
                           <ul>
                              <li><a href="#"><i class="lni lni-facebook-filled"></i></a></li>
                              <li><a href="#"><i class="lni lni-twitter-original"></i></a></li>
                              <li><a href="#"><i class="lni lni-linkedin-original"></i></a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-8 col-12">
                     <div class="row">
                        <div class="single-footer f-contact f-link">
                           <h3>Hubungi Kami</h3>
                           <p>Bila ada yang ingin kamu tanyakan silahkan hubungi salah satu alamat di bawah ini</p>
                           <ul class="footer-contact">
                              <li><i class="lni lni-phone"></i> <a href="google.com">(0351) 452271-74</a></li>
                              <li><i class="lni lni-envelope"></i> <a href="google.com">anipolls.support@gmail.com</a>
                              </li>
                              <li><i class="lni lni-map-marker"></i> Jakarta, Indonesia</li>
                              <li><i class="lni lni-world"></i> <a href="google.com">anipolls.netlify.app</a></li>
                           </ul>
                        </div>
                     </div>
                     <div class="row">
                        <div class="single-footer f-contact f-link">
                           <h3>Kebijakan Privasi</h3>
                           <p>Anipolls [https://anipolls.netlify.app] menganggap privasi pengunjung kami
                              dengan sangat serius. Kebijakan privasi ini menjelaskan rincian informasi yang
                              disediakan atau dikumpulkan di Anipolls dan bagaimana ia digunakan.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>`;
   }
}

customElements.define('x-subsberita', SubsBerita);
customElements.define('x-footer', Footer);