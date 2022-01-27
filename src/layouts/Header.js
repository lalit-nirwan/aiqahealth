import { BrowserRouter as Link } from "react-router-dom";

function Header(){


    return (
        <header id="header">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-between">
          <div className="logo">
            <Link to="/">
              <img src="assets/img/logo.png" alt="logo" className="img-fluid"/>
            </Link>
          </div>
          </div>
        </div>
      </header>
    )

}

export default Header;