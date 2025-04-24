import styles from './Comment.module.css'
    
    export function Comment(){
        return(
            <div className= {styles.comment}>

            <img src="https://www.correiobraziliense.com.br/cbradar/wp-content/uploads/2025/02/Design-sem-nome-17.png" alt="" />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}></div>
                <header>

                </header>
                <p>
                    Muito Bom, Anderson !!
                </p>
            </div>





            </div>

        )
    }