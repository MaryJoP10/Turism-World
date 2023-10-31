import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./CountryTabs.css";

const CustomTabs = ({ tabs }) => {
    return (
        <div className="tabs_container">
        <Tabs>
            <div className='tabs'>
                <TabList style={{ display: 'flex' }}>
                    {tabs.map((tab, index) => (
                        <Tab style={{ flex: 1, textAlign: 'center' }} key={index}>{tab.label}</Tab>
                    ))}
                </TabList>
            </div>

            {tabs.map((tab, index) => (
                <TabPanel className ="tabs_content" key={index}>{tab.content}</TabPanel>
            ))}
        </Tabs>
        </div>

    );
};

export default CustomTabs;