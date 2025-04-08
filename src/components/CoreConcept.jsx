import { CORE_CONCEPTS } from "../data";
import CoreConcepts from "../components/CoreConcepts/CoreConcepts";
import Section from "./Section";

export default function CoreConcept() {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptitems) => (
          <CoreConcepts key={conceptitems.title} {...conceptitems} />
        ))}
      </ul>
    </Section>
  );
}
