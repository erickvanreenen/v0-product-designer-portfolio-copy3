"use client";
import { LogoMark } from "@/components/logo-mark";

import React from "react";
import { Project } from "@/lib/projects";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
// ArrowLeft retained for navigation section

interface OvertureCaseStudyProps {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

export function OvertureCaseStudy({ project, nextProject, prevProject }: OvertureCaseStudyProps) {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs text-foreground/58">{tag}</span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#09332C]/60 tracking-tight mb-4 max-w-2xl">
            {project.title}
          </h1>
          <p className="text-lg text-foreground/70 max-w-xl leading-relaxed">
            {project.subtitle}
          </p>

          {/* Meta grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 mt-14">
            {[
              { label: "Role", value: project.role },
              { label: "Team", value: "Erick van Reenen, Brent Nygaard" },
              { label: "Timeline", value: project.timeline },
              { label: "Tools", value: project.tools.join(", ") },
            ].map((item, i) => (
              <div key={item.label} className={`p-6 min-w-0 overflow-hidden border-border ${
                i === 1 || i === 3 ? "border-l" : i === 2 ? "md:border-l" : ""
              } ${
                i === 2 || i === 3 ? "border-t md:border-t-0" : ""
              }`}>
                <p className="text-xs text-foreground/65 font-medium uppercase tracking-widest mb-2">{item.label}</p>
                <p className="text-sm text-foreground break-words">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">

        {/* Brief */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl font-bold text-[#09332C]/60 tracking-tight">Brief</h2>
            </div>
          <p className="text-base text-foreground/85 leading-relaxed">
            Design a promoter app that streamlines event documentation, connecting promoters, agents, and artists throughout the advancing stage of event organisation.
          </p>
        </section>

        {/* Research */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl font-bold text-[#09332C]/60 tracking-tight">Research</h2>
            </div>
          <p className="text-base text-foreground/85 leading-relaxed mb-4">
            Benchmarked leading event platforms globally.
          </p>
          <p className="text-base text-foreground/85 leading-relaxed">
            Mapped user journeys and deliverables across the advancing process.
          </p>
        </section>

        {/* Wireframes */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl font-bold text-[#09332C]/60 tracking-tight">Wireframes</h2>
            </div>
          <a
            href="https://www.figma.com/design/QdoSI1orZciqLgNdeuwweb/Overture---Promoter-App?node-id=204-473&t=u2tQAugiWCBFyvqv-1"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="bg-[#F7EDDA]/50 rounded-lg p-8 group-hover:bg-[#F7EDDA]/80 transition-colors duration-300">
              {/* Three phone screens */}
              <div className="flex items-end justify-center gap-4">
                {/* Screen 1 */}
                <div className="w-28 bg-white rounded-xl border border-[#09332C]/10 p-3 shadow-sm">
                  <div className="h-1.5 w-10 bg-[#09332C]/20 rounded mb-3" />
                  <div className="h-14 bg-[#09332C]/6 rounded mb-3" />
                  <div className="space-y-1.5">
                    <div className="h-1.5 bg-[#09332C]/12 rounded w-full" />
                    <div className="h-1.5 bg-[#09332C]/12 rounded w-4/5" />
                    <div className="h-1.5 bg-[#09332C]/8 rounded w-3/5" />
                  </div>
                  <div className="mt-3 h-7 bg-[#09332C]/15 rounded" />
                </div>
                {/* Screen 2 — slightly raised */}
                <div className="w-28 bg-white rounded-xl border border-[#09332C]/10 p-3 shadow-sm mb-[-10px]">
                  <div className="flex items-center gap-1.5 mb-3">
                    <div className="w-5 h-5 rounded-full bg-[#09332C]/12" />
                    <div className="flex-1">
                      <div className="h-1.5 bg-[#09332C]/15 rounded mb-1" />
                      <div className="h-1 bg-[#09332C]/8 rounded w-2/3" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-7 bg-[#09332C]/6 rounded" />
                    <div className="h-7 bg-[#09332C]/6 rounded" />
                    <div className="h-7 bg-[#09332C]/6 rounded" />
                  </div>
                </div>
                {/* Screen 3 */}
                <div className="w-28 bg-white rounded-xl border border-[#09332C]/10 p-3 shadow-sm">
                  <div className="h-16 bg-[#09332C]/6 rounded mb-3 flex items-center justify-center">
                    <div className="w-7 h-7 rounded-full bg-[#09332C]/15" />
                  </div>
                  <div className="h-1.5 w-full bg-[#09332C]/12 rounded mb-1.5" />
                  <div className="h-1.5 w-2/3 bg-[#09332C]/8 rounded mb-3" />
                  <div className="grid grid-cols-2 gap-1.5">
                    <div className="h-5 bg-[#F0531C]/20 rounded" />
                    <div className="h-5 bg-[#09332C]/8 rounded" />
                  </div>
                </div>
              </div>
              {/* Label */}
              <div className="flex items-center justify-center gap-2 mt-8">
                <p className="text-xs text-foreground/65 uppercase tracking-widest group-hover:text-foreground/65 transition-colors duration-200">Open in Figma</p>
                <ArrowUpRight size={12} className="text-foreground/65 group-hover:text-[#F0531C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
              </div>
            </div>
          </a>
        </section>

        {/* Prototype */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl font-bold text-[#09332C]/60 tracking-tight">Prototype</h2>
            </div>
          <a
            href="https://www.figma.com/proto/QdoSI1orZciqLgNdeuwweb/Overture---Promoter-App?node-id=324-839&t=hzQyEkisr6EUwGlc-1&scaling=scale-down-width&content-scaling=fixed&page-id=1%3A6&starting-point-node-id=266%3A670&show-proto-sidebar=1"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="bg-[#E2F5EF] rounded-lg px-8 py-14 flex flex-col items-center justify-center text-center group-hover:bg-[#E2F5EF]/70 transition-colors duration-300">
              {/* Phone outline */}
              <div className="w-20 h-36 border-2 border-[#09332C]/15 rounded-2xl mb-8 flex flex-col items-center justify-between py-3 group-hover:border-[#09332C]/25 transition-colors duration-300">
                <div className="w-5 h-1 bg-[#09332C]/20 rounded-full" />
                <div className="space-y-1.5 w-full px-2">
                  <div className="h-1 bg-[#09332C]/10 rounded w-full" />
                  <div className="h-1 bg-[#09332C]/10 rounded w-3/4" />
                  <div className="h-4 bg-[#F0531C]/25 rounded mt-2" />
                </div>
                <div className="w-4 h-4 rounded-full border border-[#09332C]/15" />
              </div>
              <div className="flex items-center gap-2">
                <p className="text-xs text-[#09332C]/58 uppercase tracking-widest group-hover:text-[#09332C]/85 transition-colors duration-200">Open prototype</p>
                <ArrowUpRight size={12} className="text-[#09332C]/30 group-hover:text-[#F0531C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
              </div>
            </div>
          </a>
        </section>

        {/* Team */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl font-bold text-[#09332C]/60 tracking-tight">Team</h2>
            </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-foreground">Erick van Reenen</p>
              <p className="text-xs text-foreground/58">UX Designer</p>
            </div>
            <div>
              <Link
                href="https://nygaard.design/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground hover:text-[#F0531C] transition-colors duration-200"
              >
                Brent Nygaard
              </Link>
              <p className="text-xs text-foreground/58">UI Designer</p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl font-bold text-[#09332C]/60 tracking-tight">Timeline</h2>
            </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-2xl font-bold text-[#09332C]/60">2 weeks</p>
              <p className="text-xs text-foreground/58 mt-1">UX</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#09332C]/60">2 weeks</p>
              <p className="text-xs text-foreground/58 mt-1">UI</p>
            </div>
          </div>
        </section>

        {/* Outcome */}
        <section className="mb-24 bg-white rounded-lg p-8 md:p-10">
          <h2 className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-6">Outcome</h2>
          <p className="text-base text-foreground/80 leading-relaxed">
            Delivered and signed off in 4 weeks.
          </p>
        </section>

      </div>

      {/* Navigation */}
      <div>
        <div className="max-w-3xl mx-auto px-6 py-10">
          <div className="flex justify-between">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex items-center gap-3 text-foreground/65 hover:text-foreground transition-colors duration-200"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
                <div>
                  <p className="text-xs text-foreground/65 font-medium uppercase tracking-widest">Previous</p>
                  <p className="text-sm text-foreground group-hover:text-[#F0531C] transition-colors duration-200">{prevProject.title}</p>
                </div>
              </Link>
            ) : <div />}
            {nextProject && (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex items-center gap-3 text-foreground/65 hover:text-foreground transition-colors duration-200 text-right"
              >
                <div>
                  <p className="text-xs text-foreground/65 font-medium uppercase tracking-widest">Next</p>
                  <p className="text-sm text-foreground group-hover:text-[#F0531C] transition-colors duration-200">{nextProject.title}</p>
                </div>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}