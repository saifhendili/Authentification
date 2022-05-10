import React,{Fragment} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../Layout/Spinner';
import Pricing from '../Pricing/Pricing';
import LandingPage from '../Layout/LandingPage';


function Dashboard({auth:{user,loading}}) {
  return loading || user === null ? (
    <Spinner />
  ) : (
    <Fragment>
       {
       user.typeuser =="User" ?<Pricing/>:null
        }
        </Fragment>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,

}
const mapStateToProps = (state) => ({
  auth: state.auth,
  
});

export default connect(mapStateToProps, {})(Dashboard);


