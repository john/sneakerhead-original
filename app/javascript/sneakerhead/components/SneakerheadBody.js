import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';

export default class SneakerheadBody extends Component {

  // how do we deal with propTypes nowadays?

  render() {
    var rows = [];
    this.props.results.forEach(function(result) {
      rows.push(<li key={result.asin}><a href={result.url}>{result.title}</a></li>);
    });
    return (
      <Container>
        <ol>
          {rows}
        </ol>
      </Container>
    );
  }
}