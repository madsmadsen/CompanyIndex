import React, { FormEvent } from "react";
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

import 'whatwg-fetch';

interface ICreateCompanyProps {
    isActive: boolean;
    toggleModal: () => void;
}
interface ICreateCompanyState {
    name: string;
    cvr: string;
    address: string;
    city: string;
    country: string;
    phone?: string;
    valid: boolean;
    isCreating: boolean;
}

export class CreateCompany extends React.Component<ICreateCompanyProps, ICreateCompanyState>
{
    constructor(props: ICreateCompanyProps)
    {
        super(props);

        this.state = {
            name: null,
            cvr: null,
            address: null,
            city: null,
            country: null,
            phone: null,
            valid: false,
            isCreating: false
        };
    }

    public componentWillReceiveProps(nextProps: ICreateCompanyProps)
    {
        if (nextProps.isActive)
            this.setState({
                name: "",
                cvr: "",
                address: "",
                city: "",
                country: "",
                phone: "",
                valid: false,
                isCreating: false
            });
    }

    public handleNameChange = (e: FormEvent<HTMLInputElement>) =>
    {
        this.setState({ name: (e.target as HTMLInputElement).value });
    }

    public handleCvrChange = (e: FormEvent<HTMLInputElement>) =>
    {
        this.setState({ cvr: (e.target as HTMLInputElement).value });
    }

    public handleAddressChange = (e: FormEvent<HTMLInputElement>) =>
    {
        this.setState({ address: (e.target as HTMLInputElement).value });
    }

    public handleCityChange = (e: FormEvent<HTMLInputElement>) =>
    {
        this.setState({ city: (e.target as HTMLInputElement).value });
    }

    public handleCountryChange = (e: FormEvent<HTMLInputElement>) =>
    {
        this.setState({ country: (e.target as HTMLInputElement).value });
    }

    public handlePhoneChange = (e: FormEvent<HTMLInputElement>) =>
    {
        this.setState({ phone: (e.target as HTMLInputElement).value });
    }

    public componentWillUpdate(nextProps: ICreateCompanyProps, nextState: ICreateCompanyState)
    {
        if (nextState.name !== this.state.name ||
            nextState.address !== this.state.address ||
            nextState.city !== this.state.city ||
            nextState.country !== this.state.country ||
            nextState.cvr !== this.state.cvr)
            this.setState({
                valid: !nextState.name ||
                    !nextState.address ||
                    !nextState.city ||
                    !nextState.country ||
                    !nextState.cvr
            });
    }
    
    public handleCreate = () =>
    {
        this.setState({isCreating: true});
         fetch('/api/companies.json', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }).then(res =>
        {
            this.setState({isCreating: false});
            this.props.toggleModal();
        })
    }

    public render()
    {
        const isLoading = this.state.isCreating ?
            "is-loading" :
            "";
        return (
        <Modal isActive={this.props.isActive}>
          <ModalBackground />
          <ModalCard>
            <ModalCardHeader>
              <ModalCardTitle>Create Company</ModalCardTitle>
              <Delete onClick={this.props.toggleModal} />
            </ModalCardHeader>
            <ModalCardBody>
              <Field>
                <Label>Name *</Label>
                <Control>
                  <Input value={this.state.name}
                    type="text"
                    tabIndex={1}
                    placeholder="Company name"
                    onChange={this.handleNameChange} />
                </Control>
              </Field>
              <Field>
                <Label>CVR *</Label>
                <Control>
                  <Input onChange={this.handleCvrChange} value={this.state.cvr} type="text" tabIndex={2} placeholder="CVR" />
                </Control>
              </Field>
              <Field>
                <Label>Address *</Label>
                <Control>
                  <Input onChange={this.handleAddressChange} value={this.state.address} type="text" tabIndex={3} placeholder="Address" />
                </Control>
              </Field>
              <Field>
                <Label>City *</Label>
                <Control>
                  <Input onChange={this.handleCityChange} value={this.state.city} type="text" tabIndex={4} placeholder="City" />
                </Control>
              </Field>
              <Field>
                <Label>Country *</Label>
                <Control>
                  <Input onChange={this.handleCountryChange} value={this.state.country} type="text" tabIndex={5} placeholder="Country" />
                </Control>
              </Field>
              <Field>
                <Label>Phone <small className="is-small has-text-grey-light has-text-weight-light">Optional</small></Label>
                <Control>
                  <Input onChange={this.handlePhoneChange} value={this.state.phone} type="text" tabIndex={6} placeholder="Phone" />
                </Control>
              </Field>
            </ModalCardBody>
            <ModalCardFooter className="field is-grouped is-grouped-right">
              <Control>
                <Button tabIndex={8}
                        onClick={this.props.toggleModal}>Cancel</Button>
              </Control>
              <Control>
                <Button type="submit"
                    isColor="success" 
                    tabIndex={7}
                    disabled={this.state.valid}
                    className={isLoading}
                    onClick={this.handleCreate}>Create Company</Button>
              </Control>
            </ModalCardFooter>
          </ModalCard>
        </Modal>
        )
    }
}