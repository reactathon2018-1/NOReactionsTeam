
import React, { PropTypes } from 'react';
// import { Panel, Input, Button } from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import { FormControl, Checkbox } from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.css';
import history from '../../core/history';

const title = 'Log In';


function submitHandler(e) {
  e.preventDefault();
  history.push('/');
}

function Login(props, context) {
  context.setTitle(title);
  return (
    
    <div className="col-md-4 col-md-offset-4">
      <div className="text-center">
        <h1 className="login-brand-text"><b>Hackathon Portal</b></h1>
        <img src="/logo.jpg" alt="Start React" title="Start Hacking!" />
        
      </div>

      <Panel header={<h3>Login</h3>} className="login-panel">

        <form role="form" onSubmit={(e) => { submitHandler(e); }}>

          <fieldset>
            <div className="form-group">
              <FormControl
                type="text"
                className="form-control"
                placeholder="Username"
                name="name"
              />
            </div>

            <div className="form-group">
              <FormControl
                className="form-control"
                placeholder="Password"
                type="password"
                name="password"
              />
            </div>
            <Checkbox label="Remember Me" > Remember Me </Checkbox>
            <Button type="submit" bsSize="large" bsStyle="success" block>Start Hacking!</Button>
          </fieldset>
        </form>

      </Panel>
<br/>
<span> 
<Button  style={{width:'80px'}} type="submit" bsSize="medium" bsStyle="error" >Sign Up!</Button>
<h4 style={{textAlign:'right'}} className="text-muted">Created by <a href="#"><u>No Reactions!</u></a> team</h4>
</span>    </div>

  );
}


Login.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Login);
