import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

import Error from "../utils/Error";
import Loading from "../utils/Loading";

const SingleResource = () => {
  const { resource } = useParams();
  // API URL
  const url =
    "https://engineering-task.elancoapps.com/api/resources/" + resource;
  const { data, loading, error } = useFetch(url);

  if (loading) return <Loading message="Loading..." />;

  return (
    <div>
      {error && <Error message={error} />}
      {data && (
        <>
          <h1 className="text-4xl my-8 text-center">{resource}</h1>
          <Link to="/">
            <button className="rounded-full bg-gray-700 py-2 px-6 text-white my-2">
              Go Back
            </button>
          </Link>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Consumed Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Cost 💲
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Instance Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Location 📍
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Meter Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Unit Of Measure
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((rs, index) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                    key={index}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {rs.ConsumedQuantity}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {rs.Cost}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {rs.InstanceId}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {rs.Location}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {rs.MeterCategory}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {rs.UnitOfMeasure}
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleResource;
