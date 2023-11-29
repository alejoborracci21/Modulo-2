import React from 'react';
// import styledAnimals from './Animals.module.css'

export default class Animals extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {animals} = this.props

    return <div>
      {animals.map((animal, id) => (
        <div key={id}>
        <h5>{animal.name}</h5>
        <img
          src={animal.image}
          alt={animal.name}
          width="300px"
        />
        <span>{animal.specie}</span>
      </div>
      ))}
    </div>
  }
}
