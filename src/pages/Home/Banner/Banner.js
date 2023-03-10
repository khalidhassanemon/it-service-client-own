import React from 'react';
import CarouselItems from './CarouselItems';
import img1 from '../../../assets/bannerImages/web.png';
import img2 from '../../../assets/bannerImages/network.webp';
import img3 from '../../../assets/bannerImages/visual.png';
import img4 from '../../../assets/bannerImages/web-design.png';

const bannerItem = [
    {
        image: img1,
        title: "Branding with particular logo for Software development",
        info: "A logo is what identifies your  technology site's design, or both.",
        id: 1,
        prev: 4,
        next: 2
    },
    {
        image: img2,
        title: "Marketing design of Network Security",
        info: "Network Security design provides some principles to the ultimate goals of a Network Security.",
        id: 2,
        prev: 1,
        next: 3
    },
    {
        image: img3,
        title: "Visual design of a site",
        info: "Visual design focuses on the aesthetics of a site and its related materials with suitable combination.",
        id: 3,
        prev: 2,
        next: 4
    },
    {
        image: img4,
        title: "Standards design for Web pages",
        info: "Web Design and Applications involve the standards for building and Rendering Web pages.",
        id: 4,
        prev: 3,
        next: 1
    },
]

const Banner = () => {
    return (
        <div className="carousel max-w-screen-lg mx-auto">
            {
                bannerItem.map(slide => <CarouselItems key={slide.id}
                    slide={slide}></CarouselItems>)
            }
        </div>
    );
};

export default Banner;