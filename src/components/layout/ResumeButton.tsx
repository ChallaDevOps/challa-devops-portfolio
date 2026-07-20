import Button from "@/components/ui/Button";
import profile from "@/data/profile";

export default function ResumeButton() {
  return (
    <a
      href={profile.resume}
      download
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button>Download Resume</Button>
    </a>
  );
}
