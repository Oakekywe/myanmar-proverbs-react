import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";

const ProverbDetail = () => {
  const { titleId, pId } = useParams();
  const [proverbs, setProverbs] = useState([]);
  const [proverb, setProverb] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetching = async () => {
      try {
        const data = await (await fetch("/db.json")).json();
        setProverbs(data.Proverbs);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetching();
  }, []);

  useEffect(() => {
    const filteredDetail = proverbs.filter(
      (proverb) => proverb.TitleId == titleId && proverb.ProverbId == pId
    );
    if (filteredDetail.length > 0) {
      setProverb(filteredDetail[0]);
    } else {
      setProverb(null);
    }
  }, [proverbs, titleId, pId]);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="bg-gray-800 min-h-screen py-10">
      <div className="md:flex justify-center">
        <div className="max-w-m my-2 mx-5 px-8 py-6 bg-gray-700 border border-gray-700 rounded-lg shadow h-full">
          <h5 className="mb-2 text-2xl font-semibold  tracking-tight text-white">
            {proverb?.ProverbName}
          </h5>
          <p className="my-5 py-2 leading-loose text-xl font-normal text-gray-300">
            {proverb?.ProverbDesp}
          </p>

          <div className="flex justify-end">
            <Link
              to="../"
              className=" bg-transparent hover:bg-gray-400 text-gray-400 font-semibold hover:text-gray-200 py-2 px-4 border border-gray-500 hover:border-transparent rounded"
            >
              နောက်သို့
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProverbDetail;
