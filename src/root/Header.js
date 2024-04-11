



import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' bg-gray-400 flex justify-between items-center'>
            <div className=' bg-red-500'>
                <h3 className=' text-center h-20 w-20'>Image</h3>
            </div>
            
            <div className=' flex justify-center items-center gap-4'>
                <Link to={"/home"}>Home</Link>
                <Link to={"/cart"}>Cart</Link>
                <Link>Home</Link>
                <Link>Home</Link>
            </div>
        </div>
    );
};

export default Header;