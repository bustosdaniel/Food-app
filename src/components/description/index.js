import React from 'react'
import '../description/index.css'
import { useParams } from 'react-router-dom'

const tableFood = [
  {
    id: 1,
    name: 24,
    information: '28 cm size'
  },
  {
    id: 2,
    name: 728,
    information: 'Energy'
  },
  {
    id: 3,
    name: 1054,
    information: 'Calo'
  },
  {
    id: 4,
    name: 68,
    information: 'Fat'
  },
  {
    id: 5,
    name: 25,
    information: 'Gluxit'
  },
  {
    id: 6,
    name: 548,
    information: 'Protein'
  }
]

const ingredients = [
  {
    id: 1,
    name: 'Egg'
  },
  {
    id: 2,
    name: 'Milk Protein'
  },
  {
    id: 3,
    name: 'Sesame'
  },
  {
    id: 4,
    name: 'Lactose'
  },
  {
    id: 5,
    name: 'Gluten'
  },
  {
    id: 6,
    name: 'Mustard'
  }
]

export default function Description({ ...props }) {
  const params = useParams()
  return (
    <div className="description-container">
      <section className="description-info-content">
        <div className="description-info">
          <h3>Description</h3>
          <h3>Reviews ({props.rate})</h3>
        </div>
        <div className="description">
          <p>
            Although the legendary Double Burger really needs no introduction,
            please allow us… Tucked in between three soft buns are two all-beef
            patties, cheddar cheese, ketchup, onion, pickles and iceberg
            lettuce. Hesburger’s own paprika and cucumber mayonnaise add the
            crowning touch. Oh baby!
          </p>
          <div className="description-data">
            <div className="data-content-description">
              <strong>{params.food}</strong>
              <p>28 cm size</p>
            </div>
            {tableFood.map((item) => (
              <div key={item.id} className="data-content">
                <p>{item.name}</p>
                <p className="data-content-info">{item.information}</p>
              </div>
            ))}
          </div>
          <div className="description-data data">
            <div className="data-content-description">
              <strong>Ingredients</strong>
            </div>
            {ingredients.map((item) => (
              <div className="data-p" key={item.id}>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
