import React from 'react'
import { mdiMapMarker } from '@mdi/js'
import Icon from '../icon'
import '../card/index.css'

export default function Card({ handleClick, ...props }) {
  return (
    <div
      className="section-images"
      key={props.id}
      onClick={() => handleClick(props)}
      role="button"
    >
      <div className="section-image-info">
        <figure className="image">
          <img src={props.img} alt="images" />
        </figure>
        <h3>{props.name}</h3>
        <p>{props.dsc}</p>
        <div className="section-country">
          <div className="section-country-name">
            <Icon path={mdiMapMarker} color="#ff514e" />
            <span>{props.country}</span>
          </div>
          <span>${props.price}</span>
        </div>
      </div>
    </div>
  )
}
