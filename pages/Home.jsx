import AddTweet from "../components/AddTweet";
import ListTweet from "../components/ListTweet";



export default function Home() {
  return (
    <div className="TweetsContainer">
      <AddTweet />
      <ListTweet />
    </div>
  );
}