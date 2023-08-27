import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import whatsapp from "../assets/img/whatsapp-logo_75x.png"
const NavBar = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        window.scrollY >= 80 ? setColorchange(true) : setColorchange(false);
    };

    return (
        <>
            <div className='absolute'>
                <div className='bg-[#B7D341] flex justify-between w-[100%] overflow-hidden fixed hover:!bg-black z-20'>
                    <div className='ml-12 text-white text-4xl font-black'>Traya.</div>
                    <div className='flex mt-2 mx-16'>
                        <button className='bg-white rounded hover:bg-black hover:text-white h-10 font-medium p-2 text-base uppercase'>Take the hair test<sup className='text-xs'>TM</sup></button>
                        <img
                            src={whatsapp}
                            className='h-6 mx-4 mt-2'
                            alt="" />
                        <FontAwesomeIcon
                            icon={faUser}
                            className="mx-4 text-white cursor-pointer z-[1000] h-6 mt-2"
                            size='lg'
                        />
                        <FontAwesomeIcon
                            icon={faShoppingCart}
                            className='mx-4 text-white cursor-pointer z-[1000] h-6 mt-2'
                            size='lg'
                        />
                        <FontAwesomeIcon
                            icon={faBars}
                            className="mx-4 text-white cursor-pointer z-[1000] h-6 mt-2"
                            size='lg'
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar
