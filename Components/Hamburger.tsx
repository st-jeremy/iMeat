import Image from "next/image";
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

function Hamburger() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState('right');

  return (
    <>
     
      <Button onClick={onOpen} left style={ menuStyle } className={ styles.hamburger}>
        < BiMenu />
      </Button>

      <Drawer 
        placement='right'
        onClose={onClose} 
        isOpen={isOpen}
        className={ styles.drawer}
      >

        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            <Image src='/sendme-logo.png' width={70}  height={29} alt='sendme logo'/>
          </DrawerHeader>

          <DrawerBody width='100%' styles={ {
            marginBottom: '1rem',
            fontWeight: 500
          }}>

            <Link href="/WhoWeAre">
              Our Products 
              <IoMdArrowDropdownCircle style={{
                display: 'inline-block',
                paddingTop: '.2rem'
                }} />
            </Link> <br />
            <br />

            <Link href="/">
              For Businesses 
              <IoMdArrowDropdownCircle style={{
              display: 'inline-block',
              paddingTop: '.2rem'
              }} />
            </Link> <br />
            <br />

            <Link href="/Career">
              Our Culture
              <IoMdArrowDropdownCircle style={{
              display: 'inline-block',
              paddingTop: '.2rem'
              }} />
            </Link>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
};