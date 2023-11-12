import React from 'react';
import './Sidebar.css';
import logo from '../../Assets/image 1.png';
import text from '../../Assets/Avatar + Text.png'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="list">
            <img src={logo} alt="" />
                <ul>
                    <li>Overview </li>
                    <li>Onboarding </li>
                    <li className="highlighted">Monitoring</li>
                    <li>Flagging </li>
                    <li>Source of Income </li>
                    <li>UAR </li>
                </ul>
            </div>
            <div className="content">
                <img src={text} alt=""/>
            </div>
        </div>
    )
}

export default Sidebar
