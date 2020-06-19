import React, { useState,Fragment,useEffect  } from 'react';
import Header from '../../student/containers/Header';
import Footer from '../../student/containers/Footer';
import Menu from '../../student/containers/Menu';




export default function HeaderAndFooter(props) {
   
  
   
   
    return (
        <Fragment>
            <Header />
            <Menu />
            <main>
              {props.children}
            </main>
            <Footer />
        </Fragment>
    )
}
