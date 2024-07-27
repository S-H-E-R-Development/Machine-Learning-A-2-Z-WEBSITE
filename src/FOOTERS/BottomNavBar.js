import React from "react";
import './BottomNavBar.css';

import { socialMediaLink } from "../GENERAL_COMPONENTS/LOGIN-SOCIAL-MEDIA-BUTTON/button";


const PartnersDes = [

  "Society of Humanity Education and Research", "Consultancy and Personal Development"

]

const Contact = [

  "help@cpdevelopments.com",

  "24/7 availability."
]
const Partners = () => {
  return (
    <div>
      <h2>Partners</h2>
      <h4>{PartnersDes[0]}</h4>
      <h4>{PartnersDes[1]}</h4>

    </div>
  );
};

const ContactUsLink = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      {socialMediaLink('f')}
      {socialMediaLink('i')}
      {socialMediaLink('li')}
    </div>
  );
};

const ContactUsMail = () => {
  return (
    <div className="">
      <h2>Contact Us</h2>
      <h4>{Contact[0]}</h4>
      <h4>{Contact[1]}</h4>
    </div>
  );
};

const BottomNavBar = () => {
  return (
    <>
      <div className="footer">
        <Partners />
        <ContactUsLink />
        <ContactUsMail />
      </div>
    </>
  );
};

export default BottomNavBar;