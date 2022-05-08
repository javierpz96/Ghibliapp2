import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store";

const FilmDetail = () => {
  const { filmId } = useParams();
  const { list } = useSelector((state) => state.User);

  console.log(list);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers({ slug: filmId }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const { list } = useSelector((state) => state.user);

  return (
    <div className="w-5/6 mx-auto flex justify-center items-start  my-10 flex-wrap text-center gap-10 ">
      <div className=" w-2/3">
        <h1 className="text-4xl ">{list[0]?.title}</h1>
        <p className="text-left mt-5">{list[0]?.description}</p>
      </div>

      <div className="">
        <div className="max-w-xs mx-auto  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div >
            <img className="rounded-t-lg " src={list[0]?.image} alt={list[0]?.title} />
          </div>
          <div className="p-5 h-3/4 ">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Original title: {list[0]?.original_title}{" "}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Date: {list[0]?.release_date}{" "}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Director: {list[0]?.director}{" "}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Producer : {list[0]?.producer}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Score: {list[0]?.rt_score}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmDetail;
