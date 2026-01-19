import {
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
const ContactSection = () => {
  return (
 <div className="w-full mb-12">
          <div className=" bg-[#0a0a0a]  border border-gray-800 rounded-3xl p-8 hover:border-gray-700 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-yellow-500">📬</span> Get in touch
            </h2>

            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center group-hover:bg-yellow-500/20 transition">
                  <FaEnvelope className="text-yellow-500 w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href="mailto:vilayat571@gmail.com"
                    className="text-white text-lg font-semibold hover:text-yellow-500 transition"
                  >
                    vilayat571@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center group-hover:bg-yellow-500/20 transition">
                  <FaPhone className="text-yellow-500 w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a
                    href="tel:+60176487917"
                    className="text-white text-lg font-semibold hover:text-yellow-500 transition"
                  >
                    +60 176 487 917
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ContactSection
