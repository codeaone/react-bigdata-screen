import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import BoxBorder from '../components/BoxBorder';
import ImageBasic from '../components/ImageBasic';
import TextDateTime from '../components/TextDateTime';
import WeatherBasic from '../components/WeatherBasic';
import TextBasic from '../components/TextBasic';
import ChartBasic from '../components/ChartBasic';
import ChartMap from '../components/ChartMap';
import CarouselTable from '../components/CarouselTable';
import chinaJson from '../map/china.json';
import guangdong from '../map/json/province/guangdong.json';
// const chinaJson = require('../map/chian.json');
//引入地图数据...
echarts.registerMap('china', chinaJson);
echarts.registerMap('广东', guangdong);

import './index.css';
import { chart, chart2, chart3, chart4, startColor } from './data';

const optionMap = {
  tooltip: {
    trigger: 'item',
    formatter: '{b}',
  },
  series: [
    {
      name: '中国',
      type: 'map',
      mapType: 'china',
      selectedMode: 'multiple',
      label: {
        show: true,
        position: 'insideLeft',
        color: 'white',
        fontSize: '10',
        emphasis: {
          show: true,
        },
      },
      itemStyle: {
        normal: { label: { show: true }, areaColor: 'transparent', borderColor: '#0e94eb', shadowBlur: 10, shadowColor: '#0e94ea' },
        emphasis: { label: { show: true } },
      },
      data: [{ name: '广东', selected: true }],
    },
  ],
};

//data 为模拟数据
var data = [
  {
    name: '顺丰',
    value: 192581,
    percent: '30.8721',
  },
  {
    name: '京东',
    value: 215635,
    percent: '34.076',
  },
  {
    name: 'EMS',
    value: 224585,
    percent: '35.49',
  },
];

//chart4Data模拟数据
var chart4Data = [
  {
    name: '天津市',
    value: 178546,
  },
  {
    name: '湖南省',
    value: 125687,
  },
  {
    name: '福建省',
    value: 78452,
  },
  {
    name: '北京市',
    value: 57841,
  },
  {
    name: '江苏省',
    value: 45879,
  },
  {
    name: '海南',
    value: 28584,
  },
  {
    name: '四川省',
    value: 14852,
  },
  {
    name: '浙江省',
    value: 12589,
  },
  {
    name: '重庆市',
    value: 5261,
  },
  {
    name: '香港特别行政区',
    value: 2563,
  },
  {
    name: '内蒙古',
    value: 856,
  },
];


const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
  {
    key: '3',
    name: '胡彦祖',
    age: 44,
    address: '西湖区湖底公园1号',
  },
  {
    key: '4',
    name: '胡彦祖',
    age: 45,
    address: '西湖区湖底公园1号',
  },
  {
    key: '5',
    name: '胡彦祖',
    age: 45,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    width:'120px',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    width:'120px',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
    width:'130px',
  },
];

const DataPage1: React.FC<{}> = () => {
  const option = chart();
  const option2 = chart2();
  const option3 = chart3();
  const option4 = chart4(chart4Data, 1, '');

  return (
    <div className="container-flex">
      <div className="box-left">
        <div className="left-top">
          <BoxBorder type="border6" className="current-num">
            <ImageBasic type="image1" backgroundSize="1.8rem 0.25rem">
              当前到件量
            </ImageBasic>
            <TextBasic value={12345677} className="current-value"/>
          </BoxBorder>
        </div>
        <div className="left-center">
          <ImageBasic type="image4" className="title-box">
            <h6>派件入库量占比</h6>
          </ImageBasic>
          <div className="chart-box pie-chart">
            <div id="pie">
              <ChartBasic option={option}/>
              {/* <ReactEcharts option={option} notMerge={true} lazyUpdate={true} style={{ width: '100%', height: '100%' }} /> */}
            </div>
            <div>
              <div className="pie-data">
                {data.map((item, index) => {
                  return (
                    <p>
                      <span>
                        <i className="legend" style={{ background: startColor[index] }}></i>
                      </span>
                      {item.name}
                      <span className="pie-number" style={{ color: startColor[index] }}>
                        {item.value}
                      </span>
                      {Number(item.percent).toFixed(2)}%
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="left-bottom">
          <ImageBasic type="image4" className="title-box">
            <h6>广东省寄派件数据</h6>
            <img className="line-img" src="images/line-blue.png" alt="" />
            <button id="filBtn">
              <img src="images/select_icon.png" alt="" />
              筛选
            </button>
          </ImageBasic>
          <div className="chart-box">
            <div id="gdMap" className="gd-map">
              <ReactEcharts option={option2} notMerge={true} lazyUpdate={true} style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="box-center">
        <div className="center-top">
          <h1>智慧物流服务中心</h1>
        </div>
        <div className="center-center">
          <div className="weather-box">
           
            <TextDateTime className="data1" showWeek={true}/>
            <WeatherBasic />
            
          </div>
          <img src="images/line_bg.png" alt="" />
          <div className="select-box">
            <ul id="barType">
              <li className="active" data-value="1">
                派件
              </li>
              <li data-value="2">寄件</li>
            </ul>
            <div data-type="2">
              <div className="select">
                <div className="select-div">公司</div>
                <ul className="select-ul company">
                  <li className="active" data-value="">
                    公司
                  </li>
                  <li data-value="1">顺丰</li>
                  <li data-value="2">京东</li>
                  <li data-value="2">EMS</li>
                </ul>
              </div>
              <div className="select">
                <div className="select-div">快件类型</div>
                <ul className="select-ul">
                  <li className="active" data-value="">
                    快件类型
                  </li>
                  <li data-value="0">文件</li>
                  <li data-value="1">物品</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="center-bottom">
          <div className="chart-box">
            <div id="chart4" style={{ width: '100%', height: '95%' }}>
              <ReactEcharts option={optionMap} notMerge={true} lazyUpdate={true} style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
          <div className="city-data">

          {/* <CarouselTable className="ranking-box" dataSource={dataSource} columns={columns} width="370px"/> */}
          <ul className="ranking-box">
              <li>
                <span></span>
                <p>城市</p>
                <p>派件</p>
              </li>
              <li>
                <span>1</span>
                <p>天津市</p>
                <p>178546</p>
              </li>
              <li>
                <span>2</span>
                <p>湖南省</p>
                <p>125687</p>
              </li>
              <li>
                <span>3</span>
                <p>福建省</p>
                <p>78452</p>
              </li>
              <li>
                <span>4</span>
                <p>北京市</p>
                <p>57841</p>
              </li>
              <li>
                <span>5</span>
                <p>江苏省</p>
                <p>45879</p>
              </li>
              <li>
                <span>6</span>
                <p>海南</p>
                <p>28584</p>
              </li>
              <li>
                <span>7</span>
                <p>四川省</p>
                <p>14852</p>
              </li>
              <li>
                <span>8</span>
                <p>浙江省</p>
                <p>12589</p>
              </li>
              <li>
                <span>9</span>
                <p>重庆市</p>
                <p>5261</p>
              </li>
              <li>
                <span>10</span>
                <p>香港特别行政区</p>
                <p>2563</p>
              </li>
            </ul>
          
            <div className="enlarge-box">
              <button className="enlarge-btn" id="fangda"></button>
              <ul className="modal-btn">
                <li>
                  <div></div>1
                </li>
                <li>
                  <div></div>2
                </li>
                <li>
                  <div></div>3
                </li>
                <li>
                  <div></div>4
                </li>
                <li>
                  <div></div>5
                </li>
                <li>
                  <div></div>6
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="box-right">
        <div className="right-top">
          <ImageBasic type="image4" className="title-box">
            <h6 id="barTitle">派件数据</h6>
            <img className="line-img" src="images/line-blue.png" alt="" />
            <button id="tabBtn">
              <img src="images/chart_icon.png" alt="" />
              <span>图表</span>
            </button>
          </ImageBasic>
          <p className="unit">单位：件</p>
          <div className="chart-box">
            <div id="chart3" style={{ width: '100%', height: '100%' }}>
              <ReactEcharts option={option3} notMerge={true} lazyUpdate={true} style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
        <div className="right-center">
          <ImageBasic type="image4" className="title-box">
            <p id="switchBtn">
              <span className="active" data-dataType="income">
                收入数据
              </span>
              <img className="line-img" src="images/line-blue.png" alt="" />
              <span data-dataType="expend">支出数据</span>
            </p>
            <img className="line-img" src="images/line-blue.png" alt="" />
            <button id="dateBtn">
              <img src="images/data_icon.png" alt="" />
              日期
            </button>
          </ImageBasic>
          <div className="data-box">
            <p className="data-number" id="totalProfit">
              123,456.5元
            </p>
            <div className="time-box" id="timeBox">
              <div className="time-div">
                <input className="time-input" type="text" value="" id="startTime" />
                <img src="images/selsct_time.png" alt="" />
              </div>
              <div className="time-div end">
                <input className="time-input" type="text" value="" id="endTime" />
                <img src="images/selsct_time.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="right-bottom">
          <ImageBasic type="image4" className="title-box">
            <button id="setBtn">
              <img src="images/settings_icon.png" alt="" />
              设置
            </button>
          </ImageBasic>
          <div className="data-box">
            <div className="settings-box">
              <p>
                <img src="images/teacher_icon.png" alt="" />
                今日值班：<span id="name_a"></span>
                <span id="date_a"></span>
              </p>
              <p>
                <img src="images/people_iocn.png" alt="" />
                负责人：<span id="lea_a"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataPage1;
