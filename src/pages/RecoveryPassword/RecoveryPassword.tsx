import React from 'react';
import s from './RecoveryPassword.module.css';
import cs from '../../common/commonStyles.module.css'
import {useFormik} from "formik";
import iconEmail from '../../assets/icon/iconEmail.png'

import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import { NavLink } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {forgotPasswordTC} from '../../store/recoveryPasswordReducer';

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


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
            formik.resetForm()
        },
    })


    if (completed) {
        return (
            <div className={cs.background}>
                <div className={cs.blockContainer}>
                    <div className={cs.form}>
                        <h2 className={cs.text}>It-incubator</h2>
                        <img src={iconEmail} className={s.icon}/>
                        <h3 className={cs.text}>Check E-mail</h3>
                        <p className={cs.text}>We have sent instructions to your E-mail how to recover your password</p>
                    </div>

                </div>
            </div>
        )
    } else {
        return (
            <div className={cs.background}>
                <div className={cs.blockContainer}>
                    <h2 className={cs.text}>IT Incubator</h2>
                    <h3 className={cs.text}>Forgot your password?</h3>
                    <FormControl className={cs.formControl}>
                        <form onSubmit={formik.handleSubmit} className={cs.form}>
                            <FormGroup>
                                <TextField
                                    variant={"outlined"}
                                    size={'small'}
                                    label='E-mail'
                                    margin="normal"
                                    {...formik.getFieldProps('email')}
                                />

                                <div style={{'height': '20px'}}>
                                    {formik.touched.email && formik.errors.email &&
                                    <div style={{color: 'red'}}>{formik.errors.email}</div>}
                                </div>

                                <p>Enter your e-mail address and we will send you further instructions</p>

                                <div className={cs.buttonBlock}>
                                    <Button
                                        className={cs.button}
                                        type={'submit'}
                                        variant={'contained'}
                                        color={'primary'}
                                        size={'small'}
                                        disabled={buttonDisabled}
                                    >
                                        Send instructions
                                    </Button>
                                </div>

                                <p>Did you remember your password?</p>

                                <div className={cs.buttonBlock}>
                                    <nav>
                                        <NavLink
                                            className={s.navlink}
                                            to="/login"
                                        >
                                            Try logging in
                                        </NavLink>
                                    </nav>
                                </div>
                            </FormGroup>
                        </form>
                    </FormControl>
                </div>
            </div>
        )
    }
}

export default RecoveryPassword