import React, { Component } from "react";
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import axios from "axios";

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
        },
      },
    };
  }

  handleAddRange = () => {
    const key = `selection${Object.values(this.state.ranges).length + 1}`;

    this.setState(
      (prevState) => ({
        ...prevState,
        ranges: {
          ...prevState.ranges,
          [key]: {
            startDate: addDays(new Date(), 10),
            endDate: addDays(new Date(), 14),
            key,
          },
        },
      }),
      () => {
        // latest ranges will be here
        // call api
        this.sendRangesToApi();
      }
    );
  };

  sendRangesToApi = () => {
    // send all ranges to api here
    // ranges as an array
    const { ranges } = this.state;
    console.log(Object.values(ranges));
    // axios
    //   .post("url", { data: Object.values(ranges) })
    //   .then((res) => console.log(res.data));
  };

  handleRangeSelection = (item) => {
    this.setState();

    this.setState(
      (prevState) => ({
        ...this.state,
        ranges: {
          ...prevState.ranges,
          ...item,
        },
      }),
      () => {
        // latest ranges will be here
        // call api
        this.sendRangesToApi();
      }
    );
  };

  render() {
    const { ranges } = this.state;

    return (
      <>
        <div className=" m-4 " style={{ width: "200px" }}>
          <button onClick={this.handleAddRange}>Add</button>
        </div>
        <DateRangePicker
          onChange={this.handleRangeSelection}
          ranges={Object.values(ranges)}
        />
      </>
    );
  }
}
