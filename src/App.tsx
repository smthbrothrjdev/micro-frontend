import {Form} from "./Components/Form";
import {Banner} from './Components/Banner'

function App() {
  return (
     <div className='h-screen bg-gradient-to-r from-fuchsia-500 to-cyan-500 flex items-center justify-center'>
       <Banner isBanner={false} setBanner={()=>{console.log("setbanner!")}} />
       <Form/>
     </div>
  )
}
export default App
