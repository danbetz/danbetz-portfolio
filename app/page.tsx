import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import Container from "../components/ui/container";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <>
    <Container>
        <div className="intro flex-container">
          <div className="col1">
            <div>
              <Image
              src="/images/db-profile.jpg"
              alt="Dan Betz profile"
              width={200}
              height={200}
              className="profile-photo"
              priority
              />
            </div>
          </div>
          <div className="col2">
            <h1>
              Dan Betz
            </h1>
            <p className="intro-text">
              Product and design leader with 25 years of experience building and scaling teams, shaping product strategy, and driving impactful user experiences. I&apos;m passionate about mentorship, coaching, and making things better-whether that&apos;s digital experiences, team culture, or perfecting my chocolate chip cookie recipe.
            </p>
          </div>
        </div>

      {/* Case Studies */}
      <section className="work-summary" id="work">
        <h2 className="font-header">VP Product & Design @ DonorsChoose</h2>
        <p>I lead the product, design, and UX research team at DonorsChoose. Our small but mighty team helps DonorsChoose deliver on its mission—to make it easy for anyone to help a teacher in need, moving us closer to a nation where students in every community have the tools and experiences they need for a great education. We design the site experience to empower teachers to tell their stories in a compelling way and make it easy and gratifying for donors to find classroom projects to support. I also order the pizza for QA testing parties.</p>

        <h2 className="font-header">Senior Product Designer @ Etsy</h2>
        <p>While at Etsy, I worked on internationalizing the site, designed the first-generation apps for iPhone, iPad, and Android, helped build the mobile web interface, and worked to improve search. I also founded Sweatsy, the unofficial workout club and was the three-time first runner up for the Etsy&apos;s Fittest Man competition.</p>

        <h2 className="font-header">Design Director @ Seamless</h2>
        <p>During my time at Seamless, I led the design team and helped redesign every corner of the web interface including leading UX and visual design for the iPhone app, Android app, Blackberry app (!!!). I participated in several, but never won an office bake-off.</p>

        <h2 className="font-header">Web Designer @ W. W. Norton &amp; Co.</h2>
        <p>At Norton, I was responsible for designing and maintaining the online book catalog for all college books. I also begrudgingly did a little print and multimedia work, but my main focus was on the web. I&apos;m still riding the high of winning a hotly contested chocolate chip cookie bake-off in 2004.</p>

        <h2 className="font-header">Graphic Designer @ The Graphics Source</h2>
        <p>I learned a ton as a jack-of-all-trades designer at this small design shop. There was a lot of print work, some branding projects, but I also took the lead as the main &quot;web guy&quot; and worked on all website design projects that came our way. </p>

        <h2 className="font-header">Junior Designer @ Cleaner&apos;s Supply</h2>
        <p>While still a full-time college student, I got my feet wet designing garment bags, hangers, and all sorts of dry cleaner-related projects. I also had the opportunity to design the first version of cleanersupply.com, which enabled their online ordering platform and remains virtually unchanged many years later!</p>

          <Card>
            <CardContent className="case-study">
              <h3>DonorsChoose: Scaling with Pods</h3>
              <p>
                They&apos;re using our own satellites against us. *And the clock is tic*king. God help us, we&apos;re in the hands of engineers. Hey, take a look at the earthlings. Goodbye! You&apos;re a very talented young man, with your own clever thoughts and ideas. Do you need a manager?
              </p>
              <Link href="#" className="link-text">
                Read More
              </Link>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="case-study">
              <h3 className="font-medium text-xl">Design Leadership & Mentorship</h3>
              <p>
                Forget the fat lady! You&apos;re obsessed with the* fat lady! Drive us *out of here! Must go faster. Hey, you know how I&apos;m, like. always trying to save the planet? Here&apos;s my chance. God help us, we&apos;re in the hands of engineers. I gave it a cold? I gave it a virus. A computer virus.</p>
                <p>God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. Remind me to thank John for a lovely weekend. Hey, take a look at the earthlings. Goodbye! Remind me to thank John for a lovely weekend. What do they got in there? King Kong?
            </p>
              <Link href="#" className="text-primary underline">
                Read More
              </Link>
            </CardContent>
          </Card>
          
          <Card>
          <CardContent className="case-study">
              <h3>DonorsChoose: Scaling with Pods</h3>
              <p>
                They&apos;re using our own satellites against us. *And the clock is tic*king. God help us, we&apos;re in the hands of engineers. Hey, take a look at the earthlings. Goodbye! You&apos;re a very talented young man, with your own clever thoughts and ideas. Do you need a manager?
              </p>
              <Link href="#" className="link-text">
                Read More
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="case-study">
              <h3>DonorsChoose: Scaling with Pods</h3>
              <p>
                They&apos;re using our own satellites against us. *And the clock is tic*king. God help us, we&apos;re in the hands of engineers. Hey, take a look at the earthlings. Goodbye! You&apos;re a very talented young man, with your own clever thoughts and ideas. Do you need a manager?
              </p>
              <Link href="#" className="link-text">
                Read More
              </Link>
            </CardContent>
          </Card>

      </section>

      {/* Contact Section */}
      <section className="space-y-4" id="contact">
        <h2 className="text-2xl font-semibold">Let&apos;s Connect</h2>
        <p>
          Interested in working together, talking shop, or just grabbing coffee? Drop me a line.
        </p>
        <Button asChild>
          <a href="mailto:your.email@example.com">Email Me</a>
        </Button>
      </section>
    </Container>
    </>
  );
}
