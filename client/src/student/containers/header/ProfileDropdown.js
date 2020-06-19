import React, { Fragment } from 'react'
import profile_image from '../../assets/images/profile-pic.jpg'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import StudentProfile from './StudentProfile/StudentProfile'

export default function ProfileDropdown(props) {
    return (


        <Fragment>

            <div className="user btn-group">
                <button type="button" className="btn btn-empty dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span>{props.studentName}</span>
                    <img src={profile_image} alt="Profile" />
                </button>
                <div className="dropdown-menu dropdown-menu-right">

                    <Link className="dropdown-item" to='/student/studentprofile'>ویرایش اطلاعات</Link>


                    <a className="dropdown-item" href="#link">خروج</a>
                </div>
            </div>


        </Fragment>







    )
}

