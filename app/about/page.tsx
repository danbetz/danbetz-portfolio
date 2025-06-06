import { Button } from "../../components/ui/button";
import Container from "../../components/ui/container";
import PhotoStack from "../../components/ui/photostack";
import HighlightOnScroll from "../../components/ui/highlightonscroll";


export default function WorkPage() {
  return (
    <>
    <Container>
      <h1>I live in Maplewood NJ, a short train ride away from NYC. I&apos;m open to remote or hybrid product &amp; design leadership positions where I can make a positive impact in a mission-driven environment.</h1>
      <p>Outside of the office, I love to spend time with my family. I have two <HighlightOnScroll type="strike-through" color="var(--color-red)">ferocious</HighlightOnScroll> daughters and am often shuttling them around to different sports and activities, baking with them, or doing garage workouts together. Occasionally I&apos;ll show up to a meeting with a black eye, either from catching a softball to the face or from my early morning Brazilian Jiu Jitsu practice. Snowboarding in the winter, beaching it in the summer. Tim Robinson. Ghost.</p>
      <PhotoStack />
        <div className="button-group">
            <Button>
            <a href="https://www.linkedin.com/in/danbetz/">Connect on LinkedIn</a>
            </Button>

            <Button>
            <a href="mailto:dan.betz@gmail.com">Email me</a>
            </Button>
        </div>

      <h2>A note about this site</h2>
      <p>It&apos;s been a while since I&apos;ve had to set up a portfolio site. Setting up this little site was a fun way to dip back into the modern tools and dust off my coding skills.</p>
      <p>This site runs on <a href="https://nextjs.org/" target="_blank">Next.js</a>, a powerful React-based framework that makes it fast, secure, and scalable. I&apos;m styling everything with handwritten CSS for full control over the look and feel—keeping it clean, consistent, and performant.</p>
      <p>It&apos;s is hosted on <a href="https://vercel.com/" target="_blank">Vercel</a>, which handles deployment and edge optimization automatically, so updates go live instantly and pages load fast everywhere. I&apos;m also designing with site speed and accessibility top of mind—minimizing bloat, optimizing assets, and structuring the content to be usable by everyone, including screen readers and keyboard users.</p>
      <p>And because old habits die hard, I&apos;m also keeping an eye on analytics, tracking performance and engagement like I do in my day job&mdash;yes, including this very page.</p>

    </Container>
    </>
  );
}
