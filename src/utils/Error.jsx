const Error = ({ message }) => {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <h3 className="text-2xl text-red-600">{message}</h3>
      </div>
    </div>
  );
};

export default Error;
