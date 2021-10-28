import React from 'react';
import s from './Packs.module.css'
import {PackType} from "../../api/cardsAPI";
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
                variant={'contained'}
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
            
            {/*{props.packs.map((p, key) => {*/}
            {/*    return <div key={p._id}>*/}
            {/*        <span>{p.name}</span>*/}
            {/*        <span>{p.cardsCount}</span>*/}
            {/*        <span>{p.updated}</span>*/}
            {/*        <Button*/}
            {/*            variant={'contained'}*/}
            {/*            color={"primary"}*/}
            {/*            size={"small"}*/}
            {/*            onClick={() => props.deletePackHandler(p._id)}*/}
            {/*            >*/}
            {/*            Delete*/}
            {/*        </Button>*/}
            {/*        <Button*/}
            {/*            variant={'contained'}*/}
            {/*            color={"primary"}*/}
            {/*            size={"small"}*/}
            {/*            onClick={() => props.updatePackHandler(p._id, "Updated name")}*/}
            {/*        >*/}
            {/*            Update*/}
            {/*        </Button>*/}
            {/*    </div>*/}


            {/*})}*/}

        </div>
    )
}

export default Packs