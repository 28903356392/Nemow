import { useState,useEffect } from "react";


export default function Home() {
  var [serverUrl, setServerUrl] = useState('https://localhost:1234');
  useEffect(() => {
    serverUrl='12'
  }, [serverUrl]);
  return (
    <div className="Home" onChange={()=>{setServerUrl('asd')}}>
     {serverUrl}
    </div>
  );
}


