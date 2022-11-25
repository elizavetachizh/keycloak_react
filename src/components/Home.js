import UserService from "../services/UserService";

export default function Home() {
  return (
    <div>
      Home{" "}
      <button
        className="btn btn-success navbar-btn navbar-right"
        style={{ marginRight: 0 }}
        onClick={() => UserService.doLogout()}
      >
        Logout
      </button>
    </div>
  );
}
