import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/index';

console.log(store)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);

