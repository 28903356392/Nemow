import { fetchChannelAPI, ChannelItem } from "@/api/index";
import { Tabs } from "antd-mobile";
import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import Device from "@/components/Device";
import { useNavigate } from "react-router-dom";
function Home() {
  const [list, setList] = useState<ChannelItem[]>([])
  useEffect(() => {

    try {
      fetchChannelAPI().then(res => {
        setList(res.data.data.list)
      })
    } catch (error) {
      console.log(error);
    }
  }, [])
  return (
    <>
      <Tabs className="tabs">
        {list.map(item => {
          return <Tabs.Tab title={item.title} key={item.key}>
            <Device List={item.List} />
          </Tabs.Tab>
        })}
      </Tabs>
    </>
  )
}

export default Home

useEffect
useRef
useMemo
useCallback
useContext
useNavigate
