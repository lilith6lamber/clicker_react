import {Component} from "react";

class Clicker extends Component {

    state = {
        count: 0
    }

    handleMinus = () => {
        if (this.state.count !== 0) {
            this.setState({count: this.state.count - 1})
        }
    }

    handlePlus = () => {
        this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <div className='container'>
                <div className='panel'>
                    <button className={this.state.count === 0 ? 'btn disabled' : 'btn'} onClick={this.handleMinus}>-</button>
                    <span className="count">{this.state.count}</span>
                    <button className='btn' onClick={this.handlePlus}>+</button>
                </div>
            </div>
        )
    }
}

export default Clicker