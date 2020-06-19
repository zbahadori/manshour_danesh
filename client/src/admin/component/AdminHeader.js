import React, { Fragment } from 'react'
import ProfileDropdown from './header/ProfileDropdown'
import Icons from './header/Icons'


//import logo from '../assets/images/logo.png'
import './Header.scss'


export default function AdminHeader() {
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


                    <div className="nav-left">



                    </div>
                </div>
            </header>
        </Fragment>
    )
}