import React from 'react';

class RefsExample extends React.Component{

    render(){

        return(
            <React.Fragment>
                <div style={{marginTop:'20px', backgroundColor:"red", height:"20em"}} ref={this.props.mainWrapper}>
                </div>
                <div style={{marginTop:'20px', backgroundColor:"maroon", height:"20em"}} ref={this.props.midWrapper}>
                </div>
            </React.Fragment>
        )
    }
}

export default React.forwardRef((props, ref)=>(
    <RefsExample  {...props} mainWrapper={ref} />
));
