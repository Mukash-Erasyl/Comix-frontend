import React from 'react';
import styles from './Header.module.css'; // Импорт модульных стилей для компонента
import logo from '../../img/logo.png'; // Импорт логотипа
import TextField from './TextField/TextFieldComponent';
import { useNavigate} from 'react-router-dom'; // Импорт хука useParams


const Header = () => {
  const navigate = useNavigate();


  const menuNavigate = () => {
    navigate(`/`);
};

  return (
    <header className={styles.headerContainer}>
      <div  className={styles.logoContainer} onClick={menuNavigate}>
        <img src={logo} alt="Логотип" className={styles.logo} />
      </div>
      <div className={styles.finder}>
        <TextField />
      </div>
    </header>
  );
}

export default Header;
