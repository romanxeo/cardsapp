import React from "react";
import {NavLink} from "react-router-dom";
import s from './Haeder.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import Button from "@material-ui/core/Button";


function Header() {
    // const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.LogIn.isLoggedIn)
    const dispatch = useDispatch()
    // const isLoggedIn = true
    // onClickHandler () => {
    //     dispatch()
    // }

    return (
        <div>
            {/*<div className={s.headerBlock}>*/}

            {/*    <nav className={s.nav}>*/}
            {/*        {!isLoggedIn && <div className={s.item}>*/}
            {/*            <NavLink to={'/login'} activeClassName={s.activeLink}>Login</NavLink>*/}
            {/*        </div>}*/}
            {/*        {!isLoggedIn && <div className={s.item}>*/}
            {/*            <NavLink to={'/SignUp'} activeClassName={s.activeLink}>SignUp</NavLink>*/}
            {/*        </div>}*/}
            {/*        {!isLoggedIn && <div className={s.item}>*/}
            {/*            <NavLink to={'/RecoveryPassword'} activeClassName={s.activeLink}>Recovery password</NavLink>*/}
            {/*        </div>}*/}
            {/*        {isLoggedIn && <div className={s.item}>*/}
            {/*            <NavLink to={'/Profile'} activeClassName={s.activeLink}>Profile</NavLink>*/}
            {/*        </div>}*/}
            {/*        /!*{isLoggedIn && <div className={s.item}>*!/*/}
            {/*        /!*    <Button variant={'contained'}*!/*/}
            {/*        /!*            color={"primary"}*!/*/}
            {/*        /!*            size={"small"}*!/*/}
            {/*        /!*            // onClick={onClickHandler}>>Log out</Button>*!/*/}
            {/*        /!*</div>}*!/*/}


            {/*    </nav>*/}
            {/*</div>*/}

        </div>

    )
}

export default Header;