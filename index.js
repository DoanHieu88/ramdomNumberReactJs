
class RamdomNumber extends React.Component{
    constructor(props){
        super(props);

        this.state = {
           number: Math.floor(Math.random() *100 +1),
           inputValue: null,
           cout: 0
        }
    }
    
    newGame = ()=>{
        this.setState({
            number: Math.floor(Math.random() *100 +1)
        })
    } 

    takeData =(e)=>{
        this.setState({
            inputValue: e.target.value,
        })
    }

    compareData = ()=>{
        let {inputValue, number, cout} = this.state
        let convert = Number(inputValue) 
        if(convert > number){
            alert("big")
        }else if(convert < number){
            alert("small")
        }else{
            alert(`true !! , its take you ${this.state.cout} times to win`)
        }

        this.setState({
            cout: cout +1,
            convert: ""
        })
    }
    render(){
        console.log(this.state.number)
        return(
            <div className="container">
                {/* Header */}
                <div className="jumbotron text-center">
                    <h1>Getting random number</h1>
                    <p>Tôi đã chọn một số random trong khoảng 1 đến 100, bạn có thể đoán được?</p>
                </div>
                {/* Body */}
                <div className="body">
                    <button onClick={this.newGame}>New game</button>
                    <h4>Số lần bạn đã đoán là:{this.state.cout}</h4>
                    <h4>Số bạn đoán là</h4>
                    <input type="number" name="guess" id="guess" onChange={this.takeData} />
                    <button className="btn-success" onClick={this.compareData}> Đoán </button>
                    <p>You guess the number is small</p>
                </div>
            </div>
        )
    }
}


//compponent main 
class App extends React.Component{
    render(){
        return(
            <div className="Main">
                <RamdomNumber/>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById("root"))