import { SFC, useState, useEffect } from 'react';
import * as React from 'react';
import { Statistic } from 'antd';
import './index.less';

export type TextProps = {
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

  value: number;
};

const baseValue = 2000;

//通用文本组件
const TextBasic: SFC<TextProps> = ({ className, valueStyle, step = 49, rate = 50, value }) => {
  let initValue = 0;
  if (value > baseValue) {
    initValue = value - baseValue;
  }
  const [currentInfo, setCurrentInfo] = useState(initValue);
  useEffect(() => {
    setTimeout(() => {
      if (currentInfo >= value) {
        //停止
        return;
      }
      let newInfo = currentInfo + step;
      if (newInfo >= value) {
        newInfo = value;
      }
      setCurrentInfo(newInfo);
    }, rate);
  }, [currentInfo]);
  
  return <Statistic value={currentInfo} className={className} valueStyle={valueStyle} />;
};
export default TextBasic;
