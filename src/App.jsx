import './App.css'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Icons from '../components/Icons'
import Footer from '../components/Footer/'
import Form from '../components/Form'
import Boxes from '../components/Boxes'
import WhatsAppIcon from '../components/WhatsAppIcon'

function App() {

  return (
    <>
    <div>
      <WhatsAppIcon></WhatsAppIcon>
      <Navbar></Navbar>
      <Home></Home>
      <Boxes></Boxes>
      <Form></Form>
      <Footer></Footer>
    </div>
    </>
  )
}

export default App
