import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

const Catalog = () => {
    const [quizData, setQuizData] = useState([]);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`/json/quizes.json`)
            .then((response) => response.json())
            .then((data) => setQuizData(data))
            .catch((error) => console.error("Error fetching quiz data:", error));
    }, []);

    return (
        <section className="mx-auto mt-12 px-10 mb-10">
            {loading && <Loading />}
            <h2 className="text-3xl font-medium text-[#333] mb-6">Quiz Catalog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quizData.map((quizItem) => (
                    <div key={quizItem.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                        <h3 className="text-lg font-medium text-[#333] mb-2">{quizItem.quiz}</h3>
                        <p className="text-gray-500 mb-4">{quizItem.description}</p>
                        <div className="flex justify-end">
                            <button
                                onClick = {() => {
                                    setLoading(true);
                                    setTimeout(() => {
                                        navigate(quizItem.link);
                                        setLoading(false);
                                    }, 3000);
                                }}
                                className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-all duration-300"
                            >
                                Start Quiz
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Catalog;
