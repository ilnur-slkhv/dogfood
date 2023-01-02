import { useCallback } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import Logo from "../../components/Logo/logo";
import { NotFound } from "../../components/NotFound/NotFound";
import { Product } from "../../components/Products/product";
import Search from "../../components/Search/search";
import Spinner from "../../components/Spinner/spinner";
import api from "../../utils/api";
import { isLiked } from "../../utils/product";

// const ID_PRODUCT = "622c77e877d63f6e70967d22";

export const ProductPage = ({ currentUser, isLoading }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [errorState, setErrorState] = useState(null);
  const handleProductLike = useCallback(() => {
    const liked = isLiked(product.likes, currentUser._id);
    api.changeLikeProduct(product._id, liked).then((newProduct) => {
      setProduct(newProduct);
    });
  }, [product, currentUser]);

  useEffect(() => {
    // setIsLoading(true);
    api
      .getProductById(productId)
      .then((productsData) => {
        // setCurrentUser(userData);
        setProduct(productsData);
      })
      .catch((err) => setErrorState(err));
    // .finally(() => {
    //   setIsLoading(false);
    // });
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
              currentUser={currentUser}
              onProductLike={handleProductLike}
            />
          )
        )}
        {!isLoading && errorState && <NotFound title="Cтраница не найдена." />}
      </div>
    </>
  );
};
