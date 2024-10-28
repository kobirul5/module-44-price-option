
import './App.css'
import DaisyNav from './components/daisynave/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {

  return (
    <>
      <div>
        {/* <DaisyNav></DaisyNav> */}
        <NavBar></NavBar>
      </div>
      <div>
        <PriceOptions></PriceOptions>
      </div>
    </>
  )
}

export default App
