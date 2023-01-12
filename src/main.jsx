import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'theme-ui';
import { theme } from './components/Shared/theme';
import { App } from './App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
