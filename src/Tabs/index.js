import React, { useState } from "react";
import styled from "styled-components";

const TabsContainer = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const TabContainer = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  list-style-type: none;
  margin-left: 10px;
`;

const TabPicker = styled.span`
  min-width: 100px;
  max-width: 200px;
  width: 5vw;
  height: auto;
  display: flex;
  background-color: ${({ selected }) => (selected ? "black" : "gray")};
`;

export const Tab = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
  text-align: center;
  font-size: 14px;
`;

export const TabContent = styled.div`
  width: 100%;
  height: auto;
`;

const useTabs = (initTab) => {
  const [currIndex, setCurrIndex] = useState(initTab);

  return {
    currIndex,
    changeTab: setCurrIndex,
  };
};

export const Tabs = ({ children }) => {
  let tabItems = [];
  let tabContentItems = [];
  const { currIndex, changeTab } = useTabs(0);

  console.log(children);

  children.forEach((child, index) => {
    if (child.type.target === "li") tabItems.push(child);
    else if (child.type.target === "div") {
      tabContentItems.push(child);
    }
  });

  return (
    <TabsContainer>
      <TabContainer>
        {tabItems.map((child, index) => (
          <TabPicker
            onClick={() => changeTab(index)}
            selected={currIndex === index ? true : false}
          >
            {child}
          </TabPicker>
        ))}
      </TabContainer>
      <TabContent>{tabContentItems[currIndex]}</TabContent>
    </TabsContainer>
  );
};
