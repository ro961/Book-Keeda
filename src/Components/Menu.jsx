import React from "react";
import {Link} from 'react-router-dom'

export const DMenu = (props) => {
    return(
        <div className="fixed bg-gray-100 top-0 left-0 w-4/5 h-full z-50">
            <h1 className="border-b border-t font-mono p-4 text-4xl h-16">Menu</h1>
            <ul>
            <li className="border-b font-mono h-16 p-3"><Link to='/' className="text-2xl text-blue-400" onClick={props.closemenu}>Home</Link></li> <br/>
            <li className="border-b font-mono h-12 text-left pl-3"><Link to='/About' className="text-2xl text-blue-400" onClick={props.closemenu}>About Us</Link></li>
            </ul>
        </div>
    )
}
