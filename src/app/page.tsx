import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-col justify-center font-sans bg-amber-50 text-gray-800">
      {/* HEADER */}
      <header className="bg-cover bg-center">
        <div className="bg-amber-150 bg-opacity-70">
          <div className="text-center p-10">
            <Image
              src="/mental-health.png"
              alt="Logo"
              width={200}
              height={200}
              className="mx-auto"
            />
            <h1 className="text-5xl font-bold text-[#A5B68D] font-cherry mt-4">
              Hello Life
            </h1>
            <p className="mt-2 text-lg font-playwrite">
              Listening, Understanding, Empowering.
            </p>
            <nav className="mt-6 px-4">
              <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-[#5a604d] font-cherry">
                <li className="w-full sm:w-auto">
                  <Link
                    href="/about-us"
                    className="block text-center hover:text-black bg-yellow-300 px-4 py-2 rounded-xl shadow"
                  >
                    About Us
                  </Link>
                </li>
                <li className="w-full sm:w-auto">
                  <Link
                    href="/services"
                    className="block text-center hover:text-black bg-yellow-300 px-4 py-2 rounded-xl shadow"
                  >
                    Services
                  </Link>
                </li>
                <li className="w-full sm:w-auto">
                  <Link
                    href="/articles"
                    className="block text-center hover:text-black bg-yellow-300 px-4 py-2 rounded-xl shadow"
                  >
                    Articles
                  </Link>
                </li>
                <li className="w-full sm:w-auto">
                  <Link
                    href="/teams"
                    className="block text-center hover:text-black bg-yellow-300 px-4 py-2 rounded-xl shadow"
                  >
                    Teams
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="p-8 flex flex-col justify-center gap-8 m-3">
        <section className="lg:col-span-5 space-y-10">
          {/* About Hello Life */}
          <article id="sejarah" className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold text-[#A5B68D] font-sour mb-4">
              Inside Hello Life 🌟
            </h2>
            <Image
              src="/helopsy.jpg"
              alt="Psychologist"
              width={500}
              height={100}
              className="rounded-xl w-full h-[500px] mb-10 object-cover"
            />
            <div className="mt-6 space-y-4 font-playwrite">
              <p>
                Hello Life is a psychology service platform dedicated to helping
                individuals find emotional balance, improve mental well-being,
                and live a more meaningful life. Founded in 2023, Hello Life
                serves as a bridge between the growing need for trusted
                psychological services and easy, safe, and accessible support.
              </p>
              <p>
                Our team brings together diverse backgrounds in clinical
                psychology, counseling, child development, and organizational
                behavior. We work collaboratively to provide a supportive,
                non-judgmental space for individuals, couples, and families
                facing emotional or psychological challenges.
              </p>
              <p>
                At the heart of our culture is a passion for helping people.
                Whether through one-on-one therapy, group sessions, or corporate
                wellness programs, we aim to empower every client with the tools
                and insights they need to heal, grow, and thrive.
              </p>
            </div>
          </article>

          {/* Background */}
          <article id="services" className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold text-[#A5B68D] font-sour mb-4">
              Our Background 💭
            </h2>
            <Image
              src="/discuss.jpg"
              alt="Psychologist"
              width={500}
              height={100}
              className="rounded-xl w-full h-[500px] mb-10 object-cover"
            />
            <p className="mt-6 space-y-4 font-playwrite">
              We believe that everyone deserves a safe, supportive space to
              understand themselves, embrace their emotions, and grow into the
              best version of who they truly are. At Hello Life, we were born
              out of a shared conviction: that mental health is not a luxury—it
              is a necessity.
              Founded by a passionate team of professionals from diverse yet
              complementary fields—psychology, technology, education, and
              design—we bring together clinical insight, user-centered
              innovation, and visual empathy to create accessible, engaging, and
              impactful mental health tools for everyone.
              Each of us came with our own stories: therapists who have seen
              firsthand the silent struggles of individuals, developers who
              dream of turning code into connection, and designers who
              understand that healing also needs to feel human. Together, we
              realized that while mental health challenges are deeply personal,
              the support to overcome them shouldn’t be out of reach.
            </p>
            <p className="mt-6 space-y-4 font-playwrite">
              Our mission is to bridge the gap between traditional mental health
              care and the digital world—making emotional wellness not only more
              accessible, but also more culturally relevant, safe, and
              empowering for modern individuals navigating complex lives. With
              Hello Life, we aim to normalize conversations around mental
              health, spark self-awareness, and cultivate a mindful, emotionally
              healthy, and purpose-driven generation.
            </p>
          </article>

          {/* Our Team */}
          <article id="blog" className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold text-[#A5B68D] font-sour mb-4">
              Our Team of Professionals 👨‍⚕️👩‍⚕️
            </h2>
            <Image
              src="/team.jpg"
              alt="Psychologist"
              width={500}
              height={100}
              className="rounded-xl w-full h-[500px] object-cover mb-10"
            />
            <p>
              At Hello Life, we take pride in our licensed and experienced
              psychologists who have supported hundreds of clients from various
              walks of life. All of our psychologists are certified and trained
              in clinical, developmental, educational, and
              industrial-organizational psychology.
            </p>
            <p>
              We also collaborate with skilled technical and creative teams to
              ensure our services are not only secure and efficient but also
              enjoyable to use.
            </p>
          </article>

          {/* Core Values */}
          <section className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-[#A5B68D] mb-8 font-sour">
              Our Values📖
            </h2>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-10">
              <li className="flex flex-col items-center text-center">
                <Image
                  src="/empathy.png"
                  alt="Empathy"
                  width={40}
                  height={40}
                />
                <p className="mt-2 font-bold">Empathy</p>
                <span className="text-sm text-gray-600">
                  We listen without judgement
                </span>
              </li>
              <li className="flex flex-col items-center text-center">
                <Image
                  src="/success.png"
                  alt="Privacy"
                  width={40}
                  height={40}
                />
                <p className="mt-2 font-bold">Confidentiality</p>
                <span className="text-sm text-gray-600">
                  Client privacy is our priority
                </span>
              </li>
              <li className="flex flex-col items-center text-center">
                <Image
                  src="/helping-hand.png"
                  alt="Accessibility"
                  width={40}
                  height={40}
                />
                <p className="mt-2 font-bold">Accessibility</p>
                <span className="text-sm text-gray-600">
                  Support for everyone, everywhere
                </span>
              </li>
              <li className="flex flex-col items-center text-center">
                <Image src="/growth.png" alt="Growth" width={40} height={40} />
                <p className="mt-2 font-bold">Growth</p>
                <span className="text-sm text-gray-600">
                  Continuous learning and evolving
                </span>
              </li>
            </ul>
          </section>

          {/* Vision */}
          <article className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold text-[#A5B68D] font-sour mb-4">
              🌍 Our Vision
            </h2>
            <p>
              Our vision is to become Indonesia’s leading digital psychology
              platform by empowering individuals to live more mindfully,
              maintain emotional well-being, and build deeper, more meaningful
              connections with themselves and others. We aim to leverage
              technology, science-backed approaches, and accessible resources to
              make mental health support a part of everyday life—removing
              stigma, increasing awareness, and fostering a compassionate
              digital ecosystem where personal growth and psychological
              resilience can flourish.
            </p>
          </article>

          {/* Mission */}
          <article className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold text-[#A5B68D] font-sour mb-4">
              🎯 Our Mission
            </h2>
            <ul className="list-disc list-inside space-y-2 font-playwrite">
              <li>
                Provide affordable and professional psychological services.
              </li>
              <li>Raise awareness about the importance of mental health.</li>
              <li>Innovate digital solutions in the field of psychology.</li>
              <li>Build a caring and supportive community.</li>
            </ul>
          </article>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#B17F59] text-[#D5E2B6] text-center p-4 font-cherry">
        Hello Life © 2025. Built with ❤️ by Hello Life.
      </footer>
    </div>
  );
}
