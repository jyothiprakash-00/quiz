import React, { useContext } from 'react';
import dataQuiz from './dataQuiz';

const Quiz = () => {
    const { showQuiz, question, quizs, checkAnswer, correctAnswer,
            selectedAnswer,questionIndex, nextQuestion, showTheResult }  = useContext(dataQuiz);

    return (
        <section className=" text-black" style={{backgroundColor:' rgb(7, 7, 101)', display: `${showQuiz ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <div className="card p-4 shadow " style={{ background: 'black',width:'1000px', borderColor: '#646464' ,borderRadius:'50px',boxShadow:'0 8px 6px -6px black'}}>
                            <div className="d-flex justify-content-between gap-md-3">
                                <h5 style={{ color: 'red', width: '100px',textAlign: 'right'}}>Question {quizs.indexOf(question) + 1} / {quizs?.length}:</h5>
                                <h5 className='mb-2 fs-normal lh-base'>{question?.question}</h5>
                                {/* <h5 style={{ color: 'red', width: '100px', textAlign: 'right' }}>{quizs.indexOf(question) + 1} / {quizs?.length}</h5>
                                */}
                            </div>
                            <div>
                                {
                                    question?.options?.map((item, index) => <button
                                        key={index}
                                        className={`option w-100 text-start btn text-dark py-2 px-3 mt-3 rounded btn-dark ${correctAnswer === item && 'bg-success'}`}
                                        onClick={(event) => checkAnswer(event, item)}
                                    >
                                        {item}
                                    </button>)
                                }
                            </div>

                            {
                                (questionIndex + 1) !== quizs.length ?
                                    <button className='btn py-2 w-100 mt-3 bg-primary text-light fw-bold' onClick={nextQuestion} disabled={!selectedAnswer}>Next Question</button>
                                    :
                                    <button className='btn py-2 w-100 mt-3 bg-primary text-light fw-bold' onClick={showTheResult} disabled={!selectedAnswer}>Show Result</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quiz;

