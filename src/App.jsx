import React from 'react'
import './App.css'
class Flag extends React.Component {
            
    constructor(props) {
        super(props)
        this.state = {image:null,id:null,opacity:1}
        this.URI = 'https://restcountries.eu/rest/v2/name/'
        this.search = this.search.bind(this)
    }

    componentDidMount(){
        this.timer = setInterval(() => {
            let {opacity} = this.state;
            opacity -= 0.025
            if (opacity <= 0) opacity = 1
            this.setState({opacity:opacity})
        },100);
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }


    showData (event){
        this.setState({id:event.target.value})
    }

    search=()=>{
        this.loadData(this.URI, this.state.id)
    }

    clearInput=()=>{
        this.setState({image:null})
        this.myInput.focus()
    }

    async loadData (uri,id) {
        const URI = uri + id 
        const data = await window.fetch(URI)
            .then(res => res.json())
            .then(json => json[0].flag)
            .catch(error => console.log(error))
        this.setState({image:data})
    }


    render(){
        return(
            <div>
                <h1 style={{opacity:this.state.opacity}}>全世界の国旗を検索してみよう</h1>
                <input onChange={(event) => this.showData(event)} placeholder="英語で国名を入力して下さい" ref = {myInput => this.myInput=myInput}Hype="text"/>
                <button onClick={this.search}>検索</button>   
                <button onClick={this.clearInput}>リセット</button>
                <TestView getImage={this.state.image}/>            
            </div>
                    
        )
    }
}
        
class TestView extends React.Component{
    render(){
        var image = '';
        if(true){
            image = (<img src={this.props.getImage} alt=""/>);
        }
        return(
            <div>
                {image} 
            </div>
        )
    }
}      
export default Flag
