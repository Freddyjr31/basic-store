import './App.css'

import GetTeams from './views/productTitle'
import NavBarMenu from './nav/nav'
import CardsList from './views/cardsProducts'
import FooterView from './views/Footer_view'

// import SliderContent from './views/sliderContent'

function App () {
  return (
    <div className='App'>
      <NavBarMenu />
      <div className='row'>
        <div className='col-md-2 mt-3'>
          <GetTeams />
        </div>
        <div className='col-md-10 mt-3'>
          <CardsList />
        </div>
      </div>
      <FooterView />
    </div>
  )
}

export default App
