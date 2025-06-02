import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import Container from "../../components/ui/container";
import Link from "next/link";

export default function WorkPage() {
  return (
    <>
    <Container>
      <h1>Work work work work work</h1>

      {/* Case Studies */}
      <section className="case-study" id="work">
        <h2 className="font-header">DonorsChoose School-Level Giving Launch</h2>
        <p>They're using our own satellites against us. *And the clock is tic*king. God help us, we're in the hands of engineers. Hey, take a look at the earthlings. Goodbye! You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager?</p>
      </section>

      <section className="case-study" id="work">
        <h2 className="font-header">DonorsChoose Teacher Project Creation Redesign</h2>
        <p>They're using our own satellites against us. *And the clock is tic*king. God help us, we're in the hands of engineers. Hey, take a look at the earthlings. Goodbye! You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager?</p>
      </section>
      
      <section className="case-study" id="work">
        <h2 className="font-header">DonorsChoose Teacher Registration</h2>
        <p>They're using our own satellites against us. *And the clock is tic*king. God help us, we're in the hands of engineers. Hey, take a look at the earthlings. Goodbye! You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager?</p>
      </section>

      <section className="case-study" id="work">
        <h2 className="font-header">Hiring, Retaining, and Developing Talent</h2>
        <p>They're using our own satellites against us. *And the clock is tic*king. God help us, we're in the hands of engineers. Hey, take a look at the earthlings. Goodbye! You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager?</p>
      </section>



      {/* Contact Section */}
      <section className="space-y-4" id="contact">
        <h2 className="text-2xl font-semibold">Let&apos;s Connect</h2>
        <p>
          Interested in working together, talking shop, or just grabbing coffee? Drop me a line.
        </p>
        <Button>
          <a href="mailto:your.email@example.com">Email Me</a>
        </Button>
      </section>
    </Container>
    </>
  );
}
