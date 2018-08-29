import React, { Component } from 'react';
import axios from 'axios';

class NewProperty extends Component {

  state = {
    title: '',
    about: '',
    amenities: "55' Smart TV, Wifi",
    thumbnail: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F467502291415617536%2FSP8_ylk9.png&f=1',
    price: 1250,
    location: 'Hyderabad',
    available_rooms: '4',
    pets: true
  }

  handleInput = (event, key) => {
    this.setState({
      [key]: event.target.value
    });
  }

  onSubmit = () => {
    const { title, about, amenities, price, thumbnail, location, available_rooms, pets } = this.state;
    const request = {
      amenities,
      title,
      price,
      thumbnail,
      about,
      location,
      available_rooms,
      pets
    }
    axios.post('https://housing-app.herokuapp.com/property/add', request)
      .then(response => {
        if (response.data.message === 'success') {
          this.setState({ title: '', about: ''});
          alert('Item added successfully. Refresh the page scroll down to see the newly added item.')
        }
      })
  }

  render() {
    return(
      <div className='d-flex flex-column align-items-center'>
        <div className='my-2'>
          <input 
            placeholder='Title'
            value={this.state.title}
            onChange={event => this.handleInput(event, 'title')}
            />
        </div>
        <div className='my-2'>
          <input
            placeholder='About'
            value={this.state.about}
            onChange={event => this.handleInput(event, 'about')}
            />
        </div>
        <div className='my-3'>
          <button onClick={this.onSubmit}>Submit</button>
        </div>
      </div>
    )
  }

}

export default NewProperty;