import { services } from "@/constants/services";
import ServiceSingle from "@/pages/ServiceSingle";

type Props = {
  params: { service: string };
};

export async function generateMetadata({ params }: Props) {
  const { service } = params;
  const filteredService = services.filter(({ url }) => {
    return url === service;
  })[0];
  const { title, description } = filteredService;

  return {
    title,
    description
  };
}

export function generateStaticParams() {
  return services.map(({ url }) => ({
    service: url,
  }));
}

export default ServiceSingle;
