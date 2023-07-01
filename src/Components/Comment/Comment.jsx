import React from 'react';
import styles from './comment.module.scss'
function Comment({body,name,email}) {
    return (
        <div className={styles.container}>
            <div className={styles.body}>{body}</div>
           <div className={styles.contacts}>
            <div className={styles.name}>{name}</div>
            <div className={styles.email}>{email}</div>
           </div>
            
        </div>
    );
}

export default Comment;