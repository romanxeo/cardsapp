import React from 'react';
import s from './Packs.module.css'
import Table from "../../common/Table/Table";
import ModalAddPack from "./ModalAddPack/ModalAddPack";


type PropsType = {
    packsForTable: Array<any>
    addPackHandler: () => void
    deletePackHandler: (_id: string,) => void
    updatePackHandler: (_id: string) => void
}


function Packs(props: PropsType) {

    return (
        <div>
            <ModalAddPack />
            <Table tableHeaders={["Name", "Cards count", "Updated", "Cards", "Delete pack", "Update pack", "Learn"]}
                   tableDate={props.packsForTable}
                   deleteHandler={props.deletePackHandler}
                   updateHandler={props.updatePackHandler}
                   questionText={"Do you really want to delete this pack?"}
            />
        </div>
    )
}

export default Packs