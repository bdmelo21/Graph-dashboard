import { render } from "@testing-library/react";
import React from "react";
import Card from "@material-ui/core/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faGift,
  faMoneyCheckAlt,
} from "@fortawesome/free-solid-svg-icons";

class LayoutCards extends React.Component {
  render() {
    return (
      <div className="layout-with-cards">
        <div className="cards-from-layout">
          <Card className="card-from-layout">
            <FontAwesomeIcon
              icon={faTag}
              size="3x"
              color="#2558c4"
              className="icons-from-layout"
            />
            <h1>Manage my Brands</h1>
          </Card>
        </div>
        <div>
          <Card className="card-from-layout">
            <FontAwesomeIcon
              icon={faGift}
              size="3x"
              color="#2558c4"
              className="icons-from-layout"
            />
            <h1>Manage my Campaigns</h1>
          </Card>
        </div>
        <div>
          <Card className="card-from-layout">
            <FontAwesomeIcon
              icon={faMoneyCheckAlt}
              size="3x"
              color="#2558c4"
              className="icons-from-layout"
            />
            <h1>Manage my budget</h1>
          </Card>
        </div>
      </div>
    );
  }
}

export default LayoutCards;
