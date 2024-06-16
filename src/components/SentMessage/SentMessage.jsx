import { useEffect } from "react";
import css from "./SentMessage.module.css";
import { setIsNeedHelpModalOpen } from "../../redux/controls/slice";
import { setIsSent } from "../../redux/needHelp/slice";
import { selectIsSent } from "../../redux/needHelp/selectors";
import { useDispatch, useSelector } from "react-redux";
import { FaRegCheckCircle } from "react-icons/fa";
import { selectTheme } from "../../redux/auth/selectors";
import clsx from "clsx";

export default function SentMessage() {
  const isSent = useSelector(selectIsSent);
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSent) {
      setTimeout(() => {
        dispatch(setIsNeedHelpModalOpen(false));
        dispatch(setIsSent(false));
      }, 1500);
    }
  }, [dispatch, isSent]);

  return (
    <div className={clsx(css.container, css[theme])}>
      <FaRegCheckCircle size="20px" className={clsx(css.icon, css[theme])} />
      <p className={clsx(css.message, css[theme])}>
        Your message has been successfully sent
      </p>
    </div>
  );
}
