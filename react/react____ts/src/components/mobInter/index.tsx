import { POST } from '@/api'
import { Space, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react'

export default function MobInter() {
  const [data, setDate] = useState([])

  const columns: ColumnsType<object[]> = [
    {
      title: 'APN Type',
      dataIndex: 'APNType',
      key: new Date().getTime(),
      render: (_, record: any) => (<p key={new Date().getTime()}>{record.APN}</p>),
    },
    {
      title: 'Profile Name',
      dataIndex: 'ProfileName',
      key: new Date().getTime(),
      render: (_, record: any) => (<p key={new Date().getTime()}>{record.ProfileName}</p>),
    },
    {
      title: 'Action',
      key: new Date().getTime(),
      render: (_, record: any) => (
        <Space size="middle" key={new Date().getTime()}>
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    POST('7.1', 'GetProfileList').then((res: any) => {
      setDate(res.result.ProfileList)
    })
  }, [])
  return (
    <div>
      <h3>Internet Connection</h3>
      <p>The access point name (APN) is the name of the setting information read by your device, which is used to set up the connection with the network management between the mobile network of the operator and the public network. In most cases, your device has made these settings in the system file, and you can automatically fill in the APN information in the link.</p>
      <p><b style={{ color: "#000" }}>Note: </b>Exercise caution when setting this parameter.If this parameter is set incorrectly,the subscriber may fall to access in the network. </p>
      <Table columns={columns} pagination={{ position: ['none', 'none'] }} dataSource={data} key={new Date().getTime()} />
    </div>
  )
}