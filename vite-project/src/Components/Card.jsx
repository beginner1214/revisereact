function Card({ name, roll, classId }) {
  return (
    <div className=" h-fit w-fit  bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition duration-300">
      <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-500 text-sm mt-2">Roll: {roll}</p>
      <p className="text-gray-500 text-sm">Class: {classId}</p>
    </div>
  );
}
export default Card;
