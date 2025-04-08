import { CORE_CONCEPTS } from "../data";
import CoreConcepts from "../components/CoreConcepts/CoreConcepts";

export default function CoreConcept() {
    return (<section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
            {CORE_CONCEPTS.map((conceptitems) => (
                <CoreConcepts key={conceptitems.title} {...conceptitems} />
            ))}
               
        </ul>
    </section>
    );
}