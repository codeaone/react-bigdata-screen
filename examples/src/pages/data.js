export var startColor = ['#0e94eb', '#c440ef', '#efb013', '#2fda07', '#d8ef13', '#2e4af8', '#0eebc4', '#f129b1', '#17defc', '#f86363'];
export function chart(chartType) {
  var borderStartColor = ['#0077c5', '#a819d7', '#c99002', '#24bc00', '#b6cb04', '#112ee2', '#00bd9c', '#ce078f', '#00b2cd', '#ec3c3c'];

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
  function deepCopy(obj) {
    if (typeof obj !== 'object') {
      return obj;
    }
    var newobj = {};
    for (var attr in obj) {
      newobj[attr] = obj[attr];
    }
    return newobj;
  }
  var xData = [],
    yData = [];
  data.map((a, b) => {
    xData.push(a.name);
    yData.push(a.value);
  });

  var RealData = [];
  var borderData = [];
  data.map((item, index) => {
    var newobj = deepCopy(item);
    var newobj1 = deepCopy(item);
    RealData.push(newobj);
    borderData.push(newobj1);
  });
  RealData.map((item, index) => {
    item.itemStyle = {
      normal: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: startColor[index], // 0% 处的颜色
            },
            {
              offset: 1,
              color: startColor[index], // 100% 处的颜色
            },
          ],
          globalCoord: false, // 缺省为 false
        },
      },
    };
  });
  borderData.map((item, index) => {
    item.itemStyle = {
      normal: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: borderStartColor[index], // 0% 处的颜色
            },
            {
              offset: 1,
              color: borderStartColor[index], // 100% 处的颜色
            },
          ],
          globalCoord: false, // 缺省为 false
        },
      },
    };
  });
  var option = {
    tooltip: {
      trigger: 'item',
      //            position: ['30%', '50%'],
      confine: true,
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    series: [
      // 主要展示层的
      {
        radius: ['50%', '85%'],
        center: ['50%', '50%'],
        type: 'pie',
        label: {
          normal: {
            show: false,
          },
          emphasis: {
            show: false,
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
          emphasis: {
            show: false,
          },
        },
        name: '派件入库量占比内容',
        data: RealData,
      },
      // 边框的设置
      {
        radius: ['45%', '50%'],
        center: ['50%', '50%'],
        type: 'pie',
        label: {
          normal: {
            show: false,
          },
          emphasis: {
            show: false,
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
          emphasis: {
            show: false,
          },
        },
        animation: false,
        tooltip: {
          show: false,
        },
        data: borderData,
      },
    ],
  };

  return option;
}

export function chart2(chartType) {
  var data = [
    {
      name: '广州市',
      value: 120057.34,
    },
    {
      name: '韶关市',
      value: 15477.48,
    },
    {
      name: '深圳市',
      value: 131686.1,
    },
    {
      name: '珠海市',
      value: 6992.6,
    },
    {
      name: '汕头市',
      value: 44045.49,
    },
    {
      name: '佛山市',
      value: 40689.64,
    },
    {
      name: '江门市',
      value: 37659.78,
    },
    {
      name: '湛江市',
      value: 45180.97,
    },
    {
      name: '茂名市',
      value: 5204.26,
    },
    {
      name: '肇庆市',
      value: 21900.9,
    },
    {
      name: '惠州市',
      value: 4918.26,
    },
    {
      name: '梅州市',
      value: 5881.84,
    },
    {
      name: '汕尾市',
      value: 4178.01,
    },
    {
      name: '河源市',
      value: 2227.92,
    },
    {
      name: '阳江市',
      value: 2180.98,
    },
    {
      name: '清远市',
      value: 9172.94,
    },
    {
      name: '东莞市',
      value: 3368,
    },
    {
      name: '中山市',
      value: 306.98,
    },
    {
      name: '潮州市',
      value: 810.66,
    },
    {
      name: '揭阳市',
      value: 542.2,
    },
    {
      name: '云浮市',
      value: 256.38,
    },
  ];

  var yMax = 0;
  for (var j = 0; j < data.length; j++) {
    if (yMax < data[j].value) {
      yMax = data[j].value;
    }
  }
  var option = {
    animation: true,
    tooltip: {
      show: true,
    },
    visualMap: {
      min: 0,
      max: yMax,
      text: ['高', '低'],
      orient: 'horizontal',
      itemWidth: 15,
      itemHeight: 200,
      right: 0,
      bottom: 30,
      inRange: {
        color: ['#75ddff', '#0e94eb'],
      },
      textStyle: {
        color: 'white',
      },
    },
    series: [
      {
        name: '数据名称',
        type: 'map',
        mapType: '广东',
        selectedMode: 'multiple',
        tooltip: {
          trigger: 'item',
          formatter: '{b}<br/>{c} (件)',
        },
        itemStyle: {
          normal: {
            borderWidth: 1,
            borderColor: '#0e94eb',
            label: {
              show: false,
            },
          },
          emphasis: {
            // 也是选中样式
            borderWidth: 1,
            borderColor: '#fff',
            backgroundColor: 'red',
            label: {
              show: true,
              textStyle: {
                color: '#fff',
              },
            },
          },
        },
        data: data,
      },
    ],
  };

  console.log(option);

  return option;

  // myChart.setOption(option);
  // myCharts.setOption(option);
}

export function chart3(type, chartType) {
   const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            show:false,
            data: ['入库件', '滞留件', '丢失件', '正常件', '派送件']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                show: true,
                color: '#0e94eb'
            }
        },
        series: [
            {
                name: '入库件',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: [320, 302, 301, 334, 390, 330, 320]
            },
            {
                name: '滞留件',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '丢失件',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '正常件',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: [150, 212, 201, 154, 190, 330, 410]
            },
            {
                name: '派送件',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: [820, 832, 901, 934, 1290, 1330, 1320]
            }
        ]
    };
    return option;
}
export function chart33(type, chartType) {

  //    设置背景阴影的参数，获取数据的最大值

  var data; //横坐标数据，不动
  var data_; //模拟数据
  data_ = [
    {
      name: '入库件',
      value: 584,
    },
    {
      name: '滞留件',
      value: 152,
    },
    {
      name: '丢失件',
      value: 100,
    },
    {
      name: '正常件',
      value: 689,
    },
    {
      name: '派送件',
      value: 200,
    },
    {
      name: '自提件',
      value: 121,
    },
    {
      name: '退签件',
      value: 92,
    },
  ];
  var series_data; //绘制图表的数据
  //绘制图表
  var yMax = 0;
  for (var j = 0; j < data_.length; j++) {
    if (yMax < data_[j].value) {
      yMax = data_[j].value;
    }
  }
  var dataShadow = [];
  for (var i = 0; i < 10; i++) {
    dataShadow.push(yMax * 2);
  }

  data = ['入库件', '在库件', '出库件', '退签件', '丢失件'];

  series_data = [
    {
      // For shadow
      type: 'bar',
      barWidth: 20,
      xAxisIndex: 2,
      tooltip: {
        show: false,
      },
      itemStyle: {
        normal: {
          color: 'rgba(14, 148, 235, 0.102)',
        },
      },
      data: dataShadow,
      animation: false,
    },
    {
      name: '入库件',
      type: 'bar',
      barGap: '-100%',
      barWidth: '40%',
      xAxisIndex: 1,
      itemStyle: {
        normal: {
          color: '#0e94eb',
        },
        emphasis: {
          opacity: 1,
        },
      },
      data: [data_[0], 0, 0, 0, 0],
    },
    {
      name: '滞留件',
      type: 'bar',
      stack: '在库件',
      xAxisIndex: 1,
      itemStyle: {
        normal: {
          color: 'rgba(239,176,19,.9)',
        },
        emphasis: {
          opacity: 1,
        },
      },
      data: [0, data_[1], 0, 0, 0],
    },
    {
      name: '丢失件',
      type: 'bar',
      xAxisIndex: 1,
      itemStyle: {
        normal: {
          color: 'rgba(239,176,19,0.4)',
        },
        emphasis: {
          opacity: 1,
        },
      },
      data: [0, 0, 0, 0, data_[2]],
    },
    {
      name: '正常件',
      type: 'bar',
      stack: '在库件',
      xAxisIndex: 1,
      itemStyle: {
        normal: {
          color: 'rgba(239,176,19,0.3)',
        },
        emphasis: {
          opacity: 1,
        },
      },
      data: [0, data_[3], 0, 0, 0],
    },
    {
      name: '派送件',
      type: 'bar',
      stack: '出库件',
      xAxisIndex: 1,
      itemStyle: {
        normal: {
          color: 'rgba(196,64,239,0.8)',
        },
        emphasis: {
          opacity: 1,
        },
      },
      data: [0, 0, data_[4], 0, 0],
    },
    {
      name: '自提件',
      type: 'bar',
      stack: '出库件',
      xAxisIndex: 1,
      itemStyle: {
        normal: {
          color: 'rgba(196,64,239,0.4)',
        },
        emphasis: {
          opacity: 1,
        },
      },
      data: [0, 0, data_[5], 0, 0],
    },
    {
      name: '退签件',
      type: 'bar',
      xAxisIndex: 1,
      itemStyle: {
        normal: {
          color: 'rgba(219,44,44,0.8)',
        },
        emphasis: {
          opacity: 1,
        },
      },
      data: [0, 0, 0, data_[6], 0],
    },
  ];

  var option = {
    title: '',
    grid: {
      top: '10%',
      containLabel: true,
    },
    tooltip: {
      show: true,
    },
    xAxis: [
      {
        type: 'category',
        show: false,
        data: data,
        axisLabel: {
          textStyle: {
            color: '#fff',
          },
        },
      },
      {
        type: 'category',
        position: 'bottom',
        data: data,
        boundaryGap: true,
        // offset: 40,
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          textStyle: {
            color: '#fff',
          },
        },
      },
      {
        show: false,
        data: dataShadow,
        axisLabel: {
          inside: true,
          textStyle: {
            color: '#fff',
          },
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        z: 10,
      },
    ],
    yAxis: [
      {
        show: true,
        splitLine: {
          show: false,
          lineStyle: {
            color: '#0e94eb',
          },
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: true,
          color: '#0e94eb',
        },
      },
      {
        show: false,
        type: 'value',
        nameTextStyle: {
          color: '#0e94eb',
        },
        axisLabel: {
          color: '#0e94eb',
        },
        splitLine: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      {
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          textStyle: {
            color: '#999',
          },
        },
      },
    ],
    //        color: ['#e54035'],
    series: series_data,
  };
}


export function chart4(data, type, chartType) {

    var s_data = [];


    function formtGCData(geoData, data, srcNam, dest) {
        var tGeoDt = [];
        if (dest) {
            for (var i = 0, len = data.length; i < len; i++) {
                if (srcNam != data[i].name) {
                    tGeoDt.push({
                        coords: [geoData[srcNam], geoData[data[i].name]],
                    });
                }
            }
        } else {
            for (var i = 0, len = data.length; i < len; i++) {
                if (srcNam != data[i].name) {
                    tGeoDt.push({
                        coords: [geoData[data[i].name], geoData[srcNam]],
                    });
                }
            }
        }
        return tGeoDt;
    }

    function formtVData(geoData, data, srcNam) {
        var tGeoDt = [];
        for (var i = 0, len = data.length; i < len; i++) {
            var tNam = data[i].name
            if (srcNam != tNam) {
                tGeoDt.push({
                    name: tNam,
                    symbolSize: 2,
                    itemStyle: {
                        normal: {
                            color: '#ffeb40',
                        }
                    },
                    value: geoData[tNam]
                });
            }

        }
        tGeoDt.push({
            name: srcNam,
            value: geoData[srcNam],
            symbolSize: 5,
            itemStyle: {
                normal: {
                    color: '#2ef358',
                }
            }

        });
        return tGeoDt;
    }

    var planePath = 'pin';
    if (type == 2) {
        s_data.push({
            type: 'lines',
            zlevel: 2,
            mapType: 'china',
            symbol: 'none',
            effect: {
                show: true,
                period: 1.5,
                trailLength: 0.1,
                //                color: '#ffeb40',
                color: '#2ef358',
                symbol: planePath,
                symbolSize: 6,
                trailLength: 0.5

            },
            lineStyle: {
                normal: {
                    color: '#2ef358',
                    width: 1,
                    opacity: 0.4,
                    curveness: 0.2
                }
            },
            data: formtGCData(geoCoordMap, data, '珠海', true)
        })

    } else if (type == 1) {
        s_data.push({
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 1.5,
                trailLength: 0.1,
                //                color: '#2ef358',
                color: '#ffeb40',
                symbol: planePath,
                symbolSize: 6,
                trailLength: 0.5
            },
            lineStyle: {
                normal: {
                    color: '#ffeb40',
                    width: 1,
                    opacity: 0.4,
                    curveness: 0.2
                }
            },
            data: formtGCData(geoCoordMap, data, '珠海', false)
        }, {

            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                period: 4,
                scale: 2.5,
                brushType: 'stroke'
            },
            symbol: 'none',
            symbolSize: 4,
            itemStyle: {
                normal: {
                    color: '#fff'
                }
            },

            data: formtVData(geoCoordMap, data, '珠海')
        })
    }

    var option = {
        tooltip: {
            trigger: 'item',
        },
        geo: {
            map: 'china',
            label: {
                show: true,
                position: 'insideLeft',
                color: 'white',
                fontSize: '10',
                emphasis: {
                    show: true
                }
            },
            roam: true,
            silent: true,
            itemStyle: {
                normal: {
                    areaColor: 'transparent',
                    borderColor: '#0e94eb',
                    shadowBlur: 10,
                    shadowColor: '#0e94ea'
                }
            },
            left: 10,
            right: 10
        },
        series: s_data
    };
}



//页面地图数据
var geoCoordMap = {
    '海门': [121.15, 31.89],
    '鄂尔多斯': [109.781327, 39.608266],
    '招远': [120.38, 37.35],
    '舟山': [122.207216, 29.985295],
    '齐齐哈尔': [123.97, 47.33],
    '盐城': [120.13, 33.38],
    '赤峰': [118.87, 42.28],
    '青岛': [120.33, 36.07],
    '乳山': [121.52, 36.89],
    '金昌': [102.188043, 38.520089],
    '泉州': [118.58, 24.93],
    '莱西': [120.53, 36.86],
    '日照': [119.46, 35.42],
    '胶南': [119.97, 35.88],
    '南通': [121.05, 32.08],
    '拉萨': [91.11, 29.97],
    '云浮': [112.02, 22.93],
    '梅州': [116.1, 24.55],
    '文登': [122.05, 37.2],
    '上海': [121.48, 31.22],
    '攀枝花': [101.718637, 26.582347],
    '威海': [122.1, 37.5],
    '承德': [117.93, 40.97],
    '厦门': [118.1, 24.46],
    '汕尾': [115.375279, 22.786211],
    '潮州': [116.63, 23.68],
    '丹东': [124.37, 40.13],
    '太仓': [121.1, 31.45],
    '曲靖': [103.79, 25.51],
    '烟台': [121.39, 37.52],
    '福州': [119.3, 26.08],
    '瓦房店': [121.979603, 39.627114],
    '即墨': [120.45, 36.38],
    '抚顺': [123.97, 41.97],
    '玉溪': [102.52, 24.35],
    '张家口': [114.87, 40.82],
    '阳泉': [113.57, 37.85],
    '莱州': [119.942327, 37.177017],
    '湖州': [120.1, 30.86],
    '汕头': [116.69, 23.39],
    '昆山': [120.95, 31.39],
    '宁波': [121.56, 29.86],
    '湛江': [110.359377, 21.270708],
    '揭阳': [116.35, 23.55],
    '荣成': [122.41, 37.16],
    '连云港': [119.16, 34.59],
    '葫芦岛': [120.836932, 40.711052],
    '常熟': [120.74, 31.64],
    '东莞': [113.75, 23.04],
    '河源': [114.68, 23.73],
    '淮安': [119.15, 33.5],
    '泰州': [119.9, 32.49],
    '南宁': [108.33, 22.84],
    '营口': [122.18, 40.65],
    '惠州': [114.4, 23.09],
    '江阴': [120.26, 31.91],
    '蓬莱': [120.75, 37.8],
    '韶关': [113.62, 24.84],
    '嘉峪关': [98.289152, 39.77313],
    '广州': [113.23, 23.16],
    '延安': [109.47, 36.6],
    '太原': [112.53, 37.87],
    '清远': [113.01, 23.7],
    '中山': [113.38, 22.52],
    '昆明': [102.73, 25.04],
    '寿光': [118.73, 36.86],
    '盘锦': [122.070714, 41.119997],
    '长治': [113.08, 36.18],
    '深圳': [114.07, 22.62],
    '珠海': [113.52, 22.3],
    '宿迁': [118.3, 33.96],
    '咸阳': [108.72, 34.36],
    '铜川': [109.11, 35.09],
    '平度': [119.97, 36.77],
    '佛山': [113.11, 23.05],
    '海口': [110.35, 20.02],
    '江门': [113.06, 22.61],
    '章丘': [117.53, 36.72],
    '肇庆': [112.44, 23.05],
    '大连': [121.62, 38.92],
    '临汾': [111.5, 36.08],
    '吴江': [120.63, 31.16],
    '石嘴山': [106.39, 39.04],
    '沈阳': [123.38, 41.8],
    '苏州': [120.62, 31.32],
    '茂名': [110.88, 21.68],
    '嘉兴': [120.76, 30.77],
    '长春': [125.35, 43.88],
    '胶州': [120.03336, 36.264622],
    '银川': [106.27, 38.47],
    '张家港': [120.555821, 31.875428],
    '三门峡': [111.19, 34.76],
    '锦州': [121.15, 41.13],
    '南昌': [115.89, 28.68],
    '柳州': [109.4, 24.33],
    '三亚': [109.511909, 18.252847],
    '自贡': [104.778442, 29.33903],
    '吉林': [126.57, 43.87],
    '阳江': [111.95, 21.85],
    '泸州': [105.39, 28.91],
    '西宁': [101.74, 36.56],
    '宜宾': [104.56, 29.77],
    '呼和浩特': [111.65, 40.82],
    '成都': [104.06, 30.67],
    '大同': [113.3, 40.12],
    '镇江': [119.44, 32.2],
    '桂林': [110.28, 25.29],
    '张家界': [110.479191, 29.117096],
    '宜兴': [119.82, 31.36],
    '北海': [109.12, 21.49],
    '西安': [108.95, 34.27],
    '金坛': [119.56, 31.74],
    '东营': [118.49, 37.46],
    '牡丹江': [129.58, 44.6],
    '遵义': [106.9, 27.7],
    '绍兴': [120.58, 30.01],
    '扬州': [119.42, 32.39],
    '常州': [119.95, 31.79],
    '潍坊': [119.1, 36.62],
    '重庆': [106.54, 29.59],
    '台州': [121.420757, 28.656386],
    '南京': [118.78, 32.04],
    '滨州': [118.03, 37.36],
    '贵阳': [106.71, 26.57],
    '无锡': [120.29, 31.59],
    '本溪': [123.73, 41.3],
    '克拉玛依': [84.77, 45.59],
    '渭南': [109.5, 34.52],
    '马鞍山': [118.48, 31.56],
    '宝鸡': [107.15, 34.38],
    '焦作': [113.21, 35.24],
    '句容': [119.16, 31.95],
    '北京': [116.46, 39.92],
    '徐州': [117.2, 34.26],
    '衡水': [115.72, 37.72],
    '包头': [110, 40.58],
    '绵阳': [104.73, 31.48],
    '乌鲁木齐': [87.68, 43.77],
    '枣庄': [117.57, 34.86],
    '杭州': [120.19, 30.26],
    '淄博': [118.05, 36.78],
    '鞍山': [122.85, 41.12],
    '溧阳': [119.48, 31.43],
    '库尔勒': [86.06, 41.68],
    '安阳': [114.35, 36.1],
    '开封': [114.35, 34.79],
    '济南': [117, 36.65],
    '德阳': [104.37, 31.13],
    '温州': [120.65, 28.01],
    '九江': [115.97, 29.71],
    '邯郸': [114.47, 36.6],
    '临安': [119.72, 30.23],
    '兰州': [103.73, 36.03],
    '沧州': [116.83, 38.33],
    '临沂': [118.35, 35.05],
    '南充': [106.110698, 30.837793],
    '天津': [117.2, 39.13],
    '富阳': [119.95, 30.07],
    '泰安': [117.13, 36.18],
    '诸暨': [120.23, 29.71],
    '郑州': [113.65, 34.76],
    '哈尔滨': [126.63, 45.75],
    '聊城': [115.97, 36.45],
    '芜湖': [118.38, 31.33],
    '唐山': [118.02, 39.63],
    '平顶山': [113.29, 33.75],
    '邢台': [114.48, 37.05],
    '德州': [116.29, 37.45],
    '济宁': [116.59, 35.38],
    '荆州': [112.239741, 30.335165],
    '宜昌': [111.3, 30.7],
    '义乌': [120.06, 29.32],
    '丽水': [119.92, 28.45],
    '洛阳': [112.44, 34.7],
    '秦皇岛': [119.57, 39.95],
    '株洲': [113.16, 27.83],
    '石家庄': [114.48, 38.03],
    '莱芜': [117.67, 36.19],
    '常德': [111.69, 29.05],
    '保定': [115.48, 38.85],
    '湘潭': [112.91, 27.87],
    '金华': [119.64, 29.12],
    '岳阳': [113.09, 29.37],
    '长沙': [113, 28.21],
    '衢州': [118.88, 28.97],
    '廊坊': [116.7, 39.53],
    '菏泽': [115.480656, 35.23375],
    '合肥': [117.27, 31.86],
    '武汉': [114.31, 30.52],
    '大庆': [125.03, 46.58],
    '安徽省': [117.17, 31.52],
    '北京市': [116.24, 39.55],
    '重庆市': [106.54, 29.59],
    '福建省': [119.18, 26.05],
    '甘肃省': [103.51, 36.04],
    '广东省': [113.14, 23.08],
    '广西壮族自治区': [108.19, 22.48],
    '贵州省': [106.42, 26.35],
    '海南省': [110.20, 20.02],
    '河北省': [114.30, 38.02],
    '河南省': [113.40, 34.46],
    '黑龙江省': [128.36, 45.44],
    '湖北省': [112.27, 30.15],
    '湖南省': [112.59, 28.12],
    '吉林省': [125.19, 43.54],
    '江苏省': [118.46, 32.03],
    '江西省': [115.55, 28.40],
    '辽宁省': [123.25, 41.48],
    '内蒙古': [108.41, 40.48],
    '内蒙古自治区': [108.41, 40.48],
    '宁夏回族自治区': [106.16, 38.27],
    '青海省': [101.48, 36.38],
    '山东省': [118.00, 36.40],
    '山西省': [112.33, 37.54],
    '陕西省': [108.57, 34.17],
    '上海市': [121.29, 31.14],
    '海南': [108.77, 19.10],
    '四川省': [104.04, 30.40],
    '天津市': [117.12, 39.02],
    '西藏自治区': [91.08, 29.39],
    '新疆维吾尔自治区': [87.36, 43.45],
    '云南省': [102.42, 25.04],
    '浙江省': [120.10, 30.16],
    '澳门特别行政区': [115.07, 21.33],
    '台湾省': [121.21, 23.53],
    '香港特别行政区': [114.1, 22.2]
};