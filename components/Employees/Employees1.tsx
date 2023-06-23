"use client"
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
import CustomModal from "./CustomModal";
import { employees, states, prefix } from "../../data";
import "devextreme/dist/css/dx.light.css";
import "./styles/styles.css";



const Employees = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);



    const handleOpenModal = (rowData: any) => {
        setSelectedRow(rowData);
        setModalOpen(true);
    };



    const handleCloseModal = () => {
        setSelectedRow(null);
        setModalOpen(false);
    };



    const handleSaveData = (updatedData: any) => {
        // Handle saving the updated data here
        console.log(updatedData);
        handleCloseModal();
    };



    return (
        <div className="w-full pt-10 flex justify-center items-center">
            <DataGrid
                id="gridContainer"
                dataSource={employees}
                keyExpr="ID"
                allowColumnReordering={true}
                showBorders={true}
                showColumnLines={false}
                hoverStateEnabled={true}
                width="50%"
                onRowClick={handleOpenModal}
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
            </DataGrid>



            <CustomModal
                isOpen={isModalOpen}
                rowData={selectedRow}
                states={states}
                onSave={handleSaveData}
                onCancel={handleCloseModal}
            />
        </div>
    );
};



export default Employees;