import React, { useMemo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Tabs from "./Tabs";
import { Container, TabContent, TabPane } from "reactstrap";
import Breadcrumbs from "@components/breadcrumbs";
import AccountTabs from "./infoTabContent";
import VaccineInfo from "./vaccine";
function List() {
  let { id } = useParams();
  const [activeTab, setActiveTab] = useState("1");
  const data = [
    {
      id: id,
      gender: "navvos",
      race: "Golland",
      date: "12/10/2013",
      age: 16,
      weightInitial: 10,
      weight: 740,
      parent: {
        father: "BR 002",
        mather: "BR 003",
      },
    },
  ];
  const toggleTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <Container fluid>
      <Breadcrumbs
        title="Chorva passporti"
        data={[
          { title: "Chorvalar", link: "/pages/royhat" },
          { title: "Ma'lumot" },
        ]}
      />

      <Tabs toggleTab={toggleTab} activeTab={activeTab} />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <AccountTabs data={data[0]}></AccountTabs>
        </TabPane>
        <TabPane tabId="2">
          <VaccineInfo />
        </TabPane>
        <TabPane tabId="3">
          <VaccineInfo isIllness />
        </TabPane>
      </TabContent>
    </Container>
  );
}
export default List;
