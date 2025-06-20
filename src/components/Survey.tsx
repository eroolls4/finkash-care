import React, { useState, useEffect } from 'react';

const Survey: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState({
    problem: '',
    healthyHabit: '',
    wellbeing: '',
    feedback: '',
  });

  useEffect(() => {
    const count = localStorage.getItem('surveyCount');
    if (!count) {
      localStorage.setItem('surveyCount', '0');
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { problem, healthyHabit, wellbeing } = answers;

    if (problem && healthyHabit && wellbeing) {
      const prevCount = parseInt(localStorage.getItem('surveyCount') || '0', 10);
      localStorage.setItem('surveyCount', (prevCount + 1).toString());
      setSubmitted(true);
      console.log('Survey answers:', answers);
    } else {
      alert('Please answer all required questions!');
    }
  };

  if (submitted) {
    return (
      <div className="p-6 max-w-lg mx-auto bg-white rounded shadow">
        <h2 className="text-xl font-bold mb-4">Thank you for your answers!</h2>
        <p className="mb-2">We appreciate your feedback to help promote healthy habits and well-being.</p>
        <p>So far, <strong>{localStorage.getItem('surveyCount')}</strong> surveys have been submitted.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-lg mx-auto bg-white rounded shadow space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Youth Health Survey</h2>

      <div>
        <label className="block mb-1 font-semibold" htmlFor="problem">
          1. What are the main problems young people aged 11–15 face today? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="problem"
          name="problem"
          value={answers.problem}
          onChange={handleChange}
          className="w-full border rounded p-2"
          rows={3}
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold" htmlFor="healthyHabit">
          2. What healthy habits would you promote for young people? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="healthyHabit"
          name="healthyHabit"
          value={answers.healthyHabit}
          onChange={handleChange}
          className="w-full border rounded p-2"
          rows={3}
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold" htmlFor="wellbeing">
          3. How can we encourage psychological well-being and social connection? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="wellbeing"
          name="wellbeing"
          value={answers.wellbeing}
          onChange={handleChange}
          className="w-full border rounded p-2"
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
          className="w-full border rounded p-2"
          rows={2}
        />
      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default Survey;
