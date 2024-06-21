import React, { useState } from 'react';
import axios from 'axios';
import styles from "./Login.css"; 


const Login = ({ setAuth }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/login', { username, password });
            localStorage.setItem('token', response.data.jwt);
            setAuth(true);
        } catch (err) {
            setError('Неправильный логин или пароль');
        }
    };

    return (
        <div className='loginContainer'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Логин</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Пароль</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Войти</button>
            </form>
        </div>
    );
};

export default Login;
