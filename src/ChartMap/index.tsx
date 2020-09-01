import { SFC, useState, useEffect } from 'react';
import * as React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts, { EChartOption } from 'echarts';
import classNames from 'classnames';
import './index.less';
import chinaJson from '../map/china.json';
//引入地图数据...
echarts.registerMap('china', chinaJson);

export type ChartProps = {
  /**
   * 类名
   */
  className?: string;
  /**
   * 样式属性
   */
  style?: React.CSSProperties;

  option: EChartOption;
  /**
   * 是否显示背景图
   */
  shwoBackground?: boolean;
};

//通用文本组件
const ChartMap: SFC<ChartProps> = ({
  className,
  option,
  style,
  shwoBackground = false,
}) => {
  const [currentInfo, setCurrentInfo] = useState(0);
  useEffect(() => {}, [currentInfo]);

  //组装样式
  const styleMap = { width: '100%', height: '100%', ...style };

  return (
    <div className={classNames(className, 'box-map')} style={styleMap}>
      {shwoBackground ? (
        <>
          <div className="map1">
            <img src={require('./images/lbx.png')} />
          </div>
          <div className="map2">
            <img src={require('./images/jt.png')} />
          </div>
          <div className="map3">
            <img src={require('./images/map.png')} />
          </div>
        </>
      ) : null}
      <div className="map4" id="map_1">
        <ReactEcharts
          option={option}
          notMerge={true}
          lazyUpdate={true}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
};
export default ChartMap;
