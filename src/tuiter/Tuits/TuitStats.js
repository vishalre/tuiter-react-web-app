import {updateTuitThunk}
    from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = ({stats}) => {
    const dispatch = useDispatch();
    const likeClickHandler = () => {
        dispatch(updateTuitThunk({
                      ...stats,
                      likes: stats.likes + 1
                  }));
    }
    return (
        <div className="row mt-2 ms-5">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                <i className='fa fa-comment wd-gray-color'></i>
                <span className='ms-1 wd-gray-color'>{stats.replies}</span>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                <i className='fa fa-share-alt wd-gray-color'></i>
                <span className='ms-1 wd-gray-color'>{stats.retuits}</span>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                <i onClick={likeClickHandler}
                   className='fa fa-heart'
                   style={{"color": `${stats.liked === true ? "red" : "gray"}`}}></i>
                <span className='ms-1 wd-gray-color'>{stats.likes}</span>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                <i className='fa fa-download wd-gray-color'></i>
            </div>
        </div>
    );
}

export default TuitStats;