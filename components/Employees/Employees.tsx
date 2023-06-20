"use client";
import React, { useState } from "react";
import DataGrid, {
    Column,
    Editing,
    Paging,
    Lookup,
    SearchPanel,
    FilterRow,
    Selection,
    HeaderFilter
} from "devextreme-react/data-grid";
import { PencilIcon } from "@heroicons/react/24/outline";
import { employees, states, prefix } from "../../data";
import "devextreme/dist/css/dx.light.css";
import EmployeeEditForm from "./EmployeeEditForm";



interface Employee {
    ID: number;
    PrefixID: number;
    FirstName: string;
    LastName: string;
    Position: string;
    StateID: number;
    BirthDate: string;
}



const Employees: React.FC = () => {
    const [editingRowKey, setEditingRowKey] = useState<number | null>(null);



    const handleRowClick = (e: any) => {
        const { column, data } = e;
        if (column && column.type === "buttons") {
            // Edit icon was clicked
            setEditingRowKey(data.ID);
        }
    };



    const handleSave = (updatedData: Employee) => {
        // Handle saving the updated data
        console.log("Saving:", updatedData);
        setEditingRowKey(null);
    };



    const handleCancel = () => {
        setEditingRowKey(null);
    };



    const renderEditCell = (cellData: any) => {
        return (
            <div onClick={() => setEditingRowKey(cellData.data.ID)}>
                <PencilIcon className="h-5 w-5 text-blue-500 cursor-pointer" />
            </div>
        );
    };



    return (
        <div className="w-full pt-10 flex justify-center items-center">
            {editingRowKey !== null ? (
                <EmployeeEditForm
                    rowData={employees.find((employee) => employee.ID === editingRowKey)!}
                    states={states}
                    onSave={handleSave}
                    onCancel={handleCancel}
                />
            ) : (
                <DataGrid
                    id="gridContainer"
                    dataSource={employees}
                    keyExpr="ID"
                    allowColumnReordering={true}
                    showBorders={true}
                    showColumnLines={false}
                    hoverStateEnabled={true}
                    width="50%"
                    onRowClick={handleRowClick}
                >
                    <Paging enabled={true} />
                    <SearchPanel visible={true} width={240} placeholder="Search..." />
                    <Editing
                        mode="row"
                        allowDeleting={true}
                        allowAdding={true}
                        useIcons={true}
                    />
                    <HeaderFilter visible={true} />


                    <Column dataField="PrefixID" caption="Title" width={70}>
                        <Lookup dataSource={prefix} displayExpr="name" valueExpr="id" />
                    </Column>
                    <Column dataField="FirstName" />
                    <Column dataField="LastName" />
                    <Column dataField="Position" width={130} />
                    <Column dataField="StateID" caption="State" width={125}>
                        <Lookup dataSource={states} displayExpr="Name" valueExpr="ID" />
                    </Column>
                    <Column dataField="BirthDate" width={125} dataType="date" />
                    <Column type="buttons" width={70} cellRender={renderEditCell} />
                </DataGrid>
            )}
        </div>
    );
};



export default Employees;