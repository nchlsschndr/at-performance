import { Container } from "../../../components/Container";
import styles from "./faqs.module.scss";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";

import faqs from "./faqs";
import { Headline } from "../../Headline";

export const Faqs = () => {
    return (
        <div className={styles.wrapper} id="faqs">
            <Container>
                <Headline title="Faqs" sub="Alle deine Fragen direkt beantwortet" />
                <Accordion allowZeroExpanded>
                    {faqs.map((item, i) => (
                        <AccordionItem key={i}>
                            <AccordionItemHeading>
                                <AccordionItemButton>{item.q}</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>{item.a}</p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Container>
        </div>
    );
};
