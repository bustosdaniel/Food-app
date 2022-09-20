import React from 'react'
import {
  mdiCart,
  mdiAccountCircle,
  mdiHome,
  mdiSilverware,
  mdiNewspaperVariantMultipleOutline,
  mdiStore
} from '@mdi/js'
import Icon from '../icon'
import '../header/index.css'
import { Section } from '../../catalogs'
import { useParams } from 'react-router-dom'

export default function Header() {
  const params = useParams()

  return (
    <header className="app-header">
      <nav className="nav-container">
        <div className="nav-content">
          <div className="nav-content-info">
            <figure className="nav-content-logo">
              <img
                src="https://food-g-app.web.app/static/media/logo.59e734ae.svg"
                alt="logo"
              />
            </figure>
            <ul>
              <li>
                <Icon path={mdiHome} /> Pages
              </li>
              <li>
                <Icon path={mdiSilverware} /> Order online
              </li>
              <li>
                <Icon path={mdiNewspaperVariantMultipleOutline} /> News
              </li>
              <li>
                <Icon path={mdiStore} /> Store locations
              </li>
            </ul>
          </div>
          <div className="nav-content-images">
            <div className="images-info">
              <Icon path={mdiCart} size="35px" />
              <div className="nav-signin">
                <Icon path={mdiAccountCircle} size="35px" />
                <p>Sign In</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <h1>{Section[params.food]}</h1>
      <div className="info-container">
        <p>Home</p>
        <span className="stripe">----</span>
        <p>Shop</p>
        <span className="stripe">----</span>
        <p>{Section[params.food]}</p>
      </div>
    </header>
  )
}
