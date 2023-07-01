import React from 'react'
import styles from './photos.module.scss';
 function Photos({photo,title}) {
  return (
    <div className={styles.container}>
     <img src={photo}/>
     <div>{title}</div>
    </div>
  )
}
export default Photos