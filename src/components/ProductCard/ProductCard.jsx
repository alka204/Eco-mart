import "./ProductCard.css";

function ProductCard({
  image,
  title,
  price,
  oldPrice,
  // discount,
  rating,
  reviews,
}) {
  return (
    <div className="product-card">
      <div className="product-image">
        {/* <span className="discount">-{discount}%</span> */}

        <div className="product-icons">
          <button>
            <i className="bi bi-heart"></i>
          </button>

          <button>
            <i className="bi bi-eye"></i>
          </button>
        </div>

        <img src={image} alt={title} />

        <button className="add-cart">Add To Cart</button>
      </div>

      <div className="product-info">
        <h4>{title}</h4>

        <div className="prices">
          <span className="new-price">${price}</span>
          <span className="old-price">${oldPrice}</span>
        </div>

        <div className="rating">
          {"★".repeat(rating)}
          {"☆".repeat(5 - rating)}

          <span>({reviews})</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
