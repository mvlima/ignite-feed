import styles from "./Sidebar.module.css";

import editProfileIcon from '../assets/edit-profile.svg'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1550147760-44c9966d6bc7?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="User's background image"
      />

      <div className={styles.profile}>
        <strong>Marcus Vieira</strong>
        <span>Web Developer</span>

        <footer>
          <div className={styles.footerWrapper}>
          <img src={editProfileIcon} alt="Edit Profile Icon" />
          <a href="#">Editar seu perfil</a>
          </div>
        </footer>
      </div>
    </aside>
  );
}
