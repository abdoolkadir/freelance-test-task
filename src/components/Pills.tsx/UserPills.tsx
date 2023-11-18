'use client';
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

import { font } from '@/utils/fonts';
import Image from 'next/image';

type Props = {
  username: string;
  image: string;
  code: string;
  right: boolean;
};

const UserPills = ({ username, image, right, code }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView]);

  const UserPill = ({ className }: { className?: string }) => {
    return (
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className={`user-pills flex items-center gap-3 relative transition-all ${className}`}
      >
        <Image
          src={image}
          height={50}
          width={50}
          alt="user image"
          className="rounded-full"
        />
        <div className="user-pills-text text-xs text-sm">{username}</div>
      </motion.div>
    );
  };

  return (
    <>
      <div ref={ref} className={`${font.lexend} relative group`}>
        <UserPill />
        <div
          className={`user-pills-details md:w-[550px] absolute z-50 top-0 rounded-lg p-5 hidden opacity-0  group-hover:block group-hover:opacity-100 hover:block hover:opacity-100 transition-all  ${
            right ? 'right-0' : 'left-0'
          }`}
        >
          <UserPill className="w-fit mb-2" />

          <pre className="ml-5 text-[7px] md:text-xs">
            <code className="code">{code}</code>
          </pre>
        </div>
      </div>
    </>
  );
};

export default UserPills;
