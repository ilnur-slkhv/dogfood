import { useCallback, useEffect, useState } from "react";
import CardList from "../CardList/card-list";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import Logo from "../Logo/logo";
import Search from "../Search/search";
import Sort from "../Sort/sort";
import "./styles.css";
import SearchInfo from "../SearchInfo";
import api from "../../utils/api";
import useDebounce from "../../hooks/useDebounce";
import { isLiked } from "../../utils/product";
import Spinner from "../Spinner/spinner";
import { CatalogPage } from "../../pages/CatalogPage/catalog-page";
import { ProductPage } from "../../pages/ProductPage/product-page";
import { Route, Routes, useNavigate } from "react-router-dom";
import { NotFoundPage } from "../../pages/NotFound/not-found-page";

function App() {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const debounceSearchQuery = useDebounce(searchQuery, 400);
  const navigate = useNavigate();

  // const handleRequest = () => {
  //   setIsLoading(true);
  //   api
  //     .search(debounceSearchQuery)
  //     .then((searchResult) => {
  //       setCards(searchResult);
  //     })
  //     .catch((err) => console.log(err))
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // };

  const handleRequest = useCallback(() => {
    setIsLoading(true);
    api
      .search(searchQuery)
      .then((searchResult) => {
        setCards(searchResult);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchQuery]);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([api.getProductList(), api.getUserInfo()])
      .then(([productsData, userData]) => {
        setCurrentUser(userData);
        setCards(productsData.products);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    handleRequest();
  }, [debounceSearchQuery]);

  const handleFormSubmit = (inputText) => {
    navigate("/");
    setSearchQuery(inputText);
    handleRequest();
  };

  const handleInputChange = (inputValue) => {
    setSearchQuery(inputValue);
  };

  function handleUpdateUser(userUpdateData) {
    api.setUserInfo(userUpdateData).then((newUserData) => {
      setCurrentUser(newUserData);
    });
  }

  function handleProductLike(product) {
    const liked = isLiked(product.likes, currentUser._id);
    api.changeLikeProduct(product._id, liked).then((newCard) => {
      const newProducts = cards.map((cardState) => {
        return cardState._id === newCard._id ? newCard : cardState;
      });

      setCards(newProducts);
    });
  }

  return (
    <>
      <Header>
        <>
          <Logo className="logo logo_place_header" href="/" />
          <Routes>
            <Route
              path="/" //path не решает проблему. Ошибка No routes matched location "/product/622c779c77d63f6e70967d1c/" остается
              element={
                <Search
                  onSubmit={handleFormSubmit}
                  onInput={handleInputChange}
                />
              }
            />
          </Routes>
        </>
      </Header>
      <main className="content container">
        <SearchInfo searchCount={cards.length} searchText={searchQuery} />
        <Routes>
          <Route
            index
            element={
              <CatalogPage
                isLoading={isLoading}
                cards={cards}
                currentUser={currentUser}
                handleProductLike={handleProductLike}
              />
            }
          />
          <Route
            path="/product/:productId"
            element={
              <ProductPage
                isLoading={isLoading}
                currentUser={currentUser}
                // handleProductLike={handleProductLike}
              />
            }
          />
          <Route
            path="*"
            element={
              <NotFoundPage
                isLoading={isLoading}
                currentUser={currentUser}
                // handleProductLike={handleProductLike}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
