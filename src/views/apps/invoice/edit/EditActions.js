// ** React Imports
import { Fragment } from "react";
import { Link } from "react-router-dom";

// ** Reactstrap Imports
import { Card, CardBody, Button, Input } from "reactstrap";

const EditActions = ({ id, setSendSidebarOpen, setAddPaymentOpen }) => {
  return (
    <Fragment>
      <Card className="invoice-action-wrapper">
        <CardBody>
          <Button
            color="primary"
            block
            className="mb-75"
            onClick={() => setSendSidebarOpen(true)}
          >
            Taklifni jo'natish
          </Button>
          <Button
            tag={Link}
            to={`/apps/invoice/preview/${id}`}
            color="primary"
            block
            outline
            className="mb-75"
          >
            Preview
          </Button>
          <Button color="primary" block outline className="mb-75">
            Save
          </Button>
          <Button color="success" block onClick={() => setAddPaymentOpen(true)}>
            Tolov qilish
          </Button>
        </CardBody>
      </Card>
      <div className="mt-2">
        <div className="invoice-payment-option">
          <p className="mb-50">Tolov turi</p>
          <Input type="select" id="payment-select">
            <option>Karta (HUMO)</option>
            <option>Karta (UZCARD)</option>
            <option>Paypal</option>
            <option>Internet Banking</option>
            <option>UPI Transfer</option>
          </Input>
        </div>
        <div className="invoice-terms mt-1">
          <div className="d-flex justify-content-between">
            <label className="cursor-pointer mb-0" htmlFor="payment-terms">
              To'lov shartlari
            </label>
            <div className="form-switch">
              <Input type="switch" id="payment-terms" defaultChecked />
            </div>
          </div>
          <div className="d-flex justify-content-between py-1">
            <label className="cursor-pointer mb-0" htmlFor="client-notes">
              Mijoz eslatmalari
            </label>
            <div className="form-switch">
              <Input type="switch" id="client-notes" defaultChecked />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <label className="cursor-pointer mb-0" htmlFor="payment-stub">
              Payment Stub
            </label>
            <div className="form-switch">
              <Input type="switch" id="payment-stub" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditActions;
