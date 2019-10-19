import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux';
import {getPolls,getUserPolls} from '../store/actions';

class Polls extends Component {
    constructor(props){
        super(props);
        this.handleSelect=this.handleSelect.bind(this);
    }
    ComponentDidMount() {
       const {getPolls}=this.props;
       getPolls();
   } 
   handleSelect(id){
      const {getCurrentPoll} = this.props;
      getCurrentPoll(id);
   }
    render(){
        const {auth,getPolls,getUserPolls} = this.props;
        const polls= this.props.polls.map(poll => (<li onClick={()=>this.handleSelect(poll.id)} key={poll._id}>{poll.question}</li>))
        return <Fragment>
            {auth.isAuthenticated && 
             (<div>
                 <button onClick={getPolls}>All polls</button>
                 <button onClick={getUserPolls}>My polls</button>
             </div>)}
             <ul>
                 {polls}
             </ul>
        </Fragment>
    }
}

export default connect(store => ({
    auth:store.auth,
    polls:store.polls
}),
{getPolls,getUserPolls,getCurrentPoll}
)(Polls);