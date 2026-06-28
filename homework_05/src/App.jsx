import "./App.css";
import Filters from "./components/Filters";
import Header from "./components/Header";
import ProductList from "./components/ProductList/ProductList";
import ProductState from "./components/ProductState";

import useFetch from "./hooks/useFetch";

const API = {
  PRODUCTS: "https://dummyjson.com/products",
  PRODUCTS_PAGINATED: "https://dummyjson.com/products?limit=12&skip=0",
  SEARCH_PRODUCTS: "https://dummyjson.com/products/search?q=",
  CATEGORIES: "https://dummyjson.com/products/category-list",
  PRODUCTS_BY_CATEGORY: "https://dummyjson.com/products/category/",
};

const App = () => {
  const {
    data: productsData,
    isLoading: productsLoading,
    error: productsError,
    refetch,
  } = useFetch(API.PRODUCTS_PAGINATED);

  const { data: categoriesData } = useFetch(API.CATEGORIES); //isLoading: categoriesLoading

  const products = productsData?.products ?? [];
  const categories = categoriesData ?? [];

  return (
    <div className="wrapper">
      <Header />
      <Filters categories={categories} />
      {(productsLoading || productsError || products.length === 0) && (
        <ProductState
          isLoading={productsLoading}
          error={productsError}
          isEmpty={!productsLoading && !productsError && products.length === 0}
          onRetry={refetch}
        />
      )}

      {!productsLoading && !productsError && products.length > 0 && (
        <ProductList products={products} />
      )}
      <ProductList />
    </div>
  );
};

export default App;
