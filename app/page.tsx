import Image from "next/image";
import {
  faqs,
  studioAbout,
} from "@/lib/client-content";
import AboutVideo from "@/components/studio/AboutVideo";
import StudioProjectCard from "@/components/studio/StudioProjectCard";
import ContactSection from "@/components/studio/ContactSection";
import StudioHero from "@/components/studio/StudioHero";
import ConsultingProcess from "@/components/studio/ConsultingProcess";
import StudioSectionHeading from "@/components/studio/StudioSectionHeading";
import Reveal from "@/components/studio/Reveal";
import { portfolioProjects } from "@/lib/placeholder-content";
import StudioSignal from "@/components/studio/StudioSignal";

export default function ClientStudioPage() {
  return (
    <main className="overflow-x-clip bg-[var(--brand-paper)] text-[var(--brand-ink)]">
      <StudioSignal />
      <StudioHero />

      {/* The same canonical work shown in the portfolio. */}
      <section id="work" className="scroll-mt-16 border-t border-[var(--brand-border)]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <Reveal>
            <StudioSectionHeading
              index="01"
              word="Work"
              eyebrow="Selected work / Same portfolio archive"
              title="Real builds. Clear decisions."
              description="Applied systems, product builds, and experiments shown with their real visuals. Open any project for the decisions and implementation."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {portfolioProjects.map((project, i) => (
              <StudioProjectCard
                key={project.id}
                project={project}
                index={i}
                featured={i === 0 || i === portfolioProjects.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
      <ConsultingProcess />

      {/* About */}
      <section id="about" className="scroll-mt-16 border-t border-[var(--brand-border)]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[280px_1fr] md:py-28">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-56 overflow-hidden border border-[var(--brand-border)] bg-[var(--brand-ink)] md:w-full">
              <Image
                src={studioAbout.portrait}
                alt="Portrait of Ian N. Silva"
                fill
                sizes="280px"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-space-mono text-xs font-bold uppercase tracking-[0.25em] text-[var(--brand-ink)]">03 / About</p>
            <h2 className="mt-4 font-syne text-4xl font-extrabold uppercase leading-[.92] tracking-[-0.055em] md:text-6xl">
              {studioAbout.heading}
            </h2>
            {studioAbout.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-5 max-w-2xl leading-relaxed text-[var(--brand-muted)]"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>

        {studioAbout.videoUrl && (
          <div className="mx-auto max-w-4xl px-6 pb-20 md:pb-28">
            <Reveal>
              <AboutVideo
                url={studioAbout.videoUrl}
                label={studioAbout.videoLabel}
              />
            </Reveal>
          </div>
        )}
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-16 border-t border-[var(--brand-border)] bg-[var(--brand-paper-raised)]">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <Reveal>
            <StudioSectionHeading
              index="04"
              word="Questions"
              eyebrow="FAQ / Straight answers"
              title="Before we start."
            />
          </Reveal>
          <div className="mt-10 divide-y divide-[var(--brand-border)] border-y border-[var(--brand-border)]">
            {faqs.map((faq, i) => (
              <Reveal key={faq.question} delay={i * 0.05}>
                <details className="group">
                  <summary className="grid cursor-pointer list-none grid-cols-[2rem_1fr_auto] items-center gap-4 py-5 text-left font-medium text-[var(--brand-ink)] transition-colors hover:text-[var(--brand-cobalt)] [&::-webkit-details-marker]:hidden">
                    <span className="font-space-mono text-[10px] text-[var(--brand-olive-ink)]">{String(i + 1).padStart(2, "0")}</span>
                    <span>{faq.question}</span>
                    <span className="shrink-0 text-[var(--brand-muted)] transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="max-w-3xl pb-5 text-sm leading-relaxed text-[var(--brand-muted)]">
                    {faq.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
