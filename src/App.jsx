import './App.css'
import ReceipePage from './components/ReceipePage'
import DetailsReceipe from './components/DetailsReceipe'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<ReceipePage />} />
      <Route path="/details/:id" element={<DetailsReceipe />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
