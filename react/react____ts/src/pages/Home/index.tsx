import React, { useEffect, useState } from 'react'
import IMG1 from "@/assets/img/icon_4g@1x.png";
import IMG2 from "@/assets/img/Union@1x.png";
import IMG3 from "@/assets/img/devices.png";
import ICON1 from "@/assets/img/Group70@1x.png";
import ICON2 from "@/assets/img/Group72@1x.png";
import HomeG from '@/components/homeG';
import HomeMy from '@/components/homeMy';
import HomeCo from '@/components/homeCo';
const Items: JSX.Element[] = [<HomeG />, <HomeMy />, <HomeCo />]
export default function Home() {
  const [Disable1, setDisable1] = useState(1)
  const sectionDisable = (id: 1 | 2 | 3) => {
    setDisable1(id)
  }
  return (
    <div className='home_header'>
      <header>
        <div className='img1' onClick={() => sectionDisable(1)}>
          <img src={IMG1} alt="" />
          <p>46015</p>
        </div>
        <div className='divicon'><img src={ICON2} alt="" /></div>
        <div className='img2' onClick={() => sectionDisable(2)}>
          <img src={IMG2} alt="" />
          <p>My device</p>
        </div>
        <div className='divicon'><img src={ICON1} alt="" /></div>
        <div className="img3" onClick={() => sectionDisable(3)}>
          <img src={IMG3} alt="" />
          <p>Connect devices(1)</p>
        </div>
      </header>
      <article>
        {
          Items.map((item, key) => {
            return key == Disable1 - 1 && <section key={key} className='section'>{item}</section>
          })
        }
      </article>
    </div>
  )
}