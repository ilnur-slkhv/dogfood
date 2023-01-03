import classNames from "classnames";
import "./styles.css";

const Sort = ({ currentSort, tabs = [], onChangeSort }) => {
  const handleClick = (e, tab) => {
    e.preventDefault();
    onChangeSort(tab.id);
  };
  return (
    <div className="sort content__sort">
      {tabs.map((tab) => (
        <div
          className={classNames("sort__link", {
            sort__link_selected: currentSort === tab.id,
          })}
          key={tab.id}
          id={tab.id}
        >
          <a onClick={(e) => handleClick(e, tab)}>{tab.title}</a>
        </div>
      ))}
    </div>
  );
};

export default Sort;
