import {useEffect, useState} from "react";
import axios, {AxiosError} from "axios";

export type bannerProps = {
  isBanner: boolean
  setBanner: () => void
}
export const Banner = (props: bannerProps) => {
const [bannerMessage, setBannerMessage] = useState("Nothing")

  useEffect(() => {
    const fetchData = async ()=>{
      try {
        const {data: response} = await axios.get('http://localhost:8080/motd');
        setBannerMessage(response);
      } catch (error: any) {
        console.error(error.message as AxiosError );
      }
    }

    fetchData()
  }, []);
  return (!props.isBanner && <div className="toast toast-top toast-center">
    <div role="alert" className="alert alert-info shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
           className="stroke-info shrink-0 w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <div>
        <h3 className="font-bold">Micro-Message:</h3>
        <div className="text-xs">{bannerMessage}</div>
      </div>
      <button onClick={() => console.log(bannerMessage)} className="btn btn-sm">OK</button>
    </div>
  </div>)
}
