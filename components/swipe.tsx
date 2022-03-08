import React, { Children } from 'react';
import { useMediaQuery } from '@chakra-ui/react';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import Swiper React components
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';

interface Props extends SwiperProps {}

export default function Swipe({
  centeredSlides = true,
  children,
  effect = 'coverflow',
  grabCursor = true,
  navigation,
  pagination = true,
  slidesPerView = 2,
}: Props) {
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  return (
    <Swiper
      centeredSlides={centeredSlides}
      effect={effect}
      grabCursor={grabCursor}
      modules={[EffectCoverflow, Pagination]}
      navigation={navigation}
      pagination={pagination}
      slidesPerView={isMobile ? 'auto' : slidesPerView}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
    >
      {Children.map(children, (child: any) => {
        return <SwiperSlide>{child}</SwiperSlide>;
      })}
    </Swiper>
  );
}
