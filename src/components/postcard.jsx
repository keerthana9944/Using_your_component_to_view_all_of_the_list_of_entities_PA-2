import LikeButton from "./likebutton";

const PostCard = ({post}) => {
    return (
        <div style = {{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
        }}>

            <img src={post.profileImage} alt="Profile" style={{width: "50px", height:"50px", borderRadius:"50%"}}/>
            <div>
                <h4>{post.username}</h4>
                <p>{post.content}</p>
                <LikeButton isLiked={post.isLiked}/>
            </div>
        </div>
    );
};

export default PostCard;