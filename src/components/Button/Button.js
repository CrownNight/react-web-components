import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

/**
 * 按钮
 * @visibleName Button
 * @param {object} props the react props
 */
export default function CoustomButton(props) {
  function _click() {
    props.click && props.click();
  }

  function throttle(fn, delay) {
    let last = new Date().valueOf();
    return (...args) => {
      let now = new Date().valueOf();
      if (now - last >= delay) {
        fn.apply(this, ...args);
        last = now;
      }
    };
  }

  const { name } = props;
  return <Button onClick={throttle(_click, 3000)}>{name}</Button>;
}

CoustomButton.propTypes = {
  /**
   * 名称
   */
  name: PropTypes.string || PropTypes.element,
  /**
   * 点击事件
   */
  click: PropTypes.func,
};
CoustomButton.defaultProps = {
  name: '测试',
  click: undefined,
};
