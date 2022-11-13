import React, { useContext } from "react";
import { Row, Container, Col, Card, CardHeader, CardBody } from "reactstrap";

//Icons
import { GiSheep, GiMale, GiFemale, GiDeathSkull } from "react-icons/gi";
import { FaSyringe } from "react-icons/fa";
//Components
import Avatar from "@components/avatar";
import "../../../assets/scss/index.css";
//charts
import SimpleLineChart from "@src/views/charts/recharts/LineChart.js";
import PieChart from "@src/views/charts/recharts/PieChart.js";
import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/charts/recharts.scss";
//data
// ** Context
import { ThemeColors } from "@src/utility/context/ThemeColors";
import { heardCount, deathCount } from "./mockdata";

function Heard() {
  const { colors } = useContext(ThemeColors);
  const donut = {
    series1: colors.primary.main,
    series2: colors.info.main,
  };
  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <Card>
            <CardHeader></CardHeader>
            <CardBody>
              {" "}
              <PieChart
                series1={donut.series1}
                series2={donut.series2}
                series3={donut.series3}
                series5={donut.series5}
              />
            </CardBody>
          </Card>
        </Col>
        <Col d={6}>
          <Row>
            <Col md={4}>
              <Card>
                <CardBody>
                  <Avatar
                    color={"light-warning"}
                    icon={<GiSheep size={40} />}
                    className="p-1"
                  />
                  <h3 className="mt-2">196 chorva</h3>
                </CardBody>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <CardBody>
                  <Avatar
                    color={"light-info"}
                    icon={<GiMale size={40} />}
                    className="p-1"
                  />
                  <h3 className="mt-2">
                    <b>162</b> sigir
                  </h3>
                </CardBody>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <CardBody>
                  <Avatar
                    color={"light-primary"}
                    icon={<GiFemale size={40} />}
                    className="p-1"
                  />
                  <h3 className="mt-2">
                    <b>34</b> novvos
                  </h3>
                </CardBody>
              </Card>
            </Col>
            <Col md={12}>
              <Card>
                <CardBody>
                  <Avatar
                    color={"light-danger"}
                    icon={<GiDeathSkull size={40} />}
                    className="p-1"
                  />

                  <h3 className="mt-2">
                    Oxirgi o'limga <b>375</b> kun boldi
                  </h3>
                </CardBody>
              </Card>
            </Col>
            <Col md={12}>
              {" "}
              <Card>
                <CardBody>
                  <Avatar
                    color={"light-info"}
                    icon={<FaSyringe size={40} />}
                    className="p-1"
                  />

                  <h3 className="mt-2">
                    Oxirgi emlashga <b>375</b> kun boldi
                  </h3>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <section>
        <SimpleLineChart
          title={"Chorva soni"}
          data={heardCount}
          desc={"Chorva soni 2022 yilda"}
        />
        <SimpleLineChart
          title={"Tugulish va olimlar soni"}
          isLegend={true}
          data={deathCount}
        />
      </section>
    </Container>
  );
}

export default Heard;
