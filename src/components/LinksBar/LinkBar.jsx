import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import cn from 'classnames';
import styles from './LinkBar.module.scss';

const LinkBar = () => {

  const location = useLocation();

  function classForLink(pathname) {
    return cn(
      styles.page_link,
      (location.pathname === pathname) && styles.page_link__active,
    )
  }

  // TODO: избавится от inline-стилей
  return (
    <Row className="links-container" style={{
      textAlign: "center",
      borderBottom: "1px",
      borderBottomColor: "grey",
      paddingTop: "2rem",
      paddingBottom: "2rem"
    }}>
      <Col className="col-converter-link" md={6}>
        <Link to="/" className={classForLink('/')}>
          <i class="bi bi-currency-exchange" style={{ padding: "4px" }}></i>
          Converter
        </Link>
      </Col>
      <Col className="col-currencies-link" md={6}>
        <Link to="/currencies" className={classForLink('/currencies')}>
          <i class="bi bi-graph-up" style={{ padding: "4px" }}></i>
          Currencies
        </Link>
      </Col>
    </Row>
  );
}

export default LinkBar;