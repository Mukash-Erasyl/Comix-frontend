
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componets/headerComponent/HeaderComponent';
import NavBar from './componets/navBar/NavBarComponent';
import ComixList from './componets/content/ContentComponent';
import ComixDetail from './componets/content/comixDetail/ComixDetail';
import Admin from './componets/adminPanel/admin/Admin';
import navToogle from "./img/navToogle.png"
import crossMark from "./img/crossMark.png"

function App() {
    const [isNavBarVisible, setIsNavBarVisible] = useState(false);

    const toggleNavBar = () => {
        setIsNavBarVisible(!isNavBarVisible);
    };

    const closeNavBar = () => {
        setTimeout(() => {
            setIsNavBarVisible(false);
        }, 100); // небольшая задержка перед скрытием, чтобы анимация slideOut сработала
    };

    return (
        <Router>
            <div className="app_wallaper">
                <div className="header">
                    <Header />
                    <button className="nav-toggle" onClick={toggleNavBar}>
                        <img src={navToogle} width={15} alt="Toggle Navigation" />
                    </button>
                </div>
                <div className={`navBar ${isNavBarVisible ? 'visible' : 'hidden'}`}>
                    <button className="nav-close" onClick={closeNavBar}>
                        <img src={crossMark} width={15} alt="Close Navigation" />
                    </button>
                    <NavBar />
                </div>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<ComixList />} />
                        <Route path="/comix/:id" element={<ComixDetail />} />
                        <Route path="/ComixList/filter/:keyword" element={<ComixList />} />
                        <Route path="/ComixList" element={<ComixList />} />
                        <Route path="/AdminPanel" element={<Admin />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;