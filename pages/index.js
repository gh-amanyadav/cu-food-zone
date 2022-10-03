import Navbar from './components/Navbar';
import Dashboard from "./components/Dashboard";

import styles from '../styles/Home.module.css'

import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <Navbar />
        <Dashboard />
    </div>
  )
}
