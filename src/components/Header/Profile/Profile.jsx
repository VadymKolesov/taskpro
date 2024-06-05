import css from './Profile.module.css';

export default function Profile() {
  return (
    <button className={css.settingsBtn}>
      Username
      <img className={css.avatar} src="https://res.cloudinary.com/dvjg8aoza/image/upload/v1717539986/user-dark_w1uksl.png" alt="User avatar" />
    </button>
  )
}