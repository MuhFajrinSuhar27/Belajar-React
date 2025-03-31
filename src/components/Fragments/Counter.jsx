import React from 'react'


// rconst untuk membuat sebuah constructor cepat

class Counter extends  React.Component{
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    };
    
 

componentDidMount() {
    this.setState({count : 1  })
};


componentDidUpdate(prevProps, prevState){
    if(this.state.count === 10){
        this.setState({count: 0})
    };
}

    render(){
        return(
    <>
        <h1 className='mr-5 items-center'>{this.state.count }</h1>
        <div>
            <button className='bg-black text-white p-3' onClick={ () => this.setState({ count: this.state.count + 1 })}>+</button>
        </div>
    
    </>
        )
    }
}


export default Counter;
