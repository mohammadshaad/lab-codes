import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { saveAs } from "file-saver";

type Code = {
  title: string;
  filename: string;
};

export default function CodeSharingPage() {
  const [codesData, setCodesData] = useState<Code[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("dbms.json")
      .then((response) => response.json())
      .then((data) => {
        setCodesData(data);
        console.log(data); // add this line
      })
      .catch((error) => console.log(error));
  }, []);

  const filteredCodes = codesData.filter(
    (code) =>
      code.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      code.filename.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const saveFile = (code: string, filename: string) => {
    saveAs(
      `${code}`
    );
  };

  return (
    <div className="min-h-screen text-white w-screen mt-20">
      <Navbar />
      <div className="container mx-auto py-8 w-full p-10">
        <div className="flex justify-center mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border border-gray-300 rounded-md w-full bg-transparent text-gray-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {filteredCodes.map((code) => (
            <div
              key={code.title}
              className=" shadow-md rounded-md p-4 bg-transparent border border-white text-white"
            >
              <h2 className="text-lg font-medium mb-2">{code.title}</h2>
              <button
                className="border border-white bg-transparent hover:bg-white hover:text-gray-800 text-gray-100 font-normal text-xs px-4 py-2 mb-10 rounded-md"
                onClick={() => saveAs(code.filename)}
              >
                Download
              </button>
              {/* <pre className="text-sm whitespace-pre-wrap">{code.code}</pre> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
