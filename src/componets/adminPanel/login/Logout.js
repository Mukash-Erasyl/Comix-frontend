import "./Logout.css"
const Logout = ({ setAuth }) => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        setAuth(false);
    };

    return (
        <button className="logoutButton" onClick={handleLogout}>Выйти</button>
    );
};

export default Logout;
