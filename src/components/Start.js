import React, { useContext } from 'react';
import dataQuiz from './dataQuiz';

const Start = () => {
    const {startQuiz, showStart} = useContext(dataQuiz);
    return (
        <section className='text-white text-center ' style={{backgroundColor:' rgb(7, 7, 101)', display: `${showStart ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <h1 className='fw-bold mb-4 ' style={{color:'white'}}>Basic Aptitude Quesions :: Problems on Trains</h1>
                        <button onClick={startQuiz} style={{width:'500px'}} className="btn px-4 py-2 bg-light text-dark fw-bold">Start Test</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Start;