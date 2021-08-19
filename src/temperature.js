import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import React from 'react';
// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Car Engine Temperature",
    subcaption: "(Per Quarter minute)",
    lowerlimit: "120",
    upperlimit: "200",
    numbersuffix: "°F",
    thmfillcolor: "#008ee4",
    showgaugeborder: "1",
    gaugebordercolor: "#008ee4",
    gaugeborderthickness: "2",
    plottooltext: "Temperature: <b>$datavalue</b> ",
    theme: "fusion",
    showvalue: "1"
  },
  value: "140"
};

class Temperature extends React.Component {
  render() {
    return (
     <div style={{border:"1px solid red",width:"100%"}}>
         <h1>Hello</h1>
          <ReactFusioncharts
        type="thermometer"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
     </div>
    );
  }
}
export default Temperature;