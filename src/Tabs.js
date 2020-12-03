import React from 'react';
import Tab from './Tab';

const Tabs = ({ currentTab, changeCurrentTab }) => (
  <>
    {['Tab 1', 'Tab 2', 'Tab 3'].map((tab, index) =>
      <Tab key={index} title={tab} index={index}
        changeCurrentTab={changeCurrentTab} active={index === currentTab} />)}
  </>
);

export default Tabs;