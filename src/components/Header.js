import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { isAuthenticated, selectUser, getUser} from '../features/auth';

/**
 * Navbar when there isn't a logged user
 * <LoggedOutNavbar />
 */
function LoggedOutNavbar() {
    return (
        <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
                <Link to="/" className="nav-link">
                    Home
                </Link>
            </li>

            <li className="nav-item">
                <Link to="/login" className="nav-link">
                    Sign in
                </Link>
            </li>

            <li className="nav-item">
                <Link to="/register" className="nav-link">
                    Sign up
                </Link>
            </li>
        </ul>
    );
}

/**
 * Navbar when there is a logged user
 * <LoggedInNavbar />
 */
function LoggedInNavbar() {
    const currentUser = useSelector(selectUser);

    return (
        <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
                <Link to="/" className="nav-link">
                    Home
                </Link>
            </li>

            <li className="nav-item">
                <Link to="/editor" className="nav-link">
                    <i className="ion-compose" />
                    &nbsp;New Post
                </Link>
            </li>

            <li className="nav-item">
                <Link to="/settings" className="nav-link">
                    <i className="ion-gear-a" />
                    &nbsp;Settings
                </Link>
            </li>

            <li className="nav-item">
                <Link to={`/@${currentUser?.username}`} className="nav-link">
                    <img
                        src={
                            currentUser?.image ||
                            'https://static.productionready.io/images/smiley-cyrus.jpg'
                        }
                        className="user-pic"
                        alt={currentUser?.username}
                    />
                    {currentUser?.username}
                </Link>
            </li>
        </ul>
    );
}

/**
 * app's header
 * <Header />
 */
function Header() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);
    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Conduit
                </Link>
                {isAuthenticated ? <LoggedInNavbar /> : <LoggedOutNavbar />}
            </div>
        </nav>
    );
}

export default Header;
