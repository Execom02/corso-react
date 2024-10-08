
import './App.css'
// import Card from './components/card/Card'
import CardForm from './components/cardform/CardForm'
import Example from './components/example/Example'
// import {  } from 'react-redux'
import Navbar from './components/navbar/Navbar'

function App() {
  // const cities = useSelector((state) => state.cities.value);

  return (
    <>
      <Navbar></Navbar>
      <Example></Example>
      <CardForm></CardForm>
      {/* <div className="grid grid-cols-4 gap-5">
        {cities
          // .filter((city) => city.isVisited)
          .map((city) => (
            <Card
              key={city.id}
              title={city.name}
              imgUrl={city.imgUrl}
              isVisited={city.isVisited}>
              {city.description}
            </Card>
          ))}
      </div> */}
    </>
  );
}

export default App
