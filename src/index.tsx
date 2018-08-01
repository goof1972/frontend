
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.css';
import PhraseListComponent from './PhraseListComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <PhraseListComponent />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
