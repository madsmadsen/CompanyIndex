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
import { CreateCompany } from "components/CreateCompany";
import prefix from "../config";

interface IIndexState {
  modalOpen: boolean;
  companies: ICompany[];
}

interface ICompany {
  name: string;
  cvr: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  created_at: string;
  updated_at: string;
}

export class Index extends React.Component<{}, IIndexState> {

  constructor(props: {})
  {
    super(props);

    this.state = {
      modalOpen: false,
      companies: []
    };
  }

  public componentDidMount()
  {
    this.refreshList();
  }

  public componentWillUpdate(nextProps: {}, nextState: IIndexState)
  {
    if (!nextState.modalOpen && nextState.modalOpen !== this.state.modalOpen)
    {
      this.refreshList();
    }
  }

  public toggleModal = () =>
  {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  public refreshList = () =>
  {
    fetch(`${prefix}/api/companies.json`)
      .then(res => 
      {
        return res.json();
      })
      .then((res: ICompany[]) => {
        this.setState({companies: res});
      });
  }

  public render() {
    return (
      <React.Fragment>
        <Navbar className="has-shadow is-fixed-top">
          <Container>
            <NavbarBrand>
              <NavbarItem href="#">
                CompanyIndex
              </NavbarItem>
            </NavbarBrand>
          </Container>
        </Navbar>
        <Section>
          <Container>
            <Columns>
              <Column>
                <Breadcrumb>
                  <ul>
                    <BreadcrumbItem isActive>
                      <a>Companies</a>
                    </BreadcrumbItem>
                  </ul>
                </Breadcrumb>
              </Column>
              <Column isHidden>
                <Field>
                  <Control hasIcons="left" className="is-round">
                    <Input type="text" placeholder="Search companies" />
                    <Icon isSize="small" isAlign="left">
                      <i className="fas fa-search"></i>
                    </Icon>
                  </Control>
                </Field>
              </Column>
              <Column isSize="narrow">
                <Button onClick={this.toggleModal} isColor="primary">
                  Create
                </Button>
              </Column>
            </Columns>
            <Columns>
              <Table isStriped isFullWidth className="is-hoverable">
                <thead>
                  <tr>
                    <th className="is-narrow">Status</th>
                    <th>Name</th>
                    <th>CVR</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>Created</th>
                    <th>Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.companies.map(c => {
                    return (
                      <tr>
                        <td><span className="tag is-info">Pending</span></td>
                        <td>{c.name}</td>
                        <td>{c.cvr}</td>
                        <td>{c.city}</td>
                        <td>{c.country}</td>
                        <td>{c.created_at}</td>
                        <td>{c.updated_at}</td>
                      </tr>
                    )
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <th className="is-narrow">Status</th>
                    <th>Name</th>
                    <th>CVR</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>Created</th>
                    <th>Updated</th>
                  </tr>
                </tfoot>
              </Table>
            </Columns>
          </Container>
        </Section>
        <CreateCompany isActive={this.state.modalOpen} toggleModal={this.toggleModal} />
      </React.Fragment>
    );
  }
}