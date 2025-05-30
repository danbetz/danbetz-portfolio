import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import Logo from "../components/ui/logo";
import Container from "../components/ui/container";
import Link from "next/link";
import Image from 'next/image';

export default function Home() {
  return (
    <>
    <header className="site-header">
      <div className="container">
        <Logo></Logo>
        <nav className="nav-links">
          <a href="/work">Work</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>

    <Container>
    <main className="container">
        <div className="intro flex-container">
          <div className="col1">
            <div>
              <Image
              src="/images/db-profile.jpg"
              alt="Dan Betz profile"
              width={200}
              height={200}
              className="rounded-full border-4 border-white"
              priority
              />
            </div>
          </div>
          <div className="col2">
            <h1>
              Dan Betz
            </h1>
            <p className="intro-text">
              Product and design leader with 25 years of experience building and scaling teams, shaping product strategy, and driving impactful user experiences. I’m passionate about mentorship, coaching, and making things better-whether that’s digital experiences, team culture, or perfecting my chocolate chip cookie recipe.
            </p>
          </div>
        </div>

      {/* Case Studies */}
      <section className="space-y-6" id="work">
        <h2 className="font-header">Work & Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-4 space-y-2">
              <h3 className="font-medium text-xl">DonorsChoose: Scaling with Pods</h3>
              <p>
                Led the evolution of our product org into mission-aligned pods, improving focus, accountability, and outcomes.
              </p>
              <Link href="#" className="text-primary underline">
                Read More
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 space-y-2">
              <h3 className="font-medium text-xl">Design Leadership & Mentorship</h3>
              <p>
                Built a thriving design team and culture from scratch. Mentored junior designers into senior leaders.
              </p>
              <Link href="#" className="text-primary underline">
                Read More
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="space-y-4" id="contact">
        <h2 className="text-2xl font-semibold">Let’s Connect</h2>
        <p>
          Interested in working together, talking shop, or just grabbing coffee? Drop me a line.
        </p>
        <Button asChild>
          <a href="mailto:your.email@example.com">Email Me</a>
        </Button>
      </section>
    </main>
    </Container>
    </>
  );
}
