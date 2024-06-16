import { useSelector } from "react-redux";
import Card from "../Card/Card";
import css from "./CardList.module.css";
import clsx from "clsx";
import { selectTheme } from "../../../redux/auth/selectors";
import { Reorder } from "framer-motion";
import { useEffect, useState } from "react";
import { updateColumnCards } from "../../../redux/board/operations";
import { useDispatch } from "react-redux";

function CardList({ cards }) {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const [items, setItems] = useState(cards);

  useEffect(() => {
    setItems(items);
  }, [items]);

  const handleReorder = (values) => {
    const columnId = values[0].columnId;
    const cardsIds = values.map((value) => {
      return value._id;
    });
    setItems(values);
    dispatch(updateColumnCards({ columnId, cards: cardsIds }));
  };

  return (
    <div className={clsx(css.cardListCont, css[theme])}>
      <Reorder.Group
        axis="y"
        values={items}
        onReorder={handleReorder}
        className={css.cardList}
      >
        {items.map((card) => (
          <Reorder.Item value={card} className={css.card} key={card._id}>
            <Card card={card} />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
}

export default CardList;
