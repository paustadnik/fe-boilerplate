import { Outlet } from 'react-router-dom';
import styles from './App.module.css';
import {Navbar} from './components/Navbar'

function App() {
  return (
    <div className={styles.textColor}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
