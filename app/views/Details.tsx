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
  Delete,
  Card,
  CardHeader,
  CardHeaderTitle } from "bloomer";
import prefix from "../config";
import { Link } from "react-router-dom";
import { CardContent } from "bloomer/lib/components/Card/CardContent";
import { RouteComponentProps } from "react-router-dom";

interface IDetailsState {
  isLoading: boolean;
  company: ICompany;
}

interface IDetailsProps extends RouteComponentProps<{ id: number }>
{}

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

interface ICompanyDTO {
  response: {
    data: ICompany;
  }
}

export class Details extends React.Component<IDetailsProps, IDetailsState>
{

  constructor(props: IDetailsProps)
  {
    super(props);

    this.state = {
      isLoading: true,
      company: null
    }
  }

  public componentDidMount()
  {
    fetch(`${prefix}/api/companies/${this.props.match.params.id}.json`)
      .then(res => 
      {
        return res.json();
      })
      .then((res: ICompanyDTO) => {
        this.setState({company: res.response.data, isLoading: false});
      });
  }

  public render()
  {
    if (this.state.isLoading === true)
      return (
        <Section>
          <Container>
            <Columns className="is-centered has-text-centered">
              <Column>
                <Button isColor="success"
                        className="is-loading"></Button>
              </Column>
            </Columns>
          </Container>
        </Section>
      )

    return (
      <Section>
        <Container>
          <Columns>
            <Column>
              <Breadcrumb>
                <ul>
                  <BreadcrumbItem>
                    <Link to={`/`}>
                      Companies
                    </Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem isActive>
                    <Link to={`/company/`}>
                      {this.state.company.name}
                    </Link>
                  </BreadcrumbItem>
                </ul>
              </Breadcrumb>
            </Column>
          </Columns>
          <Columns>
            <Column>
              <Card>
                <CardHeader>
                  <CardHeaderTitle>
                    Basic information
                  </CardHeaderTitle>
                </CardHeader>
                <CardContent>
                  <Columns isMultiline>
                    <Column className="is-one-third is-uppercase has-text-weight-semibold">
                      Name
                    </Column>
                    <Column className="is-two-thirds">
                      {this.state.company.name}
                    </Column>
                    <Column className="is-one-third is-uppercase has-text-weight-semibold">
                      CVR
                    </Column>
                    <Column className="is-two-thirds">
                      {this.state.company.cvr}
                    </Column>
                    <Column className="is-one-third is-uppercase has-text-weight-semibold">
                      Address
                    </Column>
                    <Column className="is-two-thirds">
                      {this.state.company.address}
                    </Column>
                    <Column className="is-one-third is-uppercase has-text-weight-semibold">
                      City
                    </Column>
                    <Column className="is-two-thirds">
                      {this.state.company.city}
                    </Column>
                    <Column className="is-one-third is-uppercase has-text-weight-semibold">
                      Country
                    </Column>
                    <Column className="is-two-thirds">
                      {this.state.company.country}
                    </Column>
                    <Column className="is-one-third is-uppercase has-text-weight-semibold">
                      Phone
                    </Column>
                    <Column className="is-two-thirds">
                      {this.state.company.phone}
                    </Column>
                  </Columns>
                </CardContent>
              </Card>
            </Column>
            <Column className="is-one-third">
              <Card>
                <CardHeader>
                  <CardHeaderTitle>
                    Current risk assessment
                  </CardHeaderTitle>
                </CardHeader>
                <CardContent>
                  <span className="tag is-info">Pending</span>
                </CardContent>
              </Card>
            </Column>
          </Columns>
        </Container>
      </Section>
    );
  }
}