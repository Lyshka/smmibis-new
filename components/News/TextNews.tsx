interface ITextNews {
  text: string;
}

export const TextNews = ({ text }: ITextNews) => {
  return (
    <div
      className="2xl:text-base text-[13px] 2xl:leading-4 leading-5 text-news flex flex-col gap-6"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};
