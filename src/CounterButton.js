import React, {useState, useEffect} from 'react';
import { Button } from '@material-ui/core';
import countapi from 'countapi-js';
import {v4 as uuidv4} from 'uuid';

export default function CounterButton() {
	const [key, setKey] = useState('');
	const [count, setCount] = useState(0);

	useEffect(() => {
		const opts = {
			key: uuidv4(),
			value: 0,
			enable_reset: 1
		};
		async function createKey() {
			await countapi.create(opts).then((result) => setKey(result.key));
		}
		createKey();
	}, []);

	return (
		<Button 
          color="primary" 
          variant="outlined"
          onClick={() => {
            countapi.hit(key).then(result => setCount(result.value));
          }}
        >
          The count on this button is {count}
        </Button>
	);
}