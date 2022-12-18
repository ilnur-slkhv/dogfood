import { useEffect, useState } from "react";
import CardList from "../CardList/card-list";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import Logo from "../Logo/logo";
import Search from "../Search/search";
import Sort from "../Sort/sort";
import "./styles.css";
// import data from "../../assets/data.json";
import SearchInfo from "../SearchInfo";
import Button from "../Button/button";
import api from "../../utils/api";
import useDebounce from "../../hooks/useDebounce";

function App() {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const debounceSearchQuery = useDebounce(searchQuery, 350);

  const handleRequest = () => {
    // const filterCards = cards.filter((item) =>
    //   item.name.toUpperCase().includes(searchQuery.toUpperCase())
    // );
    // setCards(filterCards);
    api
      .search(debounceSearchQuery)
      .then((searchResult) => {
        setCards(searchResult);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    Promise.all([api.getProductList(), api.getUserInfo()])
      .then(([productsData, userData]) => {
        setCurrentUser(userData);
        setCards(productsData.products);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    handleRequest();
    console.log("INPUT", debounceSearchQuery);
  }, [debounceSearchQuery]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
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

  return (
    <>
      <Header user={currentUser} onUpdateUser={handleUpdateUser}>
        <>
          <Logo className="logo logo_place_header" href="/" />
          <Search onSubmit={handleFormSubmit} onInput={handleInputChange} />
        </>
      </Header>
      <main className="content container">
        {/* <h1 style={headerStyle} className="title">
          Стилизованный заголовок
        </h1> */}
        <Button type="primary">Купить</Button>
        <Button type="secondary">Подробнее</Button>

        <SearchInfo searchCount={cards.length} searchText={searchQuery} />
        <Sort />
        <div className="content__cards">
          <CardList goods={cards} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
