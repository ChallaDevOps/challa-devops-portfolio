"use client";

import Button from "@/components/ui/Button";
import { FaDownload } from "react-icons/fa";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-5 mt-10">
      <Button>
        <span className="flex items-center gap-2">
          <FaDownload />
          Download Resume
        </span>
      </Button>

      <Button variant="secondary">
        Contact Me
      </Button>
    </div>
  );
}
