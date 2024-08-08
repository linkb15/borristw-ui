import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const Basic = () => {
  return (
    <Accordion defaultValue={['React']} className="max-w-[400px] w-full">
      {['React', 'Solid', 'Vue'].map((item) => (
        <AccordionItem key={item} value={item} className="w-full">
          <AccordionTrigger className="w-full bg-transparent">
            What is {item}?
          </AccordionTrigger>
          <AccordionContent>
            {item} is a JavaScript library for building user interfaces.
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
