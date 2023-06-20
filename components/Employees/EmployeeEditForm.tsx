import React from "react";
import "./edit_form_styles.css";


interface EmployeeEditFormProps {
    rowData: any;
    states: any[];
    onSave: (updatedData: any) => void;
    onCancel: () => void;
}



const EmployeeEditForm: React.FC<EmployeeEditFormProps> = ({ rowData, states, onSave, onCancel }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(rowData);
    };



    return (
        <div className="edit-form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        defaultValue={rowData.FirstName}
                        className="form-input"
                        placeholder="Enter your first name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        defaultValue={rowData.LastName}
                        className="form-input"
                        placeholder="Enter your last name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Position</label>
                    <input
                        type="text"
                        id="position"
                        name="position"
                        defaultValue={rowData.Position}
                        className="form-input"
                        placeholder="Enter your position"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <select id="state" name="state" defaultValue={rowData.StateID} className="form-select">
                        {states.map((state) => (
                            <option key={state.ID} value={state.ID}>
                                {state.Name}
                            </option>
                        ))}
                    </select>
                </div>
                
                <div className="form-group">
                    <label htmlFor="birthday">Birthday</label>
                    <input
                        type="date"
                        id="birthday"
                        name="birthday"
                        defaultValue={rowData.BirthDate}
                        className="form-input"
                        placeholder="Select birthday"
                    />
                </div>

                <div className="form-buttons">
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" className="btn btn-secondary" onClick={onCancel}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};



export default EmployeeEditForm;