import { useEffect, useState } from "react";
import CardList from "../CardList/card-list";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import Logo from "../Logo/logo";
import Search from "../Search/search";
import Sort from "../Sort/sort";
import "./styles.css";
import data from "../../assets/data.json";
import SearchInfo from "../SearchInfo";
import Button from "../Button/button";

function App() {
  const [cards, setCards] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");

  const handleRequest = () => {
    const filterCards = data.filter((item) =>
      item.name.toUpperCase().includes(searchQuery.toUpperCase())
    );
    // setCards((prevState) => filterCards);
    setCards(filterCards);
  };

  useEffect(() => {
    handleRequest();
  }, [searchQuery]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleRequest();
  };

  const handleInputChange = (inputValue) => {
    setSearchQuery(inputValue);
  };

  return (
    <>
      <Header>
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
