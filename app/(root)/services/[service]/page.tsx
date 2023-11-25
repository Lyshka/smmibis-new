import { services } from "@/constants/services";
import ServiceSingle from "@/pages/ServiceSingle";

export function generateStaticParams() {
  return services.map(({ url }) => ({
    service: url,
  }));
}

export default ServiceSingle;
