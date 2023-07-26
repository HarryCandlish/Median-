import { Link } from 'react-router-dom';

import '../styles/header.css'
import {MenuItems} from '../data/MenuItems'
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'

import React, { Component} from 'react';



class Header extends Component {
   state = {clicked: false};
   handleClick = () => {
      this.setState({clicked: !this.state.clicked})
   }
   render () {
   return (
     <nav className='navbar'>
      <Link to='/'><h2 className='navbar-logo'>Median</h2></Link>

      <div className='menu-icons' onClick={this.handleClick}>
      <i>{this.state.clicked ? <RxHamburgerMenu/> : <RxCross1/>}</i>
      </div>

         <ul className='navbar-menu'>
            {MenuItems.map((item, index) => {
               return ( 
               <li key={index}>
                  <Link className={item.cName} to={item.url}>
                     <h3>{item.title}</h3></Link>
               </li>
            )})}
            <Link to="/registration"><button className='btn-nav'>Subscribe</button></Link>
         </ul>
   </nav>
   );
};
};

export default Header