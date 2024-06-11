import css from "./AddBoardPopUp.module.css";
import clsx from "clsx";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../Button/Button";
import sprite from "../../assets/sprite.svg";
import * as Yup from "yup";
import { setBoardModalOpen } from "../../redux/controls/slice";
import { selectTheme } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";

export default function AddBoardPopUp({ isEdit }) {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const schema = Yup.object({
    name: Yup.string().required("Title is required"),
    iconName: Yup.string().required("Icon is required"),
  });

  const handleSubmit = (values, actions) => {
    isEdit ? console.log(`Edit ${values}`) : console.log(values);
    // actions.resetForm();
  };

  const handleClose = () => {
    dispatch(setBoardModalOpen(false));
  };

  const icons = [
    { id: 1, name: "icon-project-1" },
    { id: 2, name: "icon-project-2" },
    { id: 3, name: "icon-project-3" },
    { id: 4, name: "icon-project-4" },
    { id: 5, name: "icon-project-5" },
    { id: 6, name: "icon-project-6" },
    { id: 7, name: "icon-project-7" },
    { id: 8, name: "icon-project-8" },
  ];

  const backgrounds = [
    { id: 1, url: "" },
    { id: 2, url: "" },
    { id: 3, url: "" },
    { id: 4, url: "" },
    { id: 5, url: "" },
    { id: 6, url: "" },
    { id: 7, url: "" },
    { id: 8, url: "" },
    { id: 9, url: "" },
  ];

  const initialValues = {
    name: !isEdit && "",
    iconName: !isEdit && "icon-project-1",
  };

  return (
    <div className={clsx(css.cont, css[theme])}>
      <button className={clsx(css.closeBtn, css[theme])} onClick={handleClose}>
        <svg className={clsx(css.closeIcon, css[theme])}>
          <use href={`${sprite}#icon-x-close`}></use>
        </svg>
      </button>
      <p className={clsx(css.text, css[theme])}>
        {isEdit ? "Edit board" : "New board"}
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form className={css.form}>
            <Field
              type="text"
              name="name"
              className={clsx(css.input, css[theme])}
              placeholder="Title"
            />
            <ErrorMessage
              name="name"
              component="p"
              className={clsx(css.error, css[theme])}
            />
            <ul className={css.imgContainer}>
              <li>
                <p className={clsx(css.groupTitle, css[theme])}>Icons</p>
                <div className={css.iconsContainer}>
                  {icons.map((icon) => (
                    <label key={icon.id}>
                      <svg
                        className={clsx(
                          css.icon,
                          css[theme],
                          values.iconName === icon.name && css.selectedIcon
                        )}
                      >
                        <use href={`${sprite}#${icon.name}`}></use>
                      </svg>
                      <Field
                        name="iconName"
                        type="radio"
                        value={icon.name}
                        className={css.radio}
                        checked={values.iconName === icon.name}
                        onChange={() => setFieldValue("iconName", icon.name)}
                      />
                    </label>
                  ))}
                </div>
              </li>
              <li>
                <p className={clsx(css.groupTitle, css[theme])}>Background</p>
                <div className={css.backgroundsContainer}>
                  {backgrounds.map((background) => (
                    <img
                      key={background.id}
                      src={background.url}
                      alt="Background thumbnail"
                      className={css.background}
                    />
                  ))}
                </div>
              </li>
            </ul>
            <Button
              text={isEdit ? "Edit" : "Create"}
              isIcon={true}
              verticalPadding="10px"
              type="submit"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}
