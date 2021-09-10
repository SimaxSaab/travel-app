/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { Container } from '@material-ui/core';
import React, { useState } from 'react';
import gitHubLogo from '../../assets/images/GitHub-Mark-32px.png';
import rssLogo from '../../assets/images/rs-school-js.svg';
import Modal from '../Modal/Modal';
import './Footer.scss';
import SlavaImage from '../../assets/images/team/slava.jpg';
import NastiaImage from '../../assets/images/team/nastia.jpg';
import MashaImage from '../../assets/images/team/masha.jpg';
import MaksimImage from '../../assets/images/team/maksim.jpg';

export default function Footer() {
  const [modalActive, setModalActive] = useState(false);
  const [image, setImage] = useState();
  return (
    <>
      <div className="footer" color="primary">
        <Container>
          <div className="footer-info">
            <div className="authors">
              <p className="year">2021 &copy;</p>
              <div className="author" onMouseOver={() => { setModalActive(true); setImage(NastiaImage); }}>
                <img src={gitHubLogo} alt="GitHub logo" />
                <a href="https://github.com/AStashevskaya" target="_blank" rel="noreferrer">AStashevskaya</a>
              </div>
              <div className="author" onMouseOver={() => { setModalActive(true); setImage(MashaImage); }}>
                <img src={gitHubLogo} alt="GitHub logo" />
                <a href="https://github.com/mariyafrantsava" target="_blank" rel="noreferrer">mariyafrantsava</a>
              </div>
              <div className="author" onMouseOver={() => { setModalActive(true); setImage(MaksimImage); }}>
                <img src={gitHubLogo} alt="GitHub logo" />
                <a href="https://github.com/SimaxSaab" target="_blank" rel="noreferrer">SimaxSaab</a>
              </div>
              <div className="author" onMouseOver={() => { setModalActive(true); setImage(SlavaImage); }}>
                <img src={gitHubLogo} alt="GitHub logo" />
                <a href="https://github.com/SlavaJSFE" target="_blank" rel="noreferrer">SlavaJSFE</a>
              </div>
            </div>
            <a href="https://rs.school/js/">
              <img src={rssLogo} alt="rsschool-logo" className="rss-logo" />
            </a>
          </div>
        </Container>
      </div>
      <Modal active={modalActive} setActive={setModalActive} image={image} />
    </>
  );
}
