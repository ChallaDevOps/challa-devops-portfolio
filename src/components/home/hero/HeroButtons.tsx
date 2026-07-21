"use client";

import Button from "@/components/ui/Button";
import { FaDownload } from "react-icons/fa";
import profile from "@/data/profile";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-5 mt-10">
      <a
        href={profile.resume}
        download
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>
          <span className="flex items-center gap-2">
            <FaDownload />
            Download Resume
          </span>
        </Button>
      </a>

      <a href="#contact">
        <Button variant="secondary">
          Contact Me
        </Button>
      </a>
    </div>
  );
}
