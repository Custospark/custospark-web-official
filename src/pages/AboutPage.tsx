import { Section } from "@/components/Section";

export function AboutPage() {
  return (
    <>
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-heading text-h1 text-text-primary mb-6">About Custospark</h1>
          <p className="text-text-secondary text-body-lg">
            We are a team of passionate technologists dedicated to empowering businesses
            with cutting-edge solutions. From startups to enterprises, we help organizations
            thrive in the digital age.
          </p>
        </div>
      </Section>

      <Section variant="alt">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-h2 text-text-primary mb-4">Our Mission</h2>
            <p className="text-text-secondary text-body-lg">
              To empower businesses with innovative technology solutions that drive growth,
              efficiency, and competitive advantage in an increasingly digital world.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-h2 text-text-primary mb-4">Our Vision</h2>
            <p className="text-text-secondary text-body-lg">
              To be a global leader in technology, transforming industries and creating a
              positive impact on the world through innovation and excellence.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
