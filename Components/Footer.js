import Image from "next/image";
import styles from '../styles/Footer.module.css';
import { FaInstagramSquare } from 'react-icons/fa';
import { IoCall } from 'react-icons/io';
import { BsInstagram } from 'react-icons/bs';
import { BiPhoneCall } from 'react-icons/bi';
import { MdOutlineMail } from 'react-icons/md';
import { FaFacebook } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className={ styles.footer }>
      <Image src='/sendme-logo.png' width={142}  height={200} className={ styles.logo} alt='google play'/>

      <div className={ styles.row }>
        <div className={ styles.contactUs}>
          <h2>Contact Us</h2>
          <p>02, Olupitan Street, Ikolaba, Ibadan.</p>
          <p>
            <BiPhoneCall style={{
            display: 'inline-block',
            }} /> &nbsp;
            0815 950 6999
          </p>
          <p>
            <MdOutlineMail style={{
            display: 'inline-block'
            }} /> &nbsp;
            help@sendme.ng
          </p>
        </div>

        <div className={ styles.company}>
          <h2>Company</h2>
          <a href="">Career</a> <br />
          <a href="">Contact Us</a>
        </div>

        <div className={ styles.earnWithSendme}>
          <h2>Products</h2>
          <a href="">Earn with Sendme</a> <br />
          <a href="">Order on Sendme</a> <br />
          <a href="">Sendme for Business</a>
        </div>
      </div>

      <div className={ styles.getApp}>
        <p>Get the App:</p>
        
        <div className={ styles.store }>
          <Image src='/app-store-white.png' width={140}  height={130} alt='app store'/>
          <Image src='/google-play-white.png' width={140}  height={130} alt='google play'/>
        </div>

      </div>

      <div  className={ styles.socialMedia}>
        <a href="http://instagram.com" className={ styles.social } >
        <BsInstagram /></a>
        <a href="http://facebook.com"  className={ styles.social } ><FaFacebook /></a>
        <a href="http://twitter.com"  className={ styles.social } ><Image src='/twitter.png' width={20}  height={20} alt='twitter'/></a>
      </div>

      <div className={ styles.subscribe}>
        <h2>Subscribe</h2>
        <input 
          type="email" 
          name="  &nbsp Email address" 
          placeholder="&nbsp; &nbsp; Email address" 
          className={ styles.subInput }
        />
        <button className={ styles.subBtn }><FaArrowRight style={{color: 'black'}}/></button>

        <p>Subscribe to our newsletter to get the latest updates on our products and offerings.</p>
      </div>

      <div  className={ styles.end}>
        <a href="">Terms</a>
        <a href="">Privacy</a>
      </div>
    </div>
   );
}
 
export default Footer;