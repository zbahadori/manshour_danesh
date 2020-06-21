import React, { Fragment } from 'react'
import ProfileDropdown from './header/ProfileDropdown'
import Icons from './header/Icons'
import Search from './header/Search'
import Credit from './header/Credit'

import logo from '../assets/images/logo.png'
import './Header.scss'
import StudentProfile from './header/StudentProfile/StudentProfile'

export default function Header() {
    const toggleMenu = () => {
        const element = document.querySelector('aside');
        element.classList.toggle("hide");
    }

    return (
        <Fragment>
            <header className="header">
                <div className="container-fluid">
                    <div className="nav-right">
                        <div className="toggle-menu d-inline-block align-middle">
                            <button className="btn btn-empty" onClick={toggleMenu} id="toggleMenu"><i className="icon-menu"></i></button>
                        </div>

                    </div>

                    <a href="/" className="header-logo"><img src={logo} alt="Logo" /></a>

                    <div className="nav-left">
                        <Icons />
                        <ProfileDropdown studentName="نوید بهروزی مجد" />

                    </div>
                </div>
            </header>
        </Fragment>
    )
}