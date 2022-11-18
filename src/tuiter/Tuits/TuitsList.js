import TuitItem from "./TuitItem";
import React, {useEffect} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import {findTuitsThunk}
    from "../../services/tuits-thunks";

const TuitList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return (
        <div className="list-group wd-list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
        </div>
    );
}

export default TuitList;