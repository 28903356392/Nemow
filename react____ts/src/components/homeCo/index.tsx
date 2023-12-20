import { POST } from '@/api'
import { ColumnsType } from 'antd/es/table';
import { Radio, Space, Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react'
import online from "@/assets/img/online_dev.png";
export default function HomeCo() {
  const [data, setData] = useState([])

  const columns: ColumnsType<object[]> = [
    {
      title: 'Online terminal',
      dataIndex: 1,
      key: 1,
      render: (_, record: any) => {
        return <div className="tableItem" >
          <img src={online} alt="" className='onlineIcon' />
          <div className="itemBorder itemRight">
            <span >{record.DeviceName}</span>
            <span className='color'>Lease expiry time: {record.OnlineTime}</span>
          </div>
          <div className="itemBorder itemLeft">

            <div className="leftInfo">
              <span >MAC Address: {record.MacAddress}</span>
              <span >IPv4: {record.IPv4Address}</span>
            </div>
            <div className="onlineIcon"></div>
          </div>
        </div>
      },
    }
  ];


  useEffect(() => {
    POST('11.1', 'GetConnectionDevices').then((res: any) => {
      setData(res.result.DeviceList)
    })
  }, [])
  return (
    <div>
      <Radio.Group value='none' />
      <Table columns={columns} pagination={{ position: ['none', 'none'] }} dataSource={data.filter((item: any) => { return item.IsOnline == 1 })} />
    </div>
  )
}