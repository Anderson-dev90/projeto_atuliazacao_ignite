import styles from './Post.module.css';

export function Post() {
    return (

        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/199947995?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Anderson Conceição</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="23 de Maio às 12:20" dateTime="2023-05-11">Publicado há 1 hora</time>

            </header>

            <div className={styles.content}>
                <p>Acabei de Realizar meu primeiro Projeto em React</p>
                <p>👉<a href=""> anderson.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>{' '}
                    

                </p>
                </div>
                

                <form className ={styles.commentForm} >
                    <strong>Deixe seu Feedbanck</strong>


                <textarea 
                placeholder='Deixe seu comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>

                </form>

                

        </article>

        
    )
}