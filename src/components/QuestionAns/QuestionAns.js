import React from 'react';
import './QuestionAns.css'

const QuestionAns = () => {
    return (
        <div>
            <div className='q-a'>
                <h2>How React works?</h2>
                <p>React is a libary for making user interfaces, react makes a dom tree first, and it's has two copy of a dom virtual dom and browesr dom, When we chages something in code, react uses diff algorithms to update brwser DOM. It's compare with brwser DOM abnd virtual DOM, If Something is changed React indentify that specific element with the key. Because of that the browser dont't have to update the whole tree to update an element. It's makes react most eficient and beautiful.</p>
            </div>
            <div className='q-a'>
                <h2>How useState works?</h2>
                <p>useState is a build in hook of react. We have to pass a initial value of state and it will return a variable containig the value of function which is also returned by useState hook. We can use that function to change the value of variable.</p>
            </div>
            <div className='q-a'>
                <h2>Differences between props and state?</h2>
               <p>Props: Props stands for property. Props are used for passing data one component to another component. When we have to pass data to another component to display which is came from API, we have to use Props. We can pass any data through props. Props are can't be changed in the way of passing.</p>
               <p>State: The state is used for interaction. When user have to interact with a button or something like that, we uses a state. The state is can be changed or not.</p>
            </div>
        </div>
    );
};

export default QuestionAns;