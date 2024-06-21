import React, { useState, useEffect } from 'react';
import Login from '../login/Login';
import AdminPanelComponent from '../AdminPanelComponent';
import Logout from '../login/Logout';
import "./Admin.css"

const Admin = () => {
    const [isAuth, setAuth] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuth(true);
        }
    }, []);

    return (
        <div className='AdminContent' >
            {isAuth ? (
                <>
                    <AdminPanelComponent />
                    <Logout setAuth={setAuth} />
                </>
            ) : (
                <Login className="loginComponent" setAuth={setAuth} />
            )}
        </div>
    );
};

export default Admin;
