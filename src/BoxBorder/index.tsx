import { SFC } from 'react';
import * as React from 'react';
import classNames from 'classnames';
import './index.less';

//组件自己定义了一些常用的边宽素材
export const BorderList = {
  border1: 'http://imgcache.qq.com/open_proj/proj_qcloud_v2/mc_2014/data-visual/css/img/border1.png',
  border2: 'http://imgcache.qq.com/open_proj/proj_qcloud_v2/mc_2014/data-visual/css/img/border2.png',
  border3: 'http://imgcache.qq.com/open_proj/proj_qcloud_v2/mc_2014/data-visual/css/img/border3.png',
  border4: 'http://imgcache.qq.com/open_proj/proj_qcloud_v2/mc_2014/data-visual/css/img/border4.png',
  border5: 'http://imgcache.qq.com/open_proj/proj_qcloud_v2/mc_2014/data-visual/css/img/border5.png',
  border6: require('./images/border_bg01.png'),
};

export type BorderType = 'border1' | 'border2' | 'border3' | 'border4' | 'border5' | 'border6';

export type BoxBorderProps = {
  /**
   * 类名
   */
  className?: string;
  /**
   * 样式属性
   */
  style?: React.CSSProperties;
  /**
   * 边宽样式
   */
  type: BorderType;
};

//边宽组件
const BoxBorder: SFC<BoxBorderProps> = ({ children, className, style, type }) => {
  //组装样式
  const styleBorder = {
    background: `url(${BorderList[type]}) top left no-repeat`,
    backgroundSize: '100% 100%',
    ...style,
  };
  return (
    <div className={classNames(className, 'box_border')} style={styleBorder}>
      {children}
    </div>
  );
};
export default BoxBorder;
