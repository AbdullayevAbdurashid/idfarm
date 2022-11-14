// ** Reactstrap Imports
import { Input } from "reactstrap";

const PricingHeader = ({ duration, setDuration }) => {
  const onChange = (e) => {
    if (e.target.checked) {
      setDuration("yearly");
    } else {
      setDuration("monthly");
    }
  };

  return (
    <div className="text-center">
      <h1 className="mt-5">Dastur narxalari</h1>
      <p className="mb-2 pb-75">
        Barcha rejalar mahsulotingizni yaxshilash uchun 40 dan ortiq ilg'or
        vositalar va xususiyatlarni o'z ichiga oladi. Ehtiyojlaringizga mos
        keladigan eng yaxshi rejani tanlang.
      </p>
      <div className="d-flex align-items-center justify-content-center mb-5 pb-50">
        <h6 className="me-50 mb-0">Oylik tolov</h6>
        <div className="form-switch">
          <Input
            id="plan-switch"
            type="switch"
            checked={duration === "yearly"}
            onChange={onChange}
          />
        </div>
        <h6 className="ms-50 mb-0">Yillik tolov</h6>
      </div>
    </div>
  );
};

export default PricingHeader;
