import Hero from '@/components/hero/Hero';
import Layout from './layout';
import ValueSection from '@/components/sections/Value';
import NewGamingWebSection from '@/components/sections/NewGamingWebSection';

export default function Home() {
  return (
    <>
      <Hero />
      <ValueSection />
      <NewGamingWebSection />
      <br />
      <br />
    </>
  );
}
