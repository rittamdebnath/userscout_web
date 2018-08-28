import React, { Component } from 'react';
import axios from 'axios';

import PropertyDetails from '../../components/PropertyDetails';

class Property extends Component {
  state = {
    properties: []
  }

  componentDidMount() {
    axios.get('https://housing-app.herokuapp.com/property/list')
      .then(response => this.setState({properties: response.data.properties}));
  }

  render() {
    const { properties } = this.state;
    
    const propertiesView = properties.map(property => 
      <PropertyDetails 
        key={property._id} 
        data={property} />
    );
    
    return (
      <div>{propertiesView}</div>
    );
  }
}

export default Property;