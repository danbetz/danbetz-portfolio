import { Button } from "../../../components/ui/button";
import Container from "../../../components/ui/container";
import Card from "../../../components/ui/card";
import FadeLink from "../../../components/ui/fadelink";
import HighlightOnScroll from "../../../components/ui/highlightonscroll";

export const metadata = {
  layoutClassName: "case-study-page",
  title: "Dan Betz • A New Way to Donate: School-Level Giving",
  description: "Case study: How DonorsChoose introduced a new way to donate.",
};

export default function CaseStudySLG() {
  return (
    <>
    <div id="page-content" className="case-study-intro texture-overlay slg fade-in">
    <Container>
        <p className="case-study"><FadeLink href="/work/">&lsaquo; Back to all case studies</FadeLink></p>
        <h1>A New Way to Donate: School-Level Giving</h1>
        <ul className="tags">
            <li>DonorsChoose</li>
            <li>Strategy</li>
            <li>Growth</li>
            <li>Management</li>
        </ul>
    </Container>
    </div>
    <Container>
        <h2><HighlightOnScroll>The Challenge</HighlightOnScroll></h2>
        <p>DonorsChoose is the leading classroom fundraising platform in the U.S., having raised over $1.8 billion for teachers covering 90% of all public schools. Yet despite this massive reach, a core limitation remained: at any given time, only around 17% of schools had an active fundraising request from a teacher&mdash;meaning <strong>donors couldn&apos;t give to the vast majority of public schools we serve, even if they wanted to</strong>.</p>
        <p>This disconnect hurt donor conversion, especially among new users searching for specific schools. Our existing model&mdash;where teachers must register and create time-bound project requests&mdash;was limiting our ability to match donor intent with giving opportunities.</p>

        <h2><HighlightOnScroll>The Hypothesis</HighlightOnScroll></h2>
        <p>What if we could allow donors to give to <em>every public school in the US</em>, even when no teacher was actively fundraising? Could this unlock more giving opportunities, improve conversion, and activate new teachers? We believed it could&mdash;but we needed to test whether this idea was viable, desirable, and scalable.</p>

        <p>We launched a tightly scoped MVP to explore:</p>
        <ul>
          <li>Whether school-level giving would increase donor conversion</li>
          <li>Whether this would be net-new revenue or cannibalize existing donations</li>
          <li>Whether funds sent to schools could be effectively redeemed and used by teachers</li>
        </ul>
        <p>We focused on a few main use cases: users searching for specific schools on our site, using our map feature to discover local giving opportuntiies, and organic school search traffic through search engines. Although we had existing school pages, they were previously de-emphasized since they led to donation dead-ends. This pilot flipped that model.</p>

        <h2><HighlightOnScroll>Execution</HighlightOnScroll></h2>
        <p>Our cross-functional team shipped new functionality to:</p>
        <ul>
          <li>Enable donations directly to school pages</li>
          <li>Surface these schools in key user flows like site search and map results</li>
          <li>Capture and track gift codes for later redemption</li>
        </ul>
        <p>Since this was a low-volume pilot, we used manual processes to disburse funds&mdash;outreach to active teachers and, where needed, school principals&mdash;to validate our hypothesis before scaling.</p>

        <h2><HighlightOnScroll>Results</HighlightOnScroll></h2>
        <p>The pilot was a resounding success across all key metrics:</p>
        <ul>
          <li><strong>+17% new donor conversion</strong>: Donors who previously bounced found a meaningful way to give. This unlocked new acquisition opportunities.</li>
          <li><strong>+25% map conversion</strong>: Our map, already a key discovery tool, became dramatically more effective when it included all schools&mdash;not just ones with live projects.</li>
          <li><strong>$110 average donation</strong>: School-level gifts were 40% larger than the average classroom project donation.</li>
          <li><strong>64% redemption rate</strong>: Despite a manual and unbranded experience, teachers enthusiastically redeemed their school gift codes&mdash;evidence of strong demand.</li>
        </ul>

        <h2><HighlightOnScroll>The Outcome</HighlightOnScroll></h2>
        <p>After analyzing the pilot results, we invested in a v2 that fully integrated School-Level Giving into the DonorsChoose ecosystem. It&apos;s now a core part of how we connect donors with public schools&mdash;and a strategic lever for both donor acquisition and teacher engagement.</p>
        <p>It&apos;s hard to overstate how rare it is to unlock a win of this magnitude on a platform as mature as DonorsChoose. This wasn&apos;t a flashy pivot or a shortcut&mdash;it was the result of deep user understanding, disciplined experimentation, and an extraordinary cross-functional team. The impact was worth every bit of the care, rigor, and collaboration we put into it.</p>

        <div className="addendum">
          <p>I led the talented cross-functional team of PMs, designers, and engineers who brought this project to life. I identified the opportunity, shaped the strategy, and guided the work from concept through launch. I led prioritization, collaborated on design direction, defined success metrics, and secured executive buy-in. The impact was only possible thanks to the creativity and execution of the team.</p>
        </div>

        <section>
            <h2>Next case study:</h2>
            <Card className="purple texture-overlay">
            <a href="#">
            <p className="case-study">DONORSCHOOSE</p>
            <h3>Change is hard: restructuring the way we work and scaling the product team</h3>
            <ul className="tags">
                <li>Organizational change</li>
                <li>Management</li>
            </ul>
            </a>
            </Card>
        </section>

      <section id="contact">
        <h2>Let&apos;s be real&hellip;</h2>
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
