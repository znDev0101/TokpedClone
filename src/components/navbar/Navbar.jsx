import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMagnifyingGlass, faCartShopping, faBars, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faBell } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import SearchBarHeader from '../searchBarHeader/SearchBarHeader';
import styled from 'styled-components';

function Navbar() {
  const Header = styled.header`
    display: grid;
    grid-area: nv;
    @media (width < 500px) {
      width: 100vw;
      padding: 0.5rem 0.8rem;
      grid-template-rows: 3rem 5rem;
    }
  `;

  const NavbarOne = styled.div`
    display: grid;
    @media (width < 500px) {
      grid-template-columns: 60vw 30vw;
      column-gap: 1rem;
      align-items: center;
    }
    @media (width < 400px) {
      grid-template-columns: repeat(2, 50vw);
    }

    @media (width < 330px) {
      grid-template-columns: 40vw 60vw;
    }
  `;

  const NavbarTwo = styled.div`
    display: grid;

    @media (width < 500px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto auto;
    }
  `;

  const LocationHeaderOnMobile = styled.div`
    display: flex;
    column-gap: 0.5rem;
    margin-top: 0.4rem;
  `;

  const DescriptionAddress = styled.span`
    font-weight: bold;
  `;

  const PromoHeader = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    margin: 0.5rem 0 1rem 0;
    grid-row: 2;
  `;

  const ProfileContent = styled.div`
    display: flex;
    column-gap: 0.6rem;
    align-items: center;
  `;

  const NameProfile = styled.div`
    row-gap: 1rem;
  `;

  const ButtonPrimary = styled.button`
    width: 6rem;
    place-content: end;
    background-color: #00aa5b;
    color: #ffffff;
    padding: 0.5rem 0.8rem;
    font-weight: bold;
    border: none;
    border-radius: 0.5rem;
  `;

  const UlNav = styled.ul`
    display: grid;
    column-gap: 1.2rem;
    grid-template-columns: repeat(4, max-content);
    place-content: center;
    @media (width < 400px) {
      place-content: start;
      margin-left: 1rem;
    }
  `;

  const NavList = styled.li`
    list-style: none;
  `;

  const NavLink = styled(Link)`
    text-decoration: none;
  `;

  return (
    <>
      {screen.width < 500 ? (
        <Header>
          <NavbarOne>
            <SearchBarHeader iconSearch={faMagnifyingGlass} />
            <nav>
              <UlNav>
                <NavList>
                  <NavLink>
                    <FontAwesomeIcon className="fa-lg" icon={faEnvelope} />
                  </NavLink>
                </NavList>
                <NavList>
                  <NavLink>
                    <FontAwesomeIcon className="fa-lg" icon={faBell} />
                  </NavLink>
                </NavList>
                <NavList>
                  <NavLink>
                    <FontAwesomeIcon className="fa-lg" icon={faCartShopping} />
                  </NavLink>
                </NavList>
                <NavList>
                  <NavLink>
                    <FontAwesomeIcon className="fa-lg" icon={faBars} />
                  </NavLink>
                </NavList>
              </UlNav>
            </nav>
          </NavbarOne>
          {/* Navbar Two */}

          <NavbarTwo>
            <LocationHeaderOnMobile>
              <FontAwesomeIcon icon={faLocationDot} />
              <p>
                Di kirim ke <DescriptionAddress>Jakarta Selatan</DescriptionAddress>{' '}
              </p>
            </LocationHeaderOnMobile>
            <PromoHeader>
              <ProfileContent>
                <div>
                  <img src="https://images.tokopedia.net/img/home/login_widget/toped_login.png?ect=4g" alt="profile" width={30} height={30} />
                </div>
                <NameProfile>
                  <p>Hai, Tropper!</p>
                  <p>Akses semua fitur, yuk -</p>
                </NameProfile>
              </ProfileContent>
              <ButtonPrimary type="button">Masuk</ButtonPrimary>
            </PromoHeader>
          </NavbarTwo>
        </Header>
      ) : (
        <Header>
          <h1>Hello 2</h1>
        </Header>
      )}
    </>
  );
}

export default Navbar;
