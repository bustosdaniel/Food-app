import React from 'react'
import '../select/index.css'

export default function Select() {
  return (
    <div className="section-select">
      <select className="section-select-options" name="value1" id="">
        <option value="value1">Price: Low to High</option>
        <option selected>Price: High to Low</option>
        <option>Rate: Low to High</option>
        <option>Rate: High to Low</option>
      </select>
    </div>
  )
}
