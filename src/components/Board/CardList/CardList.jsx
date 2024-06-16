import { useSelector } from "react-redux";
import Card from "../Card/Card";
import css from "./CardList.module.css";
import clsx from "clsx";
import { selectTheme } from "../../../redux/auth/selectors";

function CardList({ cards }) {
  const theme = useSelector(selectTheme);
  return (
    <div className={clsx(css.cardListCont, css[theme])}>
      <ul className={css.cardList}>
        {Array.isArray(cards) && cards.map(card => 
        (<li className={css.card} key={card._id}>
          <Card card={card}/>
        </li>)
        )}
      </ul>
    </div>
  )
}

export default CardList