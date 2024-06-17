import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectError,
  selectIsSendLoading,
  selectResend,
} from "../../redux/auth/selectors";
import css from "./VerifyPage.module.css";
import cactus from "../../assets/cactus-sized.png";
import { useDispatch } from "react-redux";
import { setResend } from "../../redux/auth/slice";
import clsx from "clsx";
import { useParams } from "react-router-dom";
import { resendEmail } from "../../redux/auth/operations";
import { motion } from "framer-motion";

export default function VerifyPage() {
  const dispatch = useDispatch();
  const resend = useSelector(selectResend);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsSendLoading);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);
  const { email } = useParams();

  const handleResend = () => {
    dispatch(setResend(Date.now()));
    dispatch(resendEmail({ email }));
    setIsButtonDisabled(true);
    const currentTime = new Date().getTime();
    const resendTime = new Date(resend).getTime();
    const elapsedTime = currentTime - resendTime;

    if (elapsedTime < 30000) {
      const remaining = 30000 - elapsedTime;
      setRemainingTime(remaining);
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, remaining);
    } else {
      setIsButtonDisabled(false);
    }
  };

  useEffect(() => {
    if (resend) {
      setIsButtonDisabled(true);
      const currentTime = new Date().getTime();
      const resendTime = new Date(resend).getTime();
      const elapsedTime = currentTime - resendTime;

      if (elapsedTime < 30000) {
        const remaining = 30000 - elapsedTime;
        setRemainingTime(remaining);
        const timer = setInterval(() => {
          setRemainingTime((prev) => prev - 1000);
        }, 1000);

        setTimeout(() => {
          setIsButtonDisabled(false);
          clearInterval(timer);
        }, remaining);
        return () => clearInterval(timer);
      } else {
        setIsButtonDisabled(false);
      }
    }
  }, [resend]);

  const formatTime = () => {
    const seconds = Math.ceil(remainingTime / 1000);
    return `Resend in ${seconds} seconds`;
  };

  return (
    <div className={css.page}>
      <div className={css.container}>
        <img className={css.nf_img} alt="Cactus" src={cactus} />
        <p className={css.header}>Great! Just one more step :)</p>
        <p className={css.text}>
          Please confirm your email address. This is necessary for your
          security. See you on the other side!
        </p>
        <p className={css.resendText}>
          If you don't receive the message, try checking your spam folder. If
          you still haven't received the message, try clicking the "Resend"
          button to send the message again.
        </p>
        <motion.button
          whileTap={{ scale: 0.95 }}
          type="button"
          className={clsx(
            css.btn,
            isButtonDisabled || isLoading ? css.disabledBtn : null
          )}
          onClick={handleResend}
          disabled={isButtonDisabled}
        >
          {isButtonDisabled
            ? formatTime()
            : "Resend mail" && isLoading
            ? "Sending..."
            : "Resend mail"}
        </motion.button>
        {error ? <p className={css.error}>{error}</p> : null}
      </div>
    </div>
  );
}
