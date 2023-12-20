import MobInter from '@/components/mobInter'
import MobMobile from '@/components/mobMobile'
import MobNetmode from '@/components/mobNetmode'
import MobNetwork from '@/components/mobNetwork'
import { Menu, MenuProps } from 'antd'
import React, { useState } from 'react'

const Items: JSX.Element[] = [<MobInter />, <MobMobile />, <MobNetmode />, <MobNetwork />]
export default function Devices() {
  type MenuItem = Required<MenuProps>['items'][number];

  const getItem = (
    label: React.ReactNode,
    key: React.Key,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem => {
    return {
      key,
      children,
      label,
      type,
    } as MenuItem;
  }

  const items: MenuProps['items'] = [
    getItem('Internet Connection', '0'),
    getItem('Mobile Network Searching', '1'),
    getItem('Net Mode Management', '2'),
    getItem('Network Information', '3'),
  ];
  const [i, setI] = useState(0)
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setI(Number(e.key))
  };
  return (
    <div className='mobile'>
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
      />
      <article>
        {
          Items.map((item, key) => {
            return key == i && <section key={key} className='section'>{Items[i]}</section>
          })
        }
      </article>
    </div>
  )
}