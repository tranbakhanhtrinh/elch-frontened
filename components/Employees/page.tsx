"use client";
import React from "react";
import DataGrid, {
    Column,
    Editing,
    Paging,
    Lookup,
    SearchPanel,
    Selection,
} from "devextreme-react/data-grid";
import { PencilIcon } from "@heroicons/react/24/solid";
import { employees, states } from "../../data";
import "devextreme/dist/css/dx.light.css";

const Employees = () => {
    return (
        <div className="w-full pt-10 flex justify-center items-center">
            <DataGrid
                id="gridContainer"
                dataSource={employees}
                keyExpr="ID"
                allowColumnReordering={true}
                showBorders={true}
                showColumnLines={false}
                width="50%"
                // onEditingStart={onEditingStart}
                // onInitNewRow={onInitNewRow}
                // onRowInserting={onRowInserting}
                // onRowInserted={onRowInserted}
                // onRowUpdating={onRowUpdating}
                // onRowUpdated={this.onRowUpdated}
                // onRowRemoving={this.onRowRemoving}
                // onRowRemoved={this.onRowRemoved}
                // onSaving={this.onSaving}
                // onSaved={this.onSaved}
                // onEditCanceling={this.onEditCanceling}
                // onEditCanceled={this.onEditCanceled}
            >
                <Selection mode="multiple" />
                <Paging enabled={true} />
                <SearchPanel
                    visible={true}
                    width={240}
                    placeholder="Search..."
                />
                <Editing
                    mode="row"
                    allowUpdating={true}
                    allowDeleting={true}
                    allowAdding={true}
                    useIcons={true}
                />

                <Column dataField="Prefix" caption="Title" width={70} />
                <Column dataField="FirstName" />
                <Column dataField="LastName" />
                <Column dataField="Position" width={130} />
                <Column dataField="StateID" caption="State" width={125}>
                    <Lookup
                        dataSource={states}
                        displayExpr="Name"
                        valueExpr="ID"
                    />
                </Column>
                <Column dataField="BirthDate" width={125} dataType="date" />
            </DataGrid>
        </div>
    );
};

export default Employees;
