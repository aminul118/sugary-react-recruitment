/* eslint-disable @typescript-eslint/no-explicit-any */
const MaterialCard = ({ data }: { data: any }) => (
  <div className="card">
    <img
      src={`https://d1wh1xji6f82aw.cloudfront.net/${data.CoverPhoto}`}
      alt={data.Title}
    />
    <h2>{data.Title}</h2>
    <p>{data.BrandName}</p>
    <p>Price: ${data.SalesPriceInUsd}</p>
  </div>
);

export default MaterialCard;
