import { FiStar } from "react-icons/fi"
import { testimonials } from "../../data/testimontials"

const ClientsWordsGrid = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           {testimonials.map((testimonial, index) => (
             <div
               key={testimonial.id}
               className="bg-[#0a0a0a] border border-gray-800 rounded-3xl p-8 hover:border-gray-700 transition-all duration-300 group"
               style={{
                 animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
               }}
             >
               {/* Header Section */}
               <div className="flex items-start justify-between mb-6">
                 <div className="flex-1">
                   <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-500 transition">
                     {testimonial.clientName}
                   </h3>
                   <p className="text-yellow-500 text-sm font-semibold mb-3">
                     {testimonial.subject}
                   </p>
                   <div className="space-y-1 text-sm">
                     <p className="text-gray-500">
                       <span className="text-gray-400">Email:</span>{" "}
                       <a
                         href={`mailto:${testimonial.email}`}
                         className="text-gray-400 hover:text-yellow-500 transition"
                       >
                         {testimonial.email}
                       </a>
                     </p>
                     <p className="text-gray-500">
                       <span className="text-gray-400">Company:</span>{" "}
                       <span className="text-white">{testimonial.company}</span>
                     </p>
                   </div>
                 </div>
 
                 {/* Quote Icon */}
                 <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-yellow-500 transition shrink-0">
                   <svg
                     className="w-6 h-6 text-gray-400 group-hover:text-black transition"
                     fill="currentColor"
                     viewBox="0 0 24 24"
                   >
                     <path d="M6.5 10c-1.3 0-2.4.4-3.3 1.3C2.4 12.1 2 13.3 2 14.5s.4 2.4 1.2 3.3c.9.9 2 1.3 3.3 1.3 1.3 0 2.4-.4 3.3-1.3.9-.9 1.3-2 1.3-3.3 0-.4-.1-.8-.2-1.3L8.8 7c-.2-.4-.6-.7-1-.7H3.5c-.6 0-1 .4-1 1v1.8c0 .6.4 1 1 1h2.7l1.3 4.3c-.3.1-.7.2-1 .2zm11 0c-1.3 0-2.4.4-3.3 1.3-.8.8-1.2 2-1.2 3.2s.4 2.4 1.2 3.3c.9.9 2 1.3 3.3 1.3 1.3 0 2.4-.4 3.3-1.3.9-.9 1.3-2 1.3-3.3 0-.4-.1-.8-.2-1.3L19.8 7c-.2-.4-.6-.7-1-.7h-4.3c-.6 0-1 .4-1 1v1.8c0 .6.4 1 1 1h2.7l1.3 4.3c-.3.1-.7.2-1 .2z" />
                   </svg>
                 </div>
               </div>
 
               {/* Testimonial Text */}
               <div className="pt-6 border-t border-gray-800">
                 <p className="text-gray-400 leading-relaxed text-sm">
                   "{testimonial.testimonial}"
                 </p>
               </div>
 
               {/* Rating Stars */}
               <div className="flex gap-1 mt-6">
                 {[...Array(5)].map((_, i) => (
                   <FiStar
                     key={i}
                     className="w-4 h-4 text-yellow-500 fill-yellow-500"
                   />
                 ))}
               </div>
             </div>
           ))}
         </div>
  )
}

export default ClientsWordsGrid
