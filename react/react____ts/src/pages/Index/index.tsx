import { POST } from '@/api';
import Header from '@/layout/header';
import React, { useEffect, useState } from 'react'
import { rout } from "@/routes";
import { Link, NavLink, Outlet, Route, Routes } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';


export default function Index() {
  const [cur, setCur] = useState(window.location.pathname.split('/')[1])
  const items: MenuProps['items'] = [
    {
      label: (<NavLink to='/home'>home</NavLink>),
      key: 'home',
    },
    {
      label: (<NavLink to='/mobilenet'>mobilenet</NavLink>),
      key: 'mobilenet',
    },
    {
      label: (<NavLink to='/wifi'>wifi</NavLink>),
      key: 'wifi',
    },
    {
      label: (<NavLink to='/devices'>devices</NavLink>),
      key: 'devices',
    },
    {
      label: (<NavLink to='/sms'>sms</NavLink>),
      key: 'sms',
    },
    {
      label: (<NavLink to='/advanced'>advanced</NavLink>),
      key: 'advanced',
    },
  ];
  const onClick: MenuProps['onClick'] = (e) => {
  };
  useEffect(() => {
    POST('4.3', 'GetNetworkScanResult').then(res => {
      setCur(window.location.pathname.split('/')[1])
    })
  }, [])
  return (
    // 实现路由切换，导航路由组件
    <div className='Home'>
      <Header />
      <div className='nav'>
        <Menu onClick={onClick} defaultSelectedKeys={[cur]} mode="horizontal" items={items} />
        <Outlet />
      </div>
      <div className='Connect'>
        <Routes>
          {rout.map((item, key) => {
            return <Route key={key} path={item.path} element={item.element}></Route>
          })}
        </Routes>
      </div>
    </div>
  )
}