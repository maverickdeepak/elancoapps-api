const Loading = ({ message }) => {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <h3 className="text-2xl text-gray-600">{message}</h3>
      </div>
    </div>
  );
};

export default Loading;
