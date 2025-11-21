export default function Contact() {
  return (
    <section className="py-5 px-6 md:px-20 bg-white" id="contact">
      <h2 className="text-4xl font-bold text-blue-700 text-center mb-10">
        Contact Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT SIDE CONTACT INFO */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">A-One Classes, Kota</h3>

          <p className="text-gray-700">
            <strong>Address:</strong>  
            Mahaveer Nagar Vistar Yojna, LBS School ke paas, Kota (Raj.)
          </p>

          <p className="text-gray-700">
            <strong>Mobile:</strong>  
            <a href="tel:9694218177" className="text-blue-600 font-semibold"> 9694218177 </a>
          </p>

          <p className="text-gray-700">
            <strong>Classes Available:</strong> 8th to 12th CBSE/RBSE, JET, CUET, NEET, JEE
          </p>

          <p className="text-gray-700">
            <strong>Hostel Facility Available</strong>
          </p>
        </div>

        {/* RIGHT SIDE CONTACT FORM */}
        <form className="bg-gray-100 p-6 rounded-xl shadow space-y-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full px-4 py-2 rounded-lg border focus:outline-none"
          />

          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full px-4 py-2 rounded-lg border focus:outline-none"
          />

          <textarea 
            placeholder="Your Message" 
            rows="4"
            className="w-full px-4 py-2 rounded-lg border focus:outline-none"
          ></textarea>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 w-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
