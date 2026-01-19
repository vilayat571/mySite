import { useState } from "react";
import "../assets/styles/services.css";
import ServicesHeader from "../atoms/Services/ServicesHeader";
import ServiceGrid from "../atoms/Services/ServiceGrid";
export default function Services() {
  type Service = {
    id: number;
    title: string;
  };

  const [expandedService, setExpandedService] = useState<Service["id"] | null>(
    null,
  );

  const toggleService = (id: Service["id"]) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <div
      id="services"
      className="w-full flex items-center px-8 justify-between mt-16"
    >
      <div className="xl:w-3/4 lg:w-3/4 md:w-full sm:w-full mx-auto">
        <ServicesHeader />
        <ServiceGrid
          toggleService={toggleService}
          expandedService={expandedService}
        />
      </div>
    </div>
  );
}
