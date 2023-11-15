// import { useState } from 'react';



// export const MyComponent =() => {
// 	const [showText, setShowText] = useState(true);
// 	const [value7, setValue7] = useState(7);
// 	const [value8, setValue8] = useState(8);
// 	const [value9, setValue9] = useState(9);
// 	const [valuePlus, setValuePlus] = useState('+');

// 	const onClick = (event) => {
// 		setValue7(value7);
// 		setValue9((updatedValue9) => updatedValue9 / value8);
// 		setValue8(value8);
// 		setValuePlus(valuePlus);
// 				setShowText(!showText);
// 	};

// 	return (
// 		<>
// 		<div>{value7}</div>
// 		<button onClick={new onClick}>7</button>

// 		<div>{value8}</div>
// 		<button onClick={new onClick}>8</button>

// 		<div>{valuePlus}</div>
// 		<button onClick={new onClick}>+</button>


// 		<div>{value9}</div>
// 		<button onClick={new onClick}>{value9} / 8</button>

// 		{showText && <div>{valuePlus}</div>}
// 		<button onClick = {new onClick}>{showText ? null: 'Показать'} text</button>
// 		</>
// 	);
// };


// import { Fragment } from "react";

// const getValue =() => 123;

// export const MyComponent =()=>{
// 		const tagName ='div';

// 	return (
// 		<>
// 		<label>Значение</label>
// 	<div
// 	 className={tagName + 'Element'}
// 	 style={{ width: '100px', marginTop: '20px'}}
// 	 >
// 		{getValue()}
// 		</div>
// 		</>
// 	);
// };





// import { useEffect } from "react";

// export const MyComponent =(props) => {
// 	const date = new Date();

// 	useEffect(() =>{
// 		console.log(date);
// 	}, []);

// 	return <div>{String(date)}</div>;
// };
