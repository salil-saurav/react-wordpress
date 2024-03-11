import "./Banner.css";
// import baseUrl from "../global";
import Header from "./Header/Header";
// import Swiper JS
import bannerImage from "../assets/bannerimgone.webp";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {
    return (
        <section className="banner-section">
            <div className="container">
                <Header className="Header" />
            </div>
            <div className="banner flex flex-col w-full h-full items-center justify-center text-white gap-6 text-center">
                <h1 className="text-center font-black text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl " >
                    <span className="font-light">Quality Driven Focus</span> <br />
                    Property Management Fee 6.99%
                </h1>
                <p>
                    Our goal is to provide the best service possible by not being understaffed and overstretched. <br /> This gives us the ability to focus on what's important: Your investment!
                </p>
            </div>

            {/* Swiper */}

            <Swiper
                direction={'vertical'}
                autoplay={{ delay: 3500 }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="Banner-Slider"
            >
                <SwiperSlide><img src={bannerImage} alt="Slider-img" /></SwiperSlide>
                <SwiperSlide><img src={bannerImage} alt="Slider-img" /></SwiperSlide>
                <SwiperSlide><img src={bannerImage} alt="Slider-img" /></SwiperSlide>
                <SwiperSlide><img src={bannerImage} alt="Slider-img" /></SwiperSlide>
            </Swiper>
        </section>
    )
}


export default Banner;