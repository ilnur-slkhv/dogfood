import { useContext } from "react";
import CardList from "../../components/UI/CardList/card-list";
import { ContentHeader } from "../../components/UI/ContentHeader/content-header";
import Sort from "../../components/UI/Sort/sort";
import Spinner from "../../components/UI/Spinner/spinner";
import { CardContext } from "../../context/cardContext";

export const FavoritePage = ({ isLoading }) => {
  const { favorites } = useContext(CardContext);
  return (
    <div className="container container__inner">
      <ContentHeader title="Избранное" />
      <Sort />
      <div className="content__cards">
        {isLoading ? <Spinner /> : <CardList cards={favorites} />}
      </div>
    </div>
  );
};
