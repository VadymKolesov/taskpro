import css from "./NeedHelp.module.css";

export default function NeedHelp() {
  return (
    <div>
      {/* img */}
      <p>
        If you need help with <span>TaskPro</span> , check out our support
        resources or reach out to our customer support team.
      </p>
      <svg className={css.help}>
        <use href={`${sprite}#icon-help`}></use>
      </svg>
    </div>
  );
}
