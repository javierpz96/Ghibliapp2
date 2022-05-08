import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { People } from "../../api";
import { getPersonajes } from "../../store";
import { Spinner, SelectOptions } from "../../components";

const Characters = (props) => {
  const { list, loading } = useSelector((state) => state.People);

  //Con esto Guardamos a lo que tenemos en el SELECT
  const [Personaje, setPersonaje] = useState("");

  //Creamos una constante donde vamos a colocar toda nuestra info
  const [Perso, setPerso] = useState([]);


  //Con esto atrapamos al string de nuestro select
  const handleChange = (e) => {
    setPersonaje(e.target.value);
  };

   //Hacemos el filtrado para los personajes
  const filterPerso = () => {
    const filtroPersonas = People.filter(({ film }) => film === Personaje);
    setPerso(filtroPersonas);
  };

  // const dispatch = useDispatch();

  // useEffect(() => {
  //     dispatch(getPersonajes());
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  //Use effects

  useEffect(() => {
    filterPerso();
  }, [Personaje]);

  useEffect(() => {
    setPerso(People);
  }, []);

  

  return (
    <div className="my-8">
      <div className="w-96 mx-auto mt-5">
        <label
          htmlFor="countries"
          className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400 text-center "
        >
          Select an option
        </label>
        
        <select
          onChange={handleChange}
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">
            Choose a film
          </option>
          <option value="Princess Mononoke">Princess Mononoke</option>
          <option value="Kiki's Delivery Service">
            Kiki's Delivery Service
          </option>
          <option value="The Cat Returns">The Cat Returns</option>
          <option value="My Neighbor Totoro">My Neighbor Totoro</option>
          <option value="Castle in the Sky">Castle in the Sky</option>
          <option value="Spirited Away">Spirited Away</option>
          <option value="The Tale of the Princess Kaguya">
            The Tale of the Princess Kaguya
          </option>
          <option value="Only Yesterday">Only Yesterday</option>
          <option value="Porco Rosso">Porco Rosso</option>
          <option value="Ponyo">Ponyo</option>
          <option value="Howl's Moving Castle">Howl's Moving Castle</option> */
          
        </select>
      </div>
      <>
        
        
          <div className="w-full mx-auto flex  justify-center flex-wrap gap-10 mt-10">
            {Perso.map((user) => (
              <div key={user.id}>
                <div className=" max-w-xs  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <a
                    className="w-80 h-80 overflow-hidden bg-slate-500"
                    href="asd"
                  >
                    <Link to={"/perso/" + user.id}>
                      <img
                        className="w-80 h-80 rounded-t-lg object-cover object-center"
                        src={user.image}
                        alt=""
                      />
                    </Link>
                  </a>
                  <div className="p-5 w-full h-80">
                    <a href="asd">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {user.name}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {user.gender}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Age : {user.age}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Eye color: {user.eye_color}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Hair color: {user.hair_color}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Film: {user.film}
                    </p>
                    <a
                      href="asd"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        className="ml-2 -mr-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        
      </>
    </div>
  );
};

export default Characters;
