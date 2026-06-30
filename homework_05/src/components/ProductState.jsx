import Button from "./shared/Button";

const ProductState = ({ isLoading, error, isEmpty, onRetry }) => {
  if (isLoading) {
    return (
      <div className="product-state">
        <div className="product-state__spinner" />
        <p>
          Loading
          <span className="loading-dots" />
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-state">
        <p>{error}</p>

        <Button onClick={onRetry}> Try again</Button>
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className="product-state">
        <p>No products found.</p>
      </div>
    );
  }

  return null;
};

export default ProductState;
