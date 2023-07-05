<h1 align="center">Biscuit Extension</h1>
<p align="center">
Extension to boost time efficiency while working with cookie values.
</p>



<p align="center">
  <a href="https://github.com/nicolcastillo/VTappCookieExtension">
    <img src="images/f_BiscuitLogo.png" alt="Logo" width="100" height="100">
  </a>
</p>

<div style="text-align: center">
<h2>NAVIGATION</h2>
<a href="#basic_func">BASIC FUNCTIONALITY</a><br>
<a href="#requirements">REQUIREMENTS</a><br>
<a href="#setup">SETTING UP</a><br>
<a href="#future">FUTURE</a>
</div>

---

<h2 id="basic_func" style="padding-top: 15px">Basic functionality</h2>

  - to <a style="color:inherit" href="#copy"><u>copy</u></a> values from cookies

---

<h2 id="requirements" style="padding-top: 15px">Requirements</h2>

 - Chrome version above <a style="color:inherit" title="to check: chrome://settings/help" href="chrome://settings/help">**Chrome 88 Beta**</a>
 - logged to <a style="color:inherit" href="https://rol.redhat.com/rol/app/"><u>rol.redhat.com</u></a>
 - connected to vpn

---

<h2 id="setup" style="padding-top: 15px">SETTING UP</h2>

<ol>
<li>clone the repository to your device<br>
  <img src="images/setUp/clone.png" alt="clone repo">
  </li>
<li style="padding-top:10px">go to <a href="chrome://extensions/">chrome extensions</a><br>
  <img src="images/setUp/devMode.png" alt="extension appearence">
  </li>
  <!-- <ul>
  <li>
    </li>
  </ul> -->
<li style="padding-top:10px">turn ON the developer mode<br>
  <img src="images/setUp/extensions.png" alt="developer mode activated">
  </li>
  <!-- <ul>
  <li>
    </li>
  </ul> -->
<li style="padding-top:10px">select 'LOAD UNPACKED'
  </li>
  
  <ul>
  <li>find the loceation of the cloned reposiotry
    </li>
  <li>
  <img src="images/setUp/added.png" alt="in extensions">
    </li>
  </ul>
<li style="padding-top:15px; border-top:dotted 1px">* additional steps
  </li>
  <ul>
  <li>pin to extension bar by opening the extensions nexto the search bar and clicking on the pin icon<br><img src="images/setUp/addToBar.png" alt="to extensions bar">
    </li>
  <li>when pinned, the extension should be visible next to the extension icon, nex to the other pinned extensions<br><img src="images/setUp/inBar.png" alt="in extensions bar">
    </li>
  </ul>
</ol>

---

<h2 id="copy" style="padding-top: 15px">COPY functionality</h3>
<p><i>*session_id replaced with sessionid_prod</i>

</p>
<ul>
  <li>The first screen of the app should appear as below<br><img src="images/setUp/window.png" alt="">
    </li>
  
  <li style="padding-top:5px">When clicking on the button value is copied to the clipboard.
    </li>
 
 <li style="padding-top:5px">If operation failed or succeeded click-feedback message is displayed.
      </li>
    <ul>
      <li>Log into rol.<br><img src="images/setUp/windowF.png" title="not logged in" alt="not logged in">
      <ul style="padding-bottom:10px">
        <li>in ordert to recieve the correct cookie the user needs to log to rol account
          </li>
        <li>note that this extension does not support incongneto mode
          </li>
        </ul>
      <li style="padding-bottom:10px">Failed to copy!<br>
            <img src="images/setUp/windowF1.png" style="padding-right:5px" title="copy of csfr token failed" alt="copy of csfr token failed">
            <img src="images/setUp/windowF2.png" title="copy of session id failed" alt="copy of session id failed">
        </li>
      <li style="padding-bottom:10px">Successful copy!<br>
            <img src="images/setUp/windowS1.png" style="padding-right:5px" title="copy of csfr token was successful" alt="copy of csfr token was successful">
            <img src="images/setUp/windowS2.png" title="copy of session id was successful" alt="copy of session id was successful">
      </li>
    </ul>
</ul>

---

<h2 id="future" style="padding-top: 15px">Future</h3>
<ul>
  <li>Option to change color shceme.
    </li>
  <li>Display information about the cookie.
    </li>
    <li>Flush current cookie and get a new one.
      </li>
</ul>




