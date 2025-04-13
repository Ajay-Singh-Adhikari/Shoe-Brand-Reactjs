import { Link } from "react-router-dom";
import { IoBagAdd } from "react-icons/io5";
import { useSelector } from "react-redux";
const Header = () => {
  const bag = useSelector((state) => state.bag);
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <Link
              to="/"
              className="d-inline-flex link-body-emphasis text-decoration-none"
            >
              <img src="/images/brand_logo.png" alt="logo" />
            </Link>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/home" className="nav-link px-2 link-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/features" className="nav-link px-2 link-secondary">
                Features
              </Link>
            </li>
            <li>
              <Link to="/cart" className="nav-link px-2 link-secondary">
                Pricing
              </Link>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-secondary">
                FAQs
              </a>
            </li>
            <li>
              <Link to="/about" className="nav-link px-2 link-secondary">
                About
              </Link>
            </li>
          </ul>
          <div className="col-md-3 text-end">
            <Link to="/login">
              <button type="button" className="btn btn-outline-secondary me-2">
                Login
              </button>
            </Link>
          </div>
            <Link className="action_container" to="/cart">
              <IoBagAdd />
              <span className="action_name">Bag</span>
              <span className="bag-item-count">{bag.length}</span>
            </Link>
        </header>
      </div>
    </>
  );
};
export default Header;
