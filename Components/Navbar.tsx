import Image from "next/image";
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import { BsArrowRight } from 'react-icons/bs';
import { BiPhoneCall } from 'react-icons/bi';
import { MdOutlineMail } from 'react-icons/md';
import { BiMenu } from 'react-icons/bi';


import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  RadioGroup,
  Button,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  HamburgerIcon
} from '@chakra-ui/react';

import React from "react";

const Navbar = () => {
  const menu ={
    margin: 'auto 50%'
  }
  const menuButton = {
    backgroundColor: 'white',
    height: '100%'
  };
  const arrowDown = {
    display: 'inline-block',
    paddingTop: '.2rem',
    margin: 0
  };
  const menuList = {
    color: 'black',
    fontSize: '14pt',
    minWidth: '25rem'
  };
  const menuItem = {
    color: 'black',
    marginTop: '1rem',
    display: 'block',
    paddingLeft: '2rem'
  };
  const itemImg ={ 
    display: 'inline',
    marginBottom: '-.3rem'
  };
  const itemIcon ={
    display: 'inline-block',
    marginBottom: '-.2rem'
  }
  const itemSpan = {
    marginTop: '-2.5rem',
    marginRight: '.4rem',
    fontSize: '12pt',
    fontWeight: 500
  }
  const span = {
    display: 'flex',
    color: 'grey',
    fontSize: '9pt',
    marginTop: '.4rem'
  }
  const menuImage = {
    display: 'flex',
    flexDirection: 'row'
  }


 


  return (
    <div className={ styles.navbar }>
      <Link href='/'>
        <Image src='/sendme-logo.png' width={70}  height={29} className={ styles.menu } alt='sendme logo'/>
      </Link>

      <Hamburger className={ styles.hamburger } />

      <div className={ styles.menuBar }>
        <Menu style={ menu }>
          <MenuButton as={Button} style={ menuButton }>
            Our Products 
            <IoMdArrowDropdownCircle style={ arrowDown } />
          </MenuButton>

          <MenuList style={ menuList } >
            <MenuGroup title='Our Products'>
              <MenuDivider style={{
                width: '90%',
                margin: 'auto',
                borderTop: '2px solid #f7f7f7'
                }}
              />

              <MenuItem style={ menuItem } >
                <div>
                  <Image
                    boxSize='2rem'
                    borderRadius='full'
                    src='/meat-icon.png'
                    alt='Simon the pensive'
                    mr='12px'
                    width={ 30 }
                    height={ 30 }
                    style={ itemImg }
                  /> &nbsp; 
                  <span style={ itemSpan }>Cow Meat </span>
                  <BsArrowRight style={ itemIcon } />
                </div>
                <div>
                  <span style={ span }>Boneless Beef, Agemawo, Minced Meat etc</span>
                </div>
              </MenuItem>
              
              <MenuItem style={ menuItem }>
                <div>
                  <Image
                    boxSize='2rem'
                    borderRadius='full'
                    src='/meat-icon.png'
                    alt='Simon the pensive'
                    mr='12px'
                    width={ 30 }
                    height={ 30 }
                    style={ itemImg }
                  /> &nbsp; 
                  <span style={ itemSpan }>Goat Meat</span>
                  <BsArrowRight style={ itemIcon } />
                </div>
                <div>
                  <span style={ span }>Goat Assorted, Goat meat etc</span>
                </div>
              </MenuItem>

              <MenuItem style={ menuItem }>
                <div>
                  <Image
                    boxSize='2rem'
                    borderRadius='full'
                    src='/meat-icon.png'
                    alt='Simon the pensive'
                    mr='12px'
                    width={ 30 }
                    height={ 30 }
                    style={ itemImg }
                  /> &nbsp; 
                  <span style={ itemSpan }>Chicken</span>
                  <BsArrowRight style={ itemIcon } />
                </div>
                <div>
                  <span style={ span }>Chicken lap, Full Chicken etc</span>
                </div>
              </MenuItem>

              <MenuItem style={ menuItem }>
                <div>
                  <Image
                    boxSize='2rem'
                    borderRadius='full'
                    src='/fish-icon.png'
                    alt='Simon the pensive'
                    mr='12px'
                    width={ 30 }
                    height={ 30 }
                    style={ itemImg }
                  /> &nbsp; 
                  <span style={ itemSpan }>Fish</span>
                  <BsArrowRight style={ itemIcon } />
                </div>
                <div>
                  <span style={ span }>Hake, Titus</span>
                </div>
              </MenuItem>

              <MenuDivider />

              <MenuItem style={ menuItem } >Download our Mobile App</MenuItem>
              <MenuItem style={ menuImage } >
                <Image
                  boxSize='2rem'
                  src='/app-store.png'
                  alt='app-store'
                  mr='12px'
                  width={ 150 }
                  height={ 90 }
                />

                <Image
                  boxSize='2rem'
                  src='/google-play.png'
                  alt='google-play'
                  mr='12px'
                  width={ 150 }
                  height={ 90 }
                />
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>

        <Menu style={ menu }>
          <MenuButton as={Button} style={ menuButton }>
            For Businesses
            <IoMdArrowDropdownCircle style={ arrowDown } />
          </MenuButton>

          <MenuList style={ menuList } >
            <MenuGroup title='For Businesses'>
              <MenuDivider style={{
                width: '90%',
                margin: 'auto',
                borderTop: '2px solid #f7f7f7'
                }}
              />

              <MenuItem style={ menuItem }>
                <div>
                  <Image
                    boxSize='2rem'
                    borderRadius='full'
                    src='/B2B-icon.png'
                    alt='Simon the pensive'
                    mr='12px'
                    width={ 30 }
                    height={ 30 }
                    style={ itemImg }
                  /> &nbsp; 
                  <span style={ itemSpan }>Sendme for Businesses</span>
                  <BsArrowRight style={ itemIcon } />
                </div>
                <div>
                  <span style={ span }>Give your customers a mesmerizing food experience with the best meats. </span>
                </div>
              </MenuItem>

              <MenuDivider />

              <MenuItem style={ menuItem } >Reach Us</MenuItem>
              <MenuItem style={ menuImage } >
                <div style={{marginLeft: '1.2rem'}}>
                  <MdOutlineMail style={{
                    display: 'inline-block'
                    }} 
                  /> &nbsp;
                    b2b@sendme.ng
                </div>

                <div style={{marginLeft: '2rem'}}>
                  <BiPhoneCall style={{
                  display: 'inline-block',
                  }} /> &nbsp;
                  0815 950 6999
                </div>
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>

        <Menu style={ menu }>
          <MenuButton as={Button} style={ menuButton }>
            Our Culture
            <IoMdArrowDropdownCircle style={ arrowDown } />
          </MenuButton>

          <MenuList style={ menuList } >
            <MenuGroup title='Our Culture'>
              <MenuDivider style={{
                width: '90%',
                margin: 'auto',
                borderTop: '2px solid #f7f7f7'
                }}
              />

              <MenuItem style={ menuItem }>
                <Link href='/Career'>
                  <div>
                    <Image
                      boxSize='2rem'
                      borderRadius='full'
                      src='/career-icon.png'
                      alt='Career'
                      mr='12px'
                      width={ 30 }
                      height={ 30 }
                      style={ itemImg }
                    /> &nbsp; 
                    <span style={ itemSpan }>Career</span>
                    <BsArrowRight style={ itemIcon } />
                  </div>
                  <div>
                    <span style={ span }>Be a part of the drive for excellence. Join the amazing team of experts at Sendme.</span>
                  </div>
                </Link>
              </MenuItem>

              <MenuItem style={ menuItem }>
                <Link href='/WhoWeAre'>
                  <div>
                    <Image
                      boxSize='2rem'
                      borderRadius='full'
                      src='/career-icon.png'
                      alt='Career'
                      mr='12px'
                      width={ 30 }
                      height={ 30 }
                      style={ itemImg }
                    /> &nbsp; 
                    <span style={ itemSpan }>Who We Are</span>
                    <BsArrowRight style={ itemIcon } />
                  </div>
                  <div>
                    <span style={ span }>Explore who we are at Sendme, our passion and drive.</span>
                  </div>
                </Link>
              </MenuItem>

              <MenuDivider />

              <MenuItem style={ menuItem } >Reach Us</MenuItem>
              <MenuItem style={ menuImage } >
                <div style={{marginLeft: '1.2rem'}}>
                  <MdOutlineMail style={{
                    display: 'inline-block'
                    }} 
                  /> &nbsp;
                    help@sendme.ng
                </div>

                <div style={{marginLeft: '2rem'}}>
                  <BiPhoneCall style={{
                  display: 'inline-block',
                  }} /> &nbsp;
                  0815 950 6999
                </div>
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </div>
    </div>

  );
}
 
export default Navbar;