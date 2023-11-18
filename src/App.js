import styles from './App.module.css';
import { useState } from 'react';

export const App = () => {
	const NUMS = [1, 2, 3, '-', 4, 5, 6, '+', 7, 8, 9, 'C', 0, '='];

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

	const addCeil = (event) => {
		if (event) {
			setIsResult(isResult ? !isResult : false);
			setValue((updatedValue) =>
				updatedValue === 0 ? event : (updatedValue += event),
			);
		}
	};

	const doTask = (event) => {
		const dataValue = event.target.dataset.value;

		if (isFinite(dataValue)) {
			addCeil(dataValue);
		} else if (!isFinite(dataValue)) {
			if (dataValue !== '=') {
				setIsResult(isResult ? !isResult : false);
				setValue(
					dataValue === '-'
						? `${value} - `
						: dataValue === '+'
						  ? `${value} + `
						  : dataValue === 'C'
						    ? 0
						    : false,
				);
			} else if (dataValue === '=') {
				setValue(() => countResult(value));
			}
		}
	};

	return (
		<div className={styles.сontainer}>
			<div className={isResult ? styles.result : styles.screen}>{value}</div>
			<div className={styles.gridContainer}>
				<ul
					className={styles.numbers}
					onClick={(eventClick) => {
						doTask(eventClick);
					}}
				>
					{NUMS.map((number) => (
						<li className={styles.li} key={number} data-value={number}>
							{number}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
