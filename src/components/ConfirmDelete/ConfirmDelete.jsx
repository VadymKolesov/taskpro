import { getThemeStyle } from "../../scripts/getThemeStyle";
import { selectTheme } from "../../redux/auth/selectors";
import css from './ConfirmDelete.module.css'
import { useSelector } from "react-redux";
import clsx from "clsx";

export default function ConfirmDelete({ itemId, onDelete, onCancel }) {

    const userTheme = useSelector(selectTheme);
    const theme = getThemeStyle(css, userTheme);

    return <div className={clsx(css.wrapper, theme)}>
        <p className={clsx(css.title, theme)}>Delete this task?</p>
        <ul className={css.list}>
            <li className={css.item}>
                <button onClick={onCancel} className={clsx(css.btn, theme)}>
                    Cancel
                </button>
            </li>
            <li className={css.item}>
                <button onClick={() => onDelete(itemId)} className={clsx(css.btn, css.del, theme)}>
                    Delete
                </button>
            </li>
        </ul>
    </div>
}