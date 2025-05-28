import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8 max-w-4xl mx-auto space-y-12 prose">
      {/* Hero Section */}
      <section className="space-y-4">
        <h1 className="font-header">
          DAN BETZ
        </h1>
        <p className="font-body">
          I build teams, ship delightful products, and mentor the next generation of designers. Currently VP of Product & Design at DonorsChoose.
        </p>
        <div className="font-header">
          <Button asChild>
            <Link href="#contact">Get in touch</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/resume.pdf">View Resume</Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="space-y-2" id="about">
        <h2 className="font-header">About Me</h2>
        <p>
          With over a decade of experience leading design and product strategy, I’ve scaled product teams, launched platform-defining features, and fostered a culture of collaboration. I started my career in UX and grew into leadership roles at companies like Etsy and Seamless before joining DonorsChoose in 2014.
        </p>
        <p>
          I also coach youth sports in Maplewood, NJ and volunteer as a design mentor.
        </p>
      </section>

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
  );
}
