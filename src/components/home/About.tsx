import Container from "../ui/Container";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import SectionTitle from "../ui/SectionTitle";
import profile from "../../data/profile";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-slate-950"
    >
      <Container>

        <SectionTitle
          title="About Me"
          subtitle="Who I Am"
        />

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT */}

          <Card>

            <div className="flex justify-center">

              <div
                className="
                h-72
                w-72
                rounded-full
                bg-slate-800
                flex
                items-center
                justify-center
                text-8xl
                "
              >
                👨🏻‍💻
              </div>

            </div>

          </Card>

          {/* RIGHT */}

          <Card>

            <h2 className="text-4xl font-bold mb-4">
              {profile.name}
            </h2>

            <p className="text-sky-400 text-xl mb-8">
              {profile.role}
            </p>

            <p className="text-slate-300 leading-8">
              {profile.summary}
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div>

                <h4 className="text-sky-400">
                  Experience
                </h4>

                <p>{profile.experience}</p>

              </div>

              <div>

                <h4 className="text-sky-400">
                  Company
                </h4>

                <p>{profile.company}</p>

              </div>

              <div>

                <h4 className="text-sky-400">
                  Location
                </h4>

                <p>{profile.location}</p>

              </div>

              <div>

                <h4 className="text-sky-400">
                  Email
                </h4>

                <p>{profile.email}</p>

              </div>

            </div>

            <div className="flex flex-wrap gap-3 mt-10">

              {profile.skills.map((skill) => (
                <Badge
                  key={skill}
                  title={skill}
                />
              ))}

            </div>

          </Card>

        </div>

      </Container>

    </section>
  );
}
