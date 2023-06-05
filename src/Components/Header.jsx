import React from 'react';
import imgL from '../book1.jpeg'
import { DMenu } from './Menu';
import {HiOutlineMenuAlt3} from "react-icons/hi";
import {useState} from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    function refreshPage(){ 
        window.location.reload(); 
    }

    const [menu,showMenu] = useState(false);
    function changeMenu(){
        return showMenu(!menu);
    }

    let menublack = <div className="bg-black fixed right-0 top-0 h-full w-full bg-opacity-30" onClick = {changeMenu}></div>

    return (
        <>
        <div className='w-full h-24 bg-white flex justify-between p-3'>
            <img className='h-20 w-20 justify-start'
            src={imgL}
            alt='logo'>
            </img>    
            <Link to="/" onClick={refreshPage}> 
            <h1 className='text-5xl font-mono font-extrabold p-3 text-black drop-shadow-2xl'>Book<span className='text-blue-400'>Keeda</span>
                </h1> </Link>
            <HiOutlineMenuAlt3 size = {40} className='tify-end' onClick={changeMenu}/>
            </div>
            {menu && <DMenu closemenu ={()=>{showMenu(!menu)}}/>}
            {menu && menublack}
            </>
    );
};

export default Header;