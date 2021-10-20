import React from 'react';
import s from './SignUp.module.css';
import cs from '../../common/commonStyles.module.css'
import {useFormik} from "formik";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, Redirect} from 'react-router-dom';
import {registerTC} from "../../store/signUpReducer";
import {AppRootStateType} from "../../store/store";

type FormikErrorType = {
    email?: string,
    password?: string,
    confirmPassword?: string
}

const SignUp = () => {

    let completed = useSelector<AppRootStateType, boolean>(state => state.SignUp.completed)
    let buttonDisabled = useSelector<AppRootStateType, boolean>(state => state.SignUp.buttonDisabled)
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};

            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

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
            dispatch(registerTC(values.email, values.password))
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
                <h3 className={cs.text}>Sign Up</h3>
                <FormControl className={cs.formControl}>
                    <form onSubmit={formik.handleSubmit} className={cs.form}>
                        <FormGroup>
                            <TextField
                                variant={"outlined"}
                                size={'small'}
                                label='email'
                                margin="normal"
                                {...formik.getFieldProps('email')}
                            />

                            <div style={{'height': '20px'}}>
                                {formik.touched.email && formik.errors.email &&
                                <div style={{color: 'red'}}>{formik.errors.email}</div>}
                            </div>

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

                            <div className={cs.buttonBlock}>
                                <Button
                                    className={cs.button}
                                    type={'submit'}
                                    variant={'contained'}
                                    color={'primary'}
                                    size={'small'}
                                    disabled={buttonDisabled}
                                >
                                    Register
                                </Button>


                            </div>

                            <div className={cs.buttonBlock}>
                                <nav>
                                    <NavLink
                                        className={s.navlink}
                                        to="/login"
                                    >
                                        Login
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

export default SignUp