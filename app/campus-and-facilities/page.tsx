

import Image from "next/image";
import {
  FaChalkboard,
  FaProjectDiagram,
  FaLaptop,
  FaConciergeBell,
  FaWind,
  FaChair,
  FaWifi,
  FaCoffee,
  FaHeartbeat,
} from "react-icons/fa";

const facilities = [
  { name: "White board", icon: <FaChalkboard /> },
  { name: "Computers", icon: <FaLaptop /> },
  { name: "Health Care Equipment", icon: <FaHeartbeat /> },
  { name: "Hospitality Management Equipment", icon: <FaConciergeBell /> },
  { name: "Air Conditioning Class Room", icon: <FaWind /> },
  { name: "Classroom Tables & Chairs", icon: <FaChair /> },
  { name: "WiFi Connectivity", icon: <FaWifi /> },
  { name: "Coffee Machines", icon: <FaCoffee /> },
];

interface FacilityImageCardProps {
  title: string;
  imgSrc: string;
}

interface ClassroomImageSectionProps {
  title: string;
  capacity: string;
  imgSrc1: string;
  imgSrc2: string;
}

export default function CampusAndFacilities() {
  return (
    <main className="min-h-screen bg-gray-50">
      
      <div className="container mx-auto px-4 py-12">
        {/* Facilities List */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Facilities
          </h3>
           <div className="flex justify-center mb-8">
            <div className="w-20 h-1 bg-[#1AB69D] rounded-full"></div>
        </div>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
            {facilities.map((facility) => (
              <div key={facility.name} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl text-[#1AB69D]">{facility.icon}</div>
                <span className="text-gray-700 font-medium">{facility.name}</span>
              </div>
            ))}
          </div>
        </div>
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4 mt-20">
          Campus and Facilities
        </h1>
        <div className="flex justify-center mb-12">
            <div className="w-24 h-1.5 bg-[#1AB69D] rounded-full"></div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-8">
            <FacilityImageCard title="RECEPTION" imgSrc="/facilities/reception.webp" />
            <FacilityImageCard title="MEETING ROOM" imgSrc="/facilities/meeting-room.webp" />
          </div>
          <div className="space-y-8">
            <FacilityImageCard title="ADMINISTRATION OFFICE" imgSrc="/facilities/adminstrationofffice.webp" />
            <FacilityImageCard title="PANTRY" imgSrc="/facilities/pantry.webp" />
          </div>
        </div>

        <div className="mb-16">
            <ClassroomImageSection 
                title="CLASSROOM 1 - 28.5 SQM"
                capacity="CAPACITY - 19 PAX"
                imgSrc1="/facilities/classroom-1.webp"
                imgSrc2="/facilities/classroom1-1.webp"
            />
        </div>
        <div className="mb-16">
            <ClassroomImageSection 
                title="CLASSROOM 2 - 71.28 SQM"
                capacity="CAPACITY - 47 PAX"
                imgSrc1="/facilities/classroom-2.webp"
                imgSrc2="/facilities/classroom-2-1.webp"
            />
        </div>
        <div className="mb-16">
            <div className="text-center mb-4">
                <h2 className="text-xl font-semibold tracking-widest text-gray-700">CLASSROOM 3 - 43.5 SQM</h2>
                <p className="text-md font-medium text-gray-500">CAPACITY - 29 PAX</p>
            </div>
            <div className="w-full h-96 relative rounded-lg overflow-hidden shadow-lg">
                <Image src="/facilities/classroom-3.webp" alt="Classroom 3" layout="fill" objectFit="cover" />
            </div>
        </div>


        
      </div>
    </main>
  );
}


function FacilityImageCard({ title, imgSrc }: FacilityImageCardProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold tracking-widest text-center text-gray-700 mb-2">{title}</h2>
      <div className="w-full h-64 relative rounded-lg overflow-hidden shadow-lg">
        <Image src={imgSrc} alt={title} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

function ClassroomImageSection({ title, capacity, imgSrc1, imgSrc2 }: ClassroomImageSectionProps) {
  return (
    <div>
      <div className="text-center mb-4">
        <h2 className="text-xl font-semibold tracking-widest text-gray-700">{title}</h2>
        <p className="text-md font-medium text-gray-500">{capacity}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full h-80 relative rounded-lg overflow-hidden shadow-lg">
          <Image src={imgSrc1} alt={title + " view 1"} layout="fill" objectFit="cover" />
        </div>
        <div className="w-full h-80 relative rounded-lg overflow-hidden shadow-lg">
          <Image src={imgSrc2} alt={title + " view 2"} layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
}
