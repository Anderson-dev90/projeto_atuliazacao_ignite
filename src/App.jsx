
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';
import { Comment } from './components/Comment';
import styles from './App.module.css';

import './global.css';



const posts = [
  {
    id:1,
    author:{
      avatarUrl:'https://avatars.githubusercontent.com/u/199947995?v=4',
      name: 'Anderson Conceição',
      role: 'Full Stacker'
    },
    content: [
      {type:'paragraph' , content: 'Fala galera,'},
      {type:'paragraph' , content:'Acabei de Realizar meu primeiro Projeto em React'},
      {type:'link', content: 'Anderson.fullstacker/projetorocket'},
    
    ],
    publishedAt: new Date('2025-05-23 14:12:00'),
  },

{
  id:2,
  author:{
    avatarUrl:'https://upload.wikimedia.org/wikipedia/pt/a/ae/Kratos_GoW_Ragnarok.jpg',
    name: 'Kratos',
    role: 'Matador de Deuses e Pai(em construção)'
  },
  content: [
    {type:'paragraph' , content: 'Hum...'},
    {type:'paragraph' , content:'Estou tentando...'},
    {type:'link', content: 'Kratos.Matador/Deuses'},
  
  ],
  publishedAt: new Date('2025-05-11 14:12:00'),
},
]





export function App() {


  return (
    <div>


      <div>
        <Header />
        



        <div className = {styles.wrapper}>
        <Sidebar />

        
        <main>
          {posts.map (posts => {
            return( 
            <Post
                  key={posts.id}
                  author={posts.author}
                  content={posts.content}
                  publishedAt={posts.publishedAt}

            />
            )
          })}
          
        </main>

        
 

        </div>
      </div>



    </div>

    



  )
}

export default App
