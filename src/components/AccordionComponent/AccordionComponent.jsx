import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Transition from "../Roadmap/Transition/Transition";

const AccordionComponent = ({ accordion }) => {
  return (
    <Accordion type="single" collapsible className="w-full flex flex-col gap-8">
      {accordion.map((item, index) => (
        <AccordionItem key={index} value={`${index}`}>
          <Transition delayCard={0.6}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.description}</AccordionContent>
          </Transition>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionComponent;
