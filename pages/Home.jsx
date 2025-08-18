import {AddTweet} from "../components/AddTweet";
import {ListTweet} from "../components/ListTweet";
import { ProtectedRoute } from "../auth/ProtectedRoute";
import {useAuthContext} from '../auth/AuthProvider'

export default function Home() {

    const {activeUser} = useAuthContext(); 
  return (
    <ProtectedRoute>
    <div className="TweetsContainer">
      <AddTweet />
      <ListTweet />
    </div>
    </ProtectedRoute>
  );
}