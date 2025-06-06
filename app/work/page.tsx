import { Button } from "../../components/ui/button";
import Container from "../../components/ui/container";
import Card from "../../components/ui/card";
import FadeLink from "../../components/ui/fadelink";

export const metadata = {
  layoutClassName: "case-study-list",
  title: "Dan Betz • Work Samples & Case Studies",
  description: "Some examples of Dan's work as a leader and product designer.",
};

export default function WorkPage() {
  return (
    <>
    <Container>
      <h1>Case Studies</h1>
        <Card className="purple texture-overlay">
          <FadeLink href="/work/case-study-slg/">
            <p className="case-study">DonorsChoose</p>
            <h3>A New Way to Donate: School-Level Giving</h3>
            <ul className="tags">
              <li>Strategy</li>
              <li>Growth</li>
              <li>Management</li>
            </ul>
          </FadeLink>
        </Card>
        <Card className="purple texture-overlay">
          <a href="#">
            <p className="case-study">DonorsChoose</p>
            <h3>Change is Hard: Restructuring the Way We Work</h3>
            <ul className="tags">
              <li>Organizational change</li>
              <li>Management</li>
            </ul>
          </a>
        </Card>
        <Card className="purple texture-overlay">
          <a href="#">
            <p className="case-study">DonorsChoose</p>
            <h3>Redesigning Teacher Registration &amp; Project Creation</h3>
            <ul className="tags">
              <li>Design</li>
              <li>Collaboration</li>
            </ul>
          </a>
        </Card>
        <Card className="orange texture-overlay">
          <a href="#">
            <p className="case-study">Etsy</p>
            <h3>Selected work from my time at Etsy</h3>
            <ul className="tags">
              <li>Design</li>
              <li>Collaboration</li>
            </ul>
          </a>
        </Card>
        <Card className="red texture-overlay">
          <a href="#">
            <p className="case-study">Just for fun</p>
            <h3>Just for fun side projects: branding and the like</h3>
            <ul className="tags">
              <li>Design</li>
              <li>Collaboration</li>
            </ul>
          </a>
        </Card>

      {/* Contact Section */}
      <section className="space-y-4" id="contact">
        <h3>Let&apos;s be real&hellip;</h3>
        <p>
          It&apos;s tough to represent the kind of work I do as a leader visually. The best way to get to know about my approach and what I can bring to your team is to talk.
        </p>
        <Button>
          <a href="mailto:your.email@example.com">Email me</a>
        </Button>
      </section>
    </Container>
    </>
  );
}
