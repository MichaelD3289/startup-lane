import React from "react";
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="footer secondary-bg">
      <div className="container footer__container">
        <h1 className="footer__title">Helping ideas become reality</h1>
        <div className="footer__row--one">
          <div className="footer__info footer__info--about">
            <h3 className="footer__info__title primary-clr">
              About our company
            </h3>
            <p className="footer__info__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
          <div className="footer__row--two">
            <div className="footer__info">
              <h3 className="footer__info__title primary-clr">
                Getting around
              </h3>
              <ul className="footer__info__list">
                <li className="footer__info__list__item">
                  <Link to="/" className="footer__info__list__link">
                    Home
                  </Link>
                </li>
                <li className="footer__info__list__item">
                <Link to="/saved" className="footer__info__list__link">
                    Saved
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__info">
              <h3 className="footer__info__title primary-clr">News & Info</h3>
              <ul className="footer__info__list">
                <li className="footer__info__list__item">
                  <a href="#" className="footer__info__list__link">
                    Lorem ipsum
                  </a>
                </li>
                <li className="footer__info__list__item">
                  <a href="#" className="footer__info__list__link">
                    dolor
                  </a>
                </li>
                <li className="footer__info__list__item">
                  <a href="#" className="footer__info__list__link">
                    sit amet
                  </a>
                </li>
                <li className="footer__info__list__item">
                  <a href="#" className="footer__info__list__link">
                    consectetur
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__info">
              <h3 className="footer__info__title primary-clr">Resources & links</h3>
              <ul className="footer__info__list">
                <li className="footer__info__list__item">
                  <a href="#" className="footer__info__list__link">
                    Lorem ipsum
                  </a>
                </li>
                <li className="footer__info__list__item">
                  <a href="#" className="footer__info__list__link">
                    dolor
                  </a>
                </li>
                <li className="footer__info__list__item">
                  <a href="#" className="footer__info__list__link">
                    sit amet
                  </a>
                </li>
                <li className="footer__info__list__item">
                  <a href="#" className="footer__info__list__link">
                    consectetur
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
