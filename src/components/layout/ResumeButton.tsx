import Button from "@/components/ui/Button";
import profile from "@/data/profile";

export default function ResumeButton() {
  return (
    <a
      href={profile.resume}
      target="_blank"
      rel="noopener noreferrer"
      download="Naresh_Challa_Resume.pdf"
    >
      <Button>
        Download Resume
      </Button>
    </a>
  );
}
