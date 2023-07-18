import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiper.scss'
import Card from '../Card/Card';
import Text from '../Text/text';

class MySwiper extends React.Component{
    render(){
        return(
            <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={{loop:true}}
          
           
            
          >
            <SwiperSlide>
            <Card
              name="Яна Воронежская"
              role="Учредитель"
              img="images/team1.png"
            ></Card>
            </SwiperSlide>
            <SwiperSlide>
            <Card
              name="Денис Дмитриев"
              role="Креативный директор"
              img="images/team2.png"
            ></Card>
            </SwiperSlide>
            <SwiperSlide>
            <div className='card'>
                <Text className="team_description_text"
                    value="Дизайн конференция уже шестой год подряд объединяет профессионалов в сфере  цифровых технологий и инноваций, которые делятся своими идеями, полезной информацией о новых продуктах и сервисах"></Text>
            </div>
          
            </SwiperSlide>
            <SwiperSlide>
            <Card
              name="Яна Воронежская"
              role="Учредитель"
              img="images/team1.png"
            ></Card>
            </SwiperSlide>
            <SwiperSlide>
            <Card
              name="Денис Дмитриев"
              role="Креативный директор"
              img="images/team2.png"
            ></Card>
            </SwiperSlide>
            <SwiperSlide>
           <Text className="team_description_text"
                value="Дизайн конференция уже шестой год подряд объединяет профессионалов в сфере  цифровых технологий и инноваций, которые делятся своими идеями, полезной информацией о новых продуктах и сервисах"></Text>
            </SwiperSlide>
          </Swiper>
        )
    }
}

export default MySwiper