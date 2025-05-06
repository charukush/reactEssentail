import { useState } from "react";
import TabButton from "../components/TabButton";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  const [selectedTab, setSelectedTab] = useState();

  function handleSelect(selectHandler) {
    setSelectedTab(selectHandler);
  }

  let tabSelector = <p>Please select the tab</p>;
  if (selectedTab) {
    tabSelector = (
      <>
        <h3>{EXAMPLES[selectedTab].title}</h3>
        <p>{EXAMPLES[selectedTab].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTab].code}</code>
        </pre>
      </>
    );
  }
  return (
    <>
      <Section title="Examples" id="examples">
        <Tabs
          //buttonContainer="menu"
          buttons={
            <>
              <TabButton
                isSelected={selectedTab === "components"}
                onClick={() => handleSelect("components")}
              >
                Component
              </TabButton>
              <TabButton
                isSelected={selectedTab === "jsx"}
                onClick={() => handleSelect("jsx")}
              >
                JSX
              </TabButton>
              <TabButton
                isSelected={selectedTab === "props"}
                onClick={() => handleSelect("props")}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={selectedTab === "state"}
                onClick={() => handleSelect("state")}
              >
                State
              </TabButton>
            </>
          }
        >
          {tabSelector}
        </Tabs>
      </Section>
    </>
  );
}
