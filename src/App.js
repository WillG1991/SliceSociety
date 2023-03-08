import logo from './logo.svg';
import './App.css';
import Hero from './components/hero';
import AppHeader from './components/nav';
import Footer from './components/footer';
import Contact from './components/contact';
import About from './components/about';
import Menu from './components/menu';
import MailingList from './components/mailinglist';
import Catering from './components/catering';
import Gallery from './components/gallery';
import BookATable from './components/book';
import ChefsSection from './components/staff';

function App() {
  return (
    <div className="App">
<AppHeader/>
<Hero></Hero>
<About/>
<Menu/>
<MailingList/>
<Catering/>
<BookATable/>
<ChefsSection/>
<Contact/>
<Gallery/>
<Footer/>
    </div>
  );
}

export default App;
