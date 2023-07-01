import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { getRequest, getRequestQuantityElements } from '../../ApiRequest/GetRequest';
import Pagination from '../../Components/Pagination/Pagination';
import {useSelector} from "react-redux";
import Posts from '../../Components/Posts/Posts';
import Todos from '../Todos/Todos';
import Album from '../Album/Album';
import Photos from '../Photos/Photos';
import styles from './mainContent.module.scss'
function MainContent() {
    const [data, setData] = useState([])
    const [users, setUsers] = useState([])

    const [currentPage, setCurrentPage] = useState(0);
    const [limitElement, setLimitElement] = useState(10);
    const [quantityElements, setQuantityElements] = useState()

    let flag=false;
    const onChangePage = (number) => {
        setCurrentPage(number);
    };

    let content = [];
    let url=useSelector((state) => state.data.url);
    async function callGetData() {
        try {
            setQuantityElements((await getRequestQuantityElements('https://jsonplaceholder.typicode.com/posts')).length);
            const dataPosts = await getRequest(url, currentPage, limitElement);
            const dataUsers = await getRequest('https://jsonplaceholder.typicode.com/users');
            setData(dataPosts)
            setUsers(dataUsers)
        } catch (err) {
        }
    }

    useEffect(() => {
        if (currentPage > (quantityElements / limitElement)) {
            setCurrentPage(1);
        }
        callGetData();
    }, [currentPage, limitElement, url])

    function composePost(data) {
        return users.find(user => user.id === data.userId);
    }

    switch(url){
        case 'https://jsonplaceholder.typicode.com/posts':
            content = data.map((item) => (
                <Posts
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    body={item.body}
                    author={composePost(item).name}
                />
            ));
            break;
        case 'https://jsonplaceholder.typicode.com/albums':
            console.log(data);
            content = data.map((item) => (
                <Album
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    author={composePost(item).name}
                />
            ));
            break;
        case 'https://jsonplaceholder.typicode.com/todos':
            content = data.map((item) => (
                <Todos
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    completed={item.completed}
                />
            ));
            break;
            case 'https://jsonplaceholder.typicode.com/photos':
                flag=true;
                content = data.map((item) => (
                    <Photos
                        key={item.id}
                        id={item.id}
                        photo={item.thumbnailUrl}
                        title={item.title}
                    />
                ));
                break;
            default:
    }
    


    return (
        <Container className={styles.container}>
        {flag?  <div className={styles.gridBlock}>{content}</div>:
          <ul>
                {content}
            </ul>
        }
            <div className={styles.pagination} >
                <Pagination currentPage={currentPage} pageCount={quantityElements / limitElement} limitElement={limitElement} quantityElements={quantityElements} onChangePage={onChangePage} />
                <select onChange={(event) => setLimitElement(event.target.value)} className={styles.select}>
                    <option >10</option>
                    <option >20</option>
                    <option >50</option>
                    <option >100</option>
                    <option >все</option>
                </select>
            </div>
        </Container>
    );
}

export default MainContent;