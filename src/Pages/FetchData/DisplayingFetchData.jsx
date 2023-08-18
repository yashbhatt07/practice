import useFetch from "./FetchData";

const DisplayingFetchData = () => {
  const { isLoading, serverError, apiData } = useFetch();

  return (
    <div>
      <h2>API data</h2>
      {isLoading && <span>Loading.....</span>}
      {!isLoading && serverError ? (
        <span>Error in fetching data ...</span>
      ) : (
        <span>{JSON.stringify(apiData)}</span>
      )}
    </div>
  );
};

export default DisplayingFetchData;
