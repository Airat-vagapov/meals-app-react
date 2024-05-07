import styles from './Tags.module.css';

const Tags = ({ data }) => {
    // const tagsNames = data
    return (
        <div className={styles.tagGroup}>
            {data.map((tagData, index) => (
                <div key={index} className={styles.tag}>
                    {tagData}
                </div>
            ))}
        </div>
    );
}

export default Tags;