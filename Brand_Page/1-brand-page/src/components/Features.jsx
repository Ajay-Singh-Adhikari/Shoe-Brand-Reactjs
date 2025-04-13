import { Link } from "react-router-dom";
import FeatureItem from "./FeatureItem";

const Features = () => {
  const Features = [
    {
      id: "001",
      feature: "Eco-Friendly Manufacturing",
      describe:
        "We use sustainable materials and ethical production methods to reduce environmental impact and promote a greener future.",
    },
    {
      id: "002",
      feature: "Durable Quality Materials",
      describe:
        "Crafted from high-grade materials that are built to last — resistant to wear, water, and everyday rough use.",
    },
    {
      id: "003",
      feature: " Sleek, Modern Design",
      describe:
        "Minimalist yet bold styles that match any outfit — from streetwear to smart-casual looks.",
    },
    {
      id: "004",
      feature: " Anti-Slip Outsoles",
      describe:
        "Designed with superior grip and traction, making them safe on wet or uneven surfaces — without compromising on style.",
    },
    {
      id: "005",
      feature: "Proudly Local / Independent",
      describe:
        "A homegrown brand built with passion, precision, and pride — supporting local artisans and craftsmanship.",
    },
  ];
  return (
    <div className="container px-4 py-5" id="featured-3">
      <h2 className="pb-2 border-bottom">Features Of The Shoes</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        {Features.map((item) => (
          <FeatureItem key={item.id} Features={item} />
        ))}
      </div>
      <center>
        <Link to="https://en.wikipedia.org/wiki/Shoe" className="icon-link">
          History Of A Shoe
          <svg className="bi" aria-hidden="true">
            <use xlinkHref="#chevron-right"></use>
          </svg>
        </Link>
      </center>
    </div>
  );
};
export default Features;
