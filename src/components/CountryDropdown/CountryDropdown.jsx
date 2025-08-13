import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa";

const CountryDropdown = () => {
    return (
        <div>
            <Button className='countryDrop'>
                <div className='info d-flex flex-column'>
                    <span className="label">Your Location</span>
                    <span className="name">India</span>
                </div>
                <span className="ml-auto"><FaAngleDown /></span>
            </Button>
        </div>
    );
};

export default CountryDropdown;