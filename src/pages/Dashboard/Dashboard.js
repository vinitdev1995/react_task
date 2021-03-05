import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

// custom components
import TableReusable from "../../common/components/Table";
import ChartReusable from "../../common/components/Chart";
import Loader from "../../common/components/Loader";

// redux action
import { fetchOrderDetails } from "../../redux/modules/orderDetails/orderDetailsActions";

// styling
import "./Dashboard.scss";

const Dashboard = ({ getOrders, orders, ordersLoading }) => {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    getOrders();
  }, []);
  useEffect(() => {
    setOrder(orders);
  });

  return (
    <div className="dashboard">
      {ordersLoading && <Loader />}
      <TableReusable data={order} />
      <div className="container">
        <ChartReusable data={order} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    orders: (state && state.orderDetails.details) || [],
    ordersLoading:
      (state && state.orderDetails.fetchOrderDetailsLoading) || false
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getOrders: payload => dispatch(fetchOrderDetails(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
