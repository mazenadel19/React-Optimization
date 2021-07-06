import { useState } from 'react'
import './App.css'
import Button from './components/UI/Button/Button'

function App() {
	const [showParagaph, setShowParagaph] = useState(false)

	const toggleParagraphHandler = () => {
		// setShowParagaph(!prevShowParagaph)
		setShowParagaph(prevShowParagaph => !prevShowParagaph)
	}

	return (
		<div className='App'>
			<h1>hello!</h1>
			{showParagaph && <p>this is new</p>}
			{/* <p className={state ? 'hide' : ''}>another</p> */}
			<Button onClick={toggleParagraphHandler}>toggle</Button>
		</div>
	)
}

export default App
