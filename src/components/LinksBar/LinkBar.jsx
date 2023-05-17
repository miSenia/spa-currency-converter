import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import cn from 'classnames';
import styles from './LinkBar.module.scss';

const LinkBar = () => {

  const location = useLocation();

  return (
    <Row className="links-container" style={{ textAlign: "center", borderBottom: "1px", borderBottomColor: "grey", paddingTop: "2rem" }}>
      <Col md={6}>
        {/* <NavLink to="/" className={styles.page_link} activeClassName={styles.page_link__active}><i class="bi bi-currency-exchange" style={{ padding: "4px" }}></i>Converter</NavLink>  */}
        <Link to="/" className={cn(styles.page_link, { [styles.page_link__active]: location.pathname === '/' })}><i class="bi bi-currency-exchange" style={{ padding: "4px" }}></i>Converter</Link>
      </Col>
      <Col md={6}>
        {/* <NavLink to="/currencies" className={styles.page_link} activeClassName={styles.page_link__active}><i class="bi bi-graph-up" style={{ padding: "4px" }}></i>Currencies</NavLink> */}
        <Link to="/currencies" className={cn(styles.page_link, { [styles.page_link__active]: location.pathname === '/currencies' })}><i class="bi bi-graph-up" style={{ padding: "4px" }}></i>Currencies</Link>
      </Col>
    </Row>
  );
};


export default LinkBar;