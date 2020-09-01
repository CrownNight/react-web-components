```js
import { CustomButton } from '../../index';

function Demo() {

    function _click() {
        console.log("点击button");
    }

    return <CustomButton name="测试1" click={_click}/>
}
Demo();
```