import styles from './Tags.module.css';

const Tags = ({ data }) => {
    // const tagsNames = data
    return (
        <div className={styles.tagGroup}>
            {data.map((tagData, index) => {
                { console.log(Array.isArray(tagData)) }
                return (
                    Array.isArray(tagData)
                        ? tagData.map((tag, index1) => (
                            <div key={index1} className={styles.tag}>

                                {tag}
                            </div>
                        )) : (
                            <div key={index} className={styles.tag}>
                                {tagData}
                            </div>
                        )
                );
            })}
        </div>
    );
}

export default Tags;