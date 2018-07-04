

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  MenuItem,
  DropdownButton,
  Panel, PageHeader, ListGroup, ListGroupItem, Button,
} from 'react-bootstrap';


import s from './Home.css';
import StatWidget from '../../components/Widget';
import Donut from '../../components/Donut';

import {
  Tooltip,
  XAxis, YAxis, Area,
  CartesianGrid, AreaChart, Bar, BarChart,
  ResponsiveContainer } from '../../vendor/recharts';

const title = 'Hackathon Portal';

var dashdata = 	[
  { 
    "item": "226" 
  },
  { 
    "item": "1372" 
  },
  { 
    "item": "360"
  },
  { 
    "item": "NT-IT"
  }
];

var dashrows = dashdata.map(function(row){
  return <h6>
      {row.item}
    </h6>
  });




const data = [
      { name: 'December', Speedathon: 40, Hackathon: 24, Makerthon: 24, value: 145 },
      { name: 'January', Speedathon: 30, Hackathon: 13, Makerthon: 22, value: 444 },
      { name: 'February', Speedathon: 20, Hackathon: 58, Makerthon: 22, value: 754 },
      { name: 'March', Speedathon: 27, Hackathon: 39, Makerthon: 20, value: 654 },
      { name: 'April', Speedathon: 18, Hackathon: 48, aMakerthonmt: 21, value: 385 },
      { name: 'May', Speedathon: 23, Hackathon: 38, Makerthon: 25, value: 785 },
      { name: 'June', Speedathon: 34, Hackathon: 43, Makerthon: 21, value: 255 },
];

const dataDonut= [
  { name: 'N&T IT', value: 145 },
  { name: 'Wireless',value: 444 },
  { name: 'Wireline', value: 754 },
  { name: 'CMD', value: 654 },
  { name: 'CFO', value: 385 },
  { name: 'VES', value: 785 },
  { name: 'CAO', value: 255 },
];

var rankdata = 	[
  { 
    "name": "Kamesh", 
    "rank" : "1", 
    "badge": "Pro - Dev" 
  },
  { 
    "name": "Somnath", 
    "rank" : "2", 
    "badge": "Pro - Dev" 
  },
  { 
    "name": "Ram govind", 
    "rank" : "3", 
    "badge": "Pro - Dev" 
  },
  { 
    "name": "Narendra modi", 
    "rank" : "4", 
    "badge": "Pro - Dev" 
  },
  { 
    "name": "Pawan Kalyan", 
    "rank" : "5", 
    "badge": "Pro - Dev" 
  }	
];

var rankdatateam = 	[
  { 
    "name": "No Reactions", 
    "rank" : "1", 
    "badge": "Pro - Team" 
  },
  { 
    "name": "A Team has no name", 
    "rank" : "2", 
    "badge": "Pro - Team" 
  },
  { 
    "name": "Different Reactions", 
    "rank" : "3", 
    "badge": "Pro - Team" 
  },
  { 
    "name": "Code Kings", 
    "rank" : "4", 
    "badge": "Pro - Team" 
  },
  { 
    "name": "Coding Traingle", 
    "rank" : "4", 
    "badge": "Pro - Team" 
  }	
];

var rankrows = rankdata.map(function(row){
  return <tr>
      <td >{row.rank}</td>
      <td >{row.name}</td>
      <td >{row.badge}</td>
    </tr>
  });

  var rankrowsTEam = rankdatateam.map(function(row){
    return <tr>
        <td >{row.rank}</td>
        <td >{row.name}</td>
        <td >{row.badge}</td>
      </tr>
    });

function Home(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>Dashboard</PageHeader>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3 col-md-6">
          <StatWidget
            style="panel-primary"
            icon="fa fa-support fa-5x"
            count="226"
            footerText="Total Hackathons"
            linkTo="/"
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <StatWidget
            style="panel-green"
            icon="fa fa-tasks fa-5x"
            count="1372"
            footerText="Total Teams"
            linkTo="/"
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <StatWidget
            style="panel-yellow"
            icon="fa fa-comments fa-5x"
            count="360"
            footerText="Total Solutions"
            linkTo="/"
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <StatWidget
            style="panel-red"
            icon="fa fa-tasks fa-5x"
            count="NT-IT"
            footerText="Best Org"
            linkTo="/"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8">
          <Panel
            header={<span>
              <i className="fa fa-bar-chart-o fa-fw" />Hackathons Conducted
              </span>}
          >
            <div>
              <ResponsiveContainer width="100%" aspect={2}>
                <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="Speedathon" fill="#238CD5" />
                  <Bar dataKey="Hackathon"  fill="#D44E31" />
                  <Bar type="monotone" dataKey="Makerthon" fill="#02A974" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Panel>
          <Panel
            header={<span>
              <i className="fa fa-bar-chart-o fa-fw" /> Rank Board
            </span>}
          >
          <div className="col-lg-12">
          <Panel header={<span>Top 5 Participants </span>} >
            <div style={{textAlign:'center'}} className="table-responsive table-bordered">
              <table className="table">
                <thead>
                  <tr>
                    <th style={{textAlign:'center'}} className="danger">Overall Rank </th>
                    <th style={{textAlign:'center'}} className="info">Participant Name </th>
                    <th style={{textAlign:'center'}} className="success"> Badge </th>
                  </tr> 
                </thead>
                <tbody>
               { rankrows}
                  
                </tbody>
              </table>
            </div>
          </Panel>
          <br/>
          <Panel header={<span>Top 5 Teams </span>} >
            <div style={{textAlign:'center'}} className="table-responsive table-bordered">
              <table className="table">
                <thead>
                  <tr>
                    <th style={{textAlign:'center'}} className="danger">Overall Rank </th>
                    <th style={{textAlign:'center'}} className="info">Team Name </th>
                    <th style={{textAlign:'center'}} className="success"> Badge </th>
                  </tr> 
                </thead>
                <tbody>
               { rankrowsTEam}
                  
                </tbody>
              </table>
            </div>
          </Panel>
        </div>

          </Panel>
          

        </div>

        <div className="col-lg-4">

          <Panel
            header={<span>
              <i className="fa fa-bell fa-fw" /> News Feed
            </span>}
          >
            <ListGroup>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-comment fa-fw  " /> Harry Uploaded new solution
                <span className="pull-right text-muted small"><em>4 minutes ago</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-tasks fa-fw" /> Upcoming Reactathon on 28th July
                <span className="pull-right text-muted small"><em>12 minutes ago</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-envelope fa-fw" /> Shantanu got a new badge
                <span className="pull-right text-muted small"><em>27 minutes ago</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-tasks fa-fw" /> Last date to register for Googlathon
                <span className="pull-right text-muted small"><em>43 minutes ago</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-comment fa-fw" /> Manish promoted to new Level
                <span className="pull-right text-muted small"><em>11:32 AM</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-bolt fa-fw" /> Sam commented on your solution
                <span className="pull-right text-muted small"><em>11:13 AM</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-shopping-cart fa-fw" /> Register for Speedathon 
                <span className="pull-right text-muted small"><em>9:49 AM</em></span>
              </ListGroupItem>
            </ListGroup>
          </Panel>

          <Panel
            header={<span>
              <i className="fa fa-bar-chart-o fa-fw" /> Participation By Org
            </span>}
          >
            <div>
              <Donut data={dataDonut} color="#D7A508" innerRadius="70%" outerRadius="90%" />
            </div>
          </Panel>

        </div>

      </div>
      
    </div>
  );
}

Home.propTypes = {
  // news: PropTypes.arrayOf(PropTypes.shape({
  //   title: PropTypes.string.isRequired,
  //   link: PropTypes.string.isRequired,
  //   contentSnippet: PropTypes.string,
  // })).isRequired,
};
Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
