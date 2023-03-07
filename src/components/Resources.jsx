import { Link } from "react-router-dom";
import Error from "../utils/Error";
import Loading from "../utils/Loading";

// CUSTOM API CALL HOOK
import useFetch from "../hooks/useFetch";

// API URL
const url = "https://engineering-task.elancoapps.com/api/resources";
const Resources = () => {
  const { data, loading, error } = useFetch(url);

  if (!error && loading) return <Loading message="Loading..." />;

  return (
    <div>
      {error && <Error message={error} />}
      {data && (
        <>
          <h1 className="text-4xl my-8 text-center">All Resources</h1>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Resource Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
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
                      {rs}
                    </th>
                    <td className="px-6 py-4">
                      <Link
                        to={`/${rs}`}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        View
                      </Link>
                    </td>
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

export default Resources;
