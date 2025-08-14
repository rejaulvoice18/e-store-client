import { Button, Dialog } from "@mui/material";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";

const CountryDropdown = () => {

    const [isOpenModal, setIsOpenModal] = useState(false)
    return (
        <div>
            <Button className='countryDrop' onClick={()=>setIsOpenModal(true)}>
                <div className='info d-flex flex-column'>
                    <span className="label">Your Location</span>
                    <span className="name">India</span>
                </div>
                <span className="ml-auto"><FaAngleDown /></span>
            </Button>

            {/* Pop Up Modal */}
            <Dialog open={isOpenModal} onClose={()=> setIsOpenModal(false)} className="locationModal">
                <h4 className="mb-0">Choose your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for your area.</p>
                <Button className="close_" onClick={()=> setIsOpenModal(false)}><MdClose /></Button>
                <div className='headerSearch w-100'>
                    <input type="text" placeholder='Search your area' />
                    <Button><IoIosSearch /></Button>
                </div>

                <ul className="countryList mt-3">
                    <li><Button onClick={()=> setIsOpenModal(false)}>Bangladesh</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Sri Lanka</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Portugal</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Franch</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Spain</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Germany</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Bangladesh</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Sri Lanka</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Portugal</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Franch</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Spain</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Germany</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Bangladesh</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Sri Lanka</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Portugal</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Franch</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Spain</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Germany</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Bangladesh</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Sri Lanka</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Portugal</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Franch</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Spain</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Germany</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Bangladesh</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Sri Lanka</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Portugal</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Franch</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Spain</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Germany</Button></li>
                </ul>
            </Dialog>
        </div>
    );
};

export default CountryDropdown;