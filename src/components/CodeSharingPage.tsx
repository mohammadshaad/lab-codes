import { useState } from "react";

type Code = {
  title: string;
  code: string;
};

const codes: Code[] = [
  
  {
    title: "Fibonacci Sequence",
    code: `
      def fibonacci(n: int) -> int:
          if n <= 1:
              return n
          return fibonacci(n - 1) + fibonacci(n - 2)
    `,
  },
];

export default function CodeStore() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredCodes = codes.filter(
    (code) =>
      code.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      code.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCopyToClipboard = (code: string) => {
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = code;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
    alert("Code copied to clipboard!");
  };

  return (
    <div className="min-h-screen text-white w-screen">
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
              className=" shadow-md rounded-md p-4 bg-gray-50 text-gray-800"
            >
              <h2 className="text-lg font-medium mb-2">{code.title}</h2>
              <button
                className="bg-gray-700 text-gray-100 font-normal text-xs px-4 py-2 mb-10 rounded-md"
                onClick={() => handleCopyToClipboard(code.code)}
              >
                Copy
              </button>
              <pre className="text-sm whitespace-pre-wrap">{code.code}</pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
