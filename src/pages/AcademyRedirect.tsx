import { useEffect } from "react";
import { ACADEMY_URL } from "@/sections/AcademySpotlight";

/**
 * /academy on the main domain is not a real page.
 * The Academy lives on its own subdomain, so any visit to
 * custospark.com/academy* is bounced to academy.custospark.com.
 * The server .htaccess does the same 301 for non-SPA hits
 * (the physical /academy folder shadows this route otherwise).
 */
export function AcademyRedirect() {
  useEffect(() => {
    window.location.replace(ACADEMY_URL);
  }, []);

  return (
    <section className="py-20 text-center text-white">
      <p className="text-white/70">
        Redirecting to the Academy…{" "}
        <a href={ACADEMY_URL} className="underline underline-offset-2">
          Continue
        </a>
      </p>
    </section>
  );
}
