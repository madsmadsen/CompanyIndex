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
import { Link } from "react-router-dom";
import { History } from "history";

interface ICompanyListState {
  companies: ICompany[];
  modalOpen: boolean;
}

interface ICompanyListProps {
  history: History
}

interface ICompany {
  id: number;
  name: string;
  cvr: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  created_at: string;
  updated_at: string;
}

export class CompanyList extends React.Component<ICompanyListProps, ICompanyListState>
{

  constructor(props: ICompanyListProps)
  {
    super(props);

    this.state = {
      companies: [],
      modalOpen: false
    };
  }

  public componentDidMount()
  {
    this.refreshList();
  }

  public componentWillUpdate(nextProps: {}, nextState: ICompanyListState)
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

  public render()
  {
    return (
      <React.Fragment>
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
                      <tr onClick={() => this.props.history.replace(`/company/${c.id}`)}>
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
    )
  }
}