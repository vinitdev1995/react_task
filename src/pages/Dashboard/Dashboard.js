import React, { useEffect } from "react";
import { connect } from "react-redux";
import rootSaga from "../../redux/modules/orderDetails/orderDetailsSaga";
import { fetchOrderDetails } from "../../redux/modules/orderDetails/orderDetailsActions";

const Dashboard = ({ getOrderDetails }) => {
  useEffect(() => {
    getOrderDetails();
  }, []);

  return (
    <div>
      <span>hello</span>
    </div>
  );
};
const mapStateToProps = () => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    getOrderDetails: payload => dispatch(fetchOrderDetails(payload))
  };
};
// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

// const mapStateToProps = () => {
//   return {};
// };
// const mapDispatchToProps = () => {
//   return {
//     getOrderDetails: payload => dispatch(fetchOrderDetails(payload))
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
