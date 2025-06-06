import { Button } from "../components/ui/button";
import Container from "../components/ui/container";
import FadeLink from "../components/ui/fadelink";
import HighlightOnScroll from "../components/ui/highlightonscroll";

export default function Header() {
  return (
    <>
    <div className="intro">
    <Container>
      <div className="intro-content">
        <h1>Dan Betz is a product and design leader with 25 years of experience building and scaling teams, shaping product strategy, and shipping features that deliver results. He also knows jiu&nbsp;jitsu.</h1>
      </div>
    </Container>
    </div>

      <Container>
      {/* Case Studies */}
      <section className="professional-background" id="work">
        <h2 className="font-header">VP Product & Design @  <a href="https://donorschoose.org/" target="_blank">DonorsChoose</a></h2>
        <p className="date-range">Jun 2014&ndash;present</p>
        <p>I currently lead the product, design, and UX research team at DonorsChoose. Our small but mighty team helps DonorsChoose deliver on its mission—to make it easy for anyone to help a teacher in need, moving us closer to a nation where students in every community have the tools and experiences they need for a great education. Over the course of my <HighlightOnScroll type="box" color="var(--color-red)">11 years</HighlightOnScroll> at DC, I helped grow the team, modernize the tools and practices, and deliver a huge impact at scale. I also bring the scones to important meetings.</p>

        <h2 className="font-header">Senior Product Designer @ <a href="https://etsy.com/" target="_blank">Etsy</a></h2>
        <p className="date-range">Jan 2011&ndash;Jun 2014</p>
        <p>While at Etsy, I worked on internationalizing the site, designed the first-generation apps for iPhone, iPad, and Android, helped build the mobile web interface, and worked to improve search. I also founded <HighlightOnScroll type="circle" color="var(--color-red)">Sweatsy</HighlightOnScroll>, the unofficial workout club and was the three-time first runner up for the Etsy&apos;s Fittest Man competition.</p>

        <h2 className="font-header">Design Director @ <a href="https://seamless.com/" target="_blank">Seamless</a></h2>
        <p className="date-range">Jul 2005&ndash;Jan 2011</p>
        <p>During my time at Seamless, I led the design team and helped redesign every corner of the web interface including leading UX and visual design for the iPhone app, Android app, and the <HighlightOnScroll type="underline" color="var(--color-red)">Blackberry app (!!!)</HighlightOnScroll>. I participated in several, but never won an office bake-off.</p>

        <h2 className="font-header">Web Designer @ <a href="https://wwnorton.com/" target="_blank">W. W. Norton &amp; Co.</a></h2>
        <p className="date-range">Oct 2002&ndash;Jul 2005</p>
        <p>At Norton, I was responsible for designing and maintaining the online book catalog for all college books. I also begrudgingly did a little print and multimedia work, but my main focus was on the web. I&apos;m still riding the high of winning a hotly contested <HighlightOnScroll type="box" color="var(--color-red)">chocolate chip cookie bake-off</HighlightOnScroll> in 2004.</p>

        <h2 className="font-header">Graphic Designer @ The Graphics Source <span className="rip">RIP</span></h2>
        <p className="date-range">Oct 2001&ndash;Sep 2002</p>
        <p>I learned a ton as a jack-of-all-trades designer at this small design shop. There was a lot of print work, some branding projects, but I also took the lead as the main <HighlightOnScroll type="circle" color="var(--color-red)">web guy</HighlightOnScroll> and worked on all website design projects that came our way. </p>

        <h2 className="font-header">Junior Designer @ <a href="https://www.cleanersupply.com/" target="_blank">Cleaner&apos;s Supply</a></h2>
        <p className="date-range">Sep 2000&ndash;May 2001</p>
        <p>While still a full-time college student, I got my feet wet designing garment bags, hangers, and all sorts of dry cleaner-related projects. I also had the opportunity to design the first version of their e-commerce website, which enabled their online ordering platform and remains <HighlightOnScroll type="underline" color="var(--color-red)">eerily similar</HighlightOnScroll> many years later!</p>
        <Button className="secondary">
          <a href="https://www.linkedin.com/in/danbetz/">Download my resume</a>
        </Button>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Want to see some examples of my work?</h2>
        <Button>
          <FadeLink href="/work/case-study-slg/">View some case studies</FadeLink>
        </Button>
      </section>
    </Container>
    </>
  );
}
