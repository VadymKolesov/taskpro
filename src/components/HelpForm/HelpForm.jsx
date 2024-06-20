import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./HelpForm.module.css";
import clsx from "clsx";
import * as Yup from "yup";
import Button from "../Button/Button";
import sprite from "../../assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, selectUser } from "../../redux/auth/selectors";
import { setIsNeedHelpModalOpen } from "../../redux/controls/slice";
import { selectIsLoading, selectError } from "../../redux/needHelp/selectors";
import { help } from "../../redux/needHelp/operations";
import { AnimatePresence, motion } from "framer-motion";

const HelpFormSchema = Yup.object({
  email: Yup.string()
    .email("Please, enter a valid email")
    .required("Email is required"),
  comment: Yup.string()
    .min(15, "Message is too short")
    .max(500, "Message is too long")
    .required("Comment is required"),
});

export default function HelpForm() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const { email } = useSelector(selectUser);

  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const handleSubmit = (values, actions) => {
    dispatch(help(values));
    actions.resetForm();
  };

  const handleClose = () => {
    dispatch(setIsNeedHelpModalOpen(false));
  };

  return (
    <>
      {!isLoading ? (
        <Formik
          initialValues={{
            email: email,
            comment: "",
          }}
          validationSchema={HelpFormSchema}
          onSubmit={handleSubmit}
        >
          <Form className={clsx(css.form, css[theme])} autoComplete="true">
            <svg
              className={clsx(css.closeIcon, css[theme])}
              onClick={handleClose}
            >
              <use href={`${sprite}#icon-x-close`}></use>
            </svg>
            <h2 className={clsx(css.title, css[theme])}>Need help</h2>

            {error && <p className={css.error}>{error}</p>}

            <ul className={css.fieldsList}>
              <li>
                <Field
                  type="email"
                  name="email"
                  className={clsx(css.input, css[theme])}
                  placeholder="Email address"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className={css.error}
                />
              </li>
              <li>
                <Field
                  as="textarea"
                  name="comment"
                  className={clsx(css.textarea, css[theme])}
                  placeholder="Comment"
                />
                <ErrorMessage
                  name="comment"
                  component="p"
                  className={css.error}
                />
              </li>
            </ul>

            <Button
              type="submit"
              text="Send"
              isIcon={false}
              verticalPadding="14px"
            />
          </Form>
        </Formik>
      ) : (
        <AnimatePresence>
          <motion.div
            animate={{ opacity: [0, 1] }}
            exit={{ opacity: [1, 0] }}
            transition={{ duration: 0.5 }}
          >
            <div className={clsx(css.loader, css[theme])}></div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}
