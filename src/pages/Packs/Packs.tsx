import React from 'react';
import s from './Packs.module.css'
import Button from "@material-ui/core/Button";
import Table from "../../common/Table/Table";


type PropsType = {
    packsForTable: Array<any>
    addPackHandler: () => void
    deletePackHandler: (_id: string) => void
    updatePackHandler: (_id: string, name: string) => void
}


function Packs(props: PropsType) {

    return (
        <div>
            <Button
                variant={'outlined'}
                color={"primary"}
                size={"small"}
                onClick={props.addPackHandler}>
                Add pack
            </Button>
            <Table tableHeaders={["Name", "Cards count", "Updated", "Delete pack", "Update pack", "Cards"]}
                   tableDate={props.packsForTable}
                   deleteHandler={props.deletePackHandler}
                   updateHandler={props.updatePackHandler}
            />


        </div>
    )
}

export default Packs