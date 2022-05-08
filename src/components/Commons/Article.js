const Article = () => {
    return (
        <div className="flex justify-between items-center w-3/4 mx-auto ">
            <div className="block p-6  bg-white rounded-lg  dark:bg-gray-800 ">
                <h2 className="mb-2 text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h2>
                <p className="font-normal text-xl text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological
                    order.
                </p>
            </div>
            <div className="max-w-md">
                <img
                    alt="asd"
                    src="https://www.pngitem.com/pimgs/m/137-1379561_1-chibi-totoro-by-dragon-flame13-d4rs1ox-studio.png"
                ></img>
            </div>
        </div>
    );
};

export default Article;
