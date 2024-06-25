import styles from './YoutubeButton.module.css'

const YoutubeButton = ({ src }) => {
    return (
        <>
            <a href={src} className={styles.button}>
                <span className="material-symbols-outlined">
                    play_circle
                </span>
                Youtube
            </a>
        </>
    )
}

export default YoutubeButton;