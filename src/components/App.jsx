// Styles
import './../styles/App.css'
// Componentes
import {Header} from './Header'
import {Products} from './Products'
import {Footer} from './Footer'


export const App = () => {
  return (
    <>
      <Header></Header>
      <Products></Products>
      <Footer></Footer>
    </>
  );
}