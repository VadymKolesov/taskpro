import { useSelector } from "react-redux";
import Card from "../Card/Card";
import css from "./CardList.module.css";
import clsx from "clsx";
import { selectTheme } from "../../../redux/auth/selectors";
import { Reorder } from "framer-motion";
import { updateColumnCards } from "../../../redux/board/operations";
import { useDispatch } from "react-redux";
import { setCards } from "../../../redux/board/slice";
import { selectColumnsWithFilteredCards } from "../../../redux/board/selectors";
import { useEffect, useState } from "react";

function CardList({ columnId }) {
  const theme = useSelector(selectTheme);
  const columns = useSelector(selectColumnsWithFilteredCards);
  const columnIndex = columns.findIndex((el) => el._id === columnId);
  const cards = columns[columnIndex].cards;
  const dispatch = useDispatch();

  const [localCards, setLocalCards] = useState(cards);

  useEffect(() => {
    setLocalCards(cards);
  }, [cards]);

  const handleReorder = (newCards) => {
    setLocalCards(newCards);
  };

  const handleDragEnd = () => {
    const columnId = localCards[0]?.columnId;
    const cardsIds = localCards.map((card) => card._id);

    dispatch(setCards({ columnIndex, values: localCards }));
    dispatch(updateColumnCards({ columnId, cards: cardsIds }));
  };

  return (
    <div className={clsx(css.cardListCont, css[theme])}>
      <Reorder.Group
        axis="y"
        values={localCards}
        onReorder={handleReorder}
        className={css.cardList}
      >
        {localCards.map((card) => (
          <Reorder.Item
            onDragEnd={handleDragEnd}
            value={card}
            className={css.card}
            key={card._id}
          >
            <Card card={card} />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
}

export default CardList;
