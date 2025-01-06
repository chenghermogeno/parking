import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQs() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>How do I reserve a parking slot?</AccordionTrigger>
          <AccordionContent>
            Simply select your desired location, choose your parking date and
            time, and click the submit button. You'll receive a confirmation of
            your reservation immediately.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            What payment methods are accepted?
          </AccordionTrigger>
          <AccordionContent>
            We accept various payment methods including credit/debit cards,
            GCash, Maya, and other digital wallets. Cash payments are also
            accepted at selected locations.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Can I cancel my reservation?</AccordionTrigger>
          <AccordionContent>
            Yes, you can cancel your reservation up to 2 hours before your
            scheduled parking time. A full refund will be processed within 3-5
            business days.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            Is there a time limit for parking?
          </AccordionTrigger>
          <AccordionContent>
            Parking duration depends on the location. Most locations allow
            parking from 1 hour up to 24 hours. You can check the specific time
            limits when making your reservation.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>What happens if I arrive late?</AccordionTrigger>
          <AccordionContent>
            We provide a 15-minute grace period for all reservations. If you
            arrive later than that, your slot may be given to another customer,
            subject to availability.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
