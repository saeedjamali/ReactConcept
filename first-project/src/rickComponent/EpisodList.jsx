import { FaArrowCircleDown } from "react-icons/fa";


function EpisodList({ episodes }) {
  return (
    <div className="mt-4 bg-slate-600 rounded-md p-4">
      <div className="flex items-center justify-between">
        <span className="text-gray-400 font-bold text-lg">List of Episodic</span>
        <span className="text-gray-100 "><FaArrowCircleDown /></span>
      </div>
      <div className="mt-8">
        {episodes.map((item, index) => (
          <div key={item.id} className="flex items-center justify-between mt-4">
            <span className="text-gray-200">{String(index + 1).padStart(2, "0")} - {item.episode}: <span className="font-bold">{item.name}</span></span>
            <span className="text-white bg-gray-500 rounded-xl font-normal text-sm p-1">{item.air_date}</span>
          </div>
        ))}


      </div>

    </div>
  )
}

export default EpisodList