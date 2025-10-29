import './App.css'
import Acesso from './components/Acesso'
import FeedbackCards from './components/Feedbacks'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Semana from './components/SemanaGratis'
import TimeSection from './components/Time'
import Trilha from './components/Trilha'


function App() {
  

  return (
    <div>
       <Header/>
       <Hero/>
       <Acesso/>
       <FeedbackCards/>
       <Trilha/>
       <Semana/>
       <TimeSection/>
       <Footer/>
    </div>
   
   
  )
}

export default App
