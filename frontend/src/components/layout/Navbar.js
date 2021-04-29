import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            
    <div className="navigation">
      <div className="container">
        <nav className="nav">
          <div className="nav__hamburger">
            <svg>
              <use xlinkHref="./images/sprite.svg#icon-menu"></use>
            </svg>
          </div>

          <div className="nav__logo">
            <a href="/" className="scroll-link">
              PHONE
            </a>
          </div>

          <div className="nav__menu">
            <div className="menu__top">
              <span className="nav__category">PHONE</span>
              <a href="#" className="close__toggle">
                <svg>
                  <use xlinkHref="./images/sprite.svg#icon-cross"></use>
                </svg>
              </a>
            </div>
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#header" className="nav__link scroll-link">Home</a>
              </li>
              <li className="nav__item">
                <a href="#category" className="nav__link scroll-link">Category</a>
              </li>
              <li className="nav__item">
                <a href="#news" className="nav__link scroll-link">Blog</a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link scroll-link">Contact</a>
              </li>
            </ul>
          </div>

          <div className="nav__icons">
            <a href="#" className="icon__item">
              <svg className="icon__user">
                <use xlinkHref="./images/sprite.svg#icon-user"></use>
              </svg>
            </a>

            <a href="#" className="icon__item">
              <svg className="icon__search">
                <use xlinkHref="./images/sprite.svg#icon-search"></use>
              </svg>
            </a>

            <a href="#" className="icon__item">
              <svg className="icon__cart">
                <use xlinkHref="./images/sprite.svg#icon-shopping-basket"></use>
              </svg>
              <span id="cart__total">0</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
        )
    }
}
