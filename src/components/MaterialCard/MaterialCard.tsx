
/* eslint-disable @typescript-eslint/no-explicit-any */
const MaterialCard = ({ data }: { data: any }) => (
  <div className="bg-slate-100 dark:bg-slate-900 overflow-hidden group cursor-pointer flex flex-col justify-between">
    {/* Image Container - This part is commented out for now */}
    <div className="overflow-hidden">
      <img
        src={`https://d1wh1xji6f82aw.cloudfront.net/${data.CoverPhoto}`}
        alt={data.Title}
        className="w-full h-64 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    <div className="p-4">
      <h2 className="text-lg font-semibold">{data.Title}</h2>
      <p>{data.BrandName}</p>
      <p>Price: ${data.SalesPriceInUsd}</p>
    </div>
  </div>
);

export default MaterialCard;

{
  /* <div className="card">
      <img
        src={`https://d1wh1xji6f82aw.cloudfront.net/${data.CoverPhoto}`}
        alt={data.Title}
      />
      <h2 className="text-lg font-semibold">{data.Title}</h2>
      <p>{data.BrandName}</p>
      <p>Price: ${data.SalesPriceInUsd}</p>
    </div> */
}
