import { usePlugins } from 'labbox';
import React from 'react';
import { HelloPlugin } from './extensions/pluginInterface';

function App() {
  const plugins = usePlugins<HelloPlugin>()
  return (
    <div className="App">
      <h2>Plugin views:</h2>
      {
        plugins.map(p => (
          <div style={{border: 'solid 1px black'}}>
            <h3>Type: {p.type}</h3>
            <h3>Name: {p.name}</h3>
            <h3>Label: {p.label}</h3>
            <p.component
              text="Testing"
            />
          </div>
        ))
      }
    </div>
  );
}

export default App;
