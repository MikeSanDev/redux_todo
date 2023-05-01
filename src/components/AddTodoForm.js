import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAsync } from '../redux/todoSlice';

const AddTodoForm = () => {
	const [value, setValue] = useState('');
	const [error, setError] = useState('');

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		if (value.trim() === '') {
			setError('Please enter a todo.');
			return;
		}
		dispatch(
			addTodoAsync({
				title: value,
			})
		);
		setValue(''); // reset the value state to an empty string
		setError('');
	};

	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			<label className='sr-only'>Name</label>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add todo...'
				value={value}
				onChange={(event) => {
					setValue(event.target.value);
					setError('');
				}}
			></input>

			<button type='submit' className='btn btn-primary mb-2'>
				Submit
			</button>
			{error && <div className='text-danger'>{error}</div>}
		</form>
	);
};

export default AddTodoForm;
