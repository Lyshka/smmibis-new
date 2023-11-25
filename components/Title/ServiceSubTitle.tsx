interface IServiceSubTitle {
  text: string;
}

export const ServiceSubTitle = ({ text }: IServiceSubTitle) => {
  return <h2 className="text-xl font-extrabold leading-6">{text}</h2>;
};
