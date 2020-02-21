import React, {Component} from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <form onSubmit = {
            (e)=>{
              e.preventDefault();
               const val = e.target.elements.inputText.value.trim();
               if(!val){
                 alert("Form Not submitted");
               }else{
                 this.props.history.push('/formSubmit', {data : val});
               }
            }
            
        }>
            <input name="inputText" type="text" placeholder="Enter Your Name"/>
            <button>Click</button>
        </form>
      </div>
    );
  }
}

export default Home;
