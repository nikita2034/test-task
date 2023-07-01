import React from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import {PiCodesandboxLogoLight} from 'react-icons/pi';
import styles from './header.module.scss';
const Header = () => {
  return (
    <div>
      <Container className={styles.container}>
        <Row className={styles.row}>
          <Col lg={3} md={2} sm={4} className={styles.col}>
            <PiCodesandboxLogoLight className={styles.logo}/> 
          </Col>
          <Col lg={9} md={10} sm={8} className={styles.col}>
            <h1 className="text-center my-3">Test task</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;