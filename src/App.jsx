
import './App.css'
import DaisyNav from './components/daisynave/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import LineChart from './components/LineChart/LineChart'

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
      <div>
        <LineChart></LineChart>
      </div>
    </>
  )
}

export default App
