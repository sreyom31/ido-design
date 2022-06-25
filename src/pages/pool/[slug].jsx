import React from 'react';
import { useParams } from 'react-router';
import { cardData } from '../../shared/mockData';

const PoolDetails = () => {
  const { poolID } = useParams();
  const [pageData, setPageData] = React.useState();
  React.useEffect(() => {
    //here Api call will be done to GET /pool/:id
    cardData.map((item) => {
      if (item.id === poolID) {
        return setPageData(item);
      }
    });
  }, []);

  return (
    <div>
      <h1 className="text-white">{pageData?.id}</h1>
      <div className="flex flex-row mx-[10vw] bg-white">
        <div className="flex flex-row w-full">
          <img src="./images/claimLogos/claimLogo9.png" />
        </div>
      </div>
    </div>
  );
};
export default PoolDetails;
