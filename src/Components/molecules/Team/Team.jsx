import Card from "../../atoms/Card/Card";
import Text from "../../atoms/Text/text";
import "./team.scss";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MySwiper from "../../atoms/Swiper/swiper";

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
    };
  }

  update = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.update);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.update);
  }

  render() {
    return this.state.windowWidth >= 480 ? (
      <div className="team" id="team">
        <div className="content">
          <Text className="text_h" value="НАША КОМАНДА"></Text>
          <div className="team_description">
            <Card
              name="Яна Воронежская"
              role="Учредитель"
              img="images/team1.png"
            ></Card>
            <Card
              name="Денис Дмитриев"
              role="Креативный директор"
              img="images/team2.png"
            ></Card>
            <div className="text">
              <Text
                className="team_description_text"
                value="Дизайн конференция уже шестой год подряд объединяет профессионалов в сфере  цифровых технологий и инноваций, которые делятся своими идеями, полезной информацией о новых продуктах и сервисах"
              ></Text>
              {this.state.windowWidth <= 895 ? (
                ""
              ) : (
                <Text
                  className="team_description_text"
                  value="Дизайн конференция уже шестой год подряд объединяет профессионалов в сфере  цифровых технологий и инноваций, которые делятся своими идеями, полезной информацией о новых продуктах и сервисах"
                ></Text>
              )}
            </div>
            <div className="text">
              <Text
                className="team_description_text"
                value="Дизайн конференция уже шестой год подряд объединяет профессионалов в сфере  цифровых технологий и инноваций, которые делятся своими идеями, полезной информацией о новых продуктах и сервисах"
              ></Text>
              {this.state.windowWidth <= 895 ? (
                ""
              ) : (
                <Text
                  className="team_description_text"
                  value="Дизайн конференция уже шестой год подряд объединяет профессионалов в сфере  цифровых технологий и инноваций, которые делятся своими идеями, полезной информацией о новых продуктах и сервисах"
                ></Text>
              )}
            </div>
            <Card
              name="Яна Воронежская"
              role="Учредитель"
              img="images/team1.png"
            ></Card>
            <Card
              name="Денис Дмитриев"
              role="Креативный директор"
              img="images/team2.png"
            ></Card>
          </div>
        </div>
      </div>
    ) : (
      <div className="team" id="team">
        <div className="content">
          <Text className="text_h" value="НАША КОМАНДА"></Text>
          <MySwiper></MySwiper>
       
        </div>
      </div>
    );
  }
}

export default Team;
