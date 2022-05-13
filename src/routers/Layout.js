import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/murabbiylar">Murabbiylar</Link>
                </li>
                <li>
                    <Link to="/togaraklar">Togaraklar</Link>
                </li>
            </ul>

            <Outlet />
        </>
    )
};

export default Layout