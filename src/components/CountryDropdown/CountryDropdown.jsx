import { Button, Dialog } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { MyContext } from "../../App";

const CountryDropdown = () => {

    const [isOpenModal, setIsOpenModal] = useState(false)
    const [selectedTab, setSelectedTab] = useState(null);
    const [countryList, setCountryList] = useState([]);

    const context = useContext(MyContext)

    const selectCountry=(index, country)=>{
        setSelectedTab(index)
        setIsOpenModal(false)
        context.setSelectedCountry(country)
    }

    useEffect(()=>{
        setCountryList(context.countryList);
    },[])

    // country search filter
    const filterList = (e) =>{
        e.preventDefault()

        const keyword = e.target.value.toLowerCase();

        if(keyword!==""){
            const list = countryList.filter((item)=>{
                return item.country.toLowerCase().includes(keyword)
            })
            setCountryList(list)
        }else{
            setCountryList(context.countryList);
        }

        
    }

    return (
        <div>
            <Button className='countryDrop' onClick={()=>setIsOpenModal(true)}>
                <div className='info d-flex flex-column'>
                    <span className="label">Your Location</span>
                    <span className="name">{context.selectedCountry!=="" ? context.selectedCountry.length>10 ? context.selectedCountry?.substr(0,10)+'...' : context.selectedCountry : 'Select Location'}</span>
                </div>
                <span className="ml-auto"><FaAngleDown /></span>
            </Button>

            {/* Pop Up Modal */}
            <Dialog open={isOpenModal} onClose={()=> setIsOpenModal(false)} className="locationModal">
                <h4 className="mb-0">Choose your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for your area.</p>
                <Button className="close_" onClick={()=> setIsOpenModal(false)}><MdClose /></Button>
                <div className='headerSearch w-100'>
                    <input type="text" placeholder='Search your area' onChange={filterList}/>
                    <Button><IoIosSearch /></Button>
                </div>

                {/* Country API */}
                <ul className="countryList mt-3">
                    
                    {
                        countryList?.length!==0 && countryList?.map((item, idx)=>{
                            return(
                                <li key={idx}><Button onClick={()=> selectCountry(idx, item.country)}
                                    className={`${selectedTab===idx ? 'active' : ''}`}
                                >{item.country}</Button></li>
                            )
                        })
                    }
                    
                </ul>
            </Dialog>
        </div>
    );
};

export default CountryDropdown;