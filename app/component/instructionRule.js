import React from 'react';

const InstructionRule = () => {
    return (
        <div className="instruction_box">
            <div className="instruction_content"> 
                <p className = "instruction_heading">Instruction</p>
                <div className = "text">Please read the instructions carefully before you begin:</div>
                <ul>
                    <li>Timing: The test is timed. You have [specified time] minutes to complete all questions.</li>
                    <li>Questions: The test comprises [number of questions] multiple-choice questions (MCQs).</li>
                    <li>Navigation: You can navigate between questions using the 'Next' and 'Previous' buttons.</li>
                    <li>Selection: Choose the best answer for each question. You can change your answers anytime before submitting.</li>
                    <li>Submission: Once you have answered all questions, click the 'Submit' button. You must submit before the timer runs out.</li>
                    <li>Review: After submission, you may review your answers and scores.</li>
                </ul>
                <div className="text">Please ensure a stable internet connection. If you encounter any issues, contact support immediately.</div>
                <div className = "text_button">Click 'Lets Start' to begin the test. </div>
                <div className="wish">Good luck!</div>
            </div>
            <div className="line"></div>
            <a href="/assessmentStructurePage">
                <div className="button_box">
                    <button className="buttons">Lets Start!</button>
                </div>
            </a>
            
        </div>
    );
}

export default InstructionRule;

