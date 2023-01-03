import { useNavigate } from "react-router-dom";
import Card from "../Card/card";
import { NotFound } from "../NotFound/NotFound";
import "./styles.css";

const CardList = ({ cards }) => {
  const navigate = useNavigate();
  return (
    <>
      {!cards.length && (
        <NotFound
          buttonText="Назад"
          title="Простите, по Вашему запросу ничего не найдено."
          buttonAction={() => navigate(-1)}
        />
      )}
      <div className="cards">
        {cards.map((item) => (
          <Card key={item._id} {...item} />
        ))}
      </div>
    </>
  );
};

export default CardList;
