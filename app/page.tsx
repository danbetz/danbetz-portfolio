import { Button } from "../components/ui/button";
import { ButtonLink } from "../components/ui/buttonlink";
import Container from "../components/ui/container";

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
      <section className="work-summary" id="work">
        <h3>PROFESSIONAL EXPERIENCE</h3>
        <h2 className="font-header">VP Product & Design @ <a href="https://donorschoose.org/" target="_blank">DonorsChoose</a></h2>
        <p className="date-range">Jun 2014&ndash;present</p>
        <p>I currently lead the product, design, and UX research team at DonorsChoose. Our small but mighty team helps DonorsChoose deliver on its mission—to make it easy for anyone to help a teacher in need, moving us closer to a nation where students in every community have the tools and experiences they need for a great education. We design the site experience to empower teachers to tell their stories in a compelling way and make it easy and gratifying for donors to find classroom projects to support. I also order the pizza for QA testing parties.</p>
        <ButtonLink><a href="#">Read more about my work</a></ButtonLink>

        <h2 className="font-header">Senior Product Designer @ <a href="https://etsy.com/" target="_blank">Etsy</a></h2>
        <p className="date-range">Jan 2011&ndash;Jun 2014</p>
        <p>While at Etsy, I worked on internationalizing the site, designed the first-generation apps for iPhone, iPad, and Android, helped build the mobile web interface, and worked to improve search. I also founded Sweatsy, the unofficial workout club and was the three-time first runner up for the Etsy&apos;s Fittest Man competition.</p>
        <ButtonLink><a href="#">Read more about my work</a></ButtonLink>

        <h2 className="font-header">Design Director @ <a href="https://seamless.com/" target="_blank">Seamless</a></h2>
        <p className="date-range">Jul 2005&ndash;Jan 2011</p>
        <p>During my time at Seamless, I led the design team and helped redesign every corner of the web interface including leading UX and visual design for the iPhone app, Android app, Blackberry app (!!!). I participated in several, but never won an office bake-off.</p>
        <ButtonLink><a href="#">Read more about my work</a></ButtonLink>

        <h2 className="font-header">Web Designer @ <a href="https://wwnorton.com/" target="_blank">W. W. Norton &amp; Co.</a></h2>
        <p className="date-range">Oct 2002&ndash;Jul 2005</p>
        <p>At Norton, I was responsible for designing and maintaining the online book catalog for all college books. I also begrudgingly did a little print and multimedia work, but my main focus was on the web. I&apos;m still riding the high of winning a hotly contested chocolate chip cookie bake-off in 2004.</p>

        <h2 className="font-header">Graphic Designer @ The Graphics Source <span>RIP</span></h2>
        <p className="date-range">Oct 2001&ndash;Sep 2002</p>
        <p>I learned a ton as a jack-of-all-trades designer at this small design shop. There was a lot of print work, some branding projects, but I also took the lead as the main &quot;web guy&quot; and worked on all website design projects that came our way. </p>

        <h2 className="font-header">Junior Designer @ <a href="https://www.cleanersupply.com/" target="_blank">Cleaner&apos;s Supply</a></h2>
        <p className="date-range">Sep 2000&ndash;May 2001</p>
        <p>While still a full-time college student, I got my feet wet designing garment bags, hangers, and all sorts of dry cleaner-related projects. I also had the opportunity to design the first version of cleanersupply.com, which enabled their online ordering platform and remains virtually unchanged many years later!</p>
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
