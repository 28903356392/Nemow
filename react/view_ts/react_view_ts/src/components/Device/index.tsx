import { InfiniteScroll, List as Lists } from "antd-mobile";
import { useState } from "react";

interface V {
  List: { title: string }[]
}
function Device(props: V) {
  const { List } = props
  const [data, setData] = useState<{ title: string }[]>([])
  const [hasMore, setHasMore] = useState(true)
  async function loadMore(e: any) {
    const append = [List[0]]
    setData(val => [...val, ...append])
    setHasMore(append.length > 0)
    console.log(e);

  }
  return (
    <>
      <Lists className="listload">
        {data.map((item, index) => {
          return <Lists.Item key={index}>{item.title}</Lists.Item>
        })}
      </Lists>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </>
  )
}

export default Device
