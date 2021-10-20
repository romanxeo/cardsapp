import React, { useState } from 'react';
import s from './RecoveryPassword.module.css';
import {useFormik} from "formik";
import iconEmail from '../../assets/icon/iconEmail.png'
import TextField  from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import { Dispatch } from 'redux'

import { NavLink } from 'react-router-dom';
import { cardsAPI } from '../../api/cardsAPI';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import { forgotPasswordTC } from '../../store/recoveryPasswordReducer';


type FormikErrorType = {
    email?: string
}

function RecoveryPassword() {
    let completed = useSelector<AppRootStateType, boolean>(state => state.RecoveryPassword.completed)
    let buttonDisabled = useSelector<AppRootStateType, boolean>(state => state.RecoveryPassword.buttonDisabled)

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(forgotPasswordTC(values.email))



            //setCompleted(true)
            formik.resetForm()
        },
    })


    if (completed) {
        return (
            <div className={s.background}>
                <div className={s.blockContainer}>
                    <div className={s.form}>
                        <h2 className={s.text}>It-incubator</h2>
                        <img src={iconEmail} className={s.icon}/>
                        <h3 className={s.text}>Check E-mail</h3>
                        <p className={s.text}>We have sent instructions to your E-mail how to recover your password</p>
                    </div>

                </div>
            </div>
        )
    }
    else {
        return (
            <div className={s.background}>
                <div className={s.blockContainer}>
                    <h2 className={s.text}>It-incubator</h2>
                    <h3 className={s.text}>Forgot your password?</h3>
                    <FormControl className={s.formControl}>
                        <form onSubmit={formik.handleSubmit} className={s.form}>
                            <FormGroup>
                                <TextField
                                    variant={"outlined"}
                                    size={'small'}
                                    label='E-mail'
                                    margin="normal"
                                    {...formik.getFieldProps('email')}
                                />

                                <div style={{'height': '20px'}}>
                                    {formik.touched.email && formik.errors.email && <div style={{color: 'red'}}>{formik.errors.email}</div>}
                                </div>

                                <p>Enter your e-mail address and we will send you further instructions</p>

                                <Button
                                    className={s.button}
                                    type={'submit'}
                                    variant={'contained'}
                                    color={'primary'}
                                    size={'small'}
                                    disabled={buttonDisabled}
                                >
                                    Send instructions
                                </Button>

                                <p>Did you remember your password?</p>

                                <nav>
                                    <NavLink
                                        className={s.navlink}
                                        to="/login"
                                    >
                                        Try logging in
                                    </NavLink>
                                </nav>
                            </FormGroup>
                        </form>
                    </FormControl>
                </div>
            </div>
        )
    }
}

export default RecoveryPassword