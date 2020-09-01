
### 只传数据源
```jsx
import { CommonSelect } from '../../index';

function Demo() {

    return <CommonSelect dataSource={[{id:1, name: 1}, {id:2, name:2}]} defaultValue={1}/>
}
Demo();
```