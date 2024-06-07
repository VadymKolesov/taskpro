import { useEffect, useState } from 'react';
import css from './Profile.module.css';
import clsx from 'clsx';

const getThemaStyles = (theme) => {
  switch (theme) {
    case 'light':
      return css.light;
    case 'violet':
      return css.violet;
    default:
      return '';
  }
}

const getAvatar = (theme) => {
  switch (theme) {
    case 'light':
      return 'user-light_doabt6.png';
    case 'violet':
      return 'user-violet_dzrfqv.png';
    default:
      return 'user-dark_w1uksl.png';
  }
}

export default function Profile({ theme }) {
  // const theme = useSelector(selectTheme());
  // const avatar = useSelector(selectAvatar());
  const [avatar, setAvatar] = useState('user-dark_w1uksl.png')
  const profile = clsx(css.profile, getThemaStyles(theme));

  useEffect(() => {
    setAvatar(getAvatar(theme));
  }, [theme]);

  const handleOpenEditProfile = () => {
    console.log("Open modal Edit profile");
  }

  return (
    <div className={profile} onClick={handleOpenEditProfile}>
      Username
      <img className={css.avatar} src={`https://res.cloudinary.com/dvjg8aoza/image/upload/v1717539986/${avatar}`} alt="User avatar" />
    </div>
  )
}