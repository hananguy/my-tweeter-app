import {AddTweet} from "../components/AddTweet";
import {ListTweet} from "../components/ListTweet";
import UserLogin from '../components/UserLogin'
import { ProtectedRoute } from "../auth/ProtectedRoute";


export default function Profile()
{



    return(
    <ProtectedRoute>
        <UserLogin/>
    </ProtectedRoute>)
}