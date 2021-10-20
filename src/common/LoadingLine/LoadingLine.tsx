import React from 'react'
import s from './LoadingLine.module.css'
import LinearProgress from '@mui/material/LinearProgress'
import { useSelector } from 'react-redux'
import { AppRootStateType } from '../../store/store'

const LoadingLine = () => {

    let status = useSelector<AppRootStateType, number>(state => state.app.status)

    return (
        <div className={s.loadingStyle}>
            {status !== 0 && <LinearProgress color={"secondary"}/>}
        </div>
    )
}

export default LoadingLine