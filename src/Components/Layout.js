import React from "react";
import Card from "@material-ui/core/Card";
import TabCenter from "./TabCenter";
import LayoutCards from "./Layout-Cards";
import ChartLine from "./ChartLine";
import Table from "./table";
import LayoutOffers from "./Layout-Offers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faGift,
  faMoneyCheckAlt,
} from "@fortawesome/free-solid-svg-icons";
class Layout extends React.Component {
  state = {
    mainPage: "main",
  };
  changeMainPage = (param) => {
    return this.setState({
      mainPage: param,
    });
  };
  render() {
    return (
      <div className="layout-page">
        <nav className="nav-sidebar">
          <div>
            <h1 className="available-balance">Available balance:</h1>
            <h1 className="available-price">0.00€</h1>
            <hr style={{ borderTop: "0.5px solid rgba(0,0,0,.01}" }}></hr>
            <ul></ul>
            <div className="bullets-side-bar">
              <FontAwesomeIcon icon={faTag}></FontAwesomeIcon>
              <a
                href="javascript:void(0)"
                onClick={() => this.changeMainPage("brands")}
              >
                <li
                  style={{
                    padding: "20px 23px",
                    fontSize: "16px",
                    listStyleType: "none",
                  }}
                >
                  Brands
                </li>
              </a>
            </div>
            <div className="bullets-side-bar">
              <FontAwesomeIcon icon={faGift}></FontAwesomeIcon>
              <a href="javascript:void(0)">
                <li
                  style={{
                    padding: "20px 23px",
                    fontSize: "16px",
                    listStyleType: "none",
                  }}
                >
                  Campaigns
                </li>
              </a>
            </div>
            <div className="bullets-side-bar">
              <FontAwesomeIcon icon={faMoneyCheckAlt}></FontAwesomeIcon>
              <a href="javascript:void(0)">
                {" "}
                <li
                  style={{
                    padding: "20px 20px",
                    fontSize: "16px",
                    listStyleType: "none",
                  }}
                >
                  Budget
                </li>
              </a>
            </div>
          </div>
        </nav>
        <div className="layout-grey-page">
          {this.state.mainPage === "main" ? <LayoutCards></LayoutCards> : null}
          {this.state.mainPage === "brands" ? (
            <div>
              <TabCenter
                layoutPage={(params) => this.changeMainPage(params)}
                indexofState={0}
              ></TabCenter>
              <LayoutOffers></LayoutOffers>
            </div>
          ) : null}
          {this.state.mainPage === "styles" ? (
            <div>
              <TabCenter
                layoutPage={(params) => this.changeMainPage(params)}
                indexofState={1}
              ></TabCenter>
              <ChartLine></ChartLine>
              <Table></Table>
            </div>
          ) : null}
          <div className="copyright">
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Layout;
