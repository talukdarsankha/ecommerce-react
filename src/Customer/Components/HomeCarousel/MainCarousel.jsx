


import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';



const items = MainCarouselData.map((e)=>
  <img src={e.image} role='presentation' className='w-full cursor-pointer h-[25rem]' />
)

 const MainCarousel = () => (
    <AliceCarousel
        items={items}
        autoPlay
        infinite
        autoPlayInterval={3000}
        disableButtonsControls
    />
);

export default MainCarousel;