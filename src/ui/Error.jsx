function Error({ date }) {
  const myDate = date.toLocaleDateString().replaceAll(".", "-");

  return (
    <div className="items-center content-center justify-center">
      <h1 className="text-lg text-red-500 mt-11">
        {" "}
        No Matches for {myDate}...{" "}
      </h1>
    </div>
  );
}

export default Error;
