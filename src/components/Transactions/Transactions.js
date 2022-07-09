import React from 'react';
import { FiFilter } from "react-icons/fi";

const Transactions = () => {


  // Date
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = today.toLocaleString("bd", { month: "long" }); //January is 0!
  const yyyy = today.getFullYear();
  const dayName = today.toLocaleString("bd", { weekday: "long" });

  today = dd + " " + mm + " " + yyyy + ", " + dayName;
  // Date




    return (
        <div>
            <div>
                <div className='mt-3'>
                    <h6 className='form-h6'>Transactions History</h6>
                </div>
            </div>
            <div className='time-fl'>
            <div className='d-flex justify-content-between'>
                    <div className='d-flex'>
                        <div>
                            <p id="date">{today}</p>
                        </div>
                        <div>
                            <input className='date-input ms-4' type='date' />
                        </div>
                    </div>
                    <div>
                        <p className='fil'><FiFilter className='me-2'/>Filter list</p>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <div className='sel-list d-flex justify-content-between'>
                    <div>
                        <p>Product sell</p>
                    </div>
                    <div className='ms-5'>
                        <p>21/04/2022</p>
                    </div>
                    <div className='ms-5'>
                        <p>10:00 AM</p>
                    </div>
                    <div className='ms-5'>
                        <p>Credit Card</p>
                    </div>
                    <div className='ms-5'>
                        <p>65zsf1g6541d6s5h4165dt1h65dz1h651td65h16d5t1h</p>
                    </div>
                    <div className='ms-4'>
                        <p>$ 10,000</p>
                    </div>
                    <button className='detail-btn ms-5'>Details</button>
                </div>
            </div>
        </div>
    );
};

export default Transactions;