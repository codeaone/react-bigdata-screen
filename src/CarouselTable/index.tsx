import { SFC, useState, useEffect } from 'react';
import * as React from 'react';
import Slider from 'react-slick';
import { Carousel } from 'antd';
import './index.less';
import classNames from 'classnames';

export type ColumnsType = {
  title: string;
  key: string;
  dataIndex: string;
  width: string;
  height: string;
};
export type RecordType = {};

export type TableProps = {
  /**
   * 类名
   */
  className?: string;
  /**
   * 样式属性
   */
  valueStyle?: React.CSSProperties;
  /**
   * 步长
   */
  step?: number;
  /**
   * 频率
   */
  rate?: number;
  /**
   * 行高
   */
  columnHeight: string;
  /**
   * 表头高度
   */
  titleHeight: string;
  /**
   * 表格宽度
   */
  width: string;

  dataSource: RecordType[];
  columns: ColumnsType[];
};

//通用文本组件
const CarouselTable: SFC<TableProps> = ({ className, valueStyle, step = 49, rate = 50, width, columns, dataSource, titleHeight = '36px', columnHeight = '30px' }) => {
  let initValue = 0;
  const [currentInfo, setCurrentInfo] = useState(initValue);
  useEffect(() => {
    setTimeout(() => {
      // setCurrentInfo(newInfo);
    }, rate);
  }, [currentInfo]);

  const settings = {
    autoplay: true,
    dots: false,
    accessibility:false,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    vertical: true,
    verticalSwiping: false,
    swipeToSlide: false,
  };

  /**
   *  <Slider {...settings}>  </Slider>
   */

  return (
    <div className={classNames(className, 'table')} style={{ width: width }}>
      <div className="table-title" style={{ height: titleHeight }}>
        {columns.map((item) => {
          return (
            <div className="table-th" style={{ width: item.width, height: titleHeight }} key={item.key}>
              {item.title}
            </div>
          );
        })}
      </div>
      <Slider {...settings}>
        {/* <Carousel dotPosition="left" slidesToShow={3} autoplay={true} dots={false}> */}
        {dataSource.map((data) => {
          return (
            <div className="table-tr" style={{ height: columnHeight }}>
              {columns.map((item) => {
                return (
                  <div className="table-td" style={{ width: item.width, height: columnHeight, lineHeight:columnHeight}} key={data[item.key]}>
                    {data[item.dataIndex]}
                  </div>
                );
              })}
            </div>
          );
        })}
      </Slider>
      {/* </Carousel> */}
    </div>
  );
};
export default CarouselTable;
