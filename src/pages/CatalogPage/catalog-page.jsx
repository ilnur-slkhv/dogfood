import CardList from "../../components/CardList/card-list";
import Sort from "../../components/Sort/sort";
import Spinner from "../../components/Spinner/spinner";

export const CatalogPage = ({ isLoading }) => {
  return (
    <>
      <Sort />
      <div className="content__cards">
        {isLoading ? <Spinner /> : <CardList />}
      </div>
    </>
  );
};
