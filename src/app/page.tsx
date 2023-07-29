'use client';

import About from '@/components/About';
import EventInfo from '@/components/EventInfo';
import Fold from '@/components/Fold';
import Footer from '@/components/Footer';
import Travel from '@/components/Travel';
import ＷeekendParty from '@/components/ＷeekendParty';

function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
        <Fold />
        <ＷeekendParty />
        <About />
        <EventInfo />
        <Travel />
      </main>
      <Footer />
    </>
  );
}

export default Home;
