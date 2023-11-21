// ES2015 modules - newer standardization of require()
// export/ import classes/data/functions between JS files.  
import React from 'react';
import Pokegame from "./Pokegame";

function App() {
  return (
    <div className="App">
      <Pokegame/>
    </div>
  )
}

export default App;
