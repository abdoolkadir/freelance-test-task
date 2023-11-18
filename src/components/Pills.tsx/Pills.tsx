import { font } from '@/utils/fonts';

type Props = {
  text: string;
};

const Pills = ({ text }: Props) => {
  return (
    <div className={`pills flex items-center justify-center ${font.lexend}`}>
      <div className="pills-text text-xs md:text-sm"> {text}</div>
    </div>
  );
};
export default Pills;
