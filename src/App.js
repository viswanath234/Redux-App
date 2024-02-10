import "./App.css";
import AddPostsForm from "./features/posts/AddPostsForm";
import PostList from "./features/posts/PostList";

function App() {
  return (
    <main>
      <AddPostsForm />
      <PostList />
    </main>
  );
}

export default App;
