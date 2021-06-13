import React from "react";
import { connect } from "react-redux";
import CommentBox from "Compnents/ComentBox";
import CommentList from "Compnents/CommentList";
import { Route, Link, Switch } from "react-router-dom";
import * as action from "actions";
import { PrivateRoute, PublicRoute } from "routes/index";

const App = (props) => {
  const renderButton = () => {
    if (props.auth) {
      return (
        <button
          onClick={() => {
            props.ChangeAuth(false);
          }}
        >
          Sign Out{" "}
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            props.ChangeAuth(true);
          }}
        >
          Sign In{" "}
        </button>
      );
    }
  };
  const renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a comment</Link>
        </li>
        <li>
          <Link to="/list">Listing</Link>
        </li>
        <li>{renderButton()}</li>
      </ul>
    );
  };
  return (
    <div>
      {renderHeader()}
      {/* <Route path='/post' component={CommentBox}/> */}
      <Switch>
        <PublicRoute path="/" exact component={CommentList} />
        <PrivateRoute
          exact
          path="/post"
          component={CommentBox}
          isAuthenticated={props.auth}
          // roles={roles}
        />
        <PrivateRoute
          exact
          path="/list"
          component={CommentList}
          isAuthenticated={props.auth}
          // roles={roles}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, action)(App);
