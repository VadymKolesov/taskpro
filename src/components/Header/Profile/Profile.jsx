import css from "./Profile.module.css";
import clsx from "clsx";
import { getThemeStyle } from "../../../scripts/getThemeStyle";

export default function Profile() {
  const profile = clsx(css.profile, getThemeStyle(css));

  const handleOpenEditProfile = () => {
    console.log("Open modal Edit profile");
  };

  return (
    <div className={profile}>
      Username
      <img
        className={css.avatar}
        src={``}
        alt="User avatar"
        onClick={handleOpenEditProfile}
      />
    </div>
  );
}
