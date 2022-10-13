import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./post.js";

const PostSummaryList = () => {
    return(`
    <div class="list-group wd-list-group">               
                ${
        posts.map(p=>{
            return PostSummaryItem(p);
        }).join('')
    }
    </div>
    `);
}

export default PostSummaryList;