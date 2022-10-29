import PostItem from "./PostItem.js";
import posts from "./postitems.js";

const PostList = () => {
    return (
        `
    <div class="list-group wd-post-list-group">
        ${posts.map(p => {
            return PostItem(p);
        }).join('')
        }
    </div>
    `
    );
}

export default PostList;
