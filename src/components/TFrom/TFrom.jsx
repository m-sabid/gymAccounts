import React from 'react';
import { Form } from 'react-bootstrap';
import './TFrom.css'

const TFrom = () => {
    return (
        <div>
            <div>
                <div className='mt-3'>
                    <h6 className='form-h6'>Application Form</h6>
                </div>
            </div>
            <div className='from'>
                <from>
                    <div className='mt-5'>
                        <h6 style={{fontWeight: '700'}}>Form Type</h6>
                        <Form.Select className='dr-input mt-3' aria-label="Default select example">
                            <option value="1">Loan Application</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                    <div className='mt-4'>
                        <div className='d-flex'>
                            <input className='fr-input' placeholder=''/>
                            <input className='fr-input ms-4' placeholder=''/>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className='d-flex'>
                            <input className='fr-input' placeholder=''/>
                            <input className='fr-input ms-4' placeholder=''/>
                        </div>
                    </div>
                    <div className='mt-5 pt=5'>
                        <div className='d-flex'>
                            <input className='fr-input' placeholder=''/>
                            <input className='fr-input ms-4' placeholder=''/>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className='d-flex'>
                            <input className='fr-input' placeholder=''/>
                            <input className='fr-input ms-4' placeholder=''/>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <input className='f-u-input' type='file'/>
                    </div>
                    <p style={{fontSize: '11px'}}>Attach file. File size of your documents should not exceed 10MB</p>
                </from>
            </div>
        </div>
    );
};

export default TFrom;