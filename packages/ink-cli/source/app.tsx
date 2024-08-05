import childProcess from 'node:child_process';
import {Box, Text, useApp, useInput} from 'ink';
import React, {useEffect, useState} from 'react';
import Spinner from 'ink-spinner';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';
import {TaskList, Task} from 'ink-task-list';
import spinners from 'cli-spinners';
import SelectInput from 'ink-select-input';
import Link from 'ink-link';

// import stripAnsi from 'strip-ansi';

type Props = {
	name: string | undefined;
};

const TASKS = 30;
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default function App({name = 'Stranger'}: Props) {
	console.log(name);
	return <Robot />;
	// return (
	// 	<Text>
	// 		Hello,{' '}
	// 		<Text color="green">
	// 			{name} 3 {packageInfo.version}
	// 		</Text>
	// 	</Text>
	// );
}

function Robot() {
	const {exit} = useApp();
	const [x, setX] = useState(1);
	const [y, setY] = useState(1);

	useInput((input, key) => {
		if (input === 'q') {
			exit();
		}

		if (key.leftArrow) {
			setX(Math.max(1, x - 1));
		}

		if (key.rightArrow) {
			setX(Math.min(20, x + 1));
		}

		if (key.upArrow) {
			setY(Math.max(1, y - 1));
		}

		if (key.downArrow) {
			setY(Math.min(10, y + 1));
		}
	});

	// useEffect(() => {
	// 	const subProcess = childProcess.spawn('sudo', [
	// 		'su',
	// 		// 'dev',
	// 		// 'examples/jest',
	// 	]);

	// 	// eslint-disable-next-line @typescript-eslint/ban-types
	// 	subProcess.stdout.on('data', (newOutput: Buffer) => {
	// 		const lines = newOutput.toString('utf8').split('\n');
	// 		console.log(lines.slice(-5).join('\n'));
	// 	});

	// 	console.log(process.cwd());
	// }, []);
	const [done, setDone] = useState(0);

	const text = 'Running ';

	// useEffect(() => {
	// 	const promises = Array.from({length: TASKS}, () => {
	// 		return delay(Math.floor(Math.random() * 1500)).then(() => {
	// 			setDone(prev => prev + 1);
	// 		});
	// 	});

	// 	Promise.all(promises)
	// 		.then(() => delay(50))
	// 		.then(() => process.exit(0)); // eslint-disable-line unicorn/no-process-exit
	// }, []);

	const handleSelect = item => {
		// `item` = { label: 'First', value: 'first' }
	};

	const items = [
		{
			label: 'First',
			value: 'first',
		},
		{
			label: 'Second',
			value: 'second',
		},
		{
			label: 'Third',
			value: 'third',
		},
	];

	return (
		<Box flexDirection="column">
			{/* <ProgressBar left={text.length} percent={done / TASKS} /> */}

			<Gradient name="rainbow">
				<BigText text="WELCOME" />
			</Gradient>

			<Link url="https://sindresorhus.com">
				My <Text color="cyan">Website</Text>
			</Link>
			<Text>
				<Text color="green">
					<Spinner type="dots" />
				</Text>
				{' Loading'}
			</Text>

			<SelectInput items={items} onSelect={handleSelect} />

			<TaskList>
				{/* Pending state */}
				<Task label="Pending" state="pending" />

				{/* Loading state */}
				<Task label="Loading" state="loading" spinner={spinners.dots} />

				{/* Success state */}
				<Task label="Success" state="success" />

				{/* Warning state */}
				<Task label="Warning" state="warning" />

				{/* Error state */}
				<Task label="Error" state="error" />

				{/* Item with children */}
				<Task label="Item with children" isExpanded>
					<Task label="Loading" state="loading" spinner={spinners.dots} />
				</Task>
			</TaskList>

			<Text>Use arrow keys to move the face. Press “q” to exit.</Text>
			<Box height={12} paddingLeft={x} paddingTop={y}>
				<Text>^_^</Text>
			</Box>
		</Box>
	);
}
