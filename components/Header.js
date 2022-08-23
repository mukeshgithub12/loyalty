import Link from "next/link";
import React from "react";
const Header = () => {
  return (
    <>
      {/* [ Header ] start */}
      <header className="navbar pcoded-header navbar-expand-lg navbar-light headerpos-fixed">
        <div className="m-header">
          <Link href="/">
            <a className="b-brand">
              {/* ======== change your logo hear ============ */}{" "}
              {/* ======== change your logo hear ============ */}
              <img src="assets/images/logo.svg" alt="" className="logo" />
            </a>
          </Link>
          <a href="#!" className="mob-toggler">
            <i className="feather icon-more-vertical" />
          </a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <p className="m-0 p-0">
                10252-Work From Home Company Private Ltd.
              </p>
              {/*
                <div className="search-bar">
                    <input type="text" className="form-control border-0 shadow-none" placeholder="search here" />
                    <button type="button" className="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                */}
            </li>
          </ul>
          <ul className="navbar-nav ml-auto" hidden>
            <li>
              <div className="dropdown">
                {/*
                    <a className="dropdown-toggle" href="#" data-toggle="dropdown">
                        <i className="icon feather icon-bell"></i>
                        <span className="badge badge-pill badge-danger">5</span>
                    </a>
                    */}
                <div className="dropdown-menu dropdown-menu-right notification">
                  <ul className="noti-body">
                    <li className="n-title">
                      <p className="m-b-0">NEW</p>
                    </li>
                    <li className="notification">
                      <div className="media">
                        <img
                          className="img-radius"
                          src="assets/images/user/avatar-1.jpg"
                          alt="Generic placeholder image"
                        />
                        <div className="media-body">
                          <p>
                            <strong>John Doe</strong>
                            <span className="n-time text-muted">
                              {" "}
                              <i className="icon feather icon-clock m-r-10" />5
                              min{" "}
                            </span>
                          </p>
                          <p>New ticket Added</p>
                        </div>
                      </div>
                    </li>
                    <li className="n-title">
                      <p className="m-b-0">EARLIER</p>
                    </li>
                    <li className="notification">
                      <div className="media">
                        <img
                          className="img-radius"
                          src="assets/images/user/avatar-2.jpg"
                          alt="Generic placeholder image"
                        />
                        <div className="media-body">
                          <p>
                            <strong>Joseph William</strong>
                            <span className="n-time text-muted">
                              <i className="icon feather icon-clock m-r-10" />
                              10 min
                            </span>
                          </p>
                          <p>Prchace New Theme and make payment</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="noti-footer">
                    <a href="#!">Show All</a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown drp-user">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="feather icon-user" />
                </a>
                <div className="dropdown-menu dropdown-menu-right profile-notification">
                  <div className="pro-head">
                    <img
                      src="assets/images/user/avatar-6.png"
                      className="img-radius"
                      alt="User-Profile-Image"
                    />
                    <span>
                      {"{"} {"{"}session('uname'){"}"} {"}"}
                    </span>
                    <a
                      href="{{url('logout')}}"
                      className="dud-logout"
                      title="Logout"
                    >
                      <i className="feather icon-power" />
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </header>
      {/* [ Header ] end */}
    </>
  );
};

export default Header;
