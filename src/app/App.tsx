import { Provider } from 'react-redux';
import Calendar from '../components/Calendar';
import './App.css'
import { store } from './rootReducer';


function App() {
  return (
    <Provider store={store}>
      <Calendar />
    </Provider>
  );
}
 
export default App;
