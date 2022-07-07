// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import { About } from './components/About';
import { NavBar } from './components/NavBar';
import { TextForm } from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); // it specifies whether dark mode is enabled or not.
  const [alert, setAlert] = useState(null);  //it will allow us to set the alert.

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = () =>{
    if (mode === 'light') {
      setMode("dark")
      // document.body.style.backgroundColor = "grey";
      document.body.style.backgroundColor = "#05354b";
      showAlert("Dark Mode enabled", "success")
      document.title = "TextUtils - DarkMode"

      
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode enabled", "success")
      document.title = "TextUtils - LightMode"

      
    }
  }

  return (
    <> 
       <Router>
     {/* <NavBar title="TextUtils2s" aboutText="AboutText" /> */}
     {/* <NavBar /> */}
    
     <NavBar title="TextUtils" aboutText= "About Us" mode={mode} toggleMode={toggleMode} />
     <Alert alert={alert} />
     <div className="container my3">
     {/* <TextForm showAlert={showAlert} heading="Enter the Text to Analyze" mode={mode} /> */}
     {/* <About /> */}
     <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
     <TextForm showAlert={showAlert} heading="Enter the Text to Analyze" mode={mode} />

          </Route>
        </Switch>
     </div>
     </Router>
     
    </>

  );
}

export default App;
