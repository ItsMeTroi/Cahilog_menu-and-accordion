import {useState} from "react"
import {questions} from "./questions"
import SingleQuestion from "./singlequestions"

function App() {
  const [ques] = useState(questions)
  return (
    <div className="container">
      <article>
        <h1>MLBB FAQs</h1>
      </article>

      <article>
        {ques.map((ques, index) => (
          <SingleQuestion key={index} 
            {...ques} />
        ))}
      </article>
    </div>
  );
}

export default App;
