import React from 'react';
import s from './StartPage.module.css'
import Table from "../../common/Table/Table";

function StartPage() {

    return (
        <div className={s.background}>
            <h1 className={s.test}>Hi! We glad to see you! </h1>
            <h2 className={s.test}> This is application for learning with cards. </h2>
        </div>
    )

}
export default StartPage;