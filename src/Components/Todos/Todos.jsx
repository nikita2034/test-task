import React, { useState } from 'react';
import styles from './todos.module.scss';
import { IoIosCheckboxOutline, IoIosCheckbox } from 'react-icons/io';
import { MdModeEdit, MdOutlineModeEdit } from 'react-icons/md';
import { BsCircle, BsCheckCircle } from 'react-icons/bs';
function Todos({ title, completed }) {
    const [show, setShow] = useState(completed);
    const [edit, setEdit] = useState(false)

    console.log(completed)
    return (
        <div className={styles.container}>
            <div className={styles.block}>
                {show ? <BsCircle onClick={() => setShow(!show)} className={styles.icon} /> : <BsCheckCircle onClick={() => setShow(!show)} className={styles.icon} />}
                <div style={{textDecoration: 'line-through'}} className={styles.title}>{title}</div>
            </div>

            <div className={styles.block}>
                {edit ? <MdModeEdit onClick={() => setEdit(!edit)} className={styles.icon} /> : <MdOutlineModeEdit onClick={() => setEdit(!edit)} className={styles.icon} />}
                {/* <IoIosCheckboxOutline onClick={()=>setShow(!show)} className={styles.icon}/>:<IoIosCheckbox onClick={()=>setShow(!show)} className={styles.icon}/> */}
            </div>
        </div>
    );
}

export default Todos;