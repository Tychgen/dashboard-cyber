import React, { useState } from 'react';
import { Tabs } from 'antd';
import MainContentDallas from './Offices/DallasOffice/MainContent/index.js';
import MainContentCoppel from './Offices/CoppelOffice/MainContent/index.js';
import MainContentLosAngeles from './Offices/LosAngelesOffice/MainContent/index.js';

const { TabPane } = Tabs;
const customStyle = {
  display:'flex',
  flexWrap: 'wrap',
  flexDirection:'row'
}

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("page1");

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <Tabs activeKey={activeTab} onChange={handleTabChange} style={customStyle}>
      <TabPane tab="Dallas Office" key="page1">
        <MainContentDallas />
      </TabPane>
      <TabPane tab="Coppell Office" key="page2">
        <MainContentCoppel />
      </TabPane>
      <TabPane tab="Los Angeles Office" key="page3">
        <MainContentLosAngeles />
      </TabPane>
    </Tabs>
  );
};

export default Dashboard;
