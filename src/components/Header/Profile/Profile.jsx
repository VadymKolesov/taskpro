import css from "./Profile.module.css";
import clsx from "clsx";
import { getThemeStyle } from "../../../scripts/getThemeStyle";
import { selectTheme, selectUser } from "../../../redux/auth/selectors";
import { selectIsProfileModalsOpen } from "../../../redux/controls/selectors";
import { useDispatch, useSelector } from "react-redux";
import { setProfileModalOpen } from "../../../redux/controls/slice";
import { motion } from "framer-motion";

export default function Profile() {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const user = useSelector(selectUser);
  const isOpenModal = useSelector(selectIsProfileModalsOpen);

  const profile = clsx(css.profile, getThemeStyle(css, theme));

  const handleOpenEditProfile = () => {
    setTimeout(() => {
      dispatch(setProfileModalOpen(true));
    }, 200);
  };

  return (
    <div className={profile}>
      {user.name ? user.name : "Username"}
      <motion.img
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.1 }}
        className={clsx(css.avatar, isOpenModal && css.prevent)}
        src={`${user.avatarUrl}`}
        alt="User avatar"
        onClick={handleOpenEditProfile}
      />
    </div>
  );
}
