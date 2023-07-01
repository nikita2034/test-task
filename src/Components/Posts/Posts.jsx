import React, { useEffect, useState } from 'react';
import { getRequestQuantityElements } from '../../ApiRequest/GetRequest';
import { AiOutlineDelete, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { MdOutlineModeEdit, MdModeEdit } from 'react-icons/md';
import { BiComment, BiSolidComment } from 'react-icons/bi';
import { IoIosCheckboxOutline, IoIosCheckbox } from 'react-icons/io';
import Comment from '../Comment/Comment';
import styles from './posts.module.scss';
function Posts({ title, author, body, id }) {
    let comments = [];
    const [showCommemts, setShowComments] = useState(false)
    const [data, setData] = useState([])
    const [edit, setEdit] = useState(false)
    const [favorite, setFavorite] = useState(false)
    const [color, setColor] = useState('')
    const [checkbox, setCheckbox] = useState(false)
    async function callGetData() {
        try {
            const data = await getRequestQuantityElements(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
            setData(data)
        } catch (err) {
        }
    }

    useEffect(() => {
        callGetData();
    }, [])

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

    comments = data.map((item) => (
        <Comment
            key={item.id}
            name={item.name}
            body={item.body}
            email={item.email}
        />


    ));

    return (
        <div className={styles.container} style={{ backgroundColor: color }}>


            {!edit ?
                <>
                    <div className={styles.header}>
                        <div className={styles.title}>{title}</div>
                        {checkbox ? <IoIosCheckboxOutline onClick={() => setCheckbox(!checkbox)} className={styles.icon} /> : <IoIosCheckbox onClick={() => setCheckbox(!checkbox)} className={styles.icon} />}
                    </div>
                    <div className={styles.body}>{body}</div>
                    <div className={styles.author}>{author}</div></>
                : <>
                    <input className={styles.title} value={title} />
                    <input className={styles.body} value={body} />
                    <input className={styles.author} value={author} />

                </>
            }
            {
                showCommemts && <div className={styles.comments}>
                    {comments}
                </div>
            }
            <div className={styles.block}>
                {showCommemts ? <BiSolidComment onClick={() => setShowComments(!showCommemts)} className={styles.icon} /> : <BiComment onClick={() => setShowComments(!showCommemts)} className={styles.icon} />
                }
                <AiOutlineDelete className={styles.icon} />

                {!edit ? <MdOutlineModeEdit onClick={() => setEdit(!edit)} className={styles.icon} /> : <MdModeEdit onClick={() => setEdit(!edit)} className={styles.icon} />}
                {favorite ?
                    <AiFillStar onClick={() => addFavorite()} className={styles.icon} /> : <AiOutlineStar className={styles.icon} onClick={() => addFavorite()} />}

            </div>
        </div >
    );
}

export default Posts;