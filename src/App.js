import React, { useCallback, useState } from 'react'
import './App.css'
import Button from './components/UI/Button/Button'
import DemoOutput from './components/Demo/DemoOutput'

function App() {
	const [showParagaph, setShowParagaph] = useState(false)

	const toggleParagraphHandler = useCallback(() => {
		// setShowParagaph(!prevShowParagaph)
		setShowParagaph(prevShowParagaph => !prevShowParagaph)
	}, [])
	console.log('app re-excuted')

	return (
		<div className='App'>
			<h1>hello!</h1>
			<DemoOutput show={false} />
			<Button onClick={toggleParagraphHandler}>toggle</Button>
		</div>
	)
}

export default App
