import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signuppage from './assets/signup'
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import Login from './assets/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
<BrowserRouter>
<Routes>
<Route path='/register' element= {<Signuppage/>}></Route>
<Route path='/login' element= {<Login/>}></Route>
</Routes>
</BrowserRouter>
   </div>
  )
}

export default App
