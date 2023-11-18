import { font } from '@/utils/fonts';

type Props = {
  title: string;
};
const Button = ({ title }: Props) => {
  return (
    <button
      className={`${font.lexend} bg-primary text-white rounded py-3 px-5 hover:bg-primary/70 transition duration-300 ease-in`}
    >
      {title}
    </button>
  );
};
export default Button;
