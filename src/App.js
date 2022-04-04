import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
	const [data, setData] = useState({});

	const [location, setLocation] = useState("");

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=37b0716b0f1326c7b478239e6976fbd9`;

	const searchLocation = (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
			axios.get(url).then((response) => {
				setData(response.data);
				console.log(response.data);
			});
			setLocation("");
		}
	};

	return (
		<div className="App">
			<div className="container">
				<h1>Recherchez une ville</h1>
				<form action="">
					<input
						type="text"
						value={location}
						onChange={(event) => setLocation(event.target.value)}
						onKeyPress={searchLocation}
					/>
				</form>
				<div>
					{data.name ? <p>A {data.name},</p> : null }
				</div>
				<div>{data.main ? <p>il fait{data.main.temp} degree</p> : null}</div>
			</div>
		</div>
	);
}

export default App;
