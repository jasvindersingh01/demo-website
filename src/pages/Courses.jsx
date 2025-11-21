export default function Courses() {
  return (
    <section className="py-16 bg-gray-100 scroll-mt-15" id="courses">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-700">Courses We Offer</h2>
        <p className="text-gray-600 mt-2">
          Choose the best program for your academic growth
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-20">

        {/* Card 1 */}
        <div className="bg-white p-6 shadow-lg rounded-xl hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-3">Class 8th – 12th (CBSE/RBSE)</h3>
          <p className="text-gray-600">
            Strong foundation classes for PCM / PCB. Weekly tests & regular doubt sessions.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 shadow-lg rounded-xl hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-3">JEE (Mains)</h3>
          <p className="text-gray-600">
            Expert faculty, concept building & topic-wise test practice for top performance.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 shadow-lg rounded-xl hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-3">NEET</h3>
          <p className="text-gray-600">
            Biology-focused guidance, practice sessions & full syllabus coverage.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 shadow-lg rounded-xl hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-3">CUET</h3>
          <p className="text-gray-600">
            Smart preparation for domain subjects & general test.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white p-6 shadow-lg rounded-xl hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-3">JET / B.Sc. Entrance</h3>
          <p className="text-gray-600">
            Structured entrance-based coaching with expert mentors.
          </p>
        </div>

      </div>
    </section>
  );
}
