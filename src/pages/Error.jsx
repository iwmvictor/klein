import React from "react";

import "./../style/Error.scss";
import logo from "./../assets/images/brand/logo-dark.svg";
import travel from "./../assets/images/other/travel.png";

function Error() {
  return (
    <div className="error-page">
      <div className="error-container">
        <img src={logo} alt="Brand Logo" className="logo" />
        <h1>Oops! Page Not Found</h1>
        <p>
          Hello, it looks like you’re on the wrong page. The link you were
          navigating to might be broken. I’m sorry about that. You can:
        </p>
        <ul>
          <li>
            <a href="/">Go back to our homepage</a>
          </li>
          <li>
            <a href="tel:250789596504">Call us at 250 789 596 504</a>
          </li>
          <li>
            <a href="mailto:joshmugs22@gmail.com">
              Email us at joshmugs22@gmail.com
            </a>
          </li>
          <li>
            <a href="https://wa.me/250789596504">Whatsapp us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Error;
