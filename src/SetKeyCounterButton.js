import React, {useState, useEffect} from 'react';
import { Button } from '@material-ui/core';
import countapi from 'countapi-js';

export default function SetKeyCounterButton() {
	const setKey = '1ccb732e-b55a-4404-ad3f-0f99c02fe44e';
	const [count, setCount] = useState('');

	useEffect(() => {
		countapi.hit(setKey).then(result => setCount(result.value));
	}, []);
	
	return (
		<Button 
          color="primary" 
          variant="outlined"
          onClick={() => {
            countapi.hit(setKey).then(result => setCount(result.value));
          }}
        >
          The count on this button is {count}
        </Button>
	);
}