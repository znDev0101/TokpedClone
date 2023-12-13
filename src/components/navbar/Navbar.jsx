import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMagnifyingGlass, faCartShopping, faBars, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faBell } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import SearchBarHeader from '../searchBarHeader/SearchBarHeader';
import ButtonPrimary from '../../components/button/Button';

function Navbar() {
  // const HeaderNav = styled.header`
  //   width: 100%;
  //   height: 500px;
  //   display: grid;
  //   grid-area: nv;
  //   grid-row-gap: 1.3rem;
  //   grid-template-rows: 3rem 5rem;
  // `;

  // // style navbar one

  // const NavbarOne = styled.div`
  //   display: grid;
  //   grid-template-columns: 60% 40%;
  //   padding: 0.8rem 1rem;
  //   align-items: center;
  //   grid-column-gap: 1rem;
  //   @media (width > 900px) {
  //     grid-template-columns: repeat(2, 1fr);
  //   }
  // `;

  // const ComponentSearchBar = styled.div`
  //   width: 94%;
  //   position: relative;
  // `;

  // const SeacrhBarNav = styled.input`
  //   width: 80%;
  //   height: 70%;
  //   padding: 0.7rem 1.5rem;
  //   border-radius: 8px;
  //   border: 1px solid #857a7aeb;
  // `;

  // const IconSearchBar = styled(FontAwesomeIcon)`
  //   position: absolute;
  //   top: 12px;
  //   left: 6px;
  //   color: #5a5353eb;
  // `;

  // const UlNav = styled.ul`
  //   display: grid;
  //   grid-template-columns: repeat(4, 1fr);
  //   @media (width > 900px) {
  //     grid-template-columns: repeat(5, 1fr);
  //   }
  // `;

  // const ListNav = styled.li`
  //   text-decoration: none;
  // `;

  // // end style navbar one

  // // STYLE NAVBAR TWO ON MOBILE
  // const NavbarTwoOnMobile = styled.div`
  //   display: grid;
  //   padding: 0 1rem;
  //   grid-row-gap: 0.8rem;
  //   grid-template-columns: repeat(2, 1fr);
  //   grid-template-rows: repeat(2, max-content);
  // `;

  // const LocationUserAddress = styled.div`
  //   display: grid;
  //   grid-template-columns: repeat(3, max-content);
  //   grid-column-gap: 0.7rem;
  // `;

  // const CurrentLocationUser = styled.span`
  //   font-weight: bold;
  // `;

  // const LoginUser = styled.div`
  //   display: grid;
  //   grid-template-columns: max-content 1fr;
  //   grid-row: 2;
  //   grid-column-gap: 27%;
  // `;

  // const ProfileUserContent = styled.div`
  //   display: flex;
  //   column-gap: 0.7rem;
  //   align-items: center;
  // `;

  // const ProfileUser = styled.div`
  //   display: flex;
  // `;

  // const ProfileImageUser = styled.img`
  //   width: 40px;
  //   height: 40px;
  // `;

  // const MessageUser = styled.p`
  //   font-weight: bold;
  // `;

  // const MessageUserProfile = styled.div`
  //   margin-top: 0.2rem;
  //   color: #6d7588;
  // `;

  // // END STYLE NAVBAR TWO ON MOBILE

  // const NavbarTwoOnDesktop = styled.div``;

  return (
    <>
      <header className="w-full h-[500px] grid gap-y-5 grid-rows-[3rem_5rem]  grid-area-nav ">
        {/* Navbar One */}
        <div className="grid grid-cols-[60%_40%] p-[0.8rem_1rem] align-middle gap-x-[1rem]">
          {screen.width < 500 ? (
            <>
              <div className="relative">
                <input type="text" placeholder="Cari di Tokopedia" className="border-[4px_solid_black]" />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              <nav>
                <ul className="grid grid-cols-[repeat(4,1fr)]">
                  <li>
                    <Link>
                      <FontAwesome></FontAwesome>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <FontAwesome></FontAwesome>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <FontAwesome></FontAwesome>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <FontAwesome></FontAwesome>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <FontAwesome></FontAwesome>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <FontAwesome></FontAwesome>
                    </Link>
                  </li>
                </ul>
              </nav>
            </>
          ) : null}
        </div>
        {/* End Navbar one */}
      </header>
      {/* <HeaderNav>
        <NavbarOne>
          {screen.width < 500 ? (
            <ComponentSearchBar>
              <SeacrhBarNav placeholder="Cari di Tokopedia" />
              <IconSearchBar icon={faMagnifyingGlass} />
            </ComponentSearchBar>
          ) : (
            <p>Download Tokopedia</p>
          )}
          <nav>
            <UlNav>
              {screen.width < 500 ? (
                <>
                  <ListNav>
                    <Link>
                      <FontAwesomeIcon icon={faEnvelope} size="lg" />
                    </Link>
                  </ListNav>
                  <ListNav>
                    <Link>
                      <FontAwesomeIcon icon={faBell} size="lg" />
                    </Link>
                  </ListNav>
                  <ListNav>
                    <Link>
                      <FontAwesomeIcon icon={faCartShopping} size="lg" />
                    </Link>
                  </ListNav>
                  <ListNav>
                    <Link>
                      <FontAwesomeIcon icon={faBars} size="lg" />
                    </Link>
                  </ListNav>
                </>
              ) : (
                <>
                  <ListNav>
                    <Link></Link>
                  </ListNav>
                  <ListNav>
                    <Link></Link>
                  </ListNav>
                  <ListNav>
                    <Link></Link>
                  </ListNav>
                  <ListNav>
                    <Link></Link>
                  </ListNav>
                  <ListNav>
                    <Link></Link>
                  </ListNav>
                </>
              )}
            </UlNav>
          </nav>
        </NavbarOne>
        {screen.width < 500 ? (
          <NavbarTwoOnMobile>
            <LocationUserAddress>
              <FontAwesomeIcon icon={faLocationDot} />
              <div>
                Dikirim ke <CurrentLocationUser>Pancoran, Jakarta Selatan</CurrentLocationUser>{' '}
              </div>
            </LocationUserAddress>
            <LoginUser>
              <ProfileUserContent>
                <ProfileUser>
                  <ProfileImageUser src="https://images.tokopedia.net/img/home/login_widget/toped_login.png?ect=4g" />
                </ProfileUser>
                <div>
                  <MessageUser>Hai, Tropper!</MessageUser>
                  <MessageUserProfile>Akses semua fitur, yuk</MessageUserProfile>
                </div>
              </ProfileUserContent>
              <ButtonPrimary primary={'primary'} />
            </LoginUser>
          </NavbarTwoOnMobile>
        ) : (
          <NavbarTwoOnDesktop></NavbarTwoOnDesktop>
        )}
      </HeaderNav> */}
    </>
  );
}

export default Navbar;
