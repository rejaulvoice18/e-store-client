import React, { useContext } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import CountryDropdown from '../CountryDropdown/CountryDropdown';
import { Button } from '@mui/material';
import { FiUser } from 'react-icons/fi';
import { IoBagOutline } from 'react-icons/io5';
import SearchBox from '../SearchBox/SearchBox';
import Navigation from '../Navigation/Navigation';
import { MyContext } from '../../App';
const Header = () => {
    const context = useContext(MyContext)

    console.log(context)

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
                                {
                                    context.countryList?.length!==0 && <CountryDropdown />
                                }
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

// import { AppBar, Toolbar, IconButton, InputBase, Badge, Select, MenuItem, Box, Typography } from '@mui/material';
// import { Search, ShoppingBag, Person } from '@mui/icons-material';

// export default function Header() {
//   return (
//     <>
//       {/* Top Notice Bar */}
//       <Box sx={{ background: '#0d47a1', color: '#fff', fontSize: 14, textAlign: 'center', py: 0.5 }}>
//         Due to the <b>COVID-19</b> epidemic, orders may be processed with a slight delay
//       </Box>

//       {/* Main Header */}
//       <AppBar position="sticky" color="inherit" elevation={1}>
//         <Toolbar
//           sx={{
//             maxWidth: 1300,
//             mx: 'auto',
//             width: '100%',
//             gap: 2,
//             flexWrap: 'wrap',
//             justifyContent: 'space-between',
//             py: 1
//           }}
//         >
//           {/* Logo */}
//           <Box component="img" src="/logo.png" alt="Logo" sx={{ height: 40, flexShrink: 0 }} />

//           {/* Location Selector */}
//           <Select
//             defaultValue="Bahrain"
//             size="small"
//             sx={{
//               minWidth: 120,
//               background: '#f8f9fa',
//               borderRadius: 1,
//               '& .MuiSelect-select': { py: 0.8 }
//             }}
//           >
//             <MenuItem value="Bahrain">Bahrain</MenuItem>
//             <MenuItem value="UAE">UAE</MenuItem>
//           </Select>

//           {/* Search Bar */}
//           <Box
//             sx={{
//               flex: 1,
//               minWidth: 220,
//               display: 'flex',
//               alignItems: 'center',
//               background: '#f5f5f5',
//               borderRadius: 2,
//               px: 1
//             }}
//           >
//             <InputBase placeholder="Search for products..." sx={{ flex: 1, fontSize: 14 }} />
//             <IconButton sx={{ color: '#1976d2' }}>
//               <Search />
//             </IconButton>
//           </Box>

//           {/* User & Cart */}
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//             <IconButton sx={{ color: '#1976d2' }}>
//               <Person />
//             </IconButton>
//             <Typography sx={{ fontWeight: 500 }}>$3.29</Typography>
//             <IconButton sx={{ color: '#1976d2' }}>
//               <Badge badgeContent={1} color="error">
//                 <ShoppingBag />
//               </Badge>
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Categories Navigation */}
//       <Box sx={{ background: '#fff', borderBottom: '1px solid #eee' }}>
//         <Box
//           sx={{
//             maxWidth: 1300,
//             mx: 'auto',
//             px: 2,
//             display: 'flex',
//             flexWrap: 'wrap',
//             gap: 2,
//             py: 1.2,
//             fontSize: 15,
//             fontWeight: 500,
//             color: '#333'
//           }}
//         >
//           <Typography sx={{ cursor: 'pointer', color: '#1976d2' }}>All Categories</Typography>
//           <Typography sx={{ cursor: 'pointer' }}>Home</Typography>
//           <Typography sx={{ cursor: 'pointer' }}>Fashion</Typography>
//           <Typography sx={{ cursor: 'pointer' }}>Electronics</Typography>
//           <Typography sx={{ cursor: 'pointer' }}>Bakery</Typography>
//           <Typography sx={{ cursor: 'pointer' }}>Grocery</Typography>
//           <Typography sx={{ cursor: 'pointer' }}>Mobiles</Typography>
//           <Typography sx={{ cursor: 'pointer' }}>Blog</Typography>
//           <Typography sx={{ cursor: 'pointer' }}>Contact Us</Typography>
//         </Box>
//       </Box>
//     </>
//   );
// }
