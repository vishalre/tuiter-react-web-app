const NavigationSidebar = (active) => {
    return (`
   <div class="list-group">
    <a class="list-group-item" href="/">
        <i class="fab fa-twitter"></i>
    </a>
    <a class="list-group-item ${active === 'home' ? 'active' : ''} " href="../HomeScreen/index.html">
        <div class="row">
            <i class="fa-regular fa-home wd-font-color col-xxl-2 col-xl-2"></i>
            <div class="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1"
                 style="bottom: 3px">Home</div>
        </div>
    </a>
    <a class="list-group-item ${active === 'explore' ? 'active' : ''} "  href="../ExploreScreen/index.html">
       <div class="row">
            <i class="fa-solid fa-hashtag  wd-font-color col-xxl-2 col-xl-2"></i>
            <div class="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1  "
                 style="bottom: 3px;">Explore
            </div>
        </div>
    </a>
    <a class="list-group-item" href="/">
        <div class="row">
            <i class="fa fa-bell col-xxl-2 col-xl-2 wd-font-color"></i>
            <div class="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1"
                 style="bottom: 3px">Notifications</div>
        </div>
    </a>
    <a class="list-group-item" href="/">
        <div class="row">
            <i class="fa fa-envelope wd-font-color col-xxl-2 col-xl-2"></i>
            <div class="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1"
                 style="bottom: 3px">Messages
            </div>
        </div>
    </a>
    <a class="list-group-item" href="/">
        <div class="row">
            <i class="fa fa-bookmark wd-font-color col-xxl-2 col-xl-2"></i>
            <div class="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1"
                 style="bottom: 3px">Bookmarks
            </div>
        </div>
    </a>
    <a class="list-group-item" href="/">
        <div class="row">
            <i class="fa fa-rectangle-list wd-font-color col-xxl-2 col-xl-2"></i>
            <div class="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1"
                 style="bottom: 3px">Lists</div>
        </div>
    </a>
    <a class="list-group-item" href="/">
        <div class="row">
            <i class="fa fa-user wd-font-color col-xxl-2 col-xl-2"></i>
            <div class="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1"
                 style="bottom: 3px">Profile
            </div>
        </div>
    </a>
    <a class="list-group-item ps-1" href="/">
        <span class="fa-stack fa-1x">
            <i class="fa-regular fa-circle fa-stack-1x fa-inverse"></i>
            <i class="fa fa-ellipsis fa-stack-1x fa-inverse"></i>
        </span>
        <span class="position-absolute d-none d-xl-block"
          style="left: 40px; top: 11px">More</span>
    </a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}

export default NavigationSidebar;