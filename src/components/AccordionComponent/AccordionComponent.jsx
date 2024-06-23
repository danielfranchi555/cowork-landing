import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionComponent = ({ accordion }) => {
  return (
    <Accordion type="single" collapsible className="w-full flex flex-col gap-8">
      {accordion.map((item, index) => (
        <AccordionItem key={index} value={`${index}`}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.description}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionComponent;
