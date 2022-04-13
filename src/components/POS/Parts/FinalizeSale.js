import React from 'react';

const FinalizeSale = () => {
    return (
        <div className="card sticky-md-top">
            <div className="card-body mb-5 ">
                <h5 className="card-title">Finalize Sale</h5>
                <hr />
                <p className="card-text"><b>Total Item: </b> <span className='float-end'> 10</span></p>
                <p className="card-text"><b>Total Bill: </b> <span className='float-end'> 10 BDT</span></p>
                <p className="card-text"><b>Discount Amount: </b> <span className='float-end'> 10 BDT</span></p>
                <p className="card-text"><b>Vat/Tax Amount: </b> <span className='float-end'> 10 BDT</span></p>
                <p className="card-text"><b>Gross Total: </b> <span className='float-end'> 10 BDT</span></p>
                <p className="card-text align-middle">
                    <div className="row">
                        <div className="col-md-6"><b>Cash Received: </b></div>
                        <div className="col-md-6"><input type="text" className='form-control float-end col-7' /></div>
                    </div>
                </p>
                <p className="card-text align-middle">
                    <div className="row">
                        <div className="col-md-3"><b>Card: </b></div>
                        <div className="col-md-5">
                            <select className="form-select" aria-label=".form-select-lg example">
                                <option value="1" selected>Bank 1</option>
                                <option value="2">Bank 2</option>
                                <option value="3">Bank 3</option>
                                <option value="4">Bank 3</option>
                            </select>
                        </div>
                        <div className="col-md-4"><input type="text" className='form-control float-end col-12' /></div>
                    </div>
                </p>
                <p className="card-text align-middle">
                    <div className="row">
                        <div className="col-md-3"><b>MFS: </b></div>
                        <div className="col-md-5">
                            <select className="form-select" aria-label=".form-select-lg example">
                                <option value="0" selected>MFS</option>
                                <option defaultValue="1" >Bkash</option>
                                <option value="2">Nagod</option>
                                <option value="3">Rocket</option>
                                <option value="4">Upay</option>
                            </select>
                        </div>
                        <div className="col-md-4"><input type="text" className='form-control float-end col-12' /></div>
                    </div>
                </p>
                <p className="card-text"><b>Change Amount: </b> <span className='float-end'> 10 BDT</span></p>

            </div>
        </div>
    );
};

export default FinalizeSale;