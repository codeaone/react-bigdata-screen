import { SFC, useState, useEffect } from 'react';
import * as React from 'react';
import classNames from 'classnames';
import superagent from 'superagent';
import cheerio from 'cheerio';

import './index.less';

const weatharURL = 'http://tianqi.sogou.com/pc/weather';

export type WeatherType = 'Weather1' | 'Weather2' | 'Weather3' | 'Weather4' | 'Weather5' | 'Weather6';

type WeatherInfo = {
  cityName?: string;
  num?: string;
  icon?: string;
  text?: string;
};

const defaultInfo: WeatherInfo = {
  cityName: '深圳市南山区',
  num: '16-22',
  icon: require('./images/weather_img01.png'),
  text: '多云',
};

export type WeatherProps = {
  /**
   * 类名
   */
  className?: string;
  /**
   * 样式属性
   */
  style?: React.CSSProperties;
  /**
   * 图片样式
   */
  type?: WeatherType;
};

//图片组件
const WeatherBasic: SFC<WeatherProps> = ({ children, className, style, type }) => {
  const [currentInfo, setCurrentInfo] = useState(defaultInfo);
  //定时1*60=小时间执行一次更新
  useEffect(() => {
    setTimeout(() => {
      getWeatherHtml();
    }, 1000 * 60);
  }, []);

  useEffect(() => {}, []);

  const getWeatherInfo = (html: string) => {
    // jquery语法
    const $ = cheerio.load(html);
    //em.city-name
    const cityName = $('em.city-name').eq(0).text();
    const num = $('span.num').eq(0).text();
    const icon = $('.r1-img>img').eq(0).attr('src');
    const text = $('.r1-img>p').eq(0).text();
    let info: WeatherInfo = { cityName, num, icon, text };
    //span.num
    //r1-img img
    //r1-img p
    console.log(info);

    return info;
  };

  async function getWeatherHtml() {
    const result = await superagent.get(weatharURL);
    const info = getWeatherInfo(result.text);
    setCurrentInfo(info);
  }
  //组装样式
  const styleWeather = {
    ...style,
  };
  return (
    <div className={classNames(className, 'box-weather')} style={styleWeather}>
      <img id="weatherImg" src={currentInfo.icon} alt="" />
      <div id="weather">
        <p className="weather-active">{currentInfo.text}</p>
        <p>{currentInfo.num}℃</p>
        <p>{currentInfo.cityName}</p>
      </div>
    </div>
  );
};
export default WeatherBasic;
