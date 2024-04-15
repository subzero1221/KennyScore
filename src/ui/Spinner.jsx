function Spinner() {
  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full">
      <div className="w-32 h-32 border-t-2 border-b-2 border-gray-900 rounded-full animate-spin"></div>
    </div>
  );
}

export default Spinner;
