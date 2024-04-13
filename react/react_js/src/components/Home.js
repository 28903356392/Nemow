
// BUS
import { useParams } from "react-router-dom";
import { eventsBus } from "../utils/eventBus";
function Home() {
  eventsBus.addListener('name',(messame,num)=>{
    console.log(messame,num);
  })
  const {id,name} = useParams()
  return (
    <div>
      aasdasd
      {id+name}
    </div>
  )
}

export default Home;