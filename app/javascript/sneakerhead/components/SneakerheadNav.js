import React, { Component } from 'react';
import { Nav, Form, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/sneakerhead.css';

export default class SneakerheadNav extends Component {
  // propTypes: {
  //   onSubmit: React.PropTypes.func.isRequired,
  // }

  constructor(props) {
    super(props);
    this.state = {query: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({query: event.target.value});
    console.log(this.state.query)
  }

  handleSubmit(event) {
    this.props.onSubmit(this.state.query, event);
    event.preventDefault();
  }

  render() {
    return (
      <Nav className="navbar navbar-light bg-faded">

      <Form className="form-inline" onSubmit={(event) => this.handleSubmit(event)}>

          <Input type="select" className="form-control phaph-switcher">
            <option>Sneakerhead </option>
            <option>Horologism </option>
          </Input>

          &nbsp;&nbsp;

          <div className="input-group">
            <Input type="text" className="form-control" placeholder="Search for..." value={this.state.value} onChange={this.handleChange} />
            <span className="input-group-btn">
              <Button type="button" className="btn btn-secondary" onClick={(event) => this.handleSubmit(event)}>
                <i className="fa fa-search"></i>
              </Button>
            </span>
          </div>

        </Form>
      </Nav>
    );
  }
}

// i think this is necessary but not sufficient...
SneakerheadNav.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
