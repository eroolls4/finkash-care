import ChatBot from './components/ChatBot';
import HealthyHabits from './components/HealthyHabits';
import Survey from "./components/Survey.tsx";
import {useState} from "react";

function App() {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-2">
                    <span className="text-blue-600">IO</span>
                    <h1 className="text-2xl font-semibold text-blue-600">PHINKASH CARE</h1>
                </div>

                <button
                    onClick={() => setIsSurveyOpen(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors shadow-lg"
                    title="Take Survey"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                    </svg>
                </button>
            </div>


            <HealthyHabits/>

            <Survey isOpen={isSurveyOpen} onClose={() => setIsSurveyOpen(false)}/>
            <div className="flex-1 flex flex-col">
                <ChatBot/>
            </div>
        </div>
    );
}

export default App;
