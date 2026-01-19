import "../assets/styles/testimontials.css";
import Header from "../atoms/Testimontials/Header";
import ClientsWordsGrid from "../atoms/Testimontials/ClientsWordsGrid";
export default function Testimonials() {
  return (
    <div className="min-h-screen bg-[#000000] text-white px-8 py-16 mt-16">
      <div className="max-w-7xl mx-auto">
        <Header />
        <ClientsWordsGrid />
      </div>
    </div>
  );
}
