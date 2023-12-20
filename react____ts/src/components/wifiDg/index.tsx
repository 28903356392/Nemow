import { Button, Flex, Form, Input, Select, Switch } from 'antd'
import React, { useEffect, useState } from 'react'
import { POST } from '@/api';
type SizeType = Parameters<typeof Form>[0]['size'];
export default function WifiDg() {
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
  /** 开关*/
  const [wifiEnable, setWifiEnable] = useState(Object)
  const [wifiindex, setWifiindex] = useState(Object)
  const [SecurityMode, setSecurityMode] = useState(['DISABLE', "None(open)", 'SHARED', 'WEPAUTO', 'OWE', 'WPAPSK', 'WPA2-PSK', 'WPA3-PSK', 'WPA/WPA2-PSK', 'WPA2/WPA3-PSK', 'WPA', 'WPA2', 'WPA3', 'WPA3-192', 'WPA1WPA2'])
  const [EncryptionType, setEncryptionType] = useState(["NONE", "WEP", 'TKIP', 'AES', 'TKIPAES', 'GCMP256'])
  const [StatuKey, setStatuKey] = useState(["W2P4GStatus", "W5GStatus", 'GuestW2P4GStatus', 'GuestW5GStatus'])
  const [Type, setType] = useState(1)
  const [Type2, setType2] = useState(1)
  const [Type3, setType3] = useState(1)
  const [Type4, setType4] = useState(1)
  const [form] = Form.useForm();
  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };
  const Types = (e: number, keyy: any) => {
    switch (keyy) {
      case 1:
        setType(e)
        break;
      case 2:
        setType2(e)
        break;
      case 3:
        setType3(e)
        break;
      case 4:
        setType4(e)
        break;
      default:
        break;
    }
  }
  const ghz = (title: string, obj: any, key: number, e: string = '50%') => {
    if (obj == undefined) {
      return
    }
    return (
      <div style={{ width: e }}>
        <h3>{title}</h3>
        <Form.Item label="Wi-Fi Network" name="Network">
          <Switch defaultChecked={wifiEnable[StatuKey[key - 1]]} onClick={(e) => { setWifiState(e, StatuKey[key - 1]) }} />
        </Form.Item>
        <Form.Item label="Network Name(SSID)">
          <Input defaultValue={obj.Ssid} />
        </Form.Item>
        <Form.Item label="Password">
          <Input defaultValue={obj.WpaKey} />
        </Form.Item>
        <Form.Item label="Authentication">
          <Select defaultValue={obj.SecurityMode} key={new Date().getTime()} onChange={(e) => { Types(e, key) }}>
            {
              SecurityMode.map((item, key) => {
                if (item == "None(open)" || item == 'WPA2-PSK' || item == 'WPA/WPA2-PSK' || item == 'WPA3-PSK' || item == 'WPA2/WPA3-PSK') {
                  return <Select.Option value={key} >{item}</Select.Option>
                }
              })
            }
          </Select>
        </Form.Item>
        <Form.Item label="Encryption Method">
          <Select defaultValue={obj.EncryptionType}>
            {
              EncryptionType.map((item, keys) => {
                switch (key) {
                  case 1:
                    return typechange(Type, item, keys)
                  case 2:
                    return typechange(Type2, item, keys)
                  case 3:
                    return typechange(Type3, item, keys)
                  case 4:
                    return typechange(Type4, item, keys)
                  default:
                    break;
                }
              })

            }
          </Select>
        </Form.Item>
        <Form.Item label="Hidden SSID" valuePropName="checked">
          <Switch defaultChecked={obj.SsidHidden} />
        </Form.Item>
        {
          key < 3 ? <Form.Item label="Client Isolation" valuePropName="checked">
            <Switch />
          </Form.Item> : ''
        }
      </div>
    )
  }
  const typechange = (TY: any, item: any, keys: any) => {
    switch (TY) {
      case 1:
        return item == 'NONE' || item == 'WEP' ? <Select.Option value={keys}>{item}</Select.Option> : ''
      case 6:
        return item == 'AES' ? <Select.Option value={keys}>{item}</Select.Option> : ''
      case 7:
        return item == 'AES' ? <Select.Option value={keys}>{item}</Select.Option> : ''
      case 8:
        return item == 'TKIPAES' ? <Select.Option value={keys}>{item}</Select.Option> : ''
      case 9:
        return item == 'AES' ? <Select.Option value={keys}>{item}</Select.Option> : ''

      default:
        break;
    }
  }
  const setWifiState = (e: any, key: any) => {
    console.log(e, key);
    if (key.split("Guest").length == 1) {
      wifiEnable["Guest" + key] = e == true ? 1 : 0
    }
    wifiEnable[key] = e == true ? 1 : 0
    console.log(wifiEnable);
    setWifiEnable(wifiEnable)
    POST('5.2', 'SetWifiState', wifiEnable).then(() => {
      getWifiState()
    })
  }
  const getWifiState = () => {
    POST('5.1', 'GetWifiState').then((res: any) => {
      setWifiEnable(res.result)
    })
  }
  const getPostWifi = () => {
    getWifiState()
    Promise.all([
      POST('5.3', 'GetWifiSettings', { WhichWifi: 1 }),
      POST('5.3', 'GetWifiSettings', { WhichWifi: 2 }),
      POST('5.3', 'GetWifiSettings', { WhichWifi: 3 }),
      POST('5.3', 'GetWifiSettings', { WhichWifi: 4 })
    ]).then((res: any) => {
      setWifiindex([
        res[0].result.AP_setting,
        res[1].result.AP_setting,
        res[2].result.AP_setting,
        res[3].result.AP_setting])
    })
  }
  const onSubmit = () => {
    console.log(form.getFieldsValue());

  }
  useEffect(() => {
    getPostWifi()
  }, [])
  return (
    <>
      <h3 className='h3'>Network Configuration</h3>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        form={form}
        onFinish={onSubmit}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize as SizeType}
        style={{ width: '100 %' }}
      >
        <Form.Item label="Band Steering" valuePropName="checked" style={{ width: '50%' }}>
          <Switch />
        </Form.Item>
        <p className='red'>Please follow these rules：</p>
        <p className='red'>*SSID rules: <br />
          1. Only allow input A-Z，a-z, 0-9, special character.<br />
          2.The string length is linited to 1-32 digits.
        </p>
        <p className='red'>*Password rules:<br />
          1.Only allow input A-Z，a-z, 0-9, special character.<br />
          2.In other modes, the string is limited to 8-32 bits.
        </p>
        <Flex gap="middle" vertical key={new Date().getTime()}>
          <Flex>

            {ghz('2.4GHz Default Setup', wifiindex[0], 1)}
            {ghz('5GHz Default Setup', wifiindex[1], 2)}
          </Flex>
          <Flex>
            {ghz('2.4 GHz Guest Setup', wifiindex[2], 3)}
            {ghz('5 GHz Guest Setup', wifiindex[3], 4)}
          </Flex>
        </Flex>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}