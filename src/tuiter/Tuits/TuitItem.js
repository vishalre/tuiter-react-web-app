import parse from 'html-react-parser';
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";


const TuitItem = ({tuit}) =>{
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(
        <div className="list-group-item">
            <div className="row">
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <img src={tuit.image} alt="img" className="wd-rounded-images" width="50px" height="50px" />
                    <i className="bi bi-x-lg"
                       onClick={() => deleteTuitHandler(tuit._id)}></i>
                </div>
                <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 p-0" style={{marginLeft:"-30px"}}>
                    <span className="wd-font-color">{tuit.username}</span>
                    <i className="fa fa-circle-check ms-1"></i>
                    <span className="wd-gray-color ms-2">{tuit.handle}&nbsp;-&nbsp;{tuit.time}</span><br />
                    <span className="wd-font-color">{parse(`${tuit.content}` )}</span>
                </div>
            </div>
            <TuitStats
                stats ={tuit}
            />
        </div>
    );
}

export default TuitItem;