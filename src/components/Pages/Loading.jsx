import CircleLoader from "react-spinners/CircleLoader";

const Loading = ({ isLoading }) => {
  return (
    <div className="bg-gray-800 min-h-screen items-center text-gray-200 flex justify-center text-3xl">
      <CircleLoader color={"#9fa8b5"} loading={isLoading} size={100} />
    </div>
  );
};

export default Loading;
