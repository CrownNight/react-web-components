# 搜索
```jsx
import React ,{Fragment}from "react";
import {Search} from "../../index.js";

class Demo extends React.Component{
    constructor() {
        super();
        this.state = {
            value:""
        }
    }
    valueCallBack(value){
        this.setState({value})
    }
    render(){
        const {value} =this.state;
        return(
            <Fragment>
                <Search callBack={this.valueCallBack.bind(this)}/>
                <div>输入的值：{value}</div>
            </Fragment>
        )
    }
}
<Demo/>
```