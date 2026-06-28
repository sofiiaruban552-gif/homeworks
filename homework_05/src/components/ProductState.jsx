import Button from "./shared/Button";

const ProductState = ({
  isLoading,
  error,
  isEmpty,
  onRetry,
}) => {
  if (isLoading) {
    return (
      <div className="product-state">
        <div className="product-state__spinner" />
        <p>Завантаження...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-state">
        <p>{error}</p>

        <Button onClick={onRetry}>
          Спробувати ще раз
        </Button>
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className="product-state">
        <p>Нічого не знайдено</p>
      </div>
    );
  }

  return null;
};

export default ProductState;