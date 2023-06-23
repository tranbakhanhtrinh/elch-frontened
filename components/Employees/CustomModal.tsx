import React from "react";
import EmployeeEditForm from "./EmployeeEditForm";

 

interface CustomModalProps {
  isOpen: boolean;
  rowData: any;
  states: any[];
  onSave: (updatedData: any) => void;
  onCancel: () => void;
}

 

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  rowData,
  states,
  onSave,
  onCancel,
}) => {
  if (!isOpen) {
    return null; // Don't render anything if the modal is closed
  }

 

  return (
<div className="modal-container">
<div className="modal-overlay" onClick={onCancel} />
<div className="modal-content">
<EmployeeEditForm rowData={rowData} states={states} onSave={onSave} onCancel={onCancel} />
</div>
</div>
  );
};

 

export default CustomModal;