import css from "./Profile.module.css";
import clsx from "clsx";
import { getThemeStyle } from "../../../scripts/getThemeStyle";
import { selectUser } from "../../../redux/auth/selectors";
import { useSelector } from "react-redux";

export default function Profile() {
  const user = useSelector(selectUser);

  const profile = clsx(css.profile, getThemeStyle(css));

  const handleOpenEditProfile = () => {
    console.log("Open modal Edit profile");
  };

  return (
    <div className={profile}>
      {user.name ? user.name : "Username"}
      <img
        className={css.avatar}
        src={`${user.avatarUrl}`}
        alt="User avatar"
        onClick={handleOpenEditProfile}
      />
    </div>
  );
}