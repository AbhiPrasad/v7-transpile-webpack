import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://username@domain/123",
  tracesSampleRate: 1,
  integrations: [new BrowserTracing()]
});

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);

module.hot.accept();
