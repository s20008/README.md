import React from 'react'
import './App.css'
import PropTypes from 'prop-types'

class JangkengGame extends React.Component {
    constructor(props){
        super(props)
        this.state = {human:null,computer:null}
    }

    pon(human_hand){
        const computer_hand = Math.floor(Math.random() * 3)
        this.setState( {human:human_hand,computer:computer_hand} )
    }

    judge () {
        if(this.state.human == null){
            return null
        }else {
            return (this.state.human - this.state.computer + 3) % 3
        }
    }

    render() {
        return(
            <div>
                <h1>じゃんけん</h1>
                <JangkengBox actionpon={(te)=>this.pon(te)}/>
                <ScoreBox human={this.state.human} computer={this.state.computer} judgment={this.judge()}/>
            </div>
        )
    }
}


const JangkengBox = props => {
    return (
        <div>
            <button onClick={()=>props.actionpon(0)}>グー</button>
            <button onClick={()=>props.actionpon(1)}>チョキ</button>
            <button onClick={()=>props.actionpon(2)}>パー</button>
        </div>
    )
}

const ScoreBox = props => {
    const teString = ['グー','チョキ','パー']
    const judgmentString = ['引き分け','勝ち','負け']
    const{human,computer,judgment} = props
    return (
        <table>
            <tbody>
                <tr>
                    <th>あなた</th>
                    <td>{teString[human]}</td>
                </tr>

                <tr>
                    <th>Computer</th>
                    <td>{teString[computer]}</td>
                </tr>
                <tr>
                    <th>勝敗</th>
                    <td>{judgmentString[judgment]}</td>
                </tr>
            </tbody>
        </table>
    )
}
JangkengBox.propTypes = {
    actionPon: PropTypes.func
}

ScoreBox.propTypes = {
    human: PropTypes.number,
    computer: PropTypes.number,
    judgment: PropTypes.number
}
export default JangkengGame
