import {Form} from "./Components/Form";
import {UseSessionStorage} from './utils/UseSessionStorage'
import {Banner} from './Components/Banner'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()
function App() {
//const [isBanner, setBanner] = UseSessionStorage('banner', '')
  return (
      <QueryClientProvider client={queryClient}>
     <div className='h-screen bg-gradient-to-r from-fuchsia-500 to-cyan-500 flex items-center justify-center'>
       <Banner />
       <Form/>
     </div>
      </QueryClientProvider>
  )
}

export default App
