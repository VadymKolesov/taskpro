import css from "./VerifyPage.module.css";
import cactus from "../../assets/cactus-sized.png";

export default function VerifyPage() {
  return (
    <div className={css.page}>
      <div className={css.container}>
        <img className={css.nf_img} alt="Cactus" src={cactus} />
        <p className={css.header}>Great! Just one more step :)</p>
        <p className={css.text}>
          Please confirm your email address. This is necessary for your
          security. See you on the other side!
        </p>
      </div>
    </div>
  );
}
