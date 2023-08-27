import React from 'react'
import Google from "../assets/img/google-icon.png"
import wire from "../assets/img/wire.jpg"
import chronicle from "../assets/img/chronicle.png"
import tribune from "../assets/img/tribune.png"
import dailyhunt from "../assets/img/dailyhunt.png"
import cosmo from "../assets/img/cosmo.jpg"
import ReactOwlCarousel from 'react-owl-carousel'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const CarouselReviews = () => {

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
                items: 2,
            },
            769: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        }

    }

    const imgUrl = 'https://cdn.shopify.com/s/files/1/0100/1622/7394/files/4_2dbad566-310a-4a18-98c9-a23c96a915ef_150x.png'
    const reviewsUrl = 'https://cdn.shopify.com/s/files/1/0100/1622/7394/files/5_cea6b3e4-9b27-4c0d-9171-6615e4d60ac8_140x.png';
    const imgTick = 'https://cdn.shopify.com/s/files/1/0100/1622/7394/files/6_4e2d07e3-d1b3-41cf-9cf2-b26b658e5c2e_25x.png';
    return (
        <>
            <br />
            <div className='flex ml-[10%] mt-[2%] '>
                <img
                    src={Google}
                    className='w-[10%] md:w-[4%] mr-4'
                    alt="" />

                <div className='flex-col'>
                    <div className='flex'>

                        <div className='font-bold text-2xl'>4.5</div>
                        <img
                            src={imgUrl}
                            alt="" />
                    </div>
                    <div className='flex'>
                        <img src={imgTick} alt="" />
                        <img src={reviewsUrl} alt="" />
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-12'>
                <marquee behavior="scroll" direction="left" width='80%' scrollamount="20" loop='12' >
                    <span>
                        <img src={dailyhunt} className='inline-block mx-4' alt="" />
                        <img src={wire} className='inline-block mx-4' alt="" />
                        <img src={tribune} className='inline-block mx-4' alt="" />
                        <img src={cosmo} className='inline-block mx-4' alt="" />
                        <img src={chronicle} className='inline-block mx-4' alt="" />
                    </span>
                </marquee>
            </div>
            <br />
            <hr className='bg-cyan-400 w-[80%] ml-40' />
            <br />
            <ReactOwlCarousel items={3}
                className="owl-theme flex justify-center ml-20"
                // className="flex justify-center w-[60%] react-carousel"
                {...options}>
                <iframe width="350" height="300"
                    src="https://video.gumlet.io/621770ca1c8b821b05d7035a/634d53a129a801995a45ed80/main.mp4">
                </iframe>
                <iframe width="350" height="300"
                    src="https://video.gumlet.io/621770ca1c8b821b05d7035a/6380b28e3f8d6fa392524e63/main.mp4">
                </iframe>
                <iframe width="350" height="300"
                    src="https://video.gumlet.io/621770ca1c8b821b05d7035a/6380b16c1a2b1dfc5442ce64/main.mp4">
                </iframe>
                <iframe width="350" height="300"
                    src="https://video.gumlet.io/621770ca1c8b821b05d7035a/638092463f8d6fa39251cc8a/main.mp4">
                </iframe>
                <iframe width="350" height="300"
                    src="https://video.gumlet.io/621770ca1c8b821b05d7035a/645a2041dd6bc397bdf387e5/main.mp4">
                </iframe>
                <iframe width="350" height="300"
                    src="https://video.gumlet.io/621770ca1c8b821b05d7035a/6380b0423f8d6fa392524693/main.mp4">
                </iframe>
                <iframe width="350" height="300"
                    src="https://video.gumlet.io/621770ca1c8b821b05d7035a/634d53a129a801995a45ed80/main.mp4">
                </iframe>
                <iframe width="350" height="300"
                    src="https://video.gumlet.io/621770ca1c8b821b05d7035a/6380b28e3f8d6fa392524e63/main.mp4">
                </iframe>
                <iframe width="350" height="300"
                    src="https://video.gumlet.io/621770ca1c8b821b05d7035a/6380b16c1a2b1dfc5442ce64/main.mp4">
                </iframe>
                <iframe width="350" height="300"
                    src="https://video.gumlet.io/621770ca1c8b821b05d7035a/638092463f8d6fa39251cc8a/main.mp4">
                </iframe>
                <iframe width="350" height="300"
                    src="https://video.gumlet.io/621770ca1c8b821b05d7035a/645a2041dd6bc397bdf387e5/main.mp4">
                </iframe>
            </ReactOwlCarousel>
            <br />
            <br />
        </>
    )
}

export default CarouselReviews
