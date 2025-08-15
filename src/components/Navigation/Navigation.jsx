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
                            <li className='list-inline-item'><Link to="/"><Button>Home</Button></Link></li>
                            <li className='list-inline-item'>
                                <Link to="/"><Button>men</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to="/"><Button>clothing</Button></Link>
                                    <Link to="/"><Button>footwear</Button></Link>
                                    <Link to="/"><Button>watches</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'><Link to="/"><Button>women</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>beauty</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>watches</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>kids</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>gift</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>blog</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>Contact</Button></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;