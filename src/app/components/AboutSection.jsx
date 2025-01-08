const AboutSection = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: ["python", "cpp", "cs", "javascript", "typescript", "matlab", "java", "scala", ],
    },
    {
      category: "Libraries",
      items: [
        "react",
        "next",
        "nodejs",
        "flask",
        "graphql",
        "pytorch",
        "dynamodb",
        "opencv",
      ],
    },
    {
      category: "Software",
      items: ["unity", "git", "docker"],
    },
  ];

  return (
    <section className="text-black" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center mt-[80px]">
        {/* About Me Section */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full text-black">
          <h2 className="text-4xl font-bold text-black mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-black">
          Hi! I'm Devansh Nagpal, a 4th-year Computer Engineering student at the University of Guelph.
My passions lie in Embedded Software, Full Stack Development, and the intersection of Machine Learning and AI, particularly in robotics and biomedical applications.

<br></br> <br></br> Outside of academics, I'm always exploring new ideas and taking on exciting projects. Whether it's building full-stack web applications, designing embedded systems, or working on AI-driven solutions, I'm constantly seeking ways to innovate. When I'm not coding, you’ll find me hiking, collaborating on hackathon challenges, or discovering the latest tech trends to experiment with :D


          </p>

          {/* Buttons for Resume and Projects */}
          <div className="mt-6 flex gap-4">
            <a
              href="/path-to-your-resume.pdf" // Update with your actual resume link
              className="inline-block bg-black text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
            <a
              href="#projects" // Adjust if your projects section has a different ID
              className="inline-block bg-black text-white px-6 py-3 rounded-md shadow-md hover:bg-green-600 transition-colors"
            >
              See My Projects
            </a>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full ml-8 text-black">
          <h2 className="text-5xl font-bold text-black mb-8">Skills</h2>

          {skills.map((skillCategory, index) => (
            <div className="mb-8" key={index}>
              <h3 className="text-3xl font-semibold text-black mb-4">
                {skillCategory.category}
              </h3>
              <div className="skills-icons">
                <a
                  href="https://skillicons.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`https://skillicons.dev/icons?i=${skillCategory.items.join(
                      ","
                    )}&theme=light&perline=5`}
                    alt={`${skillCategory.category} Skills`}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
