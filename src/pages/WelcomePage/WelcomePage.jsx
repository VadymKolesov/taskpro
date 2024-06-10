import PageTitle from "../../components/PageTitle/PageTitle";
import css from "./WelcomePage.module.css";

export default function WelcomePage() {
  return (
    <div className={css.background}>
      <PageTitle />
    </div>
  );
}
