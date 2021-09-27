import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';
const Option = Select.Option;

/**
 * 通用下拉,支持首条下拉数据和最后一条下拉数据自定义
 * @visibleName CommonSelect
 * @param {object} props the props paramter
 */
export default function CommonSelect(props) {
  const {
    dataSource,
    isShowFirstCustomOption,
    isShowEndCustomOption,
    firstOptionName,
    firstOptionValue,
    endOptionName,
    endOptionValue,
    ...otherProps
  } = props;
  return (
    <Select {...otherProps}>
      {isShowFirstCustomOption && (
        <Option key={firstOptionValue} value={firstOptionValue}>
          {firstOptionName}
        </Option>
      )}
      {dataSource.map((item) => (
        <Option key={item.id} value={item.id}>
          {item.name}
        </Option>
      ))}
      {isShowEndCustomOption && (
        <Option key={endOptionValue} value={endOptionValue}>
          {endOptionName}
        </Option>
      )}
    </Select>
  );
}

CommonSelect.propTypes = {
  /**
   * 数据源，必须包含id和name字段
   */
  dataSource: PropTypes.array.isRequired,
  /**
   * 是否展示自定义第一条option数据
   */
  isShowFirstCustomOption: PropTypes.bool,
  /**
   * 是否展示自定义最后一条option数据
   */
  isShowEndCustomOption: PropTypes.bool,
  /**
   * 自定义第一条option数据的value值
   */
  firstOptionValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * 自定义第一条option数据的name值
   */
  firstOptionName: PropTypes.any,
  /**
   * 自定义最后一条option数据的value值
   */
  endOptionValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * 自定义最后一条option数据的name值
   */
  endOptionName: PropTypes.any,
};

CommonSelect.defaultProps = {
  dataSource: [],
  isShowEndCustomOption: false,
  isShowFirstCustomOption: false,
  firstOptionName: '',
  firstOptionValue: '',
  endOptionName: '',
  endOptionValue: '',
};
