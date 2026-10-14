"use client";

import { useState } from "react";

interface Step {
  number: string;
  title: string;
  description: string;
}

const youtubeCreatorSteps: Step[] = [
  {
    number: "01",
    title: "Script & Voiceover Handover",
    description: "Reviewing the client script, audio narration, and storytelling hook.",
  },
  {
    number: "02",
    title: "Premiere Pro & After Effects Setup",
    description: "Importing audio tracks, syncing beats, and laying out the timeline structure.",
  },
  {
    number: "03",
    title: "Footage & B-Roll Curation",
    description: "Gathering high-res sports clips, cinematic B-roll, and topical imagery.",
  },
  {
    number: "04",
    title: "Motion Design & Sound SFX",
    description: "Adding kinetic subtitles, visual transitions, and multi-layered sound design.",
  },
  {
    number: "05",
    title: "4K Master Video Rendering",
    description: "Exporting 4K/60fps master videos optimized for YouTube and viral reels.",
  },
  {
    number: "06",
    title: "YouTube Copyright Pre-Scan",
    description: "Automated Content ID verification ensuring 100% strike-free monetization.",
  },
  {
    number: "07",
    title: "Final Review & Client Delivery",
    description: "Fast turnaround delivery with revisions included until 100% satisfied.",
  },
];

const playerRecruitmentSteps: Step[] = [
  {
    number: "01",
    title: "Game Footage & Player Data Gathering",
    description: "Receiving full match tapes, player headshot, jersey #, position, and stats.",
  },
  {
    number: "02",
    title: "Premiere Pro Ingestion & Play Isolation",
    description: "Importing match tapes and cutting down every sequence featuring the player.",
  },
  {
    number: "03",
    title: "Top Play Curating & Category Sorting",
    description: "Filtering elite moments into clear categories: Scoring, Assists, and Defense.",
  },
  {
    number: "04",
    title: "Player Spotlight Tracking & Halos",
    description: "Adding animated spotlight circles and arrows so scouts spot the athlete instantly.",
  },
  {
    number: "05",
    title: "Dynamic Speed Ramping & Slow-Mo",
    description: "Slowing down key technique moves with fast ramps between dead-ball time.",
  },
  {
    number: "06",
    title: "Scout Profile Card & Stats Overlay",
    description: "Designing broadcast intro/outro cards with player photo, GPA, and scout contact.",
  },
  {
    number: "07",
    title: "3-Minute Scout-Ready Master Reel",
    description: "Exporting a high-impact 3-minute reel tailored for college recruiters and scouts.",
  },
];

export default function WorkflowSection() {
  const [activeTab, setActiveTab] = useState<"both" | "creator" | "recruitment">("both");

  return (
    <section className="workflow-section" id="workflow">
      <div className="wrap">
        <div className="section-header-center">
          <h2 className="section-title">
            The Production <span>Workflows.</span>
          </h2>
        </div>

        {/* Workflow Switcher Tabs */}
        <div className="workflow-tab-bar">
          <button
            className={`workflow-tab-btn ${activeTab === "both" ? "active" : ""}`}
            onClick={() => setActiveTab("both")}
          >
            <span>⚡ Side-by-Side View</span>
          </button>
          <button
            className={`workflow-tab-btn ${activeTab === "creator" ? "active" : ""}`}
            onClick={() => setActiveTab("creator")}
          >
            <span>🎬 YouTube &amp; Creator Pipeline</span>
          </button>
          <button
            className={`workflow-tab-btn ${activeTab === "recruitment" ? "active" : ""}`}
            onClick={() => setActiveTab("recruitment")}
          >
            <span>🏆 Athlete Recruitment Pipeline</span>
          </button>
        </div>

        {/* Dual Column Layout */}
        <div className={`workflow-dual-grid ${activeTab !== "both" ? "single-view" : ""}`}>
          {/* Column 1: YouTube & Content Creator Workflow */}
          {(activeTab === "both" || activeTab === "creator") && (
            <div className="workflow-column">
              <div className="workflow-column-header">
                <h3>YouTube &amp; Viral Video Pipeline</h3>
              </div>

              <div className="workflow-list">
                {youtubeCreatorSteps.map((step) => (
                  <div key={step.number} className="workflow-step-compact">
                    <div className="step-badge-col">
                      <span className="step-number">{step.number}</span>
                    </div>
                    <div className="step-content-col">
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Column 2: Player Recruitment Workflow */}
          {(activeTab === "both" || activeTab === "recruitment") && (
            <div className="workflow-column recruitment-column">
              <div className="workflow-column-header">
                <h3>Athlete Recruitment Reel Pipeline</h3>
              </div>

              <div className="workflow-list">
                {playerRecruitmentSteps.map((step) => (
                  <div key={step.number} className="workflow-step-compact">
                    <div className="step-badge-col athlete-badge">
                      <span className="step-number">{step.number}</span>
                    </div>
                    <div className="step-content-col">
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
