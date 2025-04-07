import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import TabButton from "./components/TabButton";
import { EXAMPLES } from "./data";

function App() {
  const [selectedTab, setSelectedTab] = useState();

  function handleSelect(selectHandler) {
    setSelectedTab(selectHandler);
  }

  let tabSelector = <p>Please select the tab</p>;
  if (selectedTab) {
    tabSelector = (
      <div>
        <h3>{EXAMPLES[selectedTab].title}</h3>
        <p>{EXAMPLES[selectedTab].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTab].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptitems) => (
              <CoreConcepts key={conceptitems.title} {...conceptitems} />
            ))}
           
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTab === "components"}
              onSelect={() => handleSelect("components")}
            >
              Component
            </TabButton>
            <TabButton
              isSelected={selectedTab === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTab === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTab === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
        </section>
        {tabSelector}
      </main>
    </div>
  );
}

export default App;
