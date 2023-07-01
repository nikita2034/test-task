import React from 'react';
import Header from '../../Components/Header/Header';
import Navbara from '../../Components/Navbar/Navbar';
import MainContent from '../../Components/MainContent/MainContent';
import styles from './mainPage.module.scss'
function MainPage(props) {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.block}>
                <Navbara />
                <MainContent />
            </div>
        </div>
    );
}

export default MainPage;