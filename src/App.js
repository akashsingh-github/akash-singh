import React, {useEffect, useState} from "react";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Routers from "./router";
function App(){
  const [isDarkTheme, setIsDarkTheme] = useState(false);


  return(
    <>
      <button
        className="theme-button"
        onClick={() => setIsDarkTheme(!isDarkTheme)}
        className={isDarkTheme ? 'theme-button dark-theme': 'theme-button light-theme'}
      >
        <Brightness4Icon/>
      </button>
      {/* {loading ? <Component/>  : <Loading/>} */}
      <div className="main-wrapper">
        {/* <Nav isDarkTheme={isDarkTheme} /> */}
        <Routers isDarkTheme={isDarkTheme}/>
      </div>
    </>
  )
}
export default App;