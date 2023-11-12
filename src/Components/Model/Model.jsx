import React from 'react';
import './Model.css';
import cross from "../../Assets/x-circlex.png"

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="top">
                    <h3>Close account</h3>
                    <button className="close-button" onClick={onClose}>
                        <img src={cross} alt="" />
                    </button>
                </div>
                <form>
                    <div className="email">
                        <label className='label'>Email</label>
                        <input className='input' type="text" name="email" />
                    </div>
                    <div className="select">
                        <label className='label'>Want to file UAR</label>
                        <label className='label'>
                            <input type="radio" name="uar" />
                            Yes
                        </label>
                        <label className='label'>
                            <input type="radio" name="uar" />
                            No
                        </label>

                    </div>
                    <div className="reason">
                        <label className='label'>Reason</label>
                        <input className='input' type='text' name="notes"></input>
                    </div>
                    <div className="note">
                        <label className='label'>Note</label>
                        <input className='input' type='text' name="notes"></input>
                    </div>
                    <div className="end">
                        <input type="radio" />
                        <label className='label'>Charge closure fee</label>
                        <button onClick={onClose} type="button">Close Account</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
