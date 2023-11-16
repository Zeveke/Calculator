//selection и в css 86 строка
import styles from './App.module.css';
import { useState } from 'react';

export const App = () => {
	const NUMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

	const [value, setValue] = useState(0);
	const [isResult, setIsResult] = useState(false);

	const countResult = (countResult) => {
		if (countResult.length) {

			const selection = countResult
				.split(' ')
				.filter((symbol) => isFinite(symbol) === false);

				const operand = countResult
				.split(' ')
				.filter((symbol) => isFinite(symbol) === true)
				.map((number) => Number(number));

				selection.forEach((select) => {
				if (select === '-') {
					const result = operand[0] - operand[1];
					operand.splice(0, 2, result);
				} else {
					const result = operand[0] + operand[1];
					operand.splice(0, 2, result);
				}
			});

			setIsResult(isResult ? false : !isResult);
			return operand[0];
		} else {
			setIsResult(isResult ? !isResult : false);
			return 0;
		}
	};

	const addDigit = (event) => {
		const li = event.target.closest('li');

		if (li) {
			setIsResult(isResult ? !isResult : false);
			setValue((updatedValue) =>
				updatedValue === 0 ? li.textContent : (updatedValue += li.textContent),
			);
		}
	}

	const doOperation = (event) => {
		const select = event.target.closest('li');
						if (select.textContent !== '=') {
							setIsResult(isResult ? !isResult : false);
							setValue(
								select.textContent === '-'
									? `${value} - `
									: select.textContent === '+'
									? `${value} + `
									: select.textContent === 'C'
									? 0
									: null,
							);
						} else if (select.textContent === '=') {
							setValue(() => countResult(value));
						}
	}

	return (
		<div className={styles.сontainer}>
			<div className={isResult ? styles.result : styles.screen}>{value}</div>
			<div className={styles.gridContainer}>
				<ul
					className={styles.numbers}
					onClick={(evt) => {addDigit(evt)}}
				>
					{NUMS.map((number) => (
						<li className={styles.li} key={number}>
							{number}
						</li>
					))}
				</ul>
				<ul
					className={styles.actions} //selection и в css
					onClick={(evt) => {doOperation(evt)}}
				>
					<li className={styles.li} key="operator">
						-
					</li>
					<li className={styles.li} key="operator">
						+
					</li>
					<li className={styles.li} key="operator">
						=
					</li>
					<li className={styles.li} key="operator">
						C
					</li>
				</ul>
			</div>
		</div>
	);
};
