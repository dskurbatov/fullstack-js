import React from 'react';

//components
import Header from './Header';

class App extends React.Component {
	state = {
		pageHeader: "Naming Contest!!!"
	}

	componentDidMount(){

	}

	componentWillUnmount(){

	}
	
	render() {
		return(
			<div className="App">
				<Header message={this.state.pageHeader}/>
				<div>----</div>
			</div>	
		)
	};
};

export default App;