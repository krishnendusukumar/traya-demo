import React from 'react'
import ReactOwlCarousel from 'react-owl-carousel'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import bgicons from "../assets/img/bgicons.jpeg"
import box1 from "../assets/img/box1.jpg"
import box2 from "../assets/img/box2.jpg"
import box3 from "../assets/img/box3.jpg"
import medicinePic from "../assets/img/medicinePic.jpeg"
import Google from "../assets/img/google-icon.png"

const ScientificSection = () => {
    const reviewsUrl = 'https://cdn.shopify.com/s/files/1/0100/1622/7394/files/4_2dbad566-310a-4a18-98c9-a23c96a915ef_150x.png';
    const options = {
        loop: true,
        margin: 0,
        nav: true,
        animateIn: "bounceInRight",
        animateOut: "bounceOutRight",
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            769: {
                items: 1,
            },
            1000: {
                items: 2,
            },
        }
    }
    return (
        <div>
            <br /><br />
            <h1 className='font-semibold text-5xl flex justify-center'>
                Safe And Scientific
            </h1>
            <br />
            <img src={bgicons} className='ml-[20%] w-[60%]' alt="" />
            <div>
                <h1 className='font-bold text-4xl flex justify-center'>
                    The Essentials
                </h1>
            </div>
            <div className='w-[80%] flex justify-center ml-[15%]'>
                <ReactOwlCarousel items={3}
                    className="owl-theme flex justify-center"
                    // className="flex justify-center w-[60%] react-carousel"
                    {...options}>
                    <div className='flex-col border-2 border-black-600 rounded-xl mr-5'>
                        <img src={box1} className="hover:scale-[.9] transition-[transform .5s ease]" alt="" />
                        <h1 className='capitalize font-medium text-base flex justify-center m-2'>
                            Hair ras ayurvedic hair herbs | 100% natural hair supplement with bhiringraj
                        </h1>
                        <hr className=' hidden hover:block' />
                        <div className='text-base m-2'>
                            Better hair growth & delayed greying with herbs like shatavari and bhringraj
                        </div>
                        <h1 className='flex justify-center text-xl font-semibold'>
                            ₹ 520 /-
                        </h1>
                        <button className='hover:bg-[#B7D341] w-[100%] bg-black text-white h-12 rounded-lg'>Add to cart</button>
                    </div>
                    <div className='flex-col border-2 border-black-600 rounded-xl mr-5'>
                        <img src={box2} className='hover:scale-[.9] transition-[transform .5s ease]' alt="" />
                        <h1 className='capitalize font-medium text-base flex justify-center m-2'>
                            Hair ras ayurvedic hair herbs | 100% natural hair supplement with bhiringraj
                        </h1>
                        <hr className=' hidden hover:block' />
                        <div className='text-base m-2'>
                            Better hair growth & delayed greying with herbs like shatavari and bhringraj
                        </div>
                        <h1 className='flex justify-center text-xl font-semibold'>
                            ₹ 520 /-
                        </h1>
                        <button className='hover:bg-[#B7D341] w-[100%] bg-black text-white h-12 rounded-lg'>Add to cart</button>
                    </div>
                    <div className='flex-col border-2 border-black-600 rounded-xl mr-5'>
                        <img src={box3} className='hover:scale-[.9] transition-[transform .5s ease]' alt="" />
                        <h1 className='capitalize font-medium text-base flex justify-center m-2'>
                            Hair ras ayurvedic hair herbs | 100% natural hair supplement with bhiringraj
                        </h1>
                        <hr className=' hidden hover:block' />
                        <div className='text-base m-2'>
                            Better hair growth & delayed greying with herbs like shatavari and bhringraj
                        </div>
                        <h1 className='flex justify-center text-xl font-semibold'>
                            ₹ 520 /-
                        </h1>
                        <button className='hover:bg-[#B7D341] w-[100%] bg-black text-white h-12 rounded-lg'>Add to cart</button>
                    </div>
                </ReactOwlCarousel>
            </div>
            <br />
            <br />
            <div className='flex justify-center'>
                <button className='hover:bg-[#B7D341] w-[15%] bg-black text-white h-12 rounded-lg'>View All</button>
            </div>
            <br /><br />
            <img src={medicinePic} className='w-[80%] ml-[10%]' alt="" />
            <br />
            <h1 className='flex justify-center font-semibold text-4xl'>Google Reviews</h1>
            <br />
            <div>
                <ReactOwlCarousel
                    className='owl-theme flex justify-center'
                    {...options}>
                    <div className='flex-col w-[40%] ml-[30%]'>
                        <div className='w-[50%] '>
                            <img src={reviewsUrl} className='' alt="" />
                        </div>
                        <div>
                            Before trying  I have used a lot of other medication too, traya was the only one ...
                        </div>
                        <div className='flex justify-between capitalize font-medium'>
                            <div className='font-medium'>
                                Sanket
                            </div>
                            <div className='flex'>
                                <div className='w-[10%]'>
                                    <img src={Google} className='' alt="" />
                                </div>
                                <h1 className='font-light text-base'>Posted on Google</h1>
                            </div>
                        </div>
                    </div>
                </ReactOwlCarousel>
            </div>
        </div>
    )
}

export default ScientificSection
