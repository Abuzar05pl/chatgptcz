import React from "react";
import { Link } from "react-router-dom";

const Kontakt = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-[100px] w-full">
        <img 
    src={`${process.env.PUBLIC_URL}/05.jpg`} 
        alt="Chat icon" className="full" />
      </div>
      <h1 className="text-4xl font-bold text-orange-950 mb-4">Kontakt</h1>
      <div className="ml-[30px] text-[30px] font-bold">
        number +420 607 341 800
      </div>
      <a
  href="https://wa.me/48517737849"
  target="_blank"
  rel="noopener noreferrer"
  className="ml-[50px] mt-[10px] flex items-center space-x-2 text-red-950 text-[40px]"
>
  <img
    src={`${process.env.PUBLIC_URL}/whatsapp_logo_icon_259368.png`}
    alt="Chat icon"
    className="w-[60px] h-[60px]"
  />
  <span>Chat with us on WhatsApp</span>
</a>
<a 
  href="https://t.me/Abuzarr333"
  target="_blank"
  rel="noopener noreferrer"
  className="ml-[50px] mt-[10px] flex items-center space-x-2 text-red-950 text-[40px]"
>
  <img
  src={`${process.env.PUBLIC_URL}/telegram_logo_icon_259365.png`}
    alt="Chat icon"
    className="w-[60px] h-[60px]"
  />
  <span>Chat with us on Telegram</span>
</a>
<a
  href="https://www.facebook.com/profile.php?id=61563623984013"
  target="_blank"
  rel="noopener noreferrer"
  className="ml-[50px] mt-[10px] flex items-center  space-x-2 text-red-950 text-[40px]"
>
<img
  src={`${process.env.PUBLIC_URL}/facebook_logo_icon_259372.png`}
  alt="Chat icon"
  className="w-[60px] h-[60px]"
/>
  <span>Chat with us on Facebook</span>
</a>
<a
  href="https://www.instagram.com/abu777770000/"
  target="_blank"
  rel="noopener noreferrer"
  className="ml-[50px] mt-[10px] flex items-center space-x-2 text-red-950 text-[40px]"
>
  <img
  src={`${process.env.PUBLIC_URL}/instagram_logo_icon_259370.png`}
    alt="Chat icon"
    className="w-[60px] h-[60px]"
  />
  <span>Chat with us on Instagram</span>
</a>
<a
  href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit/"
  target="_blank"
  rel="noopener noreferrer"
  className="ml-[50px] mt-[10px] flex items-center space-x-2 text-red-950 text-[40px]"
>
  <img
   src={`${process.env.PUBLIC_URL}/linkedin_logo_icon_259377.png`}
    alt="Chat icon"
    className="w-[60px] h-[60px]"
  />
  <span>Chat with us on linkedin</span>
</a>


      <Link
        to="/"
        className="ml-[50px] mt-[600px] flex items-center underline space-x-2 text-red-950 text-[40px]"
      >
        <img
          src={`${process.env.PUBLIC_URL}/bluehousehousehome_azulcasa_cas_6791.png`}
          alt="Chat icon"
          className="w-[60px] h-[60px]"
        />
        <span>Back to Home</span>
      </Link>
    </div>
  );
};

export default Kontakt;
