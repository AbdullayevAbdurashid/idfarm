import React, { useContext } from "react";

import { Row, Col, Container } from "reactstrap";
import "../../../assets/scss/index.css";
//UI elements
import SubscribersGained from "@src/views/ui-elements/cards/statistics/SubscribersGained";
import StatsCard from "../../ui-elements/cards/statistics/StatsCard";

//Map
import uzbekistan from "@svg-maps/uzbekistan";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
//Charts

import "chart.js/auto";
import LineChart from "../../charts/chart-js/ChartjsLineChart";
import ApexRadiarChart from "../../charts/apex/ApexDonutChart";

//theme and custom hook
import { ThemeColors } from "@src/utility/context/ThemeColors";
import { kFormatter } from "@utils";
import { useSkin } from "@hooks/useSkin";

function Main() {
  const { colors } = useContext(ThemeColors),
    { skin } = useSkin(),
    labelColor = skin === "dark" ? "#b4b7bd" : "#6e6b7b",
    gridLineColor = "rgba(200, 200, 200, 0.2)",
    lineChartPrimary = "#666ee8",
    lineChartDanger = "#ff4961",
    warningColorShade = "#ffbd1f",
    greyLightColor = "#EDF1F4";
  return (
    <Container>
      <Row>
        <Col className="example">
          <div id="map">
            <SVGMap map={uzbekistan} />
          </div>
          <div className="legend">
            <ul>
              <li>Qoshilish etapida</li>
              <li>Hayvonlar ro'yxatga olingan</li>
              <li>Shartnoma bosqichi</li>
            </ul>
          </div>
        </Col>
        <Col>
          <ApexRadiarChart
            title={"O'zbekistondagi chorvalar statistikasi"}
            description={"Oxirgi 30 kun ihcidagi malumot"}
            labels={["Mollar", "Qoylar", "Otlar"]}
          />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <SubscribersGained kFormatter={kFormatter}></SubscribersGained>
        </Col>
        <Col md={6}>
          <StatsCard cols={4}></StatsCard>
        </Col>
      </Row>
      <Row>
        {" "}
        <LineChart
          labelColor={labelColor}
          gridLineColor={gridLineColor}
          lineChartDanger={lineChartDanger}
          lineChartPrimary={lineChartPrimary}
          warningColorShade={warningColorShade}
        />
      </Row>
    </Container>
  );
}

export default Main;
