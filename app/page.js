import React from "react";
import Header from "./component/header";
import Footer from "./component/footer";
import InstructionRule  from "./component/instructionRule";


const App = () => {
    return(
        <div className="container">
            <Header/>
            <h6 className="mcq_text">MCQ Test Portal</h6>
            <InstructionRule/>
            <Footer/>
        </div>
    )
};
export default App;
































