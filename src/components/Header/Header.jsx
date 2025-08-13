import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import CountryDropdown from '../CountryDropdown/CountryDropdown';
import { Button } from '@mui/material';
import { FiUser } from 'react-icons/fi';
import { IoBagOutline } from 'react-icons/io5';
import SearchBox from '../SearchBox/SearchBox';
import Navigation from '../Navigation/Navigation';
const Header = () => {
    return (
        <>
            <div className='headerWrapper'>
                <div className='top-strip bg-blue'>
                    <div className='container'>
                        <p className='mb-0 mt-0 text-center'>Due to the <b>COVID 19</b> epidemic, orders may be processed with a slight delay</p>
                    </div>
                </div>
                {/* Header Section Start */}
                <header className='header'>
                    <div className='container'>
                        <div className='row'>
                            <div className='logoWrapper d-flex align-items-center col-sm-2'>
                                <Link to={'/'}><img src={logo} alt="log" /></Link>
                            </div>
                            <div className='col-sm-10 d-flex align-items-center part2'>
                                {/* Select Country */}
                                <CountryDropdown />
                                {/* Header Search Bar */}
                                <SearchBox />
                                {/* End Header Search Bar */}

                                {/* User Account */}
                                <div className='part3 d-flex align-items-center ml-auto'>
                                    <Button className='circle mr-3'><FiUser /></Button>
                                    <div className='ml-auto cartTab d-flex align-items-center'>
                                        <span className='price'>$3.29</span>
                                        <div className='position-relative ml-2'>
                                            <Button className='circle'><IoBagOutline /></Button>
                                            <span className='count d-flex align-items-center justify-content-center'>1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Header Section End */}

                {/* Nav Section Start */}
                    <Navigation />
                {/* Nav Section End */}
            </div>
        </>
    );
};

export default Header;