import React from 'react'
import home from "../assets/img/home.webp"
import mobile from "../assets/img/mobile.webp"

const Header = () => {
    let width = window.innerWidth;

    return (
        <div className=''>
            <img src={width < '900' ? mobile : home} alt="" />
            <div className="absolute top-40 left-11">
                <h1 className='text-xl font-medium md:text-4xl md:font-extrabold'>
                    Doctor recommended
                </h1>
                <br />
                <div className='capitalize font-medium text-xl md:text-4xl md:w-96'>
                    Know the root cause of your hair loss
                </div>
                <br />
                <hr className='border-4 border-black rounded-lg w-32' />
                <br />
                <div className='text-4xl'>93% saw results*</div>
                <br />
                <button className='bg-white rounded-xl hover:bg-black hover:text-white h-10 font-medium pl-4 pr-4 text-xl uppercase'>Take the hair test<sup className='text-xs'>TM</sup></button>
            </div>
        </div>
    )
}

export default Header
