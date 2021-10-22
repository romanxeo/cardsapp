import React from 'react'
import Snackbar from '@mui/material/Snackbar'
import Alert, {AlertProps} from '@mui/material/Alert';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {setAppErrorAC} from "../../store/appReducer";
//
// function Alert(props: AlertProps) {
//     debugger
//     return <MuiAlert elevation={6} variant="filled" {...props} />
// }

//

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
