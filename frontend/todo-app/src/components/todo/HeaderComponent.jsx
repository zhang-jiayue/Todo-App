// import React, { Component } from 'react';
// import AuthenticationService from './AuthenticationService.js';
// import { Link } from 'react-router-dom';

// class HeaderComponent extends Component {
//   render() {
//     const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
//     return (
//       <header>
//         <nav className="navbar  navbar-expand-md navbar-dark bg-dark">
//           <div>
//             <a href="https://zhang-jiayue.github.io" className="navbar-brand">
//               My Projects
//             </a>
//           </div>
//           <ul className="navbar-nav">
//             <li>
//               {isUserLoggedIn && (
//                 <Link className="nav-link" to="/welcome/jiayue">
//                   Home
//                 </Link>
//               )}
//             </li>
//             <li>
//               {isUserLoggedIn && (
//                 <Link className="nav-link" to="/todos">
//                   Todos
//                 </Link>
//               )}
//             </li>
//           </ul>
//           <ul className="navbar-nav navbar-collapse justify-content-end">
//             <li>
//               {!isUserLoggedIn && (
//                 <Link className="nav-link" to="/login">
//                   Login
//                 </Link>
//               )}
//             </li>
//             <li>
//               {isUserLoggedIn && (
//                 <Link
//                   className="nav-link"
//                   to="/logout"
//                   onClick={AuthenticationService.logout()}
//                 >
//                   Logout
//                 </Link>
//               )}
//             </li>
//           </ul>
//         </nav>
//       </header>
//     );
//   }
// }

// export default HeaderComponent;
import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import AuthenticationService from './AuthenticationService.js';

class HeaderComponent extends Component {
  render() {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    //console.log(isUserLoggedIn);

    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a href="http://www.in28minutes.com" className="navbar-brand">
              in28Minutes
            </a>
          </div>
          <ul className="navbar-nav">
            {isUserLoggedIn && (
              <li>
                <Link className="nav-link" to="/welcome/in28minutes">
                  Home
                </Link>
              </li>
            )}
            {isUserLoggedIn && (
              <li>
                <Link className="nav-link" to="/todos">
                  Todos
                </Link>
              </li>
            )}
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            {!isUserLoggedIn && (
              <li>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
            {isUserLoggedIn && (
              <li>
                <Link
                  className="nav-link"
                  to="/logout"
                  onClick={AuthenticationService.logout}
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    );
  }
}

export default HeaderComponent;
