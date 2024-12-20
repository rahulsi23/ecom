import React from "react";
import Header from "../../components/admin/admin_common/Header/Header";
import Sidebar from "../../components/admin/admin_common/Sidebar/Sidebar";
import { Row, Col } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Row>
        <Col md={3}>
          {" "}
          <Sidebar />{" "}
        </Col>
        <Col md={9}>
          {" "}
          <div> {children} </div>
        </Col>
      </Row>
    </div>
  );
};

export default Layout;
