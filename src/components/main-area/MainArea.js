import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './MainArea.css'; // Your custom styles file
import FetchAllRecordBtn from '../fetch-all-record-btn/FetchAllRecordBtn';
import AvailableProducts from '../available-products/AvailableProducts';

function MainArea() {
    const [activeTab, setActiveTab] = useState('home');

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-sm bg-light border-bottom border-3 fixed-top shadow-sm">
                    <div className="container-fluid">
                        <button type="button" className="btn" data-bs-toggle="collapse" data-bs-target="#side-menu-toggler">
                            <i className="fa-solid fa-bars fa-lg"></i>
                        </button>
                        <a className="navbar-brand fw-bolder" style={{ fontSize: '1.9rem', position: 'absolute', left: '55px', color: '#3B4BBC' }} href="index.html">K12</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {/* Add your nav menu items here */}
                            </ul>
                            <button type="button" className="btn rounded-pill shadow-sm border btn-sm position-relative me-3" style={{ background: '#9CA7F9' }}>
                                <i className="fa-regular fa-bell" style={{ color: '#9CA7F9' }}></i>
                            </button>
                            <div className="dropdown dropstart">
                                <button className="btn-secondary fw-bold text-dark" style={{ border: 'none', background: 'none' }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="text-primary">Yashas
                                        <i className="fa-solid fa-caret-down"></i>
                                    </span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Profile</a></li>
                                    <li><a className="dropdown-item" href="#">Account</a></li>
                                    <li><a className="dropdown-item" href="#">Settings</a></li>
                                    <li><a className="dropdown-item text-danger" href="#">Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <div style={{ height: '56.5px' }}></div>

            <div className="row wrapper">
                {/* Sidebar */}
                <div className="col-5 col-sm-4 col-md-2 px-sm-2 px-0" data-bs-toggle="collapse" id="side-menu-toggler" style={{ background: '#F4F9FF' }}>
                    <div className="d-flex flex-column align-items-start pt-4 text-light" style={{ minHeight: '88vh' }}>
                        <div className={`border rounded shadow-sm h-75 w-75 mx-4 bg-light d-flex mt-2 flex-column align-items-center ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>
                            <i className="fa-solid fa-house fa-xl pt-4" style={{ color: '#3B4BBC' }}></i>
                            <p className="fw-semibold pt-3">Home</p>
                        </div>
                        <div className={`border rounded shadow-sm h-75 w-75 mx-4 bg-light d-flex mt-2 flex-column align-items-center ${activeTab === 'bookmark' ? 'active' : ''}`} onClick={() => setActiveTab('bookmark')}>
                            <i className="fa-regular fa-bookmark fa-xl pt-4" style={{ color: '#3B4BBC' }}></i>
                            <p className="fw-semibold pt-3">Bookmark</p>
                        </div>
                        {/* Add other sidebar items similarly */}
                    </div>
                </div>

                {/* Main content area */}
                <div className="col container-fluid overflow-auto pt-3" style={{ background: '#F4F9FF' }}>
                    {/* Main content based on activeTab state */}
                    {activeTab === 'home' && (
                        <div>
                            <h1>Home Content</h1>
                            <FetchAllRecordBtn/>
                            {/* Add your home content here */}
                        </div>
                    )}
                    {activeTab === 'bookmark' && (
                        <div>
                            <h1>Bookmark Content</h1>
                            <AvailableProducts/>
                            {/* Add your bookmark content here */}
                        </div>
                    )}
                    {/* Add other content areas similarly */}
                </div>
            </div>

            {/* Footer */}
            <footer>
                <nav className="navbar fixed-bottom shadow-sm" style={{ background: '#7582D1' }}>
                    <div className="container-fluid align-items-center d-flex row">
                        <span className="navbar-brand mb-0 h1 text-center text-white fs-6">&copy;&nbsp;2022 All rights reserved.</span>
                    </div>
                </nav>
            </footer>
        </>
    );
}

export default MainArea;
