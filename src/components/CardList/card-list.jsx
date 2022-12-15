import Card from "../Card/card";
import "./styles.css";

const CardList = ({ goods }) => {
  return (
    <div className="cards">
      {goods.map((item, index) => (
        <Card key={item._id} {...item} />
      ))}
    </div>
  );
};

export default CardList;
