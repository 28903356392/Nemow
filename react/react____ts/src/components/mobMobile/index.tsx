import { POST } from '@/api'
import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input, Select } from 'antd';
export default function MobMobile() {
  const [obj, setObj] = useState(Object)
  const [only, setOnly] = useState([
    { value: 0, label: 'Disable NR Mode' },
    { value: 1, label: ' NSA only' },
    { value: 2, label: 'SA only' },
    { value: 3, label: 'NSA + SA' },
  ])

  const getNetMode = () => {
    POST('4.10', 'GetNRNetworkMode').then((res: any) => {
      setObj(res.result)
    })
  }
  const submit = (values: any) => {

    var params = {
      NRState: values.NetworkMode == 0 ? 0 : 1,
      NRMode: values.NetworkMode
    }
    POST('4.9', 'SetNRNetworkMode', params).then((res: any) => {
      getNetMode()
    })
  }
  useEffect(() => {
    POST('4.10', 'GetNRNetworkMode').then((res: any) => {
      setObj(res.result)
    })
  }, [])
  return (
    <div>
      <h3>Network Selection</h3>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={submit}
        autoComplete="off"
      >
        <Form.Item
          label="Network Mode"
          name="NetworkMode"
          className='textleft'
        >{/* 此处Select 添加key={new Date().getTime()} 否则报错，antd的 bug */}
          <Select defaultValue={obj.NRMode} key={new Date().getTime()}>
            {only.map(item => {
              return <Select.Option value={item.value}>{item.label}</Select.Option>
            })}
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}