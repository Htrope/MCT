import './App.css'
import Acesso from './components/Acesso'
import CallToAction from './components/Btn'

import FeedbackCards from './components/Feedbacks'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import TimeSection from './components/Time'
import Trilha from './components/Trilha'


function App() {
  

  return (
    <div>
       <Header/>
       <Hero/>
       <Acesso/>
       <CallToAction/>
       <FeedbackCards/>
       <Trilha/>
       <CallToAction/>
       <TimeSection/>
       <Footer/>
    </div>
   
   
  )
}

export default App
