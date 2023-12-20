import React, { useEffect, useState } from 'react'
import { POST } from '../../api'
import "./index.scss"
import logo from "../../assets/img/icon_greenpacket_logo_dark.png";
import { Select } from 'antd';
export default function Index(){
    const [langvalue,setlangvalue] =useState('')
    const [lang,setLang] =useState([
      { value: 'ar', label: '阿拉伯' },
      { value: 'en', label: '英文' },
      { value: 'es', label: '西班牙' },
      { value: 'ch', label: '中文' },
    ])
    const getlang =()=>{
      POST('13.3','GetCurrentLanguage').then((res:any)=>{
        setlangvalue(res.result.Language)
      })
    }
    const handleChange =(e:any)=>{
      POST('13.2','SetLanguage',{Language:e}).then((res:any)=>{
        getlang()
      })
    }
    
    useEffect(()=>{
      getlang()
    },[])
    return (
        <div className='header'>
          <img src={logo} alt="" />
          {/* 此处Select defaultValue替换为langvalue 否则报错，antd的 bug */}
          <Select
             className='Select_dis_bor'
             value={langvalue}
             style={{ width: 100,border:0 }}
             onChange={handleChange}
             options={lang}
           />
        </div>
    )
}