/* eslint-disable @typescript-eslint/no-explicit-any */
const MaterialCard = ({ data }: { data: any }) => {
  const { Title, BrandName, SalesPriceInUsd, CoverPhoto } = data;
  const formattedPrice = SalesPriceInUsd.toFixed(2);
  const imgUrl = import.meta.env.VITE_IMAGE_URL as string;

  return (
    <div className="bg-slate-100 dark:bg-slate-900 overflow-hidden group cursor-pointer flex flex-col justify-between">
      <div className="overflow-hidden">
        <img
          src={`${imgUrl}/${CoverPhoto}`}
          alt={data.Title}
          className="w-full h-64 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold">{Title}</h2>
        <p>{BrandName}</p>
        <p>Price: ${formattedPrice}</p>
      </div>
    </div>
  );
};

export default MaterialCard;
