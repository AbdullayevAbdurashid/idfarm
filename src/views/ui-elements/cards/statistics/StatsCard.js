// ** Third Party Components
import classnames from "classnames";
import { TrendingUp, User, Box, DollarSign } from "react-feather";
import { FaSyringe } from "react-icons/fa";
import { GiSkullWithSyringe, GiCow, GiDeathSkull } from "react-icons/gi";
// ** Custom Components
import Avatar from "@components/avatar";

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  Row,
  Col,
} from "reactstrap";

const StatsCard = ({ cols }) => {
  const data = [
    {
      title: "15",
      subtitle: "Emlanganlar",
      color: "light-primary",
      icon: <FaSyringe size={24} />,
    },
    {
      title: "5",
      subtitle: "Emlanmaganlar",
      color: "light-info",
      icon: <GiSkullWithSyringe size={24} />,
    },
    {
      title: "5",
      subtitle: "Urug'langanlar",
      color: "light-success",
      icon: <GiCow size={24} />,
    },
    {
      title: "3",
      subtitle: "O'lganlar",
      color: "light-danger",
      icon: <GiDeathSkull size={24} />,
    },
  ];

  const renderData = () => {
    return data.map((item, index) => {
      const colMargin = Object.keys(cols);
      const margin = index === 2 ? "sm" : colMargin[0];
      return (
        <Col
          key={index}
          {...cols}
          className={classnames({
            [`mb-2 mb-${margin}-0`]: index !== data.length - 1,
          })}
        >
          <div className="d-flex align-items-center">
            <Avatar color={item.color} icon={item.icon} className="me-2" />
            <div className="my-auto">
              <h4 className="fw-bolder mb-0">{item.title}</h4>
              <CardText className="font-small-3 mb-0">{item.subtitle}</CardText>
            </div>
          </div>
        </Col>
      );
    });
  };

  return (
    <Card className="card-statistics">
      <CardHeader>
        <CardTitle tag="h4">Statistika</CardTitle>
        <CardText className="card-text font-small-2 me-25 mb-0">
          1 hafta oldin yangilangan
        </CardText>
      </CardHeader>
      <CardBody className="statistics-body">
        <Row>{renderData()}</Row>
      </CardBody>
    </Card>
  );
};

export default StatsCard;
