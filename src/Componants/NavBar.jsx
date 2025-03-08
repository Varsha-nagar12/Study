import { Link } from "react-router-dom";

export default function NavBar()
{
    return <>
   <header className="header_section long_section px-0">
      <nav className="navbar navbar-expand-lg custom_nav-container ">
        <a className="navbar-brand" href="index.html">
          <span>Shivay Book-Store </span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
            <ul className="navbar-nav ">
              <Link to="/" className="nav-item nav-link" style={{fontSize:"30px", marginLeft:"10px"}}> Home</Link>
              <Link to="/about" className="nav-item nav-link" style={{fontSize:"30px" ,marginLeft:"10px" }}>About</Link>
              <Link to="/books" className="nav-item nav-link" style={{fontSize:"30px" ,marginLeft:"10px"}}>Books</Link>
              {/* <Link to="/contact" className="nav-item nav-link" style={{fontSize:"20px" ,marginLeft:"10px"}}>Contact</Link> */}


              
            </ul>
          </div>
      <div className="quote_btn-container">
      <Link to="/register" className="btn btn-outline-success "> Register </Link>
      <Link to="/login" className="btn btn-outline-success "> Login </Link>
          </div>

        </div>
      </nav>
    </header>
    </>
}

