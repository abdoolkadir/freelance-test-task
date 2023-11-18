import { font } from '@/utils/fonts';
import Button from '../buttons/Button';
import CircleSvg from '@/assets/svgs/CircleSvg';
import Image from 'next/image';
import LockCircleSvg from '@/assets/svgs/LockCircleSvg';
import Pills from '../Pills.tsx/Pills';
import BgVectorsSvg from '@/assets/svgs/BgVectorsSvg';
import ScrollDownSvg from '@/assets/svgs/ScrollDownSvg';

type Props = {};

const Hero = (props: Props) => {
  return (
    <div
      className="min-h-screen flex flex-col md:flex-row items-center justify-center z-20 pt-10 md:pt-0 px-5 md:px-28 relative"
      style={{
        backgroundImage: "url('/images/hero.webp')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain'
      }}
    >
      <div className="flex-1 mb-10 md:mb-0">
        <div className="flex flex-col gap-4 mb-5">
          <p
            className={`${font.lexend} uppercase text-primary text-xs animate-fade-in [--animation-delay:100ms] opacity-0 translate-y-[-1rem]`}
          >
            Lorem ipsum dolor
          </p>
          <h1
            className={`${font.intergralCf} text-xl md:text-6xl text-[#E4E4E7] animate-fade-in [--animation-delay:130ms] opacity-0 translate-y-[-1rem]`}
          >
            Game-changing
            <span className="block animate-fade-in [--animation-delay:150ms] opacity-0 translate-y-[-1rem]">
              infrastructure
            </span>
          </h1>
          <p
            className={`${font.lexend} text-secondary text-sm animate-fade-in [--animation-delay:180ms] opacity-0 translate-y-[-1rem]`}
          >
            A decentralised, non-custodial social graph, empowering players to
            <span className="block">
              take full ownership of their gaming identities and enabling
              developers to
            </span>
            build next-gen applications.
          </p>
        </div>
        <div className="animate-fade-in [--animation-delay:210ms] opacity-0 translate-y-[-1rem]">
          <Button title="Join Discord" />
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative">
        <div className="animate-pulse absolute top-[-50px] md:top-[-100px] right-0 left-0 z-20 max-w-[300px] md:max-w-[500px] w-full flex justify-center items-center">
          <Image
            src="/images/bg-play-icons.png"
            width={420}
            height={200}
            alt=""
          />
        </div>
        <div className="relative mb-8">
          <div className="relative invisible">
            <CircleSvg />
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
            <Image
              src="/images/user-img.png"
              height={97}
              width={97}
              alt="user image"
              className="z-30"
            />
            <p className={`${font.lexend} text-[10px]`}>User id:</p>
            <p className={`${font.lexend} text-xs`}>XBorg001</p>
          </div>

          <div className="absolute z-30 bottom-[-20px] right-0 left-0 flex items-center justify-center">
            <LockCircleSvg />
          </div>
        </div>
        <div className="m-auto absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center max-w-[415px] w-full">
          <BgVectorsSvg />
        </div>

        <div className="flex flex-col items-center justify-center gap-2 relative z-30">
          <Pills text="Soulbound Launchpad" />
          <div className="grid grid-cols-2 gap-2">
            {Array.from({ length: 2 }).map((_, index) => (
              <Pills text="Soulbound Launchpad" key={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-[-50px] md:bottom-0 right-0 left-0 flex flex-col items-center justify-center text-primary pb-2">
        <a
          href="#value-section"
          className="motion-safe:animate-bounce flex flex-col items-center justify-center"
        >
          Scroll down
          <ScrollDownSvg />
        </a>
      </div>
    </div>
  );
};
export default Hero;
