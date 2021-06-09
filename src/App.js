import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';

import Dropdown from './component/Dropdown';
import Footer from './component/Footer';
import Navbar from './component/Navbar';

import about from './pages/about';
import contact from './pages/contact';
import Home from './pages/Home';
import menu from './pages/menu';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu= () =>{
      if(window.innerWidth>768 && isOpen){
        setIsOpen(false)
        console.log('resized successfully');
      }
    };

    window.addEventListener('resize', hideMenu);

    return ()=>{
      window.removeEventListener('remove',hideMenu);
    }

  });
  return (
    <>
    <Navbar  toggle={toggle} />
    <Dropdown isOpen={isOpen} toggle={toggle} />
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu" component={menu} />
        <Route path="/about" component={about} />
        <Route path="/contact" component={contact} />
      </Switch>
    <Footer />
    </>
  );
}

export default App;
