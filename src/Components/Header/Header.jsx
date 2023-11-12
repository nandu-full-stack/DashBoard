import React, { useState } from 'react';
import './Header.css';
import cross from '../../Assets/x-circlex.png';
import close from '../../Assets/close.png';
import Modal from '../Model/Model';

const Header = ({ state, setState }) => {
    const [selectedLink, setSelectedLink] = useState('pending');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLinkClick = (link) => {
        setSelectedLink(link);
        setState(link);
    };

    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };


    return (
        <div className="header">
            
            <h2 className='heading'>Monitoring</h2>
           
            <div className="navigation">
                <button className={selectedLink === 'pending' ? 'selected' : ''} onClick={() => handleLinkClick('pending')}>Pending</button>
                <button className={selectedLink === 'completed' ? 'selected' : ''} onClick={() => handleLinkClick('completed')}>Completed</button>

            </div>

            <button className='close' onClick={openModal}><img src={cross} alt="" /><img src={close} alt="" /></button>


            <Modal isOpen={isModalOpen} onClose={closeModal}/>
            
        </div>
    );
};

export default Header;

