import React from 'react'
import {AppRootStateType} from "../../store/store";
import {setAppErrorAC} from "../../store/appReducer";
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert'
import {useDispatch, useSelector} from "react-redux";


function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
}

export function ErrorSnackbar() {

    let error = useSelector<AppRootStateType, null | string>(state => state.app.error)
    const dispatch = useDispatch()

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }
        dispatch(setAppErrorAC(null))
    }

    return (
        <Snackbar
            open={error !== null}
            autoHideDuration={6000}
            onClose={handleClose}
        >
            <Alert onClose={handleClose} severity="error">
                {error}
            </Alert>
        </Snackbar>
    )
}
