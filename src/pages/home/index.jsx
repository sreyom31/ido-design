import BrandAndPartner from './brand_partner';
import CompletedPool from './completed-pool';
import Hero from './hero';
import TierSystem from './tierSystem';
import UpcommingPool from './upcomming-pool';
const Home = () => {
  return (
    <div className="w-full ">
      <Hero />
      <UpcommingPool />
      <CompletedPool />
      <TierSystem />
      <BrandAndPartner />
    </div>
  );
};

export default Home;
