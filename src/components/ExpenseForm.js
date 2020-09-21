import React from 'react';
import moment from 'moment';
import { DatePicker, Space } from "antd";

// const date = new Date()
const now = moment()
console.log(now.format('MMM'));
export default class ExpenseForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      description: props.expense ? props.expense.description : "",
      amount: props.expense ? (props.expense.amount).toString() : "",
      note: props.expense ? props.expense.note : "",
      createdAt: props.expense ? moment(props.expense.createAt) : moment().format("YYYY/MM/DD"),
      calenderFocused: false,
      dateFormat: "YYYY-MM-DD",
      error: ''
    };
  }
  
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onChangeDate = (dates,dateStrings) => {
    console.log(dates)
    this.setState(() => ({ createdAt:dateStrings }));
  };
  onSubmit = (e) => {
    console.log('this.state',this.state);
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({error: 'please provide des and amount'}))
    } else {
      this.setState(() => ({error:''}))
      this.props.onSubmit({...this.state})
    }
  };
  render() {
    console.log('--->',this.props);
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
            autoFocus
          />
          <input
            type="number"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <br />
          <Space direction="vertical">
            <DatePicker
              onChange={this.onChangeDate}
              defaultValue={moment()}
              format={this.state.dateFormat}
            />
          </Space>
          <textarea
            placeholder="Add a note for your expense option"
            defaultValue={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>
          {this.props.expense ? (
            <button>Edit Expense</button>
          ) : (
            <button>Add Expense</button>
          )}
        </form>
      </div>
    );
  }
}