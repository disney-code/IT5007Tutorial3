const initialIssues = [
	{
	  id: 1, owner: 'Ravan', number: 5,
	  created: new Date('2018-08-15'), 
	},
	{
	  id: 2, owner: 'Eddie', number: 14,
	  created: new Date('2018-08-16'), 
	},
	{
		id: 3, owner: 'Holly', number: 14,
		created: new Date('2018-08-16'), 
	      },
	      {
		id: 4, owner: 'Emily', number: 14,
		created: new Date('2018-08-16'), 
	      },
	      {
		id: 5, owner: 'Maryie', number: 14,
		created: new Date('2018-08-16'), 
	      },
	      {
		id: 6, owner: 'Poppy', number: 14,
		created: new Date('2018-08-16'), 
	      },
	      {
		id: 7, owner: 'Bernard', number: 14,
		created: new Date('2018-08-16'), 
	      },
	      {
		id: 8, owner: 'loo', number: 14,
		created: new Date('2018-08-16'), 
	      },
	      {
		id: 9, owner: 'Ljh', number: 14,
		created: new Date('2018-08-16'), 
	      },
	      {
		id: 10, owner: 'mnh', number: 14,
		created: new Date('2018-08-16'), 
	      },
	      {
		id: 11, owner: 'Rayan', number: 5,
		created: new Date('2018-08-15'), 
	      },
	      {
		id: 12, owner: 'hhEddie', number: 14,
		created: new Date('2018-08-16'), 
	      },
	      {
		      id: 13, owner: 'molly', number: 14,
		      created: new Date('2018-08-16'), 
		    },
		    {
		      id: 14, owner: 'llmily', number: 14,
		      created: new Date('2018-08-16'), 
		    },
		    {
		      id: 15, owner: 'kryie', number: 14,
		      created: new Date('2018-08-16'), 
		    },
		    {
		      id: 16, owner: 'Jeremy', number: 14,
		      created: new Date('2018-08-16'), 
		    },
		    {
		      id: 17, owner: 'Cornard', number: 14,
		      created: new Date('2018-08-16'), 
		    },
		    {
		      id: 18, owner: 'Ko', number: 14,
		      created: new Date('2018-08-16'), 
		    },
		    {
		      id: 19, owner: 'ken', number: 14,
		      created: new Date('2018-08-16'), 
		    },
		    {
		      id: 20, owner: 'tom', number: 14,
		      created: new Date('2018-08-16'), 
		    },
		    {
			id: 21, owner: 'Brnard', number: 14,
			created: new Date('2018-08-16'), 
		      },
		      {
			id: 22, owner: 'Popll', number: 14,
			created: new Date('2018-08-16'), 
		      },
		      {
			id: 23, owner: 'georger', number: 14,
			created: new Date('2018-08-16'), 
		      },
		      {
			id: 24, owner: 'vdg', number: 14,
			created: new Date('2018-08-16'), 
		      },
      ];

      
      class DisplayHomePage extends React.Component {
	render() {
	  return (
	    <div className="welcome">Welcome to Singapore Railway</div>
	  );
	}
      }
      
      class IssueRow extends React.Component {
	render() {
	  const issue = this.props.issue;
	  return (
	    <tr>
	      <td>{issue.id}</td>
	      <td>{issue.owner}</td>
	      <td>{issue.number}</td>
	      <td>{issue.created.toDateString()}</td>
	      
	     
	    </tr>
	  );
	}
      }
      
      class DisplayTraveller extends React.Component {
	render() {
	  const issueRows = this.props.issues.map(issue =>
	    <IssueRow key={issue.id} issue={issue} />
	  );
      
	  return (
		  <div className="reservationList">
	    <table className="bordered-table">
	      <thead>
		<tr>
		  <th>ID</th>
		  <th>Owner</th>
		  <th>Number</th>
		  <th>Date</th>
		  
		</tr>
	      </thead>
	      <tbody>
		{issueRows}
	      </tbody>
	    </table>
	    </div>
	  );
	}
      }


      
      class AddTraveller extends React.Component {
	constructor() {
	  super();
	  this.handleSubmit = this.handleSubmit.bind(this);
	}
      
	handleSubmit(e) {
	  e.preventDefault();
	  const form = document.forms.issueAdd;
	  const issue = {
	    owner: form.owner.value, number: form.number.value, 
	  }
	  if (issue.owner && issue.number){
	  this.props.createIssue(issue);}
	  form.owner.value = ""; form.number.value = "";
	}
      
	render() {
	  return (
		<div className="enter">
	    <form name="issueAdd" onSubmit={this.handleSubmit}>
	      <input type="text" name="owner" placeholder="Name" />
	      <input type="number" name="number" placeholder="Phone Number" />
	      <button>Add</button>
	    </form>
	    </div>
	  );
	}
      }

      class DeleteTraveller extends React.Component {
	constructor() {
	  super();
	  this.handleSubmit = this.handleSubmit.bind(this);
	}
      
	handleSubmit(e) {
		
	  e.preventDefault();
	  const form = document.forms.issueRemove;
	  const issue = {
	    owner: form.owner.value, number: form.number.value, 
	  }
	  if (issue.owner && issue.number){
	  this.props.removeIssue(issue);}
	  form.owner.value = ""; form.number.value = "";
	}
      
	render() {
	  return (
		<div className="enter">
	    <form name="issueRemove" onSubmit={this.handleSubmit}>
	      <input type="text" name="owner" placeholder="Name" />
	      <input type="number" name="number" placeholder="Phone Number" />
	      <button>Delete</button>
	    </form>
	    </div>
	  );
	}
      }

      class DisplayFreeSeats extends React.Component{
	      render(){
		      const availseats=25-this.props.issues.length;
		      console.log('availseats:',availseats)
		      
		      return(<div id="seatsavail">Seats Available: {availseats}</div>);
	      }
      }

      class NavigationBar extends React.Component{
	      render(){
		      return(
			      <nav className="NavbarItems" style={{width:'100%'}}>
				      <ul className="nav-menu">
					      {
						      this.props.tabs.map(tab=>{
							      const active=(tab=== this.props.selected ? 'active':'');
							      return(
								      <li className='nav-item' key={tab}>
									      <a className={'nav-links'+active} onClick={()=> this.props.setSelected(tab)}>
										      {tab}
									      </a>

								      </li>

							      );
						      })
					      }
					      
					      
				      </ul>
				      {this.props.children}
			      </nav>
		      )
	      }
      }
      
      class Tab extends React.Component{
	      render(){
		      if (this.props.isSelected){
		      return(<div>
			      {this.props.children}
		      </div>

		      );}

		      return null;
	      }
      }

      class IssueList extends React.Component {
	constructor() {
	  super();
	  this.state = { issues: [] };
	  this.createIssue = this.createIssue.bind(this);
	  this.removeIssue = this.removeIssue.bind(this);
	  
	  this.state={
		  selected:'Homepage'
	  }
	}

	setSelected=(tab)=>{
		this.setState({selected:tab});
	}
      
	componentDidMount() {
	  this.loadData();
	}
      
	loadData() {
	  setTimeout(() => {
	    this.setState({ issues: initialIssues });
	  }, 500);
	}
      
	createIssue(issue) {
		if (this.state.issues.length<25){
	  issue.id = this.state.issues.length + 1;
	  issue.created = new Date();
	  const newIssueList = this.state.issues.slice();
	  newIssueList.push(issue);
	  this.setState({ issues: newIssueList });
	  console.log('inside Create issue')}
	}

	removeIssue(issue) {
		console.log('inside removeIssue')
		const newIssueList = this.state.issues.slice();
		console.log('here')
		console.log('newIssueList: ',newIssueList)
		console.log('after')
		const index= this.state.issues.findIndex((i)=> i.owner == issue.owner && i.number == issue.number);
		console.log('index: ',index)
		if (index>=0){
		newIssueList.splice(index,1)
		console.log('newIssueList after splice: ',newIssueList)
		this.setState({ issues: newIssueList });}
	      }

	

	render() {
	  return (
	    <React.Fragment>
	      <h1>Singapore High Speed Railway</h1>
	      <hr />
	      <NavigationBar tabs={['Homepage','Add Traveller','Delete Traveller','Display Traveller','Display Free Seats']} selected={this.state.selected} setSelected={this.setSelected}>
		
		<Tab isSelected={this.state.selected==='Homepage'}>
			<br></br>
		<DisplayHomePage />
		</Tab>
		<Tab isSelected={this.state.selected==='Add Traveller'}>
		<AddTraveller createIssue={this.createIssue} />
		</Tab>
		<Tab isSelected={this.state.selected==='Delete Traveller'}>
		<DeleteTraveller removeIssue={this.removeIssue} />
		</Tab>

		<Tab isSelected={this.state.selected==='Display Traveller'}>
		<DisplayTraveller issues={this.state.issues} />
		</Tab>

		<Tab isSelected={this.state.selected==='Display Free Seats'}>
		<DisplayFreeSeats issues={this.state.issues}/>
		{/* <div>hello</div> */}
		</Tab>

	      </NavigationBar>

	    </React.Fragment>
	  );
	}
      }
      
      const element = <IssueList />;
      
      ReactDOM.render(element, document.getElementById('contents'));