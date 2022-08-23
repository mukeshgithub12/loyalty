import React from "react";
import Link from "next/link";

import { useRouter } from "next/router";
const Navbar = () => {
  const { asPath } = useRouter();
  return (
    <>
      <nav className="pcoded-navbar menupos-fixed navbar-collapsed  menu-light">
        <div className="navbar-wrapper">
          <div className="navbar-content scroll-div ">
            <ul className="nav pcoded-inner-navbar ">
              {/* <li className="nav-item pcoded-menu-caption">
						<label>Navigation</label>
					</li> */}
              <li className={asPath === "/" ? "nav-item active" : "nav-item"}>
                <Link href="/">
                  <a className="nav-link">
                    <span className="pcoded-micon">
                      <i className="fas fa-tachometer-alt" />
                    </span>
                    <span className="pcoded-mtext">Dashboard</span>
                  </a>
                </Link>
              </li>
              <li
                className={
                  asPath === "/transaction"
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                <Link href="/transaction">
                  <a className="nav-link">
                    <span className="pcoded-micon">
                      <i className="fas fa-database" />
                    </span>
                    <span className="pcoded-mtext">Transaction</span>
                  </a>
                </Link>
              </li>
              <li
                className={
                  asPath === "/master"
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                <Link href="/master">
                  <a className="nav-link">
                    <span className="pcoded-micon">
                      <i className="fas fa-cogs" />
                    </span>
                    <span className="pcoded-mtext">Master</span>
                  </a>
                </Link>
              </li>
              <li
                className={
                  asPath === "/reports"
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                <Link href="/reports">
                  <a className="nav-link ">
                    <span className="pcoded-micon">
                      <i className="fas fa-align-justify" />
                    </span>
                    <span className="pcoded-mtext">Reports</span>
                  </a>
                </Link>
              </li>
              <li
                className={
                  asPath === "/Api" ? "nav-item active" : "nav-item"
                }
              >
                <Link href="/Api">
                  <a className="nav-link ">
                    <span className="pcoded-micon">
                      <i className="fas fa-link" />
                    </span>
                    <span className="pcoded-mtext">API</span>
                  </a>
                </Link>
              </li>
              {/* 	<li className="nav-item"><a href="#" className="nav-link "><span className="pcoded-micon"><i className="fas fa-hand-holding-usd" aria-hidden="true"></i></span><span className="pcoded-mtext">Loyalty Point</span></a></li> */}
            </ul>
          </div>
        </div>
      </nav>
      {/* [ navigation menu ] end */}
    </>
  );
};

export default Navbar;
