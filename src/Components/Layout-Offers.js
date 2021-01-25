import { BottomNavigation } from "@material-ui/core";
import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Doughnut } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faPlusCircle,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";
import Avatar from "@material-ui/core/Avatar";
import HelpIcon from "@material-ui/icons/Help";

class LayoutOffers extends React.Component {
  state = {
    openDialogue: false,
    Dialogue: "",
  };
  handleClickOpen = (params) => {
    this.setState({
      openDialogue: true,
      Dialogue: params,
    });
  };
  handleClose = () => {
    this.setState({
      openDialogue: false,
    });
  };
  render() {
    const dataDoughnutActives = {
      labels: ["Promoters", "Passives", "Detractors"],
      datasets: [
        {
          data: [300, 50, 300],
          backgroundColor: ["#16d2b4", "#ffd701", "#ff8167"],
          hoverBackgroundColor: ["#16d2b4", "#ffd701", "#ff8167"],
        },
      ],
    };
    const dataDoughnutNegatives = {
      labels: ["Offer", "Value", "Product", "Detractors"],
      datasets: [
        {
          data: [300, 50, 250, 50],
          backgroundColor: ["#1d46a0", "#2355c3", "#7493d9", "#afc1e8"],
          hoverBackgroundColor: ["#1d46a0", "#2355c3", "#7493d9", "#afc1e8"],
        },
      ],
    };

    return (
      <div>
        <div className="infos">
          <Dialog
            open={this.state.openDialogue && this.state.Dialogue === "deliver"}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Delivered"}</DialogTitle>
            <DialogContent style={{ width: "500px" }}>
              <DialogContentText id="alert-dialog-description">
                Number of offers delivered.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary" autoFocus>
                I Understand
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={this.state.openDialogue && this.state.Dialogue === "accept"}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Accepted"}</DialogTitle>
            <DialogContent style={{ width: "500px" }}>
              <DialogContentText id="alert-dialog-description">
                Number of users that accepted the offer.<br></br> Accepted:
                Number of users that accepted the offer <br></br>Accepted %:
                Percentage of users that accepted the offer.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary" autoFocus>
                I Understand
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={this.state.openDialogue && this.state.Dialogue === "deliver"}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Delivered"}</DialogTitle>
            <DialogContent style={{ width: "500px" }}>
              <DialogContentText id="alert-dialog-description">
                Number of offers delivered.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary" autoFocus>
                I Understand
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={this.state.openDialogue && this.state.Dialogue === "declined"}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Declined"}</DialogTitle>
            <DialogContent style={{ width: "500px" }}>
              <DialogContentText id="alert-dialog-description">
                Number of offers declined. <br></br>Declined: Number of users
                that declined the offer<br></br>Declined %: Percentage of users
                that declined the offer
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary" autoFocus>
                I Understand
              </Button>
            </DialogActions>
          </Dialog>
          <Card
            style={{
              display: "block",
              width: "330px",
            }}
          >
            <CardHeader
              title="Status"
              style={{
                backgroundColor: "#6672",
              }}
            />
            <h1
              style={{
                fontSize: "20px",
              }}
            >
              Offer Offline
            </h1>
          </Card>
          <Card
            style={{
              display: "block",
              width: "330px",
            }}
          >
            <CardHeader
              title="Accumulated Cost"
              style={{
                backgroundColor: "#6672",
              }}
            />
            <h1
              style={{
                fontSize: "20px",
              }}
            >
              10.65€
            </h1>
          </Card>
          <Card
            style={{
              display: "block",
              width: "330px",
            }}
          >
            <CardHeader
              title="NPS"
              style={{
                backgroundColor: "#6672",
              }}
            ></CardHeader>
            <h1
              style={{
                fontSize: "20px",
              }}
            >
              32
            </h1>
          </Card>
        </div>
        <div className="card-accepted-delivered">
          <Card
            style={{
              display: "block",
              width: "330px",
              backgroundColor: "#2355c3",
            }}
          >
            <div onClick={() => this.handleClickOpen("deliver")}>
              <h1
                style={{
                  opacity: "0.5px",
                  paddingTop: "20px",
                  paddingLeft: "20px",
                  fontSize: "26px",
                  marginBottom: "10px",
                  color: "whitesmoke",
                  fontWeight: "300",
                }}
              >
                DELIVERED
              </h1>
              <div className="numbers-and-icon">
                <p
                  style={{
                    paddingLeft: "20px",
                    marginTop: "0px",
                    fontSize: "30px",
                    letterSpacing: "0px",
                    color: "whitesmoke",
                  }}
                >
                  979
                </p>
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  size="7x"
                  style={{
                    color: "#7493d9",
                    paddingLeft: "130px",
                    opacity: "0.3",
                  }}
                ></FontAwesomeIcon>
              </div>
            </div>
          </Card>
          <Card
            style={{
              display: "block",
              width: "330px",
              backgroundColor: "#16d2b4",
            }}
          >
            <div onClick={() => this.handleClickOpen("accept")}>
              <h1
                style={{
                  opacity: "0.5px",
                  paddingTop: "20px",
                  paddingLeft: "20px",
                  fontSize: "26px",
                  marginBottom: "10px",
                  color: "whitesmoke",
                  fontWeight: "300",
                }}
              >
                ACCEPTED
              </h1>
              <div className="numbers-and-icon">
                <div className="number-greenCard">
                  <p
                    style={{
                      paddingLeft: "20px",
                      fontSize: "30px",
                      letterSpacing: "0px",
                      color: "whitesmoke",
                      marginTop: "0px",
                      marginBottom: "0px",
                    }}
                  >
                    515
                  </p>
                  <p
                    style={{
                      paddingLeft: "20px",
                      marginTop: "0px",
                      fontSize: "25px",
                      letterSpacing: "0px",
                      color: "whitesmoke",
                    }}
                  >
                    52.60%
                  </p>
                </div>
                <FontAwesomeIcon
                  icon={faPlusCircle}
                  size="7x"
                  style={{
                    color: "#7493d9",
                    paddingLeft: "100px",
                    opacity: "0.5",
                  }}
                ></FontAwesomeIcon>
              </div>
            </div>
          </Card>
          <Card
            style={{
              display: "block",
              width: "330px",
              backgroundColor: "#ff8167",
              zIndex: "1",
            }}
          >
            <div onClick={() => this.handleClickOpen("declined")}>
              <h1
                style={{
                  opacity: "0.5px",
                  paddingTop: "20px",
                  paddingLeft: "20px",
                  fontSize: "26px",
                  marginBottom: "10px",
                  color: "whitesmoke",
                  fontWeight: "300",
                }}
              >
                DECLINED
              </h1>
              <div className="numbers-and-icon">
                <div className="number-greenCard">
                  <p
                    style={{
                      paddingLeft: "20px",
                      marginTop: "0px",
                      fontSize: "30px",
                      letterSpacing: "0px",
                      color: "whitesmoke",
                      marginBottom: "0px",
                    }}
                  >
                    24
                  </p>
                  <p
                    style={{
                      paddingLeft: "20px",
                      marginTop: "0px",
                      fontSize: "25px",
                      letterSpacing: "0px",
                      color: "whitesmoke",
                    }}
                  >
                    2.45%
                  </p>
                </div>
                <FontAwesomeIcon
                  icon={faMinusCircle}
                  size="7x"
                  style={{
                    color: "#7493d9",
                    paddingLeft: "115px",
                    opacity: "0.5",
                    top: "100px",
                  }}
                ></FontAwesomeIcon>
              </div>
            </div>
          </Card>
        </div>
        <div className="charts-from-bottom">
          <div className="chart-from-bottom">
            <Card>
              <CardHeader title="Accepted Reviews Analysis" />
              <div style={{ width: 510, height: 205 }}>
                <Doughnut
                  data={dataDoughnutActives}
                  options={{
                    maintainAspectRatio: false,
                    rotation: 1 * Math.PI,
                    circumference: 1 * Math.PI,
                    legend: {
                      display: true,
                      position: "bottom",
                    },
                  }}
                />
              </div>
            </Card>
          </div>
          <div className="chart-from-bottomRight">
            <Card>
              <CardHeader title="Declined Reason Analysis" />
              <div style={{ width: 510, height: 205 }}>
                <Doughnut
                  data={dataDoughnutNegatives}
                  options={{
                    maintainAspectRatio: false,
                    rotation: 1 * Math.PI,
                    circumference: 1 * Math.PI,
                    legend: {
                      display: true,
                      position: "bottom",
                    },
                  }}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default LayoutOffers;
