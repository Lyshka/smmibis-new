import NewsSingle from "@/pages/NewsSingle";

export function generateStaticParams() {
  return services.map(({ url }) => ({
    service: url,
  }));
}

export default NewsSingle;
