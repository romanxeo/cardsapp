import React from 'react'
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';

import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../../store/logInReducer";
import {AppRootStateType} from "../../store/store";
import {NavLink, Redirect} from 'react-router-dom';
import cs from "../../common/commonStyles.module.css";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const LogIn = () => {

    let buttonDisabled = useSelector<AppRootStateType, boolean>(state => state.LogIn.buttonDisabled)
    const isLoggedIn = useSelector<AppRootStateType, boolean> (state => state.LogIn.isLoggedIn)

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: 'romanxeo@gmail.com',
            password: 'dubfrufp37',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Поле пароль обязательно';
            } else if (values.password.length < 3) {
                errors.password = 'Длина пароля должна быть больше 3 символов';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(loginTC(values))
            formik.resetForm();
        },
    });


    if (isLoggedIn) {
        return (
            <Redirect to={'/profile'}/>
        )
    }

    return (
        <div className={cs.background}>
            <div className={cs.blockContainer}>
                <h2 className={cs.text}>IT Incubator</h2>
                <h3 className={cs.text}>Log In</h3>
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


                            <TextField
                                variant={"outlined"}
                                type="password"
                                size={'small'}
                                label='Password'
                                margin="normal"
                                {...formik.getFieldProps('password')}
                            />

                            <div style={{'height': '20px'}}>
                                {formik.touched.password && formik.errors.password &&
                                <div style={{color: 'red'}}>{formik.errors.password}</div>}
                            </div>

                            <FormControlLabel
                                label={'Remember me'}
                                control={<Checkbox/>}
                                {...formik.getFieldProps('rememberMe')}
                                checked={formik.values.rememberMe}
                            />

                            <div className={cs.buttonBlock}>
                                <Button
                                    className={cs.button}
                                    type={'submit'}
                                    variant={'contained'}
                                    color={'primary'}
                                    size={'small'}
                                    disabled={buttonDisabled}
                                >
                                    Login
                                </Button>
                            </div>

                        </FormGroup>
                    </form>
                </FormControl>
            </div>
        </div>
    )
}



