import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { Line } from "react-chartjs-2";

const state = {
  labels: [
    "2020-07-21",
    "2020-07-22",
    "2020-07-23",
    "2020-07-24",
    "2020-07-25",
  ],
  datasets: [
    {
      setDrawCircles: false,
      label: "Offers Accepted per day",
      fill: false,
      lineTension: 0.5,
      borderColor: "#79e2d0",
      borderWidth: 3,
      data: [380, 70, 50, 50, 60],
    },
  ],
};

export default class ChartLine extends React.Component {
  render() {
    return (
      <Card className="card-chart-line">
        <div style={{ backgroundColor: "whitemsmoke", height: "400px" }}>
          <Line
            data={state}
            options={{
              maintainAspectRatio: false,
              scales: {
                xAxes: [
                  {
                    ticks: {
                      fontSize: 16,
                    },
                  },
                ],
                yAxes: [
                  {
                    gridLines: {
                      display: false,
                    },
                    ticks: {
                      beginAtZero: true,
                      stepSize: 100,
                      fontSize: 16,
                    },
                    scaleLabel: {
                      display: true,
                      labelString: "#Accepted Offers",
                      fontSize: 16,
                    },
                  },
                ],
              },
              title: {
                display: true,
                text: "Number of Offers Accepted per Day",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "top",
              },
            }}
          />
        </div>
      </Card>
    );
  }
}
