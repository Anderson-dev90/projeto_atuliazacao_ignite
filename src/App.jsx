
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';
import { Comment } from './components/Comment';
import styles from './App.module.css';

import './global.css';

export function App() {


  return (
    <div>


      <div>
        <Header />
        



        <div className = {styles.wrapper}>
        <Sidebar />

        
        <main>
          <Post />
          
        </main>

        
 

        </div>
      </div>



    </div>

    



  )
}

export default App
