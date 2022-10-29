import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
           <div class="row">
                <div class="col-xxl-11 col-xl-11 col-lg-11 col-md-11 col-sm-11 ps-2">
                    <div class="input-group">
                        <div class="input-group-text wd-rounded-buttons wd-search-bar-color">
                            <span><i class="fa-solid fa-magnifying-glass"
                                     style="color: darkgray"></i></span>
                        </div>
                        <input type="text"
                               class="form-control wd-rounded-buttons wd-search-bar-color"
                               placeholder="Search Tuiter" id="twitterSearch">
                    </div>
                </div>
                <div class="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 pe-2">
                    <i class="fa-regular fa-cog fa-2x position-relative wd-foreground-text"
                       style="top: 3px;"></i>
                </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active wd-nav-item" href="for-you.html">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link wd-nav-item" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link wd-nav-item" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link wd-nav-item" href="sports.html">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link wd-nav-item" href="entertainment.html">Entertainment</a>
                </li>
           </ul>
           <!-- image with overlaid text -->
           <div class="row">
                <img src="../../images/Starship.webp" alt="..." class="img-fluid wd-image-borders col px-0 ">
            </div>
            <span class="position-relative wd-overlay-name" style="color: white; font-weight: bold">
            SpaceX Starship</span>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
