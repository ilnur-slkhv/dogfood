import { useContext } from "react";
import CardList from "../../components/UI/CardList/card-list";
import Sort from "../../components/UI/Sort/sort";
import Spinner from "../../components/UI/Spinner/spinner";
import { CardContext } from "../../context/cardContext";

export const CatalogPage = ({ isLoading }) => {
  const { cards } = useContext(CardContext);
  return (
    <div className="container container__inner">
      <Sort />
      <div className="content__cards">
        {isLoading ? <Spinner /> : <CardList cards={cards} />}
      </div>
    </div>
  );
};
