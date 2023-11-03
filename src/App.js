import GetTeams from './views/productTitle'
import NavBarMenu from './nav/nav'
import CardsList from './views/cardsProducts'
import FooterView from './views/Footer_view'
import SearchView from './views/search'
// import SliderContent from './views/sliderContent'

function App () {
  return (
    <div className='App'>
      <NavBarMenu />
      <div className='row mt-5 me-0'>
        <div className='col-md-2 mt-5'>
          <GetTeams />
        </div>
        <div className='col-md-7 mt-5'>
          <CardsList />
        </div>
        <div className='col-md mt-5'>
          <SearchView />
        </div>
      </div>
      <FooterView />
    </div>
  )
}

export default App
