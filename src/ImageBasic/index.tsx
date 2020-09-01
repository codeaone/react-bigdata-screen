import { SFC } from 'react';
import * as React from 'react';
import classNames from 'classnames';
import './index.less';

//组件自己定义了一些常用的边宽素材
export const ImageList = {
  image1: require('./images/image_bg01.png'),
  image2: require('./images/image_bg02.png'),
  image3: require('./images/image_bg03.png'),
  image4: require('./images/image_bg04.png'),
  image5: require('./images/image_bg05.png'),
  image6: require('./images/box_bg01.png'),
};

export type ImageType = 'image1' | 'image2' | 'image3' | 'image4' | 'image5' | 'image6';

export type ImageProps = {
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
  type: ImageType;
  /**
   * 图片大小，默认为：100% 100%
   */
  backgroundSize?: string;
};

//图片组件
const ImageBasic: SFC<ImageProps> = ({ children, className, style, type, backgroundSize }) => {
  if (!backgroundSize) {
    backgroundSize = '100% 100%';
  }
  //组装样式
  const styleImage = {
    background: `url(${ImageList[type]}) center center no-repeat`,
    backgroundSize,
    ...style,
  };
  return (
    <div className={classNames(className, 'box_image')} style={styleImage}>
      {children}
    </div>
  );
};
export default ImageBasic;
