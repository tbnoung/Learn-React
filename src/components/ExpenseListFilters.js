import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount, setStartDate,setEndDate } from "../action/filters";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;

class ExpenseListFilters extends React.Component {
  state ={
    calenderFocused: null
  }
  onDateChange = (dates) =>{
    var startDate = dates[0]
    var endDate = dates[1]
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === "date") {
              this.props.dispatch(sortByDate());
            } else if (e.target.value === "amount") {
              this.props.dispatch(sortByAmount());
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <Space direction="vertical" size={12}>
          <RangePicker
            defaultValue={[
              this.props.filters.startDate,
              this.props.filters.startDate,
            ]}
            onChange={this.onDateChange}
          />
        </Space>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters);