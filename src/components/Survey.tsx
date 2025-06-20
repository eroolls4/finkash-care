import React, {useState} from 'react';
import {SurveyProps} from "../types";

const Survey: React.FC<SurveyProps> = ({isOpen, onClose}) => {
    const [submitted, setSubmitted] = useState(false);
    const [answers, setAnswers] = useState({
        problem: '',
        healthyHabit: '',
        wellbeing: '',
        feedback: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setAnswers({...answers, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const {problem, healthyHabit, wellbeing} = answers;

        if (problem && healthyHabit && wellbeing) {
            setSubmitted(true);
            console.log('Survey answers:', answers);
        } else {
            alert('Please answer all required questions!');
        }
    };

    const handleClose = () => {
        setSubmitted(false);
        setAnswers({
            problem: '',
            healthyHabit: '',
            wellbeing: '',
            feedback: '',
        });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-2xl font-bold">Youth Health Survey</h2>
                    <button
                        onClick={handleClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
                <div className="p-6">
                    {submitted ? (
                        <div className="text-center">
                            <div className="mb-4">
                                <svg className="w-16 h-16 text-green-500 mx-auto" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Thank you for your answers!</h3>
                            <p className="mb-4">We appreciate your feedback to help promote healthy habits and
                                well-being.</p>
                            <button
                                onClick={handleClose}
                                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                            >
                                Close
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div>
                                <label className="block mb-1 font-semibold" htmlFor="problem">
                                    1. What are the main problems young people aged 11–15 face today? <span
                                    className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="problem"
                                    name="problem"
                                    value={answers.problem}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows={3}
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-semibold" htmlFor="healthyHabit">
                                    2. What healthy habits would you promote for young people? <span
                                    className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="healthyHabit"
                                    name="healthyHabit"
                                    value={answers.healthyHabit}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows={3}
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-semibold" htmlFor="wellbeing">
                                    3. How can we encourage psychological well-being and social connection? <span
                                    className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="wellbeing"
                                    name="wellbeing"
                                    value={answers.wellbeing}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows={3}
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-semibold" htmlFor="feedback">
                                    4. Any additional feedback? (optional)
                                </label>
                                <textarea
                                    id="feedback"
                                    name="feedback"
                                    value={answers.feedback}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows={2}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                                onClick={handleSubmit}
                            >
                                Submit Survey
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Survey;