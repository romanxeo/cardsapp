import React from 'react';
import Table from "../../common/Table/Table";

type PropsType = {
    cardsForTable: Array<any>
}

function Cards(props: PropsType) {


    return (
        <div>
            <Table
                tableHeaders={["Question", "Answer", "Grade", "Updated", "Delete card", "Update card"]}
                tableDate={props.cardsForTable}
                deleteHandler={(_id: string) => {}}
                updateHandler ={(_id: string, name: string) => {}}
            />
        </div>
    )
}

export default Cards;