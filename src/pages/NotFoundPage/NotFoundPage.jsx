import { useNavigate } from "react-router-dom";
import cactus_icon from "../../assets/cactus_nf.png";
import Button from "../../components/Button/Button";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/auth/selectors";
import clsx from "clsx";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  const navigate = useNavigate();
  const theme = useSelector(selectTheme);

  const handleHomeClick = () => {
    navigate("/home");
  };

  return (
    <div className={clsx(css.page, css[theme])}>
      <img className={css.nf_img} alt="Page not found" src={cactus_icon} />
      <p className={clsx(css.header, css[theme])}>Whoops!</p>
      <p className={clsx(css.text, css[theme])}>Page not found</p>

      <Button
        className={css.button}
        text="Home"
        isIcon={false}
        verticalPadding="10px"
        type="button"
        onClick={handleHomeClick}
      />
    </div>
  );
}
