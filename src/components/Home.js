import { app } from "../firebase";
import { getAuth } from "firebase/auth";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const auth = getAuth(app);
  const { userid } = useParams();

  const handleLogout = () => {
    auth.signOut();
    navigate("/login");
  };

  if (!user) {
    return <Navigate to="/login" />;
  } else {
    return (
      <div>
        <h1>ホームページ</h1>
        <p>ユーザーそれぞれでurl変えないといけない</p>
        <button onClick={handleLogout}>ログアウト</button>
      </div>
    );
  }
};

export default Home;
