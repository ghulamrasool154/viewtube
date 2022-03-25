import logo from './logo.svg';
import './App.css';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import Components from './ModuleComponets/moduleComponents/Components';
import { useContext } from 'react';
import { ThemeContext } from '../src/ThemeDark'

function App() {

  const theme = useContext(ThemeContext);
  const darkmode = theme.state.darkmode;


  return (
    <div style={{ backgroundColor: darkmode ? '#111' : 'white' }}>

      <Components />

    </div>


  );
}

export default App;
