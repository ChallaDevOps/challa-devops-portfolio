import skills from "@/data/skills";
import Card from "../ui/Card";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 bg-slate-900"
    >
      <Container>

        <SectionTitle
          title="Technical Skills"
          subtitle="What I Know"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill) => (

            <Card key={skill.name}>

              <div className="flex justify-between mb-4">

                <h3 className="text-xl font-bold">

                  {skill.name}

                </h3>

                <span className="text-sky-400">

                  {skill.level}%

                </span>

              </div>

              <p className="text-slate-400 mb-5">

                {skill.category}

              </p>

              <div className="w-full bg-slate-700 rounded-full h-3">

                <div
                  className="bg-sky-500 h-3 rounded-full"
                  style={{
                    width: `${skill.level}%`,
                  }}
                />

              </div>

            </Card>

          ))}

        </div>

      </Container>

    </section>
  );
}
