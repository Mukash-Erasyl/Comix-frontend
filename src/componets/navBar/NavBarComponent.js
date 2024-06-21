import React from 'react';
import styles from './NavBar.module.css'; // Импорт модульных стилей для компоненты

const NavBar = () => {
  return (
    <nav className={styles.navBar}> {/* Используем className из модульных стилей */}
      <ul className={styles.navList}> {/* Используем className из модульных стилей */}
        <li className={styles.navItem}><a href="/" className={styles.navLink}>Все комиксы</a></li>
        <li className={styles.navItem}><a href="/ComixList/filter/Супергеройка" className={styles.navLink}>Супергерои</a></li>
        <li className={styles.navItem}><a href="/ComixList/filter/Фантастика" className={styles.navLink}>Фантастика</a></li>
        <li className={styles.navItem}><a href="/ComixList/filter/Комедия" className={styles.navLink}>Комедия</a></li>
        <li className={styles.navItem}><a href="/ComixList/filter/Ужасы" className={styles.navLink}>Ужасы</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
