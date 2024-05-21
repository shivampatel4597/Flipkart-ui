import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandLess';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import img from './images/flipkart-logo-39907.png'
const Header = () => {
  return (

    <>
    <div className='header'>
    <div className='header__first'>
        <img src={img} alt='flipkart logo'/>
        <div><span>Explore</span>
        <span>Plus</span>
        
        </div>
    </div>
    <div className='header__second'>
        <input type='text' placeholder='Search for Products,Brands and More'/>
        <SearchIcon className='search-icon'/>
    </div>
    <div className='header__third'>
        <button>
            Login
        </button>
    </div>
    <div className='header__fourth'>
        <span>More</span>
        <ExpandMoreIcon/>
    </div>
    <div className='header__fifth'>
     <ShoppingCartIcon/>
     <p>Cart</p>

    </div>
    </div>
    
    </>
  )
}

export default Header