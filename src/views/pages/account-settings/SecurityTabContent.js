// ** React Imports
import { Fragment } from "react";

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Form,
  Button,
  CardBody,
  CardTitle,
  CardHeader,
  FormFeedback,
} from "reactstrap";

// ** Third Party Components
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// ** Custom Components
import InputPasswordToggle from "@components/input-password-toggle";

// ** Demo Components
import ApiKeysList from "./ApiKeysList";
import CreateApiKey from "./CreateApikey";
import TwoFactorAuth from "./TwoFactorAuth";
import RecentDevices from "./RecentDevices";

const showErrors = (field, valueLen, min) => {
  if (valueLen === 0) {
    return `${field} field is required`;
  } else if (valueLen > 0 && valueLen < min) {
    return `${field} must be at least ${min} characters`;
  } else {
    return "";
  }
};

const defaultValues = {
  newPassword: "",
  currentPassword: "",
  retypeNewPassword: "",
};

const SecurityTabContent = () => {
  const SignupSchema = yup.object().shape({
    currentPassword: yup
      .string()
      .min(8, (obj) =>
        showErrors("Current Password", obj.value.length, obj.min)
      )
      .required(),
    newPassword: yup
      .string()
      .min(8, (obj) => showErrors("New Password", obj.value.length, obj.min))
      .required(),
    retypeNewPassword: yup
      .string()
      .min(8, (obj) =>
        showErrors("Retype New Password", obj.value.length, obj.min)
      )
      .required()
      .oneOf([yup.ref(`newPassword`), null], "Passwords must match"),
  });
  // ** Hooks
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(SignupSchema),
  });

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

  return (
    <Fragment>
      <Card>
        <CardHeader className="border-bottom">
          <CardTitle tag="h4">Parolni o'zgartirish</CardTitle>
        </CardHeader>
        <CardBody className="pt-1">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col sm="6" className="mb-1">
                <Controller
                  control={control}
                  id="currentPassword"
                  name="Joriy parol"
                  render={({ field }) => (
                    <InputPasswordToggle
                      label="Current Password"
                      htmlFor="currentPassword"
                      className="input-group-merge"
                      invalid={errors.currentPassword && true}
                      {...field}
                    />
                  )}
                />
                {errors.currentPassword && (
                  <FormFeedback className="d-block">
                    {errors.currentPassword.message}
                  </FormFeedback>
                )}
              </Col>
            </Row>
            <Row>
              <Col sm="6" className="mb-1">
                <Controller
                  control={control}
                  id="newPassword"
                  name="newPassword"
                  render={({ field }) => (
                    <InputPasswordToggle
                      label="Yangi Parol"
                      htmlFor="newPassword"
                      className="input-group-merge"
                      invalid={errors.newPassword && true}
                      {...field}
                    />
                  )}
                />
                {errors.newPassword && (
                  <FormFeedback className="d-block">
                    {errors.newPassword.message}
                  </FormFeedback>
                )}
              </Col>
              <Col sm="6" className="mb-1">
                <Controller
                  control={control}
                  id="retypeNewPassword"
                  name="retypeNewPassword"
                  render={({ field }) => (
                    <InputPasswordToggle
                      label="Yangi parolni qayta kiriting"
                      htmlFor="retypeNewPassword"
                      className="input-group-merge"
                      invalid={errors.newPassword && true}
                      {...field}
                    />
                  )}
                />
                {errors.retypeNewPassword && (
                  <FormFeedback className="d-block">
                    {errors.retypeNewPassword.message}
                  </FormFeedback>
                )}
              </Col>
              <Col xs={12}>
                <p className="fw-bolder">Parol talablari:</p>
                <ul className="ps-1 ms-25">
                  <li className="mb-50">
                    Kamida 8 ta belgi - qancha ko'p bo'lsa, shuncha yaxshi
                  </li>
                  <li className="mb-50">Kamida bitta kichik harf</li>
                  <li>Kamida bitta raqam, belgi yoki boʻsh joy belgisi</li>
                </ul>
              </Col>
              <Col className="mt-1" sm="12">
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
      <RecentDevices />
    </Fragment>
  );
};

export default SecurityTabContent;
