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
  FormFeedback,
} from "reactstrap";

// ** Utils
import { selectThemeColors } from "@utils";

// ** Demo Components
import DeleteAccount from "./DeleteAccount";

const AccountTabs = ({ data }) => {
  // ** Hooks
  const defaultValues = {
    lastName: "",
    firstName: data.fullName.split(" ")[0],
  };
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  // ** States
  const [avatar, setAvatar] = useState(data.avatar ? data.avatar : "");

  const onChange = (e) => {
    const reader = new FileReader(),
      files = e.target.files;
    reader.onload = function () {
      setAvatar(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const onSubmit = (data) => {
    if (Object.values(data).every((field) => field.length > 0)) {
      return null;
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: "manual",
          });
        }
      }
    }
  };

  const handleImgReset = () => {
    setAvatar(require("@src/assets/images/avatars/avatar-blank.png").default);
  };

  return (
    <Fragment>
      <Card>
        <CardHeader className="border-bottom">
          <CardTitle tag="h4">Profile Details</CardTitle>
        </CardHeader>
        <CardBody className="py-2 my-25">
          <div className="d-flex">
            <div className="me-25">
              <img
                className="rounded me-50"
                src={avatar}
                alt="Generic placeholder image"
                height="100"
                width="100"
              />
            </div>
            <div className="d-flex align-items-end mt-75 ms-1">
              <div>
                <Button
                  tag={Label}
                  className="mb-75 me-75"
                  size="sm"
                  color="primary"
                >
                  Yuklash
                  <Input
                    type="file"
                    onChange={onChange}
                    hidden
                    accept="image/*"
                  />
                </Button>
                <Button
                  className="mb-75"
                  color="secondary"
                  size="sm"
                  outline
                  onClick={handleImgReset}
                >
                  Bekor qilish
                </Button>
                <p className="mb-0">JPG, GIF or PNG. Max size of 800kB</p>
              </div>
            </div>
          </div>
          <Form className="mt-2 pt-50" onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="firstName">
                  ismingiz
                </Label>
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="firstName"
                      placeholder="John"
                      invalid={errors.firstName && true}
                      {...field}
                    />
                  )}
                />
                {errors && errors.firstName && (
                  <FormFeedback>Please enter a valid First Name</FormFeedback>
                )}
              </Col>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="lastName">
                  FAMILIYANGIZ
                </Label>
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      invalid={errors.lastName && true}
                      {...field}
                    />
                  )}
                />
                {errors.lastName && (
                  <FormFeedback>Please enter a valid Last Name</FormFeedback>
                )}
              </Col>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="emailInput">
                  E-mail
                </Label>
                <Input
                  id="emailInput"
                  type="email"
                  name="email"
                  placeholder="Email"
                  defaultValue={data.email}
                />
              </Col>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="company">
                  Ferma nomi
                </Label>
                <Input
                  defaultValue={data.company}
                  id="company"
                  name="company"
                  placeholder="Company Name"
                />
              </Col>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="phNumber">
                  Telefon raqmai
                </Label>
                <Cleave
                  id="phNumber"
                  name="phNumber"
                  className="form-control"
                  placeholder=" 99 999 99 99"
                  options={{ phone: true, phoneRegionCode: "UZ" }}
                />
              </Col>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="address">
                  Address
                </Label>
                <Input
                  id="address"
                  name="address"
                  placeholder="12, Business Park"
                />
              </Col>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="accountState">
                  VILOYAT
                </Label>
                <Input id="accountState" name="state" placeholder="Fargona" />
              </Col>
              <Col className="mt-2" sm="12">
                <Button type="submit" className="me-1" color="primary">
                  Saqlash
                </Button>
                <Button color="secondary" outline>
                  Bekor qilish
                </Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
      <DeleteAccount />
    </Fragment>
  );
};

export default AccountTabs;
