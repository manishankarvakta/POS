import React from 'react';

const PosHeader = () => {
    return (
        <div className="row">
            <div className="col-md-4">
                <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                    <option value="1" selected>Biller 1</option>
                    <option value="2">Biller 2</option>
                    <option value="3">Biller 3</option>
                    <option value="4">Biller 3</option>
                </select>
            </div>
            <div className="col-md-4">
                <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                    <option value="1" selected>Warehouse 1</option>
                    <option value="2">Warehouse 2</option>
                    <option value="3">Warehouse 3</option>
                    <option value="4">Warehouse 3</option>
                </select>
            </div>
            <div className="col-md-4">
                
                <div className="input-group">
                    <select className="form-select form-select-md " aria-label=".form-select-lg example">
                        <option value="1" selected>Customer 1</option>
                        <option value="2">Customer 2</option>
                        <option value="3">Customer 3</option>
                        <option value="4">Customer 3</option>
                    </select>
                    <button type="button" className="btn btn-outline-dark">Add +</button>
                    
                </div>
            </div>
        </div>
    );
};

export default PosHeader;