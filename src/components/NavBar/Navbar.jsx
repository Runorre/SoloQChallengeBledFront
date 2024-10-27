import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    return (
        <AppBar position="relative" className="navbar-custom">
            <Toolbar className="toolbar-custom">
                <a href="/" className={`button-navbar ${location.pathname === '/' ? 'active' : ''}`}>Classement</a>
                <a href="/team" className={`button-navbar ${location.pathname === '/team' ? 'active' : ''}`}>Equipe</a>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar