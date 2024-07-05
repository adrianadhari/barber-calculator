import { useState } from "react";
import {
  FaCalculator,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

function App() {
  const [pelanggan, setPelanggan] = useState("");
  const [barbers, setBarbers] = useState(0);

  const calculateBarbers = () => {
    const totalPelanggan = pelanggan;
    const maxPelangganPerBarber = 5;

    const barberYangDibutuhkan = Math.ceil(totalPelanggan / maxPelangganPerBarber);
    setBarbers(barberYangDibutuhkan);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="w-full h-20 px-20 bg-black flex items-center">
        <h2 className="text-white text-4xl font-bold">Logo.</h2>
      </div>
      {/* Header */}

      {/* Content */}
      <div className="flex flex-col items-center justify-center py-14 2xl:space-y-8 space-y-4 max-w-4xl mx-auto ">
        <FaCalculator className="2xl:text-9xl text-7xl" />
        <h2 className="2xl:text-4xl text-2xl font-bold tracking-wide">KALKULATOR</h2>
        <p className="text-lg tracking-widest font-medium">
          Berapa Banyak Tukang Cukur yang Dibutuhkan?
        </p>
        <div className="w-full">
          <label className="block text-gray-700">Jumlah Pelanggan</label>
          <input
            type="number"
            className="mt-1 block w-full px-3 py-4 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={pelanggan}
            onChange={(e) => setPelanggan(e.target.value)}
          />
        </div>
        <button
          className="w-1/4 bg-slate-500 font-semibold text-xl text-white py-2 rounded-md hover:bg-blue-600"
          onClick={calculateBarbers}
        >
          Hitung
        </button>
        <div className="mt-4 text-center">
          <span className="text-lg tracking-widest font-medium">
            Jumlah Tukang Cukur yang Diperlukan: {barbers}
          </span>
        </div>
      </div>
      {/* Content */}

      {/* Footer */}
      <div className="w-full h-40 bg-black flex items-center justify-center 2xl:fixed 2xl:bottom-0 2xl:mt-0 mt-36">
        <div className="flex flex-col space-y-6 text-center">
          <h2 className="text-white text-2xl font-semibold">Contact</h2>
          <div className="flex items-center space-x-6">
            <a
              href="https://x.com"
              target="_blank"
              className="text-white text-xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="text-white text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              className="text-white text-xl"
            >
              <FaTiktok />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              className="text-white text-xl"
            >
              <FaYoutube />
            </a>
          </div>
          <div>
            <h3 className="text-white">&copy; 2024 by <span className="font-bold">kingzbarber</span></h3>
          </div>
        </div>
      </div>
      {/* Footer */}
    </div>
  );
}

export default App;
