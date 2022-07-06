import { useState } from 'react';
import { fetchData } from '../main';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({ currentuser, onCreate }) => {
  const [post, setPost] = useState({
    posttitle: '',
    postcontent: '',
    createdby: ''
  });
  const { posttitle, postcontent, createdby } = post;
  const onChange = (e) => setPost({ ...post, [e.target.name]: e.target.value });


  return (<form>
    <h3>Create Post Component</h3>
    <div className="mx-auto w-25 p-3">
      <label htmlFor="username" className="form-label">Post Title</label>
      <input type="posttitle" onChange={onChange} name="posttitle" value={posttitle} className="form-control" id="posttitle" aria-describedby="emailHelp" />
    </div>
    <div className="mx-auto w-25 p-3">
      <label htmlFor="postcontent" className="form-label">Post Content</label>
      <input type="postcontent" onChange={onChange} name="postcontent" value={postcontent} className="form-control" id="postcontent" />
    </div>
    <div className="mx-auto w-25 p-3">
      <label htmlFor="createdby" className="form-label">Created By</label>
      <input type="createdby" onChange={onChange} name="createdby" value={currentuser} disabled className="form-control" id="createdby" />
    </div>
    <button type="submit" onClick={() => onCreate(post)} className="btn btn-primary ">Submit</button>
  </form>);
};


export default CreatePost;