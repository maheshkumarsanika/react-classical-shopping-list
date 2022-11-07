import React, { Component } from "react";
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";

export default class DateRange extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ranges: {
        selection1: {
          startDate: addDays(new Date(), 1),
          endDate: addDays(new Date(), 4),
          key: "selection1",
        },
        selection2: {
          startDate: addDays(new Date(), 4),
          endDate: addDays(new Date(), 8),
          key: "selection2",
        },
        selection3: {
          startDate: addDays(new Date(), 8),
          endDate: addDays(new Date(), 10),
          key: "selection3",
          autoFocus: false,
        },
      },
    };
  }

  handleAddRange = () => {
    const key = `selection_${Object.values(this.state.ranges).length + 1}`;

    this.setState((prevState) => ({
      ...prevState,
      ranges: {
        ...prevState.ranges,
        [key]: {
          startDate: addDays(new Date(), 10),
          endDate: addDays(new Date(), 14),
          key,
        },
      },
    }));
  };

  render() {
    const { ranges } = this.state;

    console.log(ranges);
    return (
      <>
        <div className=" m-4 " style={{ width: "200px" }}>
          <button onClick={this.handleAddRange}>Add</button>
        </div>
        <DateRangePicker
          onChange={(item) =>
            this.setState((prevState) => ({ ...this.state, ...item }))
          }
          ranges={Object.values(ranges)}
          //   rangeColors={this.state.ranges.map((r) => r.color)}
        />
      </>
    );
  }
}
