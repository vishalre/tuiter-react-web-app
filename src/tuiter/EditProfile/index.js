import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

const EditProfile = () => {
    const profile = useSelector(
        state => state.profile);
    let [initProfile, setProfile]
        = useState(profile);
    const dispatch = useDispatch();
    const saveClickHandler = () => {
        dispatch({type: 'modify-profile',
                     profile:initProfile
                 });
    }
    return (<>
            <div className="row">
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <Link to="/tuiter/profile"><IconButton children={<CloseIcon/>} style={{"color": "black"}}/></Link>
                </div>
                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8">
                    <span className="wd-font-color mt-2" style={{"fontSize":"1.5rem", "font-family":"bold"}}>Edit Profile</span>
                </div>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 mt-1">
                    <Link to="/tuiter/profile"><div className="btn wd-rounded-buttons" style={{"background":"black", "color":"white"}} onClick={()=>{saveClickHandler();}}>Save</div></Link>
                </div>
            </div>
            <div className="row mt-1">
                <img src="../../images/spidermancover.jpg" className="img-fluid" alt="..." width="100%" height="200px" />
            </div>
            <img src="../../images/Starship.webp" alt="..." className="wd-rounded-images position-relative" height="100px" width="100px" style={{"bottom":"1rem"}}/>
            <form>
                <div className="form-group">
                    <label for="name" className="wd-gray-color">First Name</label>
                    <input type="text" id="name" onChange={(event)=>{setProfile({...initProfile, firstName : event.target.value})}}
                           style={{"background":"white","color":"black","width":"100%","border":"1px solid gray"}}
                           value={`${initProfile.firstName}`} className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="name" className="wd-gray-color">Last Name</label>
                    <input type="text" id="name" onChange={(event) => {
                        setProfile({...initProfile, lastName: event.target.value})
                    }}
                           style={{
                               "background": "white",
                               "color": "black",
                               "width": "100%",
                               "border": "1px solid gray"
                           }}
                           value={`${initProfile.lastName}`} className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="name" className="wd-gray-color">Bio</label>
                    <input type="text" id="name" onChange={(event) => {
                        setProfile({...initProfile, bio: event.target.value})
                    }}
                           style={{
                               "background": "white",
                               "color": "black",
                               "width": "100%",
                               "border": "1px solid gray"
                           }}
                           value={`${initProfile.bio}`} className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="name" className="wd-gray-color">Location</label>
                    <input type="text" id="name" onChange={(event) => {
                        setProfile({...initProfile, location: event.target.value})
                    }}
                           style={{
                               "background": "white",
                               "color": "black",
                               "width": "100%",
                               "border": "1px solid gray"
                           }}
                           value={`${initProfile.location}`} className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="name" className="wd-gray-color">Date of Birth</label>
                    <input type="date" id="name" onChange={(event) => {
                        setProfile({...initProfile, dateOfBirth: event.target.value})
                    }}
                           style={{
                               "background": "white",
                               "color": "black",
                               "width": "100%",
                               "border": "1px solid gray"
                           }}
                           value={new Date(initProfile.dateOfBirth).toISOString().split("T")[0]} className="form-control"/>
                </div>

            </form>
        </>
    );
}
export default EditProfile;