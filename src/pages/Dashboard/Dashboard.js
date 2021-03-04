import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";
import { fetchOrderDetails } from "../../redux/modules/orderDetails/orderDetailsActions";
import "./Dashboard.scss";

const Dashboard = ({ getOrders }) => {
  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="dashboard">
      <Typography paragraph>Table</Typography>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    orders: state.orderDetails || []
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getOrders: payload => dispatch(fetchOrderDetails(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
