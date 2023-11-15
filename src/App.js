import { useState } from 'react';
import styles from './App.module.css';

export const App = () => {
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

	const [value, setValue] = useState(0);
	const [resultRender, setResultRender] = useState(true);

	const countResult = (userPression) => {
		if (userPression.length) {
			const actions = userPression
				.split(' ')
				.filter((symbol) => isFinite(symbol) === false);

			const ceilNumbers = userPression
				.split(' ')
				.filter((symbol) => isFinite(symbol) === true)
				.map((number) => Number(number));

			actions.forEach((act) => {
				if (act === '-') {
					const result = ceilNumbers[0] - ceilNumbers[1];
					ceilNumbers.splice(0, 2, result);
				} else {
					const result = ceilNumbers[0] + ceilNumbers[1];
					ceilNumbers.splice(0, 2, result);
				}
			});

			setResultRender(resultRender ? null : !resultRender);
			return ceilNumbers[0];
		} else {
			setResultRender(resultRender ? !resultRender : null);
			return 0;
		}
	};

	const addDigit = (event) => {
		const li = event.target.closest('li');
		if (li) {
			setResultRender(resultRender ? !resultRender : null);
			setValue((updatedValue) =>
				updatedValue === 0 ? li.textContent : (updatedValue += li.textContent),
			);
		}
	};

	const doCalc = (event) => {
		const act = event.target.closest('li');
		if (act.textContent !== '=') {
			setResultRender(resultRender ? !resultRender : null);
			setValue(
				act.textContent === '+'
					? `${value} + `
					: act.textContent === '-'
					? `${value} - `
					: act.textContent === 'C'
					? 0
					: '',
			);
		} else if (act.textContent === '=') {
			setValue(() => countResult(value));
		}
	};

	return (
		<div className={styles.сontainer}>
			<div className={resultRender ? styles.result : styles.screen}>{value}</div>
			<div className={styles.gridContainer}>
				<ul
					className={styles.numbers}
					onClick={(evt) => {
						addDigit(evt);
					}}
				>
					{numbers.map((number) => (
						<li className={styles.li} key={number}>
							{number}
						</li>
					))}
				</ul>
				<ul
					className={styles.actions}
					onClick={(evt) => {
						doCalc(evt);
					}}
				>
					<li className={styles.li} key="+">
						-
					</li>
					<li className={styles.li} key="-">
						+
					</li>
					<li className={styles.li} key="=">
						=
					</li>
					<li className={styles.li} key="C">
						C
					</li>
				</ul>
			</div>
		</div>
	);
};

// import logo from './logo.svg';
// import { MyComponent } from './MyComponent';
// import './App.css';

// // const today = new Date(); //

// export const App = () => {
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 					Сложение <code></code> and вычитание
// 				</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Calculator
// 				</a>
// 				<MyComponent />
// 				{/* <MyComponent />
// 				<MyComponent /> */}
// 				{/* <p>{today.getFullYear()}</p>  */}
// 			</header>
// 		</div>
// 	);
// };
