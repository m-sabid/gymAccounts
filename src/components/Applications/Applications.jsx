import React from 'react';
import './Applications.css'
import { HiDocumentText } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { FiFilter } from "react-icons/fi";
import { BsCheckLg } from "react-icons/bs";

const Applications = () => {
    return (
        <div>
            <div className='order-top'>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex'>
                        <div>
                            <HiDocumentText className='o-s-i' />
                        </div>
                        <div className='ms-4'>
                            <p className='o-p'>Applications</p>
                            <h6 className='o-h6'>25</h6>
                        </div>
                    </div>
                    <div>
                        <p className='fil me-2'><FiFilter className='me-2'/>Filter list</p>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <div className='appli-grid ms-4'>
                    <div className='appli-cart'>
                        <div>
                            <h5 style={{ fontWeight: '700' }}>Application of TRAINER NAME</h5>
                            <p style={{ fontWeight: '700' }}>From : 10/03/2022</p>
                            <p style={{ fontWeight: '700', marginTop: '-13px' }}>To : 10/03/2022</p>
                            <p style={{ fontWeight: '700', marginTop: '-13px' }}>Reason : Sick and Fiver</p>
                            <p style={{ fontWeight: '700', marginTop: '-13px' }}>Paid Leave : Yes</p>
                        </div>
                        <div className='d-flex'>
                            <button className='Decline-btn'>Decline</button>
                            <button className='Accpet-btn'>Accept</button>
                        </div>
                    </div>
                    <div className='appli-cart'>
                        <div>
                            <h5 style={{ fontWeight: '700' }}>Application of TRAINER NAME</h5>
                            <p style={{ fontWeight: '700' }}>From : 10/03/2022</p>
                            <p style={{ fontWeight: '700', marginTop: '-13px' }}>To : 10/03/2022</p>
                            <p style={{ fontWeight: '700', marginTop: '-13px' }}>Reason : Sick and Fiver</p>
                            <p style={{ fontWeight: '700', marginTop: '-13px' }}>Paid Leave : Yes</p>
                        </div>
                        <div className='d-flex'>
                            <button className='Decline-btn'>Decline</button>
                            <button className='Accpet-btn'>Accpet</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className='mt-5'>
                <h6 className='form-h6'>My  application’s</h6>
            </div>
            <div>
                <div className='add-apli'>
                    <p className='add-application'><span style={{ fontSize: '35px' }}>+</span></p>
                    <p className='up'>New Application</p>
                </div>
            </div>
            <div>
                <div className='leave-apli'>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex'>
                            <ImCross className='x-btn' />
                            <p className='ms-2' style={{ color: '#EB5E12', fontWeight: '700' }}>Leave Application</p>
                        </div>
                        <div>
                            <ImCross style={{ color: '#C4C4C4', fontSize: '10px' }} />
                        </div>
                    </div>
                    <div className='d-flex justify-content-between' style={{ marginTop: '-10px' }}>
                        <div>
                            <p className='ms-4' style={{ color: '#EB5E12' }}>Rejected</p>
                        </div>
                        <div>
                            <p style={{ color: '#EB5E12' }}>05-03-2022</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='equ-apli'>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex'>
                            <ImCross className='x-btn' />
                            <p className='ms-2' style={{ color: '#FAAD14', fontWeight: '700' }}>Equipment Application</p>
                        </div>
                        <div>
                            <ImCross style={{ color: '#C4C4C4', fontSize: '10px' }} />
                        </div>
                    </div>
                    <div className='d-flex justify-content-between' style={{ marginTop: '-10px' }}>
                        <div>
                            <p className='ms-4' style={{ color: '#FAAD14' }}>On Process</p>
                        </div>
                        <div>
                            <p style={{ color: '#FAAD14' }}>05-03-2022</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='app-apli'>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex'>
                            <BsCheckLg className='x-btn2' />
                            <p className='ms-2' style={{ color: '#38B865', fontWeight: '700' }}>Loan Application</p>
                        </div>
                        <div>
                            <ImCross style={{ color: '#C4C4C4', fontSize: '10px' }} />
                        </div>
                    </div>
                    <div className='d-flex justify-content-between' style={{ marginTop: '-10px' }}>
                        <div>
                            <p className='ms-4' style={{ color: '#38B865' }}>Approved</p>
                        </div>
                        <div>
                            <p style={{ color: '#38B865' }}>05-03-2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Applications;