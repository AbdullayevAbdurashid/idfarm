import { lazy } from "react";

const SingleCow = lazy(() => import("../../views/pages/singleCowPage/index"));

const CowsRouter = [
  {
    path: "/cows/:id",
    element: <SingleCow />,
  },
];

export default CowsRouter;
