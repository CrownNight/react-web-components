import React, { Fragment } from "react";
import { Input, Button } from "antd";

/**
 * 搜索
 * @visibleName 搜索
 */
export default class CustomSearch extends React.Component {
    constructor() {
        super();
        this.state = {
            visible: false,
            value:""
        }
    }

    handleChange() {
        this.setState({ visible: !this.state.visible })
    }

    ValueChange(e){
        this.setState({value:e.target.value});
        this.props.callBack&&this.props.callBack(e.target.value)
    }

    render() {
        const { visible ,value} = this.state;
        return <Fragment>
                {
                    !visible ?
                        <Button onClick={this.handleChange.bind(this)}>查询</Button>
                        : <Input onChange={this.ValueChange.bind(this)} value={value}/>
                }
            </Fragment>
        
    }
}