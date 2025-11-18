"use client";
export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      
      {/* Top Intro Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          I am <span className="font-semibold">Sidra Khan</span>, a software engineer with
          experience in fintech, data analytics, business intelligence, and full-stack 
          development. Passionate about building impactful systems and solving problems using 
          data-driven engineering.
        </p>
      </div>

      {/* Resume Buttons */}
      <div className="flex justify-center gap-6 mb-16">
        <a
          href="/sidra-resume.pdf"
          target="_blank"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          View Resume
        </a>

        <a
          href="/sidra-resume.pdf"
          download
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
        >
          Download Resume
        </a>
      </div>

      {/* Experience Section */}
      <h2 className="text-3xl font-semibold mb-8 text-center">Work Experience</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-1">Software Engineer — i2c Inc.</h3>
          <p className="text-sm text-gray-500 mb-4">Mar 2023 — Present</p>
          <ul className="list-disc ml-5 space-y-1 text-gray-700 text-sm">
            <li>Optimized ACH + SEPA payment systems handling high-volume data.</li>
            <li>Developed APIs, ETL pipelines, Power BI dashboards.</li>
            <li>Improved backend performance using modern engineering practices.</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-1">Software Engineer (Rails) — Devsinc</h3>
          <p className="text-sm text-gray-500 mb-4">Dec 2022 — Feb 2023</p>
          <ul className="list-disc ml-5 space-y-1 text-gray-700 text-sm">
            <li>Developed backend and frontend features using Rails + React.</li>
            <li>Integrated SQL databases and REST APIs.</li>
            <li>Enhanced UI responsiveness and performance.</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-1">Computer Teacher — Fazaia College</h3>
          <p className="text-sm text-gray-500 mb-4">Nov 2020 — Mar 2023</p>
          <ul className="list-disc ml-5 space-y-1 text-gray-700 text-sm">
            <li>Taught Computer Science to 250+ students each semester.</li>
            <li>Conducted coding competitions and CS workshops.</li>
            <li>Promoted digital literacy and STEM education.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

