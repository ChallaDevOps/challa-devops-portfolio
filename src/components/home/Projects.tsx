import projects from "@/data/projects";
import Badge from "../ui/Badge";
import Card from "../ui/Card";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 bg-slate-900"
    >
      <Container>

        <SectionTitle
          title="Featured Projects"
          subtitle="Portfolio"
        />

        <div className="grid lg:grid-cols-2 gap-8">

          {projects.map((project) => (

            <Card key={project.title}>

              <h2 className="text-3xl font-bold mb-3">

                {project.title}

              </h2>

              <p className="text-sky-400 mb-6">

                {project.category}

              </p>

              <p className="text-slate-300 leading-8">

                {project.description}

              </p>

              <div className="flex flex-wrap gap-3 mt-8">

                {project.technologies.map((tech) => (

                  <Badge
                    key={tech}
                    title={tech}
                  />

                ))}

              </div>

              <div className="flex gap-4 mt-10">

                <a
                  href={project.github}
                  target="_blank"
                >
                  <Button>

                    GitHub

                  </Button>
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                >
                  <Button variant="secondary">

                    Live Demo

                  </Button>
                </a>

              </div>

            </Card>

          ))}

        </div>

      </Container>
    </section>
  );
}
