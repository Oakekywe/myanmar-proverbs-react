import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import useFetchData from "../../utls/Fetching";
import ScrollToBot from "../../utls/ScrollBot";

const Home = () => {
  const [filteredProverbs, setFilteredProverbs] = useState([]);
  const [selectedTitleId, setSelectedTitleId] = useState(null);
  const [selectedTitleName, setSelectedTitleName] = useState("");

  const apiUrl = "/db.json";
  const { data, error, isLoading } = useFetchData(apiUrl);

  // handle click က,ခ
  const handleCellClick = (titleId, titleName) => {
    setSelectedTitleId(titleId);
    setSelectedTitleName(titleName);
  };

  // filter selected id
  useEffect(() => {
    const filterData = data?.Proverbs.filter(
      (proverb) => proverb.TitleId === selectedTitleId
    );

    setFilteredProverbs(filterData);
  }, [selectedTitleId]);

  return isLoading ? (
    <Loading isLoading={isLoading} />
  ) : (
    <div className="bg-gray-800 min-h-screen py-6">
      <div className="md:flex justify-around">
        <div className="max-w-m m-2 p-6 bg-gray-700 border border-gray-700 rounded-lg shadow h-full">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-white">
            မိမိကြည့်ရှုလိုသော အက္ခရာကိုနှိပ်၍ ရှာဖွေဖတ်ရှုနိုင်ပါသည်
          </h5>
          <p className="my-5 font-normal text-gray-400">
            မြန်မာစကားပုံအက္ခရာစဉ်ဇယား
          </p>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-m text-left text-gray-500 dark:text-gray-400">
              <tbody>
                {data?.Title &&
                  data?.Title?.map((t, index) =>
                    index % 5 === 0 ? (
                      <tr
                        className="border-b bg-gray-800 border-gray-700"
                        key={t.TitleId}
                      >
                        {[...Array(5)].map(
                          (_, i) =>
                            data?.Title[index + i] && (
                              <td
                                className="md:px-6 lg:px-6 px-5 py-3"
                                key={data?.Title[index + i].TitleId}
                              >
                                <button
                                  onClick={() =>
                                    handleCellClick(
                                      data?.Title[index + i].TitleId,
                                      data?.Title[index + i].TitleName
                                    )
                                  }
                                  className=" hover:border-b-2 hover:border-gray-200 hover:text-gray-200"
                                >
                                  {data?.Title[index + i].TitleName}
                                </button>
                              </td>
                            )
                        )}
                      </tr>
                    ) : null
                  )}
              </tbody>
            </table>
          </div>
        </div>
        {selectedTitleId && <ScrollToBot />}
        <div
          className={`max-w-sm py-2 px-5 md:m-2 md:mx-0 m-auto bg-gray-700 border border-gray-700 rounded-lg shadow ${
            selectedTitleId ? "block" : "hidden"
          }`}
        >
          <div className="flex justify-end">
            <button
              onClick={() => setSelectedTitleId(null)}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <h5 className="mb-5 text-xl font-bold tracking-tight text-white">
            ({selectedTitleName && selectedTitleName}) နှင့်စသော စကားပုံများ
          </h5>

          <ul className="text-m list-[roman] px-5">
            {filteredProverbs == "" ? (
              <h2 className="text-m py-4 pl-2 text-gray-400 ">
                သက်ဆိုင်ရာ စကားပုံ မရှိပါ။
              </h2>
            ) : (
              filteredProverbs?.map((fp) => (
                <li
                  className="text-gray-400 my-3 hover:text-gray-200"
                  key={fp.ProverbId}
                >
                  <Link to={`/detail/${fp.ProverbId}/${fp.TitleId}`}>
                    {fp.ProverbName}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
