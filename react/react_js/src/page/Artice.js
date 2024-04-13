// 获取传参useSearchParams
import { useSearchParams } from "react-router-dom";

function Artice() {
  const [params] = useSearchParams()
  console.log(params);
  let id =params.get("id")
  return (
    <div>
      Artice
      {id}
      {/* id 100 */}
    </div>
  )
}

export default Artice;