import React from 'react';

const QuizHeader = ({ timer, questions }) => {
    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    return (
        <>
        <hr/>
        <section className="shadow-sm py-5 sticky top-0 z-10 bg-blue-50" id="alertContainer">
            <div className="w-9/12 mx-auto flex md:flex-row flex-col justify-between items-center">
                <div className="font-normal text-xs">
                    <span className="text-red-700">Attention!</span> You have 60 seconds to
                    answer {questions.length} questions.
                    <br />
                    Kindly keep an eye on the timer below and ensure you respond to all questions before the time runs out.
                </div>
                <div className="flex items-center mt-5 md:mt-0">
                    <p className="mr-2 text-xl text-gray-700">
                        <i className="fa-solid fa-clock-rotate-left"></i>
                    </p>
                    <div className="text-left">
                        <h1 className="text-green-700 text-xl" id="count">
                            {formatTime(timer)}
                            <sub className="text-xs ml-1">sec</sub>
                        </h1>
                        <p className="text-xs -mt-1 text-gray-700">Time Consumed</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};


export default QuizHeader;