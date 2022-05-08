import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { getUsers, resetUsers } from "../../store";
import { SelectOptions } from "../Commons";

export const containerVariantsCard = { 
    hidden: { opacity: 0 }, 
    show: {
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.2,
        },
    },
    remove: { opacity: 0 },
};

export const itemVariantsCard = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
};

const UserList = () => {
    const { list, loading } = useSelector((state) => state.User);

    const dispatch = useDispatch();

    const [film, setFilm] = useState("");

    

    const handleChange = (e) => {
        setFilm(e.target.value);
      };


      // }).filter((user)=>{
                    //     return user.release_date === "1986"

                    // })



    useEffect(() => {
        //Resetear estado de usuario
        dispatch(resetUsers());
        
        dispatch(getUsers());
    }, []);


    



    return (
        <div>
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
            {loading === "success" && (
                <motion.div
                    variants={containerVariantsCard}
                    initial="hidden"
                    animate="show"
                    exit="remove"
                    className="flex justify-center flex-wrap gap-10 mt-10"
                >
                    
                    {list?.filter((user)=>{
                        return film === "" ? user : user.title === film 



                    


                    }).map((user) => (
                        <motion.div variants={itemVariantsCard} key={user?.id}>
                            <div className=" max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <Link to={"/films/" + user.id}>
                                    <img className="rounded-t-lg" src={user.image} alt="" />
                                </Link>
                                <div className="p-5">
                                    <div className="h-12">
                                        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {user?.title}
                                        </h3>
                                    </div>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 whitespace-normal truncate">
                                        {user.description?.substring(1, 150) + "..."}
                                    </p>
                                    <Link
                                        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        to={"/films/" + user.id}
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
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    );
};

export default UserList;
