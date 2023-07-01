import React from 'react';
import { setData } from '../../store/slices/dataSlice';
import { useDispatch } from "react-redux";
import { Container } from 'react-bootstrap';
import styles from './navbar.module.scss';

function Navbara() {
  const dispatch = useDispatch();
    return (
        <Container className={styles.container}>
          <button onClick={()=> dispatch(setData({url:'https://jsonplaceholder.typicode.com/posts'}))} className={styles.button}>Posts</button>
          <button onClick={()=> dispatch(setData({url:'https://jsonplaceholder.typicode.com/albums'}))} className={styles.button}>Photos</button>
          <button onClick={()=> dispatch(setData({url:'https://jsonplaceholder.typicode.com/todos'}))} className={styles.button}>Todos</button>
        </Container>
    );
}

export default Navbara;
