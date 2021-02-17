import { createExtensionContext, LabboxProvider } from 'labbox';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import config from './config.json';
import { HelloPlugin } from './extensions/pluginInterface';
import registerExtensions from './registerExtensions';

const extensionContext = createExtensionContext<HelloPlugin>()
registerExtensions(extensionContext)

const apiConfig = {
  webSocketUrl: `ws://${window.location.hostname}:${config.webSocketPort}`,
  baseSha1Url: `http://${window.location.hostname}:${config.httpPort}/sha1`
}

ReactDOM.render(
  <React.StrictMode>
    <LabboxProvider
      extensionContext={extensionContext}
      apiConfig={apiConfig}
    >
      <App />
    </LabboxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

