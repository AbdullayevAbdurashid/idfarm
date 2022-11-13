// ** React Imports
import { Fragment, useState } from "react";

// ** Third Party Components
import Select from "react-select";
import Cleave from "cleave.js/react";
import { useForm, Controller } from "react-hook-form";
import "cleave.js/dist/addons/cleave-phone.us";

// ** Reactstrap Imports
import {
  Row,
  Col,
  Form,
  Card,
  Input,
  Label,
  Button,
  CardBody,
  CardTitle,
  CardHeader,
} from "reactstrap";

// ** Utils

// ** Demo Components

const AccountTabs = ({ data }) => {
  // ** States
  const handleSubmit = () => {};
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Fragment>
      <Card>
        <CardHeader className="border-bottom">
          <CardTitle tag="h4">Profile Details</CardTitle>
        </CardHeader>
        <CardBody className="py-2 my-25">
          <Form className=" pt-50" onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="ID">
                  ID
                </Label>
                <Input
                  id="emailInput"
                  type="texy"
                  name="ID"
                  placeholder="ID"
                  defaultValue={data.id}
                />
              </Col>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="gender">
                  Jinsi
                </Label>
                <Select
                  isDisabled
                  id="country"
                  isClearable={false}
                  className="react-select"
                  classNamePrefix="select"
                  options={[
                    { value: "male", label: "Navvos" },
                    { value: "female", label: "Sigir" },
                  ]}
                  defaultValue={{ value: "female", label: "Sigir" }}
                />
              </Col>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="date">
                  Tugilgan sana
                </Label>
                <Input
                  id="date"
                  type="text"
                  disabled
                  name="email"
                  placeholder="Sana"
                  defaultValue={data.date}
                />
              </Col>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="company">
                  Tugulgan Vazni
                </Label>
                <Input
                  disabled
                  defaultValue={data.weightInitial}
                  id="company"
                  name="company"
                  placeholder="Vazn"
                />
              </Col>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="weight">
                  Hozirgi vazni
                </Label>
                <Input
                  defaultValue={data.weight}
                  id="weight"
                  name="weight"
                  placeholder="Vazni"
                />
              </Col>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="father">
                  Ota mol
                </Label>
                <Input
                  disabled
                  defaultValue={data.parent.father}
                  id="father"
                  name="father"
                  placeholder="Otasi"
                />
                <Label className="form-label" for="mother">
                  Ota mol
                </Label>
                <Input
                  disabled
                  defaultValue={data.parent.mother}
                  id="mother"
                  name="mother"
                  placeholder="Onasi"
                />
              </Col>
              <Col className="mt-2" sm="12">
                <Button type="submit" className="me-1" color="primary">
                  Saqlash
                </Button>
                <Button color="secondary" outline>
                  Ozgarib bolmaydigan malumotlarni ozgartirish
                </Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default AccountTabs;
