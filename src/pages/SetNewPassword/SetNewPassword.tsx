import React from 'react';
//import s from './RecoveryPassword.module.css';
import cs from '../../common/commonStyles.module.css'
import {useFormik} from "formik";

import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import {useDispatch, useSelector} from "react-redux";
import {Redirect, useParams} from 'react-router-dom';
import {setNewPasswordTC} from "../../store/setNewPasswordReducer";
import {AppRootStateType} from "../../store/store";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";



type FormikErrorType = {
    password?: string
    confirmPassword?: string
}

const SetNewPassword = () => {

    let completed = useSelector<AppRootStateType, boolean>(state => state.setNewPassword.completed)
    let buttonDisabled = useSelector<AppRootStateType, boolean>(state => state.setNewPassword.buttonDisabled)
    const {token} = useParams<{ token: string }>()
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            password: '',
            confirmPassword: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.password) {
                errors.password = 'ПУСТО';
            } else if (values.password.length < 4) {
                errors.password = 'БОЛЬШЕ ТРЕХ СИМВОЛОВ ДОЛЖНО БЫТЬ';
            }

            if (values.password !== values.confirmPassword) {
                errors.confirmPassword = 'ПАРОЛИ НЕ СОВПАДАЮТ'
            }
            return errors;
        },
        onSubmit: (values) => {
            dispatch(setNewPasswordTC(values.password, token))
        }
    })

    if (completed) {
        return (
            <Redirect to={'/login'}/>
        )
    }

    return (
        <div className={cs.background}>
            <div className={cs.blockContainer}>
                <h2 className={cs.text}>It-incubator</h2>
                <h3 className={cs.text}>Create new password</h3>
                <FormControl className={cs.formControl}>
                    <form onSubmit={formik.handleSubmit} className={cs.form}>
                        <FormGroup>
                            <TextField
                                variant={"outlined"}
                                size={'small'}
                                label='password'
                                margin="normal"
                                type="password"
                                {...formik.getFieldProps('password')}
                            />

                            <div style={{'height': '20px'}}>
                                {formik.touched.password && formik.errors.password &&
                                <div style={{color: 'red'}}>{formik.errors.password}</div>}
                            </div>

                            <TextField
                                variant={"outlined"}
                                size={'small'}
                                label='confirmPassword'
                                margin="normal"
                                type="password"
                                {...formik.getFieldProps('confirmPassword')}
                            />

                            <div style={{'height': '20px'}}>
                                {formik.touched.confirmPassword && formik.errors.confirmPassword &&
                                <div style={{color: 'red'}}>{formik.errors.confirmPassword}</div>}
                            </div>

                            <p>Create new password and we will send you further instructions to E-mail</p>

                            <div className={cs.buttonBlock}>
                                <Button
                                    className={cs.button}
                                    type={'submit'}
                                    variant={'contained'}
                                    color={'primary'}
                                    size={'small'}
                                    disabled={buttonDisabled}
                                >
                                    Create new password
                                </Button>
                            </div>

                        </FormGroup>
                    </form>
                </FormControl>
            </div>
        </div>
    )
}

export default SetNewPassword