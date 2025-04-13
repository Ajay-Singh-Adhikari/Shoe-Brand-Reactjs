import { Link } from "react-router-dom";

const MainBody = () => {
  return (
    <div className="container col-xxl-8 px-4 bodyContainer">
      <div className="row flex-lg-row-reverse align-items-center g-5 bodyContainer">
        <div className="col-10 col-sm-8 col-lg-6 ">
          <img src="/images/hero-image.png" alt="hero-image" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 content">
            YOUR FEET DESERVE THE BEST
          </h1>
          <p className="lead paraContent">
            YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH
            OUR SHOES.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start marginTop">
            <Link to="/home">
              {" "}
              <button
                type="button"
                className="btn btn-danger btn-lg px-4 me-md-2"
              >
                Shop Now
              </button>
            </Link>

            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Category
            </button>
          </div>
          <p className="lead marginTop paraContent">Also Available On</p>
          <div>
            <Link to="https://www.flipkart.com/">
              <img
                className="appLogo"
                src="/images/flipkart.png"
                alt="flipkart-logo"
              />
            </Link>

            <Link to="https://www.amazon.in/">
              <img
                className="appLogo"
                src="/images/amazon.png"
                alt="amazon-logo"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainBody;
