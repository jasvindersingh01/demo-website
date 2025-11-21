export default function About() {
  return (
    <section className="py-16 bg-gray-100 px-6 md:px-20 scroll-mt-15" id="about">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">About Us</h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          A-One Classes, Kota is a trusted coaching institute providing quality 
          education for Class 8th to 12th (CBSE/RBSE), JET, CUET, NEET & JEE. 
          With experienced teachers and a strong academic environment, we focus 
          on building concepts, improving results and guiding students towards 
          a successful future.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow text-center">
            <h3 className="text-xl font-bold text-blue-600">14+ Years</h3>
            <p className="text-gray-600">Of Excellence</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow text-center">
            <h3 className="text-xl font-bold text-blue-600">Experienced Staff</h3>
            <p className="text-gray-600">Focused Teaching</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow text-center">
            <h3 className="text-xl font-bold text-blue-600">Hostel Facility</h3>
            <p className="text-gray-600">For Outstation Students</p>
          </div>
        </div>
      </div>
    </section>
  );
}
