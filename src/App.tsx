import './App.css'
import Acesso from './components/Acesso'
import CallToAction from './components/Btn'
import FeedbackCards from './components/Feedbacks'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Trilha from './components/Trilha'


function App() {
  

  return (
    <div>
       <Header/>
       <Hero/>
       
       <Acesso/>
       <FeedbackCards/>
      
       <Trilha/>
       <Footer/>
    </div>
   
   
  )
}

export default App
