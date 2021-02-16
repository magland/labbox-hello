import { createExtensionContext, LabboxProvider, WorkspaceInfo } from 'labbox';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HelloPlugin } from './extensions/pluginInterface';
import registerExtensions from './registerExtensions';

const extensionContext = createExtensionContext<HelloPlugin>()
registerExtensions(extensionContext)

const workspaceInfo: WorkspaceInfo = {
  workspaceName: null,
  feedUri: null,
  readOnly: null
}

ReactDOM.render(
  <React.StrictMode>
    <LabboxProvider extensionContext={extensionContext} workspaceInfo={workspaceInfo}>
      <App />
    </LabboxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

