import React from 'react';

//components
import Header from './Header';
import ContestPreview from './ContestPreview';

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
				<Header message={this.state.pageHeader} />
				<div>
					{this.props.contests.map(contest => 
						<ContestPreview {...contest} />
					)}
				</div>
			</div>	
		)
	};
};

export default App;