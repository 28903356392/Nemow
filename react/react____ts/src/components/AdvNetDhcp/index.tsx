import { POST } from '@/api'
import React, { useEffect, useState } from 'react'

export default function HomeMy() {
  const [my, setMy] = useState(Object)
  useEffect(() => {
    POST('13.1', 'GetDeviceInfo').then((res: any) => {
      console.log(res.result);
      setMy(res.result)
    })
  }, [])
  return (
    <div>
      <div className="deviceBox">
        <p><span className="infoName">HardwareVersion</span><span>{my.HwVersion}</span></p>
        <p><span className="infoName">SoftwareVersion</span><span>{my.SwVersion}</span></p>
        <p><span className="infoName">SerialNumber</span><span>{my.sn}</span></p>
        <p><span className="infoName">IMEI</span><span>{my.IMSI}</span></p>
        <p><span className="infoName">MACAddress</span><span>{my.MACAddress}</span></p>
        <p><span className="infoName">WanIP</span><span>1</span></p>
        <p><span className="infoName">IPAddress</span><span>1</span></p>
        <p><span className="infoName">SubnetMask</span><span>1</span></p>
      </div>
    </div>
  )
}