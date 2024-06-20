import Header from './ekal/Header';
import FirstPart from './ekal/FirstPart';
import MentorshipProgram from './ekal/MentorshipProgram';
import Inclusive from './ekal/Inclusive'
import Mentors from "./ekal/Mentors";
import Frequently from "./ekal/Frequently";
import Online from "./ekal/Online";
import HowItWorks from './ekal/HowItWorks';
import Vedio from './ekal/Vedio';
import Pricing from './ekal/Pricing';
import Footer from './ekal/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <FirstPart/>
      <MentorshipProgram/>
      <Inclusive/>
      <Vedio/>
      <Pricing/>
      <Online/>
      <HowItWorks/>
      <Mentors/>
      
      <Frequently/>
      <Footer/>
      

    </div>
  );
}

export default App;
