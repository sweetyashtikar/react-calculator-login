import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import './App.css';
import ResultComponent from './Calculator/ResultComponent';
import KeyPadComponent from "./Calculator/KeyPadComponent";
import Login from './Login/Login'


class App extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
    }
  }

  onClick = button => {

    if (button === "=") {
      this.calculate()
    }

    else if (button === "C") {
      this.reset()
    }
    else if (button === "CE") {
      this.backspace()
    }

    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };


  calculate = () => {
    var checkResult = ''
    if (this.state.result.includes('--')) {
      checkResult = this.state.result.replace('--', '+')
    }

    else {
      checkResult = this.state.result
    }

    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(checkResult) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })

    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };

  render() {
    return (
      <div>
        <div className="calculator-body">
          <h1>Simple Calculator</h1>

            <ResultComponent result={this.state.result} />
            <KeyPadComponent onClick={this.onClick} />

            <Routes>

            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate to="/login" />} />
            </Routes>

        </div>
      </div>
    );
  }
}










export default App;
