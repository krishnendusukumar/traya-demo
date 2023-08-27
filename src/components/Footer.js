import React from 'react'
import googleplay from "../assets/img/googleplay.png"
import appleplay from "../assets/img/appleplay.png"
import footerimg from "../assets/img/footerimg.jpeg"
import whatsapp from "../assets/img/coolicon.png"

const Footer = () => {
    return (
        <div>
            <div className='flex-col mt-[2%] md:mt-[5%] pr-[10%] p-[5%] md:flex md:justify-between bg-[#414042] text-white'>
                <div className='flex-col capitalize'>
                    <h1 className='text-lg'>Experience the traya app on mobile app</h1>
                    <div className='flex'>
                        <img src={appleplay} className='w-[40%]' alt="" />
                        <img src={googleplay} className='w-[40%]' alt="" />
                    </div>
                </div>
                <div className='flex-col text-xs mt-[10%]'>
                    <div>
                        <h1>
                            Registered address office: health pvt ltd:
                        </h1>
                        <h1>
                            CIN: U9246274738784344176232
                        </h1>
                    </div>
                    <div>
                        <h1>
                            Registered address office: health pvt ltd:
                        </h1>
                        <h1>
                            CIN: U9246274738784344176232
                        </h1>
                    </div>
                </div>
            </div>
            <div className='flex justify-evenly p-[2%] bg-[#656565] text-white'>
                <div className='p-[2%] bg-[#656565] flex-col text-white'>
                    <div className='ml-12 text-white text-6xl font-black '>Traya.</div>
                    <div className='ml-12 mt-4 text-base font-medium'>POPLULAR SEARCH</div>
                    <div className='mt-4 ml-12 max-w-[50%] font-extralight text-sm'>Reasons For Hair Fall Hair Growth Oil How To Stop Hair Fall Dandruff Vs Dry Scalp Food For Hair Growth Hair Loss Treatment What Is Minoxidil Nasya Treatment How To Stop White Hair Yashtimadhu Uses Bhringraj Hair Oil How Can I Thicken My Hair Rice Water For Hair How To Strengthen Hair Shatavari For Hair Clove Benefits Ayurvedic Herbs For Hair Growth Ayurvedic Treatment For Hair Fall Herbal Hair Oil Anti-dandruff Shampoo Redensyl vs Minoxidil</div>
                </div>
                <div className='pt-[2%] mt-4 mr-[2%]'>
                    <h1>Company</h1>
                    <ul className='mt-4 font-extralight text-lg'>
                        <li className='mt-2'>Track </li>
                        <li className='mt-2'>Get </li>
                        <li className='mt-2'> Diagnosis</li>
                        <li className='mt-2'>Referral</li>
                        <li className='mt-2'>Reviews</li>
                    </ul>
                </div>
                <div className='pt-[2%] mt-4 mr-[2%]'>
                    <h1>Company</h1>
                    <ul className='mt-4 font-extralight text-lg'>
                        <li className='mt-2'>Track </li>
                        <li className='mt-2'>Get</li>
                        <li className='mt-2'> Diagnosis</li>
                        <li className='mt-2'>Referral</li>
                        <li className='mt-2'>Reviews</li>
                    </ul>
                </div>
                <div className='pt-[2%] mt-4 mr-[2%]'>
                    <h1>Company</h1>
                    <ul className='mt-4 font-extralight text-lg'>
                        <li className='mt-2'>Track </li>
                        <li className='mt-2'>Get</li>
                        <li className='mt-2'> Diagnosis</li>
                        <li className='mt-2'>Referral</li>
                        <li className='mt-2'>Reviews</li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-between'>
                <img src={footerimg} alt="" />
                <div>
                    <img src={whatsapp} className='w-12 mt-4' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer
