import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';

class Navbar extends Component{
  componentDidUpdate = () => {
    //console.log("--navbar update---");
    //@ts-ignore
    ReactDom.findDOMNode(this).scrollIntoView();
   }

    render() {

        return(
          <div>
          <nav className="navbar navbar-default no-print">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>

              <div className="collapse navbar-collapse">
{/*                 <ul className="nav navbar-nav navbar-left">
                  <li>
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                      <i className="fa fa-long-arrow-left" />
                      <p className="hidden-lg hidden-md">Dashboard</p>
                    </a>
                  </li>
               
                </ul>
                <ul className="nav navbar-nav navbar-right">
              
                  <li>
                    <Link to="/logout">
                      <p>Log out</p>
                    </Link>
                  </li>
                  <li className="separator hidden-lg hidden-md" />
                </ul>
 */}

              </div>
              
            </div>
          </nav>





          </div>
          
        );
    }
}

export default Navbar;