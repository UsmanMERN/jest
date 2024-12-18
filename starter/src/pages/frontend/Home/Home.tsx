// import React, { useState } from 'react';
// import axios from 'axios';

// interface PromptResponse {
//     data: string;
// }

// const PromptForm: React.FC = () => {
//     const [prompt, setPrompt] = useState<string>('');
//     const [response, setResponse] = useState<PromptResponse | null>(null);

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         try {
//             const backendUrl = import.meta.env.VITE_BACKEND_URL;
//             const res = await axios.post<PromptResponse>(
//                 `${backendUrl}/api/generate-data`,
//                 { prompt }
//             );
//             setResponse(res.data);
//         } catch (error) {
//             console.error('Error:', error);
//             setResponse({ data: 'Error submitting the prompt.' });
//         }
//     };

//     return (
//         <div className="flex flex-col items-center mt-10">
//             <form
//                 onSubmit={handleSubmit}
//                 className="w-full max-w-md p-6 border border-gray-300 rounded-lg bg-white shadow-md"
//             >
//                 <h2 className="text-2xl font-semibold mb-4">Send a Prompt</h2>
//                 <textarea
//                     value={prompt}
//                     onChange={(e) => setPrompt(e.target.value)}
//                     placeholder="Write your prompt here..."
//                     className="w-full h-32 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 mb-4"
//                 />
//                 <button
//                     type="submit"
//                     className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
//                 >
//                     Submit
//                 </button>
//             </form>
//             {response && (
//                 <p className="mt-4 text-lg text-gray-700 font-semibold">
//                     {response.data}
//                 </p>
//             )}
//         </div>
//     );
// };

// export default PromptForm;
import React from 'react';

const PromptForm: React.FC = () => {

    return (
        <div className="flex flex-col items-center mt-10">
            <form
                className="w-full max-w-md p-6 border border-gray-300 rounded-lg bg-white shadow-md"
            >
                <h2 className="text-2xl font-semibold mb-4">Send a Prompt</h2>
                <textarea
                    placeholder="Write your prompt here..."
                    className="w-full h-32 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 mb-4"
                />
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                    Submit
                </button>
            </form>
            {/* {response && (
                <p className="mt-4 text-lg text-gray-700 font-semibold">
                    {response.data}
                </p>
            )} */}
        </div>
    );
};

export default PromptForm;
