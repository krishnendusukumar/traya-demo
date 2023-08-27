import React from 'react'
import ReactOwlCarousel from 'react-owl-carousel'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import before1 from "../assets/img/before1.jpg"
import before2 from "../assets/img/before2.jpg"
const CustomerSection = () => {
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
                items: 1,
            },
        }
    }
    return (
        <div>
            <br />
            <br />
            <h1 className='capitalize font-semibold text-4xl flex justify-center'>
                Our customers
            </h1>
            <br /><br />
            <div>
                <ReactOwlCarousel items={3}
                    className="owl-theme flex justify-center"
                    // className="flex justify-center w-[60%] react-carousel"
                    {...options}>
                    <div className='w-[80%] ml-[10%] lg:w-[60%] lg:ml-[20%] border-2-black shadow-2xl p-6 rounded-s-3xl'>
                        <div className='flex justify-evenly'>
                            <div className='flex-col w-[20%] rounded-3xl'>
                                <img className='' src={before1} alt="" />
                                <div className='flex justify-center'>Month 1</div>
                            </div>
                            <div className='flex-col w-[20%] rounded-3xl'>
                                <img className='' src={before2} alt="" />
                                <div className='flex justify-center'>Month 6</div>
                            </div>
                        </div>
                        <br />
                        <h1 className='flex justify-center font-semibold text-3xl'>
                            <div>
                                Saumya Upadhyay
                            </div>
                        </h1>
                        <div className='flex justify-center capitalize'>
                            reviewed on 15 Aug 2023
                        </div>
                        <br />
                        <div className='flex justify-center capitalize text-lg w-[80%] ml-[10%]'>
                            I was loosing hair due to stress and load but Traya analysed everthing and it works.
                        </div>
                        <br />
                        <div className='flex justify-between ml-12 mr-12'>
                            <div>
                                <h1 className='font-semibold'>Used for</h1>
                                <h1>8 months</h1>
                            </div>
                            <h1 className='font-semibold mt-3'>On complete traya recommended plan</h1>
                        </div>
                    </div>
                </ReactOwlCarousel>
            </div >
            <div className="flex justify-center">
                <button className='bg-[#414042] rounded-2xl hover:bg-[#B7D340] text-white h-10 font-medium pl-4 pr-4 text-xl uppercase'>Take the hair test<sup className='text-xs'>TM</sup></button>
            </div>
        </div >
    )
}

export default CustomerSection
