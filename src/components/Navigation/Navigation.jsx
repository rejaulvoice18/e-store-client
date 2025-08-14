import { Button } from '@mui/material';
import React from 'react';
import { CiHome } from 'react-icons/ci';
import { FaAngleDown } from 'react-icons/fa';
import { IoIosMenu } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-2 navPart1'>
                        <Button className='allCatTab align-items-center'>
                            <span className='icon1 mr-2'><IoIosMenu /></span>
                            <span className='text'>ALL CATEGORIES</span>
                            <span className='icon2 ml-2'><FaAngleDown /></span>
                        </Button>
                    </div>
                    <div className='col-sm-10 navPart2 d-flex align-items-center'>
                        <ul className='list list-inline ml-auto'>
                            <li className='list-inline-item'><Link to="/"> <CiHome /> &nbsp; Home</Link></li>
                            <li className='list-inline-item'><Link to="/">Fashion</Link></li>
                            <li className='list-inline-item'><Link to="/">Electronic</Link></li>
                            <li className='list-inline-item'><Link to="/">Bakery</Link></li>
                            <li className='list-inline-item'><Link to="/">Grocery</Link></li>
                            <li className='list-inline-item'><Link to="/">Mobiles</Link></li>
                            <li className='list-inline-item'><Link to="/">Blog</Link></li>
                            <li className='list-inline-item'><Link to="/">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;