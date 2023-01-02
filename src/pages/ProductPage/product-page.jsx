import { useContext } from "react";
import { useCallback } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NotFound } from "../../components/NotFound/NotFound";
import { Product } from "../../components/Products/product";
import Spinner from "../../components/Spinner/spinner";
import { CardContext } from "../../context/cardContext";
import api from "../../utils/api";

export const ProductPage = ({ isLoading }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [errorState, setErrorState] = useState(null);

  const { handleLike } = useContext(CardContext);

  const handleProductLike = useCallback(() => {
    handleLike(product).then((updateProduct) => {
      setProduct(updateProduct);
    });
  }, [product, handleLike]);

  useEffect(() => {
    api
      .getProductById(productId)
      .then((productsData) => {
        setProduct(productsData);
      })
      .catch((err) => setErrorState(err));
  }, []);

  return (
    <>
      <div className="content__cards">
        {isLoading ? (
          <Spinner />
        ) : (
          !errorState && (
            <Product
              {...product}
              setProduct={setProduct}
              onProductLike={handleProductLike}
            />
          )
        )}
        {!isLoading && errorState && <NotFound title="Cтраница не найдена." />}
      </div>
    </>
  );
};
