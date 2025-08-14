import { Button, Dialog } from "@mui/material";
import { useContext, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { MyContext } from "../../App";

const CountryDropdown = () => {

    const [isOpenModal, setIsOpenModal] = useState(false)

    const context = useContext(MyContext)

    console.log(context)

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

                {/* Country API */}
                <ul className="countryList mt-3">
                    
                    {
                        context.countryList?.length!==0 && context.countryList?.map((item, idx)=>{
                            return(
                                <li key={idx}><Button onClick={()=> setIsOpenModal(false)}>{item.country}</Button></li>
                            )
                        })
                    }
                    
                </ul>
            </Dialog>
        </div>
    );
};

export default CountryDropdown;