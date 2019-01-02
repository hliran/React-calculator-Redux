import React, { Component } from 'react';
import { Button } from './Button';
import '../App.css';
import { Input } from './Input';
import { ClearButton } from './ClearButton';
import * as math from 'mathjs';
import {connect} from 'react-redux';
import {HistoryView} from './HistoryView';
import * as HistoryActions from '../Action/HistoryActions';

class Calculator extends Component{
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        }
    }

    handleEqual = () => {
        let exp = this.state.input;
        if (!isNaN(exp.slice(-1))){
            let res = math.eval(exp);
            let payload = {history : ` [${exp} = ${res}] `};
            this.setState({
                input: res
            })
            this.props.dispatch(HistoryActions.history(payload));
        }
    }

    addToInput = val => {
        this.setState({
            input: this.state.input + val
        })
    }
    
    render() {
        return (
            <div className="app">
                <div className="calc-wrapper">
                    <Input input={this.state.input} />
                    <div className="row">
                        <Button handleClick={this.addToInput}>7</Button>
                        <Button handleClick={this.addToInput}>8</Button>
                        <Button handleClick={this.addToInput}>9</Button>
                        <Button handleClick={this.addToInput}>/</Button>
                    </div>
                    <div className="row">
                        <Button handleClick={this.addToInput}>4</Button>
                        <Button handleClick={this.addToInput}>5</Button>
                        <Button handleClick={this.addToInput}>6</Button>
                        <Button handleClick={this.addToInput}>*</Button>
                    </div>
                    <div className="row">
                        <Button handleClick={this.addToInput}>1</Button>
                        <Button handleClick={this.addToInput}>2</Button>
                        <Button handleClick={this.addToInput}>3</Button>
                        <Button handleClick={this.addToInput}>+</Button>
                    </div>
                    <div className="row">
                        <Button handleClick={this.addToInput}>.</Button>
                        <Button handleClick={this.addToInput}>0</Button>
                        <Button handleClick={() => this.handleEqual()}>=</Button>
                        <Button handleClick={this.addToInput}>-</Button>
                    </div>
                    <div className="row">
                        <ClearButton handleClear={() => this.setState({ input: "" })}>Clear</ClearButton>
                    </div>
                    <div className="row">
                        <HistoryView exp={this.props.histo}></HistoryView>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        histo: state.histo
    }   
}

export default connect(mapStateToProps)(Calculator);