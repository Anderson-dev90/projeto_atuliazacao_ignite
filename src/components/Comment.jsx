import { ThumbsDown, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
    
    export function Comment({content}){
        return(
            <div className= {styles.comment}>
            <Avatar  hasBorder={false} src="https://files.tecnoblog.net/wp-content/uploads/2021/02/the-last-of-us-part-2-ellie-1060x596.jpg" alt="" />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                <header>
                        <div className= {styles.authorAndTime}>
                            <strong>Ellie</strong>
                            <time title="23 de Maio às 12:20" dateTime="2023-05-11">Cerca de 1 hora </time>
                        </div>

                        <button title ="Deletar comentario">
                            <Trash size={20} />
                        </button>
                </header>

                <p>{content}</p>
            </div>

            <footer>
                <button>
                    <ThumbsDown />
                    Aplaudir <span>20</span>
                </button>
                
            </footer>
        </div>
    </div>
        )
    }