import React from 'react';
import './SortingVisualizer.css';
import {getMergeSortAnimations} from '../sortingAlgorithms/sortingAlgorithms';
import { InsertionSortAnimations} from '../sortingAlgorithms/insertionSort.js';

import { BubbleSortAnimations} from '../sortingAlgorithms/bubbleSort.js';
import {QuickSortAnimations} from '../sortingAlgorithms/quickSort.js';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 30;
const SUBSIDARY_COLOR = "#35013f";

// Change this value for the number of bars (value) in the array.
//const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';


export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            array:[],
        };
    }

componentDidMount(){
    this.resetArray();
}

resetArray(){
    const array=[];
    for(let i=0; i<70;i++){
     array.push(randomIntFromInterval(5,550));
    }
    this.setState({array});

}
mergeSort(){
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
}
quickSort(){
    const animations = QuickSortAnimations(this.state.array);
    // console.log(animations);

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];

        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        //console.log(barOneStyle);
       // console.log(barTwoStyle);
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        if (animations[i].length === 4) {
        //  console.log(animations[i].length);
          const [barOneIdx, barTwoIdx, newHeighttwo, newHeightone] = animations[
            i
          ];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          // barOneStyle.backgroundColor = `#f9ccac`;
          // barTwoStyle.backgroundColor = `#f9ccac`;
          setTimeout(() => {
            barOneStyle.height = `${newHeighttwo}px`;
            barTwoStyle.height = `${newHeightone}px`;
          }, i * ANIMATION_SPEED_MS);
        } else {
          const [barOneIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          setTimeout(() => {
            barOneStyle.backgroundColor = SUBSIDARY_COLOR;
          }, i * ANIMATION_SPEED_MS);
        }
      }
    }
};


insertionSort(){
    const animations = InsertionSortAnimations(this.state.array);
    //console.log(animations);

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];

        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
       // console.log(barOneStyle);
        // console.log(barTwoStyle);
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        if (animations[i].length === 4) {
         // console.log(animations[i].length);
          const [barOneIdx, barTwoIdx, newHeighttwo, newHeightone] = animations[
            i
          ];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          // barOneStyle.backgroundColor = `#f9ccac`;
          // barTwoStyle.backgroundColor = `#f9ccac`;
          setTimeout(() => {
            barOneStyle.height = `${newHeighttwo}px`;
            barTwoStyle.height = `${newHeightone}px`;
          }, i * ANIMATION_SPEED_MS);
        } else {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          setTimeout(() => {
            barOneStyle.backgroundColor = SUBSIDARY_COLOR;
            barTwoStyle.backgroundColor = SUBSIDARY_COLOR;
          }, i * ANIMATION_SPEED_MS);
        }
      }
    }
};


bubbleSort(){
    const animations = BubbleSortAnimations(this.state.array);
   // console.log(animations);

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];

        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
       // console.log(barOneStyle);
        //console.log(barTwoStyle);
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        if (animations[i].length === 4) {
         // console.log(animations[i].length);
          const [barOneIdx, barTwoIdx, newHeighttwo, newHeightone] = animations[
            i
          ];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          // barOneStyle.backgroundColor = `#f9ccac`;
          // barTwoStyle.backgroundColor = `#f9ccac`;
          setTimeout(() => {
            barOneStyle.height = `${newHeighttwo}px`;
            barTwoStyle.height = `${newHeightone}px`;
          }, i * ANIMATION_SPEED_MS);
        } else {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          setTimeout(() => {
            barOneStyle.backgroundColor = SUBSIDARY_COLOR;
            barTwoStyle.backgroundColor = SUBSIDARY_COLOR;
          }, i * ANIMATION_SPEED_MS);
        }
      }
    }
};

testSortingAlgorithms(){
    for(let i=0;i<70;i++){
        const array=[];
        const length= randomIntFromInterval(1,900);
        for(let i=0;i<length ; i++){
            array.push(randomIntFromInterval(-1000,1000));

        }
        const javaSorted= array.slice().sort((a,b)=> a-b);
        const mergeSorted=getMergeSortAnimations(array.slice());
        console.log(arraysEqual(javaSorted,mergeSorted));
    }
}


render(){
    const {array} =this.state;

    return (
      
      <div> <h1>Sorting Sorting Visualizer</h1>
      {
        
        array.map((value,idx)=>(
            <div className="array-bar"
             key={idx}
             style={{height: `${value}px`}}
             
             >
                
            </div>
        ))
      }
     
      <div class="buttonn">
      <button onClick={()=> this.resetArray()}>Generate New Array</button>
      <button onClick={()=> this.mergeSort()}>Merge Sort</button>
      <button onClick={()=> this.quickSort()}>Quick Sort</button>
      <button onClick={()=> this.insertionSort()}>Heap Sort</button>
      <button onClick={()=> this.bubbleSort()}>Bubble Sort</button>
      <button onClick={()=> this.testSortingAlgorithms()}>Test Sorting Algorithms</button>
      </div>
      </div>
     
     
    );

}
}
function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
function arraysEqual(arrayOne,arrayTwo){
    if(arrayOne.length !== arrayTwo.length) return false;
    for(let i=0;i<arrayOne.length;i++){
        if(arrayOne[i]!==arrayTwo[i]) return false;
    }
    return true;
}