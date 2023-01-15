import { useCallback, useEffect, useState } from "react";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import Logo from "../Logo/logo";
import Search from "../Search/search";
import "./styles.css";
import SearchInfo from "../SearchInfo";
import api from "../../utils/api";
import useDebounce from "../../hooks/useDebounce";
import { isLiked } from "../../utils/product";
import { CatalogPage } from "../../pages/CatalogPage/catalog-page";
import { ProductPage } from "../../pages/ProductPage/product-page";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { NotFoundPage } from "../../pages/NotFound/not-found-page";
import { UserContext } from "../../context/userContext";
import { CardContext } from "../../context/cardContext";
import { FaqPage } from "../../pages/FaqPage/faq-page";
import { FavoritePage } from "../../pages/FavoritePage/favorite-page";
import RegistrationForm from "../Form/registration-form";
import Modal from "../Modal/modal";
import FormModal from "../FormModal/form-modal";
import { Register } from "../Register/register";
import { Login } from "../Login/login";
import { ResetPassword } from "../ResetPassword/reset-password";
import { HomePage } from "../../pages/HomePage/home-page";
// import Form from "../Form/form";

// function ContactList({ contacts }) {
//   console.log(contacts);
//   return (
//     <div>
//       {contacts.map((contacts) => (
//         <div key={contacts.phoneNumber}>
//           <p>{contacts.name}</p>
//           <p>{contacts.lastName}</p>
//           <p>{contacts.phoneNumber}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

function App() {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const debounceSearchQuery = useDebounce(searchQuery, 400);
  const [favorites, setFavotites] = useState([]);
  const [currentSort, setCurrentSort] = useState("");
  const [isOpenModalForm, setIsOpenModalForm] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();

  const backgroundLocation = location.state?.backgroundLocation;
  const initialPath = location.state?.initialPath;

  // const [contacts, setContacts] = useState([]);

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
        const favoriteProducts = productsData.products.filter((item) =>
          isLiked(item.likes, userData._id)
        );
        setFavotites(favoriteProducts);
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

  const handleProductLike = useCallback(
    (product) => {
      const liked = isLiked(product.likes, currentUser._id);
      return api.changeLikeProduct(product._id, liked).then((updateCard) => {
        const newProducts = cards.map((cardState) => {
          return cardState._id === updateCard._id ? updateCard : cardState;
        });

        if (!liked) {
          setFavotites((prevState) => [...prevState, updateCard]);
        } else {
          setFavotites((prevState) =>
            prevState.filter((card) => card._id !== updateCard._id)
          );
        }

        setCards(newProducts);
        return updateCard;
      });
    },
    [currentUser, cards]
  );

  const sortedData = (currentSort) => {
    console.log(currentSort);
    switch (currentSort) {
      case "low":
        setCards(cards.sort((a, b) => b.price - a.price));
        break;
      case "cheap":
        setCards(cards.sort((a, b) => a.price - b.price));
        break;
      case "sale":
        setCards(cards.sort((a, b) => b.discount - a.discount));
        break;
      default:
        setCards(cards.sort((a, b) => a.price - b.price));
    }
  };

  // const addContact = useCallback(
  //   (formData) => {
  //     setContacts([...contacts, formData]);
  //   },
  //   [contacts]
  // );

  return (
    <UserContext.Provider value={{ user: currentUser }}>
      <CardContext.Provider
        value={{
          cards: cards,
          favorites: favorites,
          currentSort,
          handleLike: handleProductLike,
          onSortData: sortedData,
          setCurrentSort,
        }}
      >
        {/* <Modal active={isOpenModalForm} setActive={setIsOpenModalForm}>
          <RegistrationForm />
        </Modal> */}
        {/* <Form serializeCb={addContact} /> */}
        {/* <ContactList contacts={contacts} /> */}
        {/* <button onClick={() => setIsOpenModalForm(true)}>Войти</button> */}
        {/* <RegistrationForm /> */}
        {/* <FormModal /> */}
        <Header>
          <>
            <Logo className="logo logo_place_header" href="/" />
            <Routes>
              <Route
                path="/"
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
        <main className="content ">
          <SearchInfo searchText={searchQuery} />
          <Routes
            location={
              (backgroundLocation && {
                pathname: initialPath,
              }) ||
              location
            }
          >
            <Route index element={<HomePage isLoading={isLoading} />} />

            <Route
              path="/catalog"
              element={<CatalogPage isLoading={isLoading} />}
            />

            <Route
              path="/product/:productId"
              element={<ProductPage isLoading={isLoading} />}
            />

            <Route path="/faq" element={<FaqPage isLoading={isLoading} />} />

            <Route
              path="/favorites"
              element={<FavoritePage isLoading={isLoading} />}
            />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route path="/reset-password" element={<ResetPassword />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>

          {backgroundLocation && (
            <Routes>
              <Route
                path="/login"
                element={
                  <Modal>
                    <Login />
                  </Modal>
                }
              />

              <Route
                path="/register"
                element={
                  <Modal>
                    <Register />
                  </Modal>
                }
              />

              <Route
                path="/reset-password"
                element={
                  <Modal>
                    <ResetPassword />
                  </Modal>
                }
              />
            </Routes>
          )}
        </main>
        <Footer />
      </CardContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
