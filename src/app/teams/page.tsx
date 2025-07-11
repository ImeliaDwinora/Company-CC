import Image from "next/image";

interface Team {
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  email: string;
  location: {
    city: string;
    country: string;
  };
}

const roles = [
  "Psikolog Klinis",
  "Konselor Remaja",
  "Terapis Anak & Keluarga",
  "Psikolog Pendidikan",
  "Terapis Kognitif Perilaku",
  "Psikolog Organisasi",
  "Psikiater Konsultan",
  "Psikolog Perkembangan",
];

const bios = [
  "Mendampingi klien memahami dan menyembuhkan luka batin.",
  "Berfokus pada kesehatan mental remaja dengan pendekatan empatik.",
  "Membantu keluarga membangun komunikasi yang sehat dan penuh kasih.",
  "Membimbing siswa menemukan potensi dan arah belajar terbaik.",
  "Menggunakan terapi berbasis bukti untuk atasi kecemasan dan depresi.",
  "Membangun budaya kerja sehat dan produktif dalam organisasi.",
  "Mengintegrasikan pendekatan medis dan psikologis dalam sesi konsultasi.",
  "Menemani setiap fase tumbuh kembang individu dengan pendekatan holistik.",
];


export default async function Teams() {
  const response = await fetch("https://randomuser.me/api/?results=8", {
    cache: "no-store",
  });
  const data = await response.json();
  const teams: Team[] = data.results;

  return (
    <section className="bg-amber-50 to-white py-12 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#7D8F69]">
          Our Team
        </h2>
        <p className="mt-3 text-center text-gray-600 text-base sm:text-lg">
          Meet the passionate individuals behind our success.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
          {teams.map((member, index) => {
            const role = roles[index % roles.length];
            const bio = bios[index % bios.length];

            return (
              <article
                key={index}
                className="bg-white border rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300"
              >
                <div className="w-24 h-24 relative rounded-full overflow-hidden border-2 border-[#A5B68D]">
                  <Image
                    src={member.picture.large}
                    alt={`${member.name.first} ${member.name.last}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg text-[#2E4057] mt-4">
                  {member.name.first} {member.name.last}
                </h3>
                <p className="text-sm text-[#7D8F69] mt-1 font-medium">{role}</p>
                <p className="text-sm text-gray-500 mt-1">{member.email}</p>
                <p className="text-xs italic text-gray-500 mt-1">
                  {member.location.city}, {member.location.country}
                </p>
                <p className="text-sm text-gray-600 mt-3">{bio}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
