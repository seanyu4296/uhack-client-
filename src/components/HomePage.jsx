import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../actions/authActions';
import ReactHighcharts from 'react-highcharts';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';

var $ = require('jquery');

BigCalendar.momentLocalizer(moment);

class HomePage extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            config : {
                chart : {
                        defaultSeriesType : "line"
                    },
                title : {
                    text : "SAMPLE CHART"
                },
                xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                },
                series: [{
                    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
                }]
            },
            events :[
                {
                    'title': 'Sean Yu',
                    'start':new Date(2015, 3, 12, 12, 0, 0, 0),
                    'end': new Date(2015, 3, 12, 13, 0, 0, 0),
                    desc: 'Power lunch'
                },
                {
                    'title': 'Brian Tan',
                    'start':new Date(2015, 3, 12, 13, 0, 0, 0),
                    'end': new Date(2015, 3, 12, 14, 0, 0, 0),
                    "desc": 'Power lunch'
                },
                
                ]        
        }
    };

    componentDidMount() {
        $(".rbc-calendar").css("height", "70vh");
        
    }
    
   /* componentWillMount() {
        this.checkAuth(this.props.loggedIn);
    }
    
    componentWillReceiveProps(nextProps) {
        this.checkAuth(this.props.loggedIn);
    }
    

    checkAuth(isLoggedIn) {
        if(!isLoggedIn) {
            this.context.router.replace('/login')z
        }
    }
    */
    render() {
        return (
            <div className="container" style= {{paddingTop: "20px", paddingBottom : "20px"}}>
                        
                <Card style={{width: "100%", height: "100%", marginBottom : "20px"}}>
                    <CardHeader title="Appointments" subtitle="" />
                    <CardMedia>
                        <BigCalendar
                            {...this.props}
                            events={this.state.events}
                            defaultDate={new Date(2015, 3, 1)}
                        />
                    </CardMedia>
                    <CardText>  
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                    <CardActions>
                        <FlatButton label="Action1" />
                        <FlatButton label="Action2" />
                    </CardActions>
                    
                </Card>
                <div style={{display:'flex', alignItems: 'flex-start'}}>
                <Card style={{flex: 1, marginRight: "20px"}}>
                    <CardHeader title="Line Chart" subtitle="Subtitle" avatar="" />
                    <CardMedia>
                        <ReactHighcharts config={this.state.config}></ReactHighcharts>
                    </CardMedia>
                    <CardTitle title="Card title" subtitle="Card subtitle" />
                    <CardText>  
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                    <CardActions>
                        <FlatButton label="Action1" />
                        <FlatButton label="Action2" />
                    </CardActions>
                    
                </Card>
                <Card style={{flex: 1}}>
                    <CardHeader title="Line Chart" subtitle="Subtitle" avatar="" />
                    <CardMedia>
                        <ReactHighcharts config={this.state.config}></ReactHighcharts>
                    </CardMedia>
                    <CardTitle title="Card title" subtitle="Card subtitle" />
                    <CardText>  
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                    <CardActions>
                        <FlatButton label="Action1" />
                        <FlatButton label="Action2" />
                    </CardActions>
                    
                </Card>
                </div>
            </div>
        );
    }
}

HomePage.contextTypes = {
    router: PropTypes.object
}

function mapStateToProps(state, ownProps) {
    return {
        loggedIn : state.loggedIn
    }
}

function mapDispatchToProps(dispatch) {
 
    return {
        actions: bindActionCreators(authActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);