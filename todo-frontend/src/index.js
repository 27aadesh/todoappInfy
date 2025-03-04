import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
  applicationId: 'a778701f-8f43-454b-9962-919af0f69d27',
  clientToken: 'pub9f1076348e3a647c2424296c3739fdb1',
  site: 'datadoghq.com',
  service: 'todoapp_frontend',
  env: 'todoapp',
  version: '1.0.0',
  allowedTracingUrls: ["https://get-tasks.dhondhu.online", "https://delete-task.dhondhu.online", "https://add-task.dhondhu.online"],
  sessionSampleRate: 100,
  sessionReplaySampleRate: 100, // if not specified, defaults to 100
  trackResources: true,
  trackLongTasks: true,
  trackUserInteractions: true,
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
