import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../actions/authActions';
import ReactHighcharts from 'react-highcharts';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

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
            }
        
        }
    };
    
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
            <div className="container" style= {{paddingTop: "20px"}}>
                <Card style={{width: "50%", height: "25%"}}>
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
                </Card>s
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