import React, { useEffect, useRef, useState } from 'react'
import * as echarts from 'echarts';
import { POST } from '@/api';


export default function HomeG() {
  const canvBox = useRef<HTMLDivElement | null>(null)
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['4G', '5G']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
      max: 100,
      min: 0,
    },
    yAxis: {
      type: 'category',
      data: ['Signal Strength']
    },
    series: [
      {
        name: '4G',
        type: 'bar',
        data: [55],//百分比
        barWidth: 20,
        itemStyle: {
          emphasis: {
            barBorderRadius: 10
          },
          normal: {
            barBorderRadius: 10,
            color: new echarts.graphic.LinearGradient(
              0, 0, 1, 0,
              [
                { offset: 0, color: '#18BAFF' },
                { offset: 1, color: '#70E5FF' }
              ]
            )
          }
        }
      },
      {
        name: '5G',
        type: 'bar',
        data: '5G',
        barWidth: 20,
        itemStyle: {
          emphasis: {
            barBorderRadius: 10
          },
          normal: {
            barBorderRadius: 10,
            color: new echarts.graphic.LinearGradient(
              0, 0, 1, 0,
              [
                { offset: 0, color: '#BEEF65' },
                { offset: 1, color: '#96C443' }
              ]
            )
          }
        }
      }
    ]
  };
  useEffect(() => {

    POST('4.8', 'GetSignalStrength').then(res => {
      console.log(res);
    })
    const InfoSignal = echarts.init(canvBox.current)
    InfoSignal.setOption(option, true)
    window.addEventListener("resize", () => {
      InfoSignal.resize()
    });
  })
  const chartLineBox = {
    height: '150px',
    margin: ' 0 auto'
  }
  // 使用刚指定的配置项和数据显示图表。
  return (
    <div className='home_45g'>
      <div ref={canvBox} style={chartLineBox}></div>
      <div className="signalText">
        <p>4G<span className="span_lang">SINR:　123</span><span className="span_lang">RSRP: 232</span></p>
      </div>
      <div className="cellInfo">
        <div className="infoBox">
          <p><span>NR PLMN</span>1</p>
          <p><span>NR TAC</span>2</p>
          <p><span>NR PCI</span>3</p>
          <p><span>NCGI</span>4</p>
        </div>
        <div className="infoBox">
          <p><span>PLMN</span>5</p>
          <p><span>TAC</span>6</p>
          <p><span>PCI</span>7</p>
          <p><span>ECGI</span>8</p>
        </div>
      </div>
    </div>
  )
}