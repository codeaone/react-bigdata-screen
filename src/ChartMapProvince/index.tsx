import { SFC, useState, useEffect } from 'react';
import * as React from 'react';
import ReactEcharts from 'echarts-for-react';
import { EChartOption } from 'echarts';
import './index.less';

export type ChartProps = {
  /**
   * 类名
   */
  className?: string;

  option: EChartOption;
};

//通用文本组件
const ChartMapProvince: SFC<ChartProps> = ({ className, option }) => {
  const [currentInfo, setCurrentInfo] = useState(0);
  useEffect(() => {}, [currentInfo]);

  return <ReactEcharts option={option} notMerge={true} lazyUpdate={true} style={{ width: '100%', height: '100%' }} />;
};
export default ChartMapProvince;
