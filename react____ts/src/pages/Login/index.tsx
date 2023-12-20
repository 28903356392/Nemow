import React, { useEffect, useState } from 'react'
import { POST } from '../../api'
import Header from '../../layout/header';
import { Button, Checkbox, Form, Input } from 'antd';
import group89 from "../../assets/img/Group89@1x.png";

type FieldType = {
  UserName?: string;
  Password?: string;
};

export default function Index() {
  const login =(params:any)=>{
    POST('1.1', 'Login', params).then(res => {
      console.log(res);
      window.location.href='/home'
    })
  }
  const logput =()=>{
    POST('1.2', 'Logout')
  }
  const onFinish = (values: any) => {
    console.log('Success:', values);
    login(values)
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  useEffect(() => {
    logput()
  }, [])
  return (
    <>
      <Header />
      <div className='img_back_log'>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className='img_he'>
          <img  src={group89} alt=""/>
          </div>
          <Form.Item<FieldType>
            name="UserName"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder='Username'/>
          </Form.Item>

          <Form.Item<FieldType>
            name="Password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder='Password'/>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}