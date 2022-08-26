function footer (){
    return `
        
   <div id="foot">
   <div id="first">
   <div id="email">
        <p>NEWSLETTER SIGNUP</p>
        <p>Sign up for email updates and promotions</p>
        <input type="email" name="" class="mail" placeholder="EMAIL ADRESS">
        <div style="display:flex ; ">
        <input type="checkbox" class="check" style="margin-left: 60px;"><p style="font-size: 10px;">MENSWEAR</p>  
        <input type="checkbox" class="check" style="margin-left: 20px;"><p style="font-size: 10px;">WOMENSWEAR</p>
        </div>
        <input type="submit" class="mail" value="SUBSCRIBE">
    </div>
       <div id="text1">
        <p class="foot_pointer"> COUNTRY/REGION: INDIA</p>
        <p class="foot_pointer"> NEWSLETTER SIGNUP </p>
        <p class="foot_pointer"> CUSTOMER CARE LOCATION</p>
        <p class="foot_pointer"> EDITORIAL ARCHIVE 
        <p class="foot_pointer"> CAREERS</p> 
        <p class="foot_pointer"> AFFILIATES</p> 
        <p class="foot_pointer"> SITEMAP</p>
       </div>
       <p id="dis">COUNTRY/REGION: INDIA</p>
       <div id="icons">
        <a target="_blank" href="https://www.facebook.com/SSENSEofficial"><img class="icon" src="./foot images/facebook.png" alt=""></a>
        <a target="_blank" href="https://twitter.com/ssense"><img class="icon" src="./foot images/twitter.png" alt=""></a>
        <a target="_blank" href="https://www.instagram.com/ssense/"><img class="icon" src="./foot images/instagram.png" alt=""></a>
        <a target="_blank" href="https://web.whatsapp.com/"><img class="icon" src="./foot images/whatsapp.png" alt=""></a>
       </div>
       <div id="text2">
           <p> © 2022 ssense.com</p>
           <p class="foot_pointer"> Terms & Conditions</p>
           <p class="foot_pointer"> Privacy Policy</p>
           <p class="foot_pointer"> Cookies</p>
           <p class="foot_pointer"> Accessibility</p>
       </div>
    </div>
  </div>

    `
}

export default footer