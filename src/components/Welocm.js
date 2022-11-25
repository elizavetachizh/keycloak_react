import UserService from "../services/UserService";

export default function Welcome() {
  return (
    <div className="jumbotron">
      <h1>Hello {UserService.getFirstName()}</h1>
      <p className="lead">Please authenticate yourself!</p>
      <p>
        <button
          className="btn btn-lg btn-warning"
          onClick={() => UserService.doLogin()}
        >
          Login
        </button>
      </p>
    </div>
  );
}
