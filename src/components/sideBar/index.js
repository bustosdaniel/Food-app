import React from 'react'
import '../sideBar/index.css'
import Icon from '../icon'
import {
  mdiStar,
  mdiStarOutline,
  mdiHamburger,
  mdiBaguette,
  mdiFoodCroissant,
  mdiGlassMugVariant,
  mdiPizza,
  mdiFoodVariant,
  mdiGrill,
  mdiCandy,
  mdiCupcake,
  mdiFoodDrumstick,
  mdiIceCream,
  mdiPigVariant,
  mdiSausage,
  mdiFoodSteak
} from '@mdi/js'
import { useNavigate, useParams } from 'react-router-dom'

const infoFood = [
  {
    id: 1,
    url: '/burgers',
    title: 'burgers',
    name: 'Burgers',
    icon: mdiHamburger
  },
  {
    id: 2,
    url: '/breads',
    title: 'breads',
    name: 'Breads',
    icon: mdiBaguette
  },
  {
    id: 3,
    url: '/sandwiches',
    title: 'sandwiches',
    name: 'Sandwiches',
    icon: mdiFoodCroissant
  },
  {
    id: 4,
    url: '/drinks',
    title: 'drinks',
    name: 'Drinks',
    icon: mdiGlassMugVariant
  },
  {
    id: 5,
    url: '/pizzas',
    title: 'pizzas',
    name: 'Pizzas',
    icon: mdiPizza
  },
  {
    id: 6,
    url: '/best-foods',
    title: 'best-foods',
    name: 'Best-foods',
    icon: mdiFoodVariant
  },
  {
    id: 7,
    url: '/bbqs',
    title: 'bbqs',
    name: 'Bbqs',
    icon: mdiGrill
  },
  {
    id: 8,
    url: '/desserts',
    title: 'desserts',
    name: 'Desserts',
    icon: mdiCupcake
  },
  {
    id: 9,
    url: '/chocolates',
    title: 'chocolates',
    name: 'Chocolates',
    icon: mdiCandy
  },
  {
    id: 10,
    url: '/fried-chicken',
    title: 'fried-chicken',
    name: 'Fried-chicken',
    icon: mdiFoodDrumstick
  },
  {
    id: 11,
    url: '/ice-cream',
    title: 'ice-cream',
    name: 'Ice-cream',
    icon: mdiIceCream
  },
  {
    id: 12,
    url: '/porks',
    title: 'porks',
    name: 'Porks',
    icon: mdiPigVariant
  },
  {
    id: 13,
    url: '/sausages',
    title: 'sausages',
    name: 'Sausages',
    icon: mdiSausage
  },
  {
    id: 14,
    url: '/steaks',
    title: 'steaks',
    name: 'Steaks',
    icon: mdiFoodSteak
  }
]

export default function SideBar() {
  const navigate = useNavigate()
  const params = useParams()

  const handleFilter = (filter) => {
    navigate({
      pathname: filter
    })
  }

  return (
    <section className="section-content-menu">
      <div className="menu-content">
        <h2>Popular</h2>
        <ul>
          {infoFood.map((item) => (
            <li
              key={item.id}
              onClick={() => handleFilter(item.url)}
              role="button"
              className={params.food === item.title ? 'selected' : ''}
            >
              <Icon path={item.icon} color="rgb(201 201 201)" />
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="price-content">
        <h2>Price</h2>
        <ul>
          <li>
            <input type="radio" id="100" value="100" name="mount" />
            <label htmlFor="100">Under $100</label>
          </li>
          <li>
            <input type="radio" id="50" value="50" name="mount" />
            <label htmlFor="50">$50 to $100</label>
          </li>
          <li>
            <input type="radio" id="under" value="under" name="mount" />
            <label htmlFor="under">Under $50</label>
          </li>
          <li>
            <input type="radio" id="above" value="above" name="mount" />
            <label htmlFor="above">Above $100</label>
          </li>
        </ul>
      </div>
      <div className="rate-content">
        <h2>Rate</h2>
        <ul>
          <li>
            <Icon path={mdiStar} color="#fbb403" />
            <Icon path={mdiStar} color="#fbb403" />
            <Icon path={mdiStar} color="#fbb403" />
            <Icon path={mdiStar} color="#fbb403" />
            <Icon path={mdiStar} color="#fbb403" />& up
          </li>
          <li>
            <Icon path={mdiStar} color="#fbb403" />
            <Icon path={mdiStar} color="#fbb403" />
            <Icon path={mdiStar} color="#fbb403" />
            <Icon path={mdiStar} color="#fbb403" />
            <Icon path={mdiStarOutline} color="#fbb403" />& up
          </li>
          <li>
            <Icon path={mdiStar} color="#fbb403" />
            <Icon path={mdiStar} color="#fbb403" />
            <Icon path={mdiStar} color="#fbb403" />
            <Icon path={mdiStarOutline} color="#fbb403" />
            <Icon path={mdiStarOutline} color="#fbb403" />& up
          </li>
        </ul>
      </div>
    </section>
  )
}
