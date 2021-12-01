export default function Header(){
    return (
      <div>
        <header className="header">
          <div className="container">
            <nav className="navbar navbar-inverse" role="navigation">
              <div className="navbar-header">
                <button
                  type="button"
                  id="nav-toggle"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#main-nav"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <a href="#" className="navbar-brand scroll-top logo">
                  <b>Traveller</b>
                </a>
              </div>
              {/*/.navbar-header*/}
              <div id="main-nav" className="collapse navbar-collapse">
                <ul className="nav navbar-nav" id="mainNav">
                  <li className="active">
                    <a href="#home" className="scroll-link">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#aboutUs" className="scroll-link">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#packages" className="scroll-link">
                      Packages
                    </a>
                  </li>
                  <li>
                    <a href="#priceTable" className="scroll-link">
                      Price
                    </a>
                  </li>
                  <li>
                    <a href="#portfolio" className="scroll-link">
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a href="#contactUs" className="scroll-link">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              {/*/.navbar-collapse*/}
            </nav>
            {/*/.navbar*/}
          </div>
          {/*/.container*/}
        </header>
      </div>
    );
}