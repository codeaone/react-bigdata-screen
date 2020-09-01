import { SFC, useState, useEffect } from 'react';
import * as React from 'react';
import classNames from 'classnames';
import moment from 'moment';
import './index.less';

// 单行、双行 显示
export type StyleType = 'singleLine' | 'doubleLine';

// 年、月、周（显示星期几）
export type FormatType = 'YYYY年MM月DD日' | 'YYYY/MM/DD';

export type TextDateProps = {
  /**
   * 类名
   */
  className?: string;
  /**
   * 样式属性
   */
  style?: React.CSSProperties;
  /**
   * 时间样式
   */
  styleType?: StyleType;
  /**
   * 时间格式
   */
  formatType?: FormatType;
  /**
   * 时间格式
   */
  hourSystem?: '12' | '24';

  /**
   * 是否显示星期
   */
  showWeek?: boolean;
};

//时间显示组件
const TextDateTime: SFC<TextDateProps> = ({ children, className, style, styleType = 'doubleLine', formatType = 'YYYY/MM/DD', hourSystem = '24', showWeek = false }) => {
  let hourText = 'HH:mm:ss';
  if ('12' === hourSystem) {
    hourText = 'hh:mm:ss';
  }

  const [currentDate, setCurrentDate] = useState(moment().format(formatType));
  const [currentTime, setCurrentTime] = useState(moment().format(hourText));
  //定时1分钟执行一次更新
  useEffect(() => {
    setTimeout(() => {
      setCurrentDate(moment().format(formatType));
      setCurrentTime(moment().format(hourText));
    }, 1000);
  }, [currentTime]);

  const getWeek = () => {
    if (showWeek) {
      let week = moment().day();
      switch (week) {
        case 1:
          return '周一';
        case 2:
          return '周二';
        case 3:
          return '周三';
        case 4:
          return '周四';
        case 5:
          return '周五';
        case 6:
          return '周六';
        case 0:
          return '周日';
      }
    }
    return '';
  };

  const renderSingle = () => {
    return (
      <>
        <span>{currentDate + ' ' + currentTime}</span>
        <span>{getWeek()}</span>
      </>
    );
  };
  const renderDouble = () => {
    return (
      <>
        <p className="text-date-time" id="time">
          {currentTime}
        </p>
        <p id="date">
          {currentDate}
          <span>{getWeek()}</span>
        </p>
      </>
    );
  };

  //组装样式
  const styleTextDate = {
    ...style,
  };
  return (
    <div className={classNames(className, 'text-date')} style={styleTextDate}>
      {styleType === 'singleLine' ? renderSingle() : renderDouble()}
    </div>
  );
};
export default TextDateTime;
