import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { People } from "../../api";

const PersoDetail = () => {
    const [Detalle, setDetalle] = useState([]);

    let { persoId } = useParams();

    const FiltradoDetalles = People.filter(function (personaje) {
        return personaje.id === persoId;
    });

    useEffect(() => {
        setDetalle(FiltradoDetalles);
        console.log(Detalle);
    }, [persoId]);

    return (
        <div className=" grid grid-cols-1 lg:grid-cols-2  w-5/6 mx-auto  justify-between items-start  my-10 gap-10">
            <div className=" w-2/3 order-last lg:order-none mx-auto">
                <h1 className="text-4xl ">{Detalle[0]?.name}</h1>
                <p className="text-left mt-5">{Detalle[0]?.who}</p>

                <h1 className="text-4xl mt-10">Appearance</h1>
                <br />
                <hr />
                <p className="text-left mt-10">{Detalle[0]?.apariencia}</p>

                <h1 className="text-4xl mt-10">History</h1>
                <br />
                <hr />

                <p className="text-left mt-10">{Detalle[0]?.history}</p>
            </div>

            <div >
                <div className="max-w-xs mx-auto  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                            {Detalle[0]?.name}
                        </h5>
                    </div>
                    <div>
                        <img className="rounded-t-lg" src={Detalle[0]?.image} alt="" />
                    </div>
                    <div className="p-5 h-3/4 ">
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Gender: {Detalle[0]?.gender}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Age: {Detalle[0]?.age}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Eye color: {Detalle[0]?.eye_color}
                        </p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Hair color: {Detalle[0]?.hair_color}
                        </p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Film: {Detalle[0]?.film}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersoDetail;
