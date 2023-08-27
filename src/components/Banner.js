import banner from "../assets/img/banner.jpg"
import cart from "../assets/img/cart.png"
import mobile from "../assets/img/mobile.png"
import support from "../assets/img/support.png"
import React, { useState } from "react"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import px from "../assets/img/pxbg.jpg"

const Banner = () => {

    const [typeEffect] = useTypewriter({
        words: ["Nutrition ", "Dermatalogy ", "Ayurveda "],
        loop: {},
        typeSpeed: 0,
        deleteSpeed: 0
    })

    return (
        <div className="relative">
            <h1 className="text-2xl md:text-4xl font-bold flex justify-center">
                Hair Loss Has Multiple Root Causes
            </h1>
            <br />
            <div className="flex justify-center">
                <img src={banner} alt="" />
            </div>
            <br />
            <br />
            <div className="flex justify-center">
                <button className='bg-[#414042] rounded-2xl hover:bg-[#B7D340] text-white h-10 font-medium pl-4 pr-4 text-xl uppercase'>Take the hair test<sup className='text-xs'>TM</sup></button>
            </div>
            <br />
            <h1 className="text-2xl capitalize font-bold md:text-4xl flex justify-center">
                Here Is How It Will Work
            </h1>
            <br />
            <div className="flex-col lg:flex">
                <div className="flex-col w-[80%] ml-[10%] h-[20%] border-2-black shadow-2xl p-6">
                    <h1 className="capitalize text-[#914E74] font-semibold text-lg">Take the Hair test</h1>
                    <div>An online test that assess the root cause of your hair loss</div>
                    <div className="flex justify-between">
                        <img src={mobile} className="mt-4 w-[30%]" alt="" />
                        <div className="flex-col mt-4 ">
                            <h1 className="font-bold text-2xl">STEP 1</h1>
                            <div className="text-sm">(takes 2-4 mins)</div>
                        </div>
                    </div>
                </div>
                <div className="flex-col h-[20%] w-[80%] ml-[10%] border-2-black shadow-2xl p-6">
                    <h1 className="capitalize text-[#914E74] font-semibold text-lg">Buy the plan</h1>
                    <div>On the basis of your responses, a team of doctors recommend a treatment plan</div>
                    <div className="flex justify-between">
                        <img src={cart} className="mt-4 w-[30%]" alt="" />
                        <div className="flex-col mt-4">
                            <h1 className="font-bold text-2xl">STEP 2</h1>
                            <div className="text-sm">(takes 5 mins)</div>
                        </div>
                    </div>
                </div>
                <div className="flex-col h-[20%] w-[80%] ml-[10%] border-2-black shadow-2xl p-6">
                    <h1 className="capitalize text-[#914E74] font-semibold text-lg">Start hair growth</h1>
                    <div>You get a free diet plan and a personal care to you throughout your journey</div>
                    <div className="flex justify-between">
                        <img src={support} className="mt-4 w-[25%]" alt="" />
                        <div className="flex-col mt-4 ">
                            <h1 className="font-bold text-2xl">STEP 1</h1>
                            <div className="text-sm">(takes 3-5 months)</div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div>
                <h1 className="text-4xl text-[#95B266] font-semibold flex justify-center">
                    <div className="mr-2">{typeEffect}</div>
                    <span className="text-black">Doctors</span>
                </h1>
                <h1 className="capitalize font-semibold text-4xl flex justify-center">
                    Build your Plan
                </h1>
            </div>
            <div className="flex justify-between">
                <div className="flex-col mt-[10%] ml-10 text-2xl font-semibold">
                    <h1>We are not just doctor backend,</h1>
                    <h1>we are doctor recommended</h1>
                </div>
                <img className="w-[40%]" src={px} alt="" />
            </div>
            <br />
            <div className="flex justify-center">
                <button className='bg-[#414042] rounded-2xl hover:bg-[#B7D340] text-white h-10 font-medium pl-4 pr-4 text-xl uppercase'>Take the hair test<sup className='text-xs'>TM</sup></button>
            </div>
        </div >
    )
}

export default Banner;