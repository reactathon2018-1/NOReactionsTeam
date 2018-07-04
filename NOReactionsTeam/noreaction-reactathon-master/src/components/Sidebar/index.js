import React, { Component } from 'react';
import classNames from 'classnames';
import history from '../../core/history';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      samplePagesCollapsed: true,
    };
  }

  render() {
    return (
      <div className="navbar-default sidebar" style={{ backgroundColor:'white', marginLeft: '-20px' }} role="navigation">
        <div className="sidebar-nav navbar-collapse collapse">
          <ul className="nav in" id="side-menu">
            {/* <li className="sidebar-search">
              <div className="input-group custom-search-form">
                <input type="text" className="form-control" placeholder="Search..." />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">
                    <i className="fa fa-search" />
                  </button>
                </span>
              </div>
            </li> */}

            <li style={{height:'80px', fontSize:'24px'}}>
              <a style={{ paddingLeft:'105px'}} href="" onClick={(e) => { e.preventDefault(); history.push('/'); }} >
                <i  style={{fontSize:'55px !important'}}className="fa fa-home" /> &nbsp;
              </a>
            </li>

           <li style={{ fontSize:'16px'}} className={classNames({ active: !this.state.chartsElementsCollapsed })}>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({ chartsElementsCollapsed: !this.state.chartsElementsCollapsed });
                  return false;
                }}
              >
                <i className="fa fa-files-o fa-fw" /> &nbsp;<b>Hackathons</b>
                <span className="fa arrow" />
              </a>
              <ul
                className={
                  classNames({
                    'nav nav-second-level': true,
                    collapse: this.state.chartsElementsCollapsed,
                  })
              }
              >
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); history.push('/hackathons/Upcoming'); }} >
                    Upcoming
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    onClick={(e) => { e.preventDefault(); history.push('/hackathons/Completed'); }}
                  >
                    Completed
                  </a>
                </li>
              </ul>
            </li>


            <li style={{ fontSize:'16px'}}>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/MyTeam'); }} >
                <i className="fa fa-table fa-fw" /> &nbsp;<b>My Team</b>
              </a>
            </li>

            <li style={{ fontSize:'16px'}}>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/ContactUS'); }} >
                <i className="fa fa-sitemap fa-fw" /> &nbsp;<b>Contact Us</b>
              </a>
            </li>

             

            {/* <li className={classNames({ active: !this.state.uiElementsCollapsed })}>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({ uiElementsCollapsed: !this.state.uiElementsCollapsed,
                }); return false;
                }}
              >
                <i className="fa fa-edit fa-fw" /> UI Elements<span className="fa arrow" />
              </a>

              <ul
                className={classNames({
                  'nav nav-second-level': true,
                  collapse: this.state.uiElementsCollapsed,
                })}
              >
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); history.push('/panelwells'); }} >
                    Panels And Wells
                  </a>
                </li>
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); history.push('/button'); }} >
                    Buttons
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    onClick={(e) => { e.preventDefault(); history.push('/notification'); }}
                  >
                    Notification
                  </a>
                </li> */}
               {/* <li>
                  <a href="" onClick={(e) => { e.preventDefault(); history.push('/typography'); }} >
                    
                  </a>
                </li>*/}
              {/*<li>
                  <a href="" onClick={(e) => { e.preventDefault(); history.push('/icons'); }} >
                    Icons
                  </a>
                </li>
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); history.push('/grid'); }} >
                    Grid
                  </a>
                </li>
              </ul>
            </li>

            <li className={classNames({ active: !this.state.multiLevelDropdownCollapsed })}>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({
                    multiLevelDropdownCollapsed: !this.state.multiLevelDropdownCollapsed,
                  });
                  return false;
                }}
              >
                <i className="fa fa-sitemap fa-fw" />
                &nbsp;Multi-Level Dropdown
                <span className="fa arrow" />
              </a>
              <ul
                className={
                  classNames({
                    'nav nav-second-level': true, collapse: this.state.multiLevelDropdownCollapsed,
                  })}
              >
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); }}>Second Level Item</a>
                </li>
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); }}>Second Level Item</a>
                </li>
                <li className={classNames({ active: !this.state.thirdLevelDropdownCollapsed })}>
                  <a
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({
                        thirdLevelDropdownCollapsed: !this.state.thirdLevelDropdownCollapsed,
                      });
                      return false;
                    }}
                  >
                    Third Level<span className="fa arrow" />
                  </a>
                  <ul
                    className={
                      classNames({
                        'nav nav-second-level': true,
                        collapse: this.state.thirdLevelDropdownCollapsed,
                      })}
                  >
                    <li>
                      <a href="" onClick={(e) => { e.preventDefault(); }}>Third Level Item</a>
                    </li>
                    <li>
                      <a href="" onClick={(e) => { e.preventDefault(); }}>Third Level Item</a>
                    </li>
                    <li>
                      <a href="" onClick={(e) => { e.preventDefault(); }}>Third Level Item</a>
                    </li>
                    <li>
                      <a href="" onClick={(e) => { e.preventDefault(); }}>Third Level Item</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className={classNames({ active: !this.state.samplePagesCollapsed })}>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({
                    samplePagesCollapsed: !this.state.samplePagesCollapsed,
                  });
                  return false;
                }}
              >
                <i className="fa fa-files-o fa-fw" />
                &nbsp;Sample Pages
                <span className="fa arrow" />
              </a>
              <ul
                className={
                  classNames({
                    'nav nav-second-level': true,
                    collapse: this.state.samplePagesCollapsed,
                  })}
              >
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); history.push('/blank'); }} >
                    Blank
                  </a>
                </li>
                 <li>
                  <a href="" onClick={(e) => { e.preventDefault(); history.push('/login'); }} >
                    Login
                  </a>
                </li>
              </ul>
            </li>  */}
          </ul>
        </div>
      </div>
    );
  }
}


export default Sidebar;
