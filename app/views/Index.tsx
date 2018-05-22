import React from "react";
import { Navbar,
  Container,
  NavbarBrand,
  NavbarItem,
  Section,
  Columns,
  Column,
  Breadcrumb,
  BreadcrumbItem,
  Field,
  Label,
  Control,
  Input,
  Icon,
  Button,
  Table,
  Modal,
  ModalBackground,
  ModalCard,
  ModalCardHeader,
  ModalCardTitle,
  ModalCardBody,
  ModalCardFooter,
  Delete } from "bloomer";
import prefix from "../config";
import { HashRouter, Link, Route } from "react-router-dom";
import { CompanyList } from "components/CompanyList";
import { Details } from "views/Details";

export class Index extends React.Component<{}, {}> {

  constructor(props: {})
  {
    super(props);
  }

  public render() {
    return (
      <HashRouter>
        <React.Fragment>
          <Navbar className="has-shadow is-fixed-top">
            <Container>
              <NavbarBrand>
                <Link to="/">
                  <NavbarItem>
                    CompanyIndex
                  </NavbarItem>
                </Link>
              </NavbarBrand>
            </Container>
          </Navbar>

          <Route exact path="/" component={CompanyList} />
          <Route path="/company/:id" component={Details} />
        </React.Fragment>
      </HashRouter>
    );
  }
}