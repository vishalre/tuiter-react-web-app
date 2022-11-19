import PostSummaryItem from "./PostSummaryItem";
import {useSelector} from "react-redux";

const PostSummaryList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    return (
        <div className="list-group wd-list-group">
            {
                tuits.map(post => {
                    return (
                        <PostSummaryItem
                            key={post._id}
                            post={post}
                        />
                    );
                })
            }
        </div>
    );
}

export default PostSummaryList;