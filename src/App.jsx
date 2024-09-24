import "./App.css"
import { useState } from "react"
import samosa from "./samosa.png"

const App = () => {
	const [count, setCount] = useState(0)
	const [multiplier, setMultiplier] = useState(1)

	const updateCount = () => {
		setCount(count + multiplier)
		const samosaImg = document.querySelector(".samosa")
		samosaImg.classList.add("pulse")
		setTimeout(() => {
			samosaImg.classList.remove("pulse")
		}, 300)
	}

	const buyDoubleStuffed = () => {
		if (count >= 10) {
			setMultiplier(multiplier * 2)
			setCount(count - 10)
		}
	}
	const buyPartyPack = () => {
		if (count >= 100) {
			setMultiplier(multiplier * 5)
			setCount(count - 100)
		}
	}
	const buyFullFeast = () => {
		if (count >= 1000) {
			setMultiplier(multiplier * 10)
			setCount(count - 1000)
		}
	}

	return (
		<div className="App">
			<div className="header">
				<h1>Samosa Selector</h1>
				<h2>Count: {count}</h2>
				<h3>Multiplier: {multiplier}</h3>
				<img
					className="samosa"
					src={samosa}
					alt="Samosa.png"
					onClick={updateCount}
				></img>
			</div>
			<div className="upgrade-container">
				<div className="container">
					<div className="upgrade">
						<h3>Double Stuffed ‼️</h3>
						<p>2x per click</p>
						<button onClick={buyDoubleStuffed}>10 samosas</button>
					</div>
				</div>
				<div className="container">
					<div className="upgrade">
						<h3>Party Pack 🥳</h3>
						<p>5x per click</p>
						<button onClick={buyPartyPack}>100 samosas</button>
					</div>
				</div>
				<div className="container">
					<div className="upgrade">
						<h3>Full Feast 😋</h3>
						<p>10x per click</p>
						<button onClick={buyFullFeast}>1000 samosas</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
