const FeatureItem = ({ Features }) => {
  return (
    <>
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3">
          <img src="/images/flipkart.png" alt="logo" />
        </div>
        <h3 className="fs-2 text-body-emphasis">
          {Features.feature}
        </h3>
        <p>{Features.describe}</p>
      </div>
    </>
  );
};
export default FeatureItem;
