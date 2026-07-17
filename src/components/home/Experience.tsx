import experience from "@/data/experience";
import Badge from "../ui/Badge";
import Card from "../ui/Card";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 bg-slate-950"
    >
      <Container>

        <SectionTitle
          title="Professional Experience"
          subtitle="Career Journey"
        />

        <div className="space-y-10">

          {experience.map((job) => (

            <Card key={job.company}>

              <div className="flex justify-between flex-wrap">

                <div>

                  <h2 className="text-3xl font-bold">

                    {job.company}

                  </h2>

                  <p className="text-sky-400 mt-2">

                    {job.role}

                  </p>

                </div>

                <div className="text-right">

                  <p>{job.duration}</p>

                  <p className="text-slate-400">

                    {job.location}

                  </p>

                </div>

              </div>

              <div className="flex flex-wrap gap-3 mt-8">

                {job.technologies.map((tech) => (

                  <Badge
                    key={tech}
                    title={tech}
                  />

                ))}

              </div>

              <ul className="mt-8 space-y-3 list-disc pl-6">

                {job.description.map((item) => (

                  <li
                    key={item}
                    className="text-slate-300"
                  >
                    {item}
                  </li>

                ))}

              </ul>

            </Card>

          ))}

        </div>

      </Container>

    </section>
  );
}
