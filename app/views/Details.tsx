import React from "react";

export class Details extends React.Component
{
    public render()
    {
        return (
            <section className="section">
                <div className="container">
                    <div className="columns">
                    <div className="column">
                        <nav className="breadcrumb">
                        <ul>
                            <li><a href="#">Companies</a></li>
                            <li className="is-active"><a href="#">LessThinking</a></li>
                        </ul>
                        </nav>
                    </div>
                    </div>
                    <div className="columns">
                    <div className="column">
                        <div className="card">
                        <div className="card-header">
                            <div className="card-header-title">Basic information</div>
                        </div>
                        <div className="card-content">
                            <div className="columns is-multiline">
                            <div className="column is-one-third is-uppercase has-text-weight-semibold">Name</div>
                            <div className="column is-two-thirds">LessThinking</div>
                            <div className="column is-one-third is-uppercase has-text-weight-semibold">CVR</div>
                            <div className="column is-two-thirds">30878167</div>
                            <div className="column is-one-third is-uppercase has-text-weight-semibold">Address</div>
                            <div className="column is-two-thirds">Ørnsturpvej 27</div>
                            <div className="column is-one-third is-uppercase has-text-weight-semibold">City</div>
                            <div className="column is-two-thirds">Horsens</div>
                            <div className="column is-one-third is-uppercase has-text-weight-semibold">Country</div>
                            <div className="column is-two-thirds">Denmark</div>
                            <div className="column is-one-third is-uppercase has-text-weight-semibold">Phone</div>
                            <div className="column is-two-thirds">24225343</div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="column is-one-third">
                        <div className="card">
                        <div className="card-header">
                            <div className="card-header-title">Current risk assessment</div>
                        </div>
                        <div className="card-content">
                            <span className="tag is-info">Pending</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}