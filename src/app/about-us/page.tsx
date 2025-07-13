export default function AboutUs() {
  return (
    <div className="bg-amber-50">
      <div className="px-6 py-10 max-w-4xl mx-auto text-[#3A3A3A] font-sans space-y-10">
        <section className="bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold text-[#B17F59] mb-4">
            🧠 About Us — Hello Life
          </h1>
          <h2 className="text-2xl font-semibold text-[#56776C] mb-2">
            🌿 Company History
          </h2>
          <p className="mb-2">
            Hello Life was founded in 2023 with the vision of making mental
            health an essential part of everyday life. Starting from concerns
            that access to psychological services was still limited and often
            considered taboo, a group of professionals from the fields of
            psychology, technology, and design joined forces to create a
            friendly, inclusive, and accessible platform.
          </p>
          <ul className="list-disc pl-6 mb-2">
            <li>Helping more than 2,000 clients from various backgrounds.</li>
            <li>
              Launching a safe and convenient online consultation feature.
            </li>
            <li>Collaborate with educational organizations and companies.</li>
          </ul>
          <p>
            We believe that listening is the beginning of healing, and Hello
            Life is here to listen with empathy.
          </p>
        </section>

        <section className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-[#56776C] mb-4">
            👩‍⚕️ Meet the Team
          </h2>

          <div className="mb-6 ">
            <h3 className="text-xl font-semibold mb-2">
              ⭐ Team of Psychologists
            </h3>
            <ul className="space-y-2">
              <li>
                <strong>Dr. Anindya Putri</strong> – Lead Clinical Psychologist
                <br />
                <span className="text-sm text-gray-700">
                  10+ years of experience in adult clinical psychology.
                  Expertise in behavioral therapy and mindfulness.
                </span>
              </li>
              <li>
                <strong>Irwan Yudha, M.Psi</strong> – Child & Adolescent
                Specialist
                <br />
                <span className="text-sm text-gray-700">
                  Focus on child and adolescent development, emotional
                  education, and family therapy.
                </span>
              </li>
              <li>
                <strong>Sheila Hartanto, M.Psi</strong> – Counselor & Group
                Therapist
                <br />
                <span className="text-sm text-gray-700">
                  Experienced in group counseling and interpersonal relationship
                  issues.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              💻 Technology & Creative Team
            </h3>
            <ul className="space-y-2">
              <li>
                <strong>Rizky Ramadhan</strong> – Head of Product
                <br />
                <span className="text-sm text-gray-700">
                  Designing an intuitive user experience to make psychological
                  services more accessible.
                </span>
              </li>
              <li>
                <strong>Nadia Amelia</strong> – Content & Community Manager
                <br />
                <span className="text-sm text-gray-700">
                  Developing educational content about mental health and
                  building the Hello Life support community.
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-[#56776C] mb-4">
            💬 Culture & Values
          </h2>
          <p className="mb-4">
            At Hello Life, our work culture is built on empathy, collaboration,
            and work-life balance. We believe that the workplace should support
            personal and professional growth.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Empathy First</strong>: We listen without judgment.
            </li>
            <li>
              <strong>Integrity & Privacy</strong>:We maintain confidentiality and ethics in all our services.
            </li>
            <li>
              <strong>Continuous Learning</strong>: We encourage learning and self-development.
            </li>
            <li>
              <strong>Inclusive Environment</strong>: We are open to diversity and respect every individual.
            </li>
          </ul>
          <p className="mt-4">
           We work with flexibility and purpose: to have a positive impact on the lives of many people.
          </p>
        </section>

        <section className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-[#56776C] mb-2">
            🎯 Want to get to know us better?
          </h2>
          <p className="text-sm">
            📩 <strong>Email</strong>:{" "}
            <a
              href="mailto:support@hellolife.id"
              className="text-blue-600 underline"
            >
              support@hellolife.id
            </a>
            <br />
            📍 <strong>Lokasi</strong>: Jakarta, Indonesia
            <br />
            📱 <strong>Instagram</strong>:{" "}
            <a
              href="https://instagram.com/hellolife.id"
              target="_blank"
              className="text-blue-600 underline"
            >
              @hellolife.id
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
