import styles from './Tags.module.css';

const Tags = ({ data, color }) => {
    return (
        <div className={styles.tagGroup}>
            {data.map((tagData, index) => {
                return (
                    Array.isArray(tagData)
                        ? tagData.map((tag, index1) => (
                            <div key={index1} className={`${styles.tag} ${color === 'white' ? styles['tag--white'] : ''} `}>
                                {tag}
                            </div>
                        )) : (
                            <div key={index} className={`${styles.tag} ${color === 'white' ? styles['tag--white'] : ''} `}>
                                {tagData}
                            </div>
                        )
                );
            })}
        </div >
    );
}

export default Tags;