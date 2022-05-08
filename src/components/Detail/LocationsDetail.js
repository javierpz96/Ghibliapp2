import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Locations } from "../../api";

const LocationsDetail = () => {
  const [DetalleLoca, setDetalleLoca] = useState([]);

  let { locaId } = useParams();

  const FiltradoDetalles = Locations.filter(function (locaciones) {
    return locaciones.id === locaId;
  });

  useEffect(() => {
    setDetalleLoca(FiltradoDetalles);
  }, [locaId]);

  

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  w-5/6 mx-auto  justify-between items-start  my-10 gap-10">
      <div className=" w-2/3 order-last lg:order-none mx-auto">
        <h1 className="text-4xl ">{DetalleLoca[0]?.name}</h1>
        <p className="text-left mt-5">{DetalleLoca[0]?.who}</p>

        {DetalleLoca[0]?.plot ? <h1 className="text-4xl mt-10">Plot</h1> : ""}
        {DetalleLoca[0]?.plot ? (
          <p className="mt-10">{DetalleLoca[0]?.plot}</p>
        ) : (
          ""
        )}
        <br />
        <hr />
        {DetalleLoca[0]?.Inhabitants ? (
          <h1 className="text-4xl mt-10">Inhabitants</h1>
        ) : (
          ""
        )}
        {DetalleLoca[0]?.Inhabitants ? (
          <p className="mt-10">{DetalleLoca[0]?.Inhabitants}</p>
        ) : (
          ""
        )}
      </div>

      <div >
        <div className="max-w-xs mx-auto  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="asd">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              {DetalleLoca[0]?.name}
            </h5>
          </a>
          <a href="asd">
            <img className="rounded-t-lg" src={DetalleLoca[0]?.image} alt="" />
          </a>
          <div className="p-5 h-3/4 h-4/5">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Gender: {DetalleLoca[0]?.terrain}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Age: {DetalleLoca[0]?.climate}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Film: {DetalleLoca[0]?.film}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Sur face: {DetalleLoca[0]?.surface_water}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsDetail;
