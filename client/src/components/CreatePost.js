import { useState } from 'react';
const CreatePost = ({ onCreate }) => {
  const [post, setPost] = useState({
    type: '',
    content: '',
  });
  const { title, body } = post;
  const onChange = (e) => setPost({ ...post, [e.target.name]: e.target.value });

  return (<form onSubmit={() => CreatePost(post)}>
    <h3>Create Post Component</h3>
    <div class="mx-auto w-25 p-3">
      <label for="username" class="form-label">Post Title</label>
      <input type="post" onChange={onChange} name="type" class="form-control" id="post" aria-describedby="emailHelp" />
    </div>
    <div class="mx-auto w-25 p-3">
      <label for="password" class="form-label">Post Content</label>
      <input type="password" onChange={onChange} name="content" class="form-control" id="password" />
    </div>
    <button type="submit" class="btn btn-primary ">Submit</button>
  </form>);
};


export default CreatePost;