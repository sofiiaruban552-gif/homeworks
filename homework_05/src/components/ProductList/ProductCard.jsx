import { Star, ShoppingCart } from "lucide-react";
import Button from "../shared/Button";

const ProductCard = ({ product }) => {
  const { title, price, rating, thumbnail } = product;

  return (
    <div className="product-card">
      <div className="product-card__image-wrapper">
        <img
          className="product-card__image"
          src={thumbnail}
          alt={title}
        />
      </div>

      <div className="product-card__content">
        <h3 className="product-card__title">{title}</h3>

        <div className="product-card__rating">
          <Star size={16} className="product-card__star" />
          <span>{rating}</span>
        </div>

        <div className="product-card__footer">
          <span className="product-card__price">${price}</span>

            <Button
            icon={ShoppingCart}
            onClick={() => console.log("Add to cart", product)}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;