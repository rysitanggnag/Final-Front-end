export default function Section(){
    return (
      <div>
        <div>
          <div id="#top" />
          <section id="home">
            <div className="banner-container">
              {/*   <img src="images/banner-bg.jpg" alt="banner" />*/}
              <div className="container banner-content">
                <div id="da-slider" className="da-slider">
                  <div className="da-slide">
                    <h2>Travel Plans</h2>
                    <p>Get your plans right away.. enjoy!!!</p>
                    <a href="#" className="da-link">
                      Read more
                    </a>
                    <div className="da-img" />
                  </div>
                  <div className="da-slide">
                    <h2>Amazing Tours</h2>
                    <p>Travel you remember for life long!!</p>
                    <a href="#" className="da-link">
                      Read more
                    </a>
                    <div className="da-img" />
                  </div>
                  <div className="da-slide">
                    <h2>Best Travel Travel</h2>
                    <p>Get best deals at our place</p>
                    <a href="#" className="da-link">
                      Read more
                    </a>
                    <div className="da-img" />
                  </div>
                  {/*  <nav class="da-arrows">
                  <span class="da-arrows-prev"></span>
                  <span class="da-arrows-next"></span>
              </nav> */}
                </div>
              </div>
            </div>
          </section>
          <section id="introText">
            <div className="container">
              <div className="text-center">
                <h1>My Travel Gives You a Great Holiday Package</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse interdum erat et neque tincidunt volutpat. Cras
                  eget augue id dui varius pretium. Cras posuere dolor risus.
                  Pellentesque elementum ultricies quam, sit amet rhoncus nisl
                  viverra in. Cras imperdiet nisi a euismod molestie. Ut a metus
                  arcu.{" "}
                </p>
              </div>
            </div>
          </section>
          <section
            id="service"
            className="home-section page-section section appear clearfix secPad bg-gray"
          >
            <div className="text-center">
              <div className="container">
                <div className="heading text-center">
                  {/* Heading */}
                  <h2>What we Offer</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className="row animatedParent">
                  <div className="col-xs-6 col-sm-4 col-md-4">
                    <div className="service-box">
                      <div className="service-icon">
                        <span className="fa fa-tag fa-2x" />
                      </div>
                      <div className="service-desc">
                        <h5>Tour Plan</h5>
                        <div className="divider-header" />
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rquia.
                          <br />
                        </p>
                        <a href="#" className="btn btn-skin">
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-4 col-md-4">
                    <div className="service-box">
                      <div className="service-icon">
                        <span className="fa fa-plane fa-2x" />
                      </div>
                      <div className="service-desc">
                        <h5>Travel Plan</h5>
                        <div className="divider-header" />
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rquia.
                          <br />
                        </p>
                        <a href="#" className="btn btn-skin">
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-4 col-md-4">
                    <div className="service-box">
                      <div className="service-icon">
                        <span className="fa fa-heart fa-2x" />
                      </div>
                      <div className="service-desc">
                        <h5>Stay Plan</h5>
                        <div className="divider-header" />
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rquia.
                          <br />
                        </p>
                        <a href="#" className="btn btn-skin">
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*About*/}
          <section id="aboutUs" className="secPad">
            <div className="container">
              <div className="heading text-center">
                {/* Heading */}
                <h2>About Us</h2>
                <p>
                  At lorem Ipsum available, but the majority have suffered
                  alteration in some form by injected humour.
                </p>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <img
                    src="images/1.jpg"
                    alt
                    className="img-responsive img-thumbnail"
                  />
                </div>
                <div className="col-md-8">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rquia
                    dolor sit amet, consectetur, adipisci velit, sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem.{" "}
                  </p>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasiest, qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci velit, sed quia non numquam eius modi
                    tempora incidunt ut labore et dolore magnam aliquam quaerat
                    voluptatem.{" "}
                  </p>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasiest, qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci velit, sed quia non numquam eius modi
                    tempora incidunt ut labore et dolore magnam aliquam quaerat
                    voluptatem.{" "}
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/*Package*/}
          <section id="packages" className="secPad">
            <div className="container">
              <div className="heading text-center">
                {/* Heading */}
                <h2>Most Popular Packages</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div
                    className="cuadro_intro_hover "
                    style={{ backgroundColor: "#cccccc" }}
                  >
                    <p style={{ textAlign: "center" }}>
                      <img
                        src="images/pic/pic-1.jpg"
                        className="img-responsive"
                        alt
                      />
                    </p>
                    <div className="caption">
                      <div className="blur" />
                      <div className="caption-text">
                        <h3>Place Name</h3>
                        <p>
                          Loren ipsum dolor si amet ipsum dolor si amet ipsum
                          dolor...
                        </p>
                        <a className=" btn btn-default" href="#">
                          <i className="fa fa-chevron-circle-right"> Get It!</i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div
                    className="cuadro_intro_hover "
                    style={{ backgroundColor: "#cccccc" }}
                  >
                    <p style={{ textAlign: "center" }}>
                      <img
                        src="images/pic/pic-2.jpg"
                        className="img-responsive"
                        alt
                      />
                    </p>
                    <div className="caption">
                      <div className="blur" />
                      <div className="caption-text">
                        <h3>Place Name</h3>
                        <p>
                          Loren ipsum dolor si amet ipsum dolor si amet ipsum
                          dolor...
                        </p>
                        <a className=" btn btn-default" href="#">
                          <i className="fa fa-chevron-circle-right"> Get It!</i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div
                    className="cuadro_intro_hover "
                    style={{ backgroundColor: "#cccccc" }}
                  >
                    <p style={{ textAlign: "center" }}>
                      <img
                        src="images/pic/pic-3.jpg"
                        className="img-responsive"
                        alt
                      />
                    </p>
                    <div className="caption">
                      <div className="blur" />
                      <div className="caption-text">
                        <h3>Place Name</h3>
                        <p>
                          Loren ipsum dolor si amet ipsum dolor si amet ipsum
                          dolor...
                        </p>
                        <a className=" btn btn-default" href="#">
                          <i className="fa fa-chevron-circle-right"> Get It!</i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div
                    className="cuadro_intro_hover "
                    style={{ backgroundColor: "#cccccc" }}
                  >
                    <p style={{ textAlign: "center" }}>
                      <img
                        src="images/pic/pic-4.jpg"
                        className="img-responsive"
                        alt
                      />
                    </p>
                    <div className="caption">
                      <div className="blur" />
                      <div className="caption-text">
                        <h3>Place Name</h3>
                        <p>
                          Loren ipsum dolor si amet ipsum dolor si amet ipsum
                          dolor...
                        </p>
                        <a className=" btn btn-default" href="#">
                          <i className="fa fa-chevron-circle-right"> Get It!</i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div
                    className="cuadro_intro_hover "
                    style={{ backgroundColor: "#cccccc" }}
                  >
                    <p style={{ textAlign: "center" }}>
                      <img
                        src="images/pic/pic-5.jpg"
                        className="img-responsive"
                        alt
                      />
                    </p>
                    <div className="caption">
                      <div className="blur" />
                      <div className="caption-text">
                        <h3>Place Name</h3>
                        <p>
                          Loren ipsum dolor si amet ipsum dolor si amet ipsum
                          dolor...
                        </p>
                        <a className=" btn btn-default" href="#">
                          <i className="fa fa-chevron-circle-right"> Get It!</i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3  col-sm-6">
                  <div
                    className="cuadro_intro_hover "
                    style={{ backgroundColor: "#cccccc" }}
                  >
                    <p style={{ textAlign: "center" }}>
                      <img
                        src="images/pic/pic-6.jpg"
                        className="img-responsive"
                        alt
                      />
                    </p>
                    <div className="caption">
                      <div className="blur" />
                      <div className="caption-text">
                        <h3>Place Name</h3>
                        <p>
                          Loren ipsum dolor si amet ipsum dolor si amet ipsum
                          dolor...
                        </p>
                        <a className=" btn btn-default" href="#">
                          <i className="fa fa-chevron-circle-right"> Get It!</i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3  col-sm-6">
                  <div
                    className="cuadro_intro_hover "
                    style={{ backgroundColor: "#cccccc" }}
                  >
                    <p style={{ textAlign: "center" }}>
                      <img
                        src="images/pic/pic-7.jpg"
                        className="img-responsive"
                        alt
                      />
                    </p>
                    <div className="caption">
                      <div className="blur" />
                      <div className="caption-text">
                        <h3>Place Name</h3>
                        <p>
                          Loren ipsum dolor si amet ipsum dolor si amet ipsum
                          dolor...
                        </p>
                        <a className=" btn btn-default" href="#">
                          <i className="fa fa-chevron-circle-right"> Get It!</i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3  col-sm-6">
                  <div
                    className="cuadro_intro_hover "
                    style={{ backgroundColor: "#cccccc" }}
                  >
                    <p style={{ textAlign: "center" }}>
                      <img
                        src="images/pic/pic-8.jpg"
                        className="img-responsive"
                        alt
                      />
                    </p>
                    <div className="caption">
                      <div className="blur" />
                      <div className="caption-text">
                        <h3>Place Name</h3>
                        <p>
                          Loren ipsum dolor si amet ipsum dolor si amet ipsum
                          dolor...
                        </p>
                        <a className=" btn btn-default" href="#">
                          <i className="fa fa-chevron-circle-right" /> Get It!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Quote*/}
          <section id="quote" className="bg-parlex">
            <div className="parlex-back">
              <div className="container secPad text-center">
                <h2>
                  "The World is a book, and those who do not travel read only a
                  page."
                </h2>
                <h3>-Saint Augustine</h3>
              </div>
              {/*/.container*/}
            </div>
          </section>
          {/*Price Table*/}
          <section id="priceTable" className="secPad white">
            <div className="container">
              <div className="heading text-center">
                {/* Heading */}
                <h2>Our Price List</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <div className="panel panel-default text-center">
                    <div className="panel-heading">
                      <h3>Basic</h3>
                    </div>
                    <div className="panel-body">
                      <h3 className="panel-title price">
                        $9<span className="price-cents">99</span>
                        <span className="price-month">mo.</span>
                      </h3>
                    </div>
                    <ul className="list-group">
                      <li className="list-group-item">5 Projects</li>
                      <li className="list-group-item">5 GB of Storage</li>
                      <li className="list-group-item">Up to 100 Users</li>
                      <li className="list-group-item">10 GB Bandwidth</li>
                      <li className="list-group-item">Security Suite</li>
                      <li className="list-group-item">
                        <a className="btn btn-default">Sign Up Now!</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="panel panel-default text-center">
                    <div className="panel-heading">
                      <h3>Plus</h3>
                    </div>
                    <div className="panel-body">
                      <h3 className="panel-title price">
                        $19<span className="price-cents">99</span>
                        <span className="price-month">mo.</span>
                      </h3>
                    </div>
                    <ul className="list-group">
                      <li className="list-group-item">10 Projects</li>
                      <li className="list-group-item">10 GB of Storage</li>
                      <li className="list-group-item">Up to 250 Users</li>
                      <li className="list-group-item">25 GB Bandwidth</li>
                      <li className="list-group-item">Security Suite</li>
                      <li className="list-group-item">
                        <a className="btn btn-default">Sign Up Now!</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="panel panel-danger text-center">
                    <div className="panel-heading">
                      <h3>Premium</h3>
                    </div>
                    <div className="panel-body">
                      <h3 className="panel-title price">
                        $29<span className="price-cents">99</span>
                        <span className="price-month">mo.</span>
                      </h3>
                    </div>
                    <ul className="list-group">
                      <li className="list-group-item">Unlimited</li>
                      <li className="list-group-item">50 GB of Storage</li>
                      <li className="list-group-item">Up to 1000 Users</li>
                      <li className="list-group-item">100 GB Bandwidth</li>
                      <li className="list-group-item">Security Suite</li>
                      <li className="list-group-item">
                        <a className="btn btn-primary">Sign Up Now!</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="panel panel-default text-center">
                    <div className="panel-heading">
                      <h3>Ultimate</h3>
                    </div>
                    <div className="panel-body">
                      <h3 className="panel-title price">
                        $49<span className="price-cents">99</span>
                        <span className="price-month">mo.</span>
                      </h3>
                    </div>
                    <ul className="list-group">
                      <li className="list-group-item">Unlimited</li>
                      <li className="list-group-item">150 GB of Storage</li>
                      <li className="list-group-item">Unlimited</li>
                      <li className="list-group-item">500 GB Bandwidth</li>
                      <li className="list-group-item">Security Suite</li>
                      <li className="list-group-item">
                        <a className="btn btn-default">Sign Up Now!</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            id="testimonial"
            className="page-section section appear clearfix secPad"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div
                    className="carousel slide"
                    data-ride="carousel"
                    id="quote-carousel"
                  >
                    {/* Bottom Carousel Indicators */}
                    <ol className="carousel-indicators">
                      <li
                        data-target="#quote-carousel"
                        data-slide-to={0}
                        className="active"
                      />
                      <li
                        data-target="#quote-carousel"
                        data-slide-to={1}
                        className
                      />
                      <li
                        data-target="#quote-carousel"
                        data-slide-to={2}
                        className
                      />
                    </ol>
                    {/* Carousel Slides / Quotes */}
                    <div className="carousel-inner">
                      {/* Quote 1 */}
                      <div className="item active">
                        <blockquote>
                          <div className="row">
                            <div className="col-sm-3 text-center">
                              <img
                                className="img-circle"
                                src="images/person_1.png"
                                style={{ width: 100, height: 100 }}
                              />
                            </div>
                            <div className="col-sm-9">
                              <p>
                                Neque porro quisquam est qui dolorem ipsum quia
                                dolor sit amet, consectetur, adipisci velit!
                              </p>
                              <small>Someone famous</small>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      {/* Quote 2 */}
                      <div className="item">
                        <blockquote>
                          <div className="row">
                            <div className="col-sm-3 text-center">
                              <img
                                className="img-circle"
                                src="images/person_2.png"
                                style={{ width: 100, height: 100 }}
                              />
                            </div>
                            <div className="col-sm-9">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Etiam auctor nec lacus ut
                                tempor. Mauris.
                              </p>
                              <small>Someone famous</small>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      {/* Quote 3 */}
                      <div className="item">
                        <blockquote>
                          <div className="row">
                            <div className="col-sm-3 text-center">
                              <img
                                className="img-circle"
                                src="images/person_3.png"
                                style={{ width: 100, height: 100 }}
                              />
                            </div>
                            <div className="col-sm-9">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Ut rutrum elit in arcu blandit,
                                eget pretium nisl accumsan. Sed ultricies
                                commodo tortor, eu pretium mauris.
                              </p>
                              <small>Someone famous</small>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                    </div>
                    {/* Carousel Buttons Next/Prev */}
                    <a
                      data-slide="prev"
                      href="#quote-carousel"
                      className="left carousel-control"
                    >
                      <i className="fa fa-chevron-left" />
                    </a>
                    <a
                      data-slide="next"
                      href="#quote-carousel"
                      className="right carousel-control"
                    >
                      <i className="fa fa-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Portfolio*/}
          <section
            id="portfolio"
            className="page-section section appear clearfix secPad"
          >
            <div className="container">
              <div className="heading text-center">
                {/* Heading */}
                <h2>Gallery</h2>
                <p>
                  At lorem Ipsum available, but the majority have suffered
                  alteration in some form by injected humour.
                </p>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <div
                      className="portfolio-items isotopeWrapper clearfix"
                      id={3}
                    >
                      <article className="col-sm-4 isotopeItem webdesign">
                        <div className="portfolio-item">
                          <img src="images/portfolio/img1.jpg" alt />
                          <div className="portfolio-desc align-center">
                            <div className="folio-Get It!">
                              <a
                                href="images/portfolio/img1.jpg"
                                className="fancybox"
                              >
                                <i className="fa fa-arrows-alt fa-2x" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </article>
                      <article className="col-sm-4 isotopeItem photography">
                        <div className="portfolio-item">
                          <img src="images/portfolio/img2.jpg" alt />
                          <div className="portfolio-desc align-center">
                            <div className="folio-Get It!">
                              <a
                                href="images/portfolio/img2.jpg"
                                className="fancybox"
                              >
                                <i className="fa fa-arrows-alt fa-2x" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </article>
                      <article className="col-sm-4 isotopeItem photography">
                        <div className="portfolio-item">
                          <img src="images/portfolio/img3.jpg" alt />
                          <div className="portfolio-desc align-center">
                            <div className="folio-Get It!">
                              <a
                                href="images/portfolio/img3.jpg"
                                className="fancybox"
                              >
                                <i className="fa fa-arrows-alt fa-2x" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </article>
                      <article className="col-sm-4 isotopeItem print">
                        <div className="portfolio-item">
                          <img src="images/portfolio/img4.jpg" alt />
                          <div className="portfolio-desc align-center">
                            <div className="folio-Get It!">
                              <a
                                href="images/portfolio/img4.jpg"
                                className="fancybox"
                              >
                                <i className="fa fa-arrows-alt fa-2x" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </article>
                      <article className="col-sm-4 isotopeItem photography">
                        <div className="portfolio-item">
                          <img src="images/portfolio/img5.jpg" alt />
                          <div className="portfolio-desc align-center">
                            <div className="folio-Get It!">
                              <a
                                href="images/portfolio/img5.jpg"
                                className="fancybox"
                              >
                                <i className="fa fa-arrows-alt fa-2x" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </article>
                      <article className="col-sm-4 isotopeItem webdesign">
                        <div className="portfolio-item">
                          <img src="images/portfolio/img6.jpg" alt />
                          <div className="portfolio-desc align-center">
                            <div className="folio-Get It!">
                              <a
                                href="images/portfolio/img6.jpg"
                                className="fancybox"
                              >
                                <i className="fa fa-arrows-alt fa-2x" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </article>
                      <article className="col-sm-4 isotopeItem print">
                        <div className="portfolio-item">
                          <img src="images/portfolio/img7.jpg" alt />
                          <div className="portfolio-desc align-center">
                            <div className="folio-Get It!">
                              <a
                                href="images/portfolio/img7.jpg"
                                className="fancybox"
                              >
                                <i className="fa fa-arrows-alt fa-2x" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </article>
                      <article className="col-sm-4 isotopeItem photography">
                        <div className="portfolio-item">
                          <img src="images/portfolio/img8.jpg" alt />
                          <div className="portfolio-desc align-center">
                            <div className="folio-Get It!">
                              <a
                                href="images/portfolio/img8.jpg"
                                className="fancybox"
                              >
                                <i className="fa fa-arrows-alt fa-2x" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </article>
                      <article className="col-sm-4 isotopeItem print">
                        <div className="portfolio-item">
                          <img src="images/portfolio/img9.jpg" alt />
                          <div className="portfolio-desc align-center">
                            <div className="folio-Get It!">
                              <a
                                href="images/portfolio/img9.jpg"
                                className="fancybox"
                              >
                                <i className="fa fa-arrows-alt fa-2x" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Contact */}
          <section id="contactUs" className="page-section secPad">
            <div className="container">
              <div className="row">
                <div className="heading text-center">
                  {/* Heading */}
                  <h2>Let's Keep In Touch!</h2>
                  <p>
                    Thank you for visiting out my profile. If you would like to
                    get into contact with me, please fill out the form below.
                  </p>
                </div>
              </div>
              <div className="row mrgn30">
                <form method="post" action id="contactfrm" role="form">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Enter name"
                        title="Please enter your name (at least 2 characters)"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Enter email"
                        title="Please enter a valid email address"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="comments">Comments</label>
                      <textarea
                        name="comment"
                        className="form-control"
                        id="comments"
                        cols={3}
                        rows={5}
                        placeholder="Enter your message…"
                        title="Please enter your message (at least 10 characters)"
                        defaultValue={""}
                      />
                    </div>
                    <button
                      name="submit"
                      type="submit"
                      className="btn btn-lg btn-primary"
                      id="submit"
                    >
                      Submit
                    </button>
                    <div className="result" />
                  </div>
                </form>
                <div className="col-sm-4">
                  <h4>Address:</h4>
                  <address>
                    WebThemez Company
                    <br />
                    134 Stilla. Tae., 414515
                    <br />
                    Leorislon, SA 02434-34534 USA
                    <br />
                  </address>
                  <h4>Phone:</h4>
                  <address>
                    12345-49589-2
                    <br />
                  </address>
                </div>
              </div>
            </div>
            {/*/.container*/}
          </section>
        </div>
      </div>
    );
}