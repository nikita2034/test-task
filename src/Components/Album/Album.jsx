import React,{useState} from 'react';
import { IoIosCheckboxOutline, IoIosCheckbox } from 'react-icons/io';
import { AiOutlineDelete, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { MdOutlineModeEdit, MdModeEdit } from 'react-icons/md';
import { setData } from '../../store/slices/dataSlice';
import { useDispatch } from "react-redux";
import styles from './album.module.scss';
function Album({title,author}) {
    const dispatch = useDispatch();
    const [checkbox, setCheckbox] = useState(false)
    const [edit, setEdit] = useState(false)
    const [favorite, setFavorite] = useState(false)
    const [color, setColor] = useState('')
    function addFavorite() {
        setColor('#adb4c7')
        setFavorite(!favorite);
        if (favorite === true) {
            setColor('#adb4c7')
        }
        if (favorite === true) {
            setColor('#E7E8EF')
        }
    }
    return (
        <div style={{ backgroundColor: color }} className={styles.container}>
           <div className={styles.header}>
             <div className={styles.title} onClick={()=> dispatch(setData({url:'https://jsonplaceholder.typicode.com/photos'}))}>{title}</div>
             {checkbox ?  <IoIosCheckbox onClick={() => setCheckbox(!checkbox)} className={styles.icon} />:<IoIosCheckboxOutline onClick={() => setCheckbox(!checkbox)} className={styles.icon} /> }
           </div> 
            <div className={styles.author}>{author}</div>
            <div className={styles.block}>
            <AiOutlineDelete className={styles.icon} />
            {!edit ? <MdOutlineModeEdit onClick={() => setEdit(!edit)} className={styles.icon} /> : <MdModeEdit onClick={() => setEdit(!edit)} className={styles.icon} />}
                {favorite ?
                    <AiFillStar onClick={() => addFavorite()} className={styles.icon} /> : <AiOutlineStar className={styles.icon} onClick={() => addFavorite()} />}
            </div>
        </div>
    );
}

export default Album;