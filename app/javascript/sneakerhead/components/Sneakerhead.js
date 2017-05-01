import React, { Component } from 'react';
import SneakerheadNav from './SneakerheadNav';
import SneakerheadBody from './SneakerheadBody';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/sneakerhead.css';

// initial state
var RESULTS = [
  {asin: '001', title: "Moby Dick", url: "http://moby.dick"},
  {asin: '002', title: "The Bluest Eye", url: "http://bluest.eye" },
  {asin: '003', title: "Americal Pastoral", url: "http://american.pastoral" }
];

export default class Sneakerhead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: RESULTS
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }

  onSubmit(query, event) {
    event.preventDefault();

    fetch('/api/v1/search.json', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'},
        body: JSON.stringify({query: query})
    })
    .then((response) => response.json())
    .then((responseJson) => {
      var items = responseJson.results;

      this.setState({
        results: items,
      });

    })
    .catch((error) => {
      console.log('request failed', error)
    })
  }

  render() {
    return (
      <div>
        <SneakerheadNav onSubmit={(query, event) => this.onSubmit(query, event)}/>
        <SneakerheadBody results={this.state.results} />
      </div>
    );
  }
}
