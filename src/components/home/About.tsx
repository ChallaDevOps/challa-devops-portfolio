import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          title="About Me"
          subtitle="Who Am I"
        />

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}

          <Card>

            <div className="flex justify-center">

              <div className="w-60 h-60 rounded-full bg-slate-800 flex items-center justify-center text-7xl">

                👨🏻‍💻

              </div>

            </div>

          </Card>

          {/* Right */}

          <Card>

            <h2 className="text-4xl font-bold mb-6">

              Naresh Challa

            </h2>

            <p className="text-slate-300 leading-8">

              Passionate DevOps Engineer with experience in
              Kubernetes, Azure Cloud, Docker, Helm,
              Terraform, GitHub Actions, Linux,
              Monitoring, CI/CD and Infrastructure
              Automation.

            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div>

                <h3 className="text-sky-400 font-semibold">
                  Experience
                </h3>

                <p>4+ Years</p>

              </div>

              <div>

                <h3 className="text-sky-400 font-semibold">
                  Current Role
                </h3>

                <p>DevOps Engineer</p>

              </div>

              <div>

                <h3 className="text-sky-400 font-semibold">
                  Location
                </h3>

                <p>Hyderabad</p>

              </div>

              <div>

                <h3 className="text-sky-400 font-semibold">
                  Domain
                </h3>

                <p>Cloud & DevOps</p>

              </div>

            </div>

          </Card>

        </div>

      </div>

    </section>
  );
}
