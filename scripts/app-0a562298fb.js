!function(){"use strict";angular.module("kevin",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","toastr","angularPrism"])}(),function(){"use strict";function e(){function e(){return a}var a=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Less",url:"http://lesscss.org/",description:"Less extends the CSS language, adding features that allow variables, mixins, functions and many other techniques.",logo:"less.png"}];this.getTec=e}angular.module("kevin").service("webDevTec",e)}(),function(){"use strict";function e(){function e(e){var a=this;a.relativeDate=e(a.creationDate).fromNow()}e.$inject=["moment"];var a={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return a}angular.module("kevin").directive("acmeNavbar",e)}(),function(){"use strict";function e(e){function a(a,i,t,s){var n,r=e(i[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});i.addClass("acme-malarkey"),angular.forEach(a.extraValues,function(e){r.type(e).pause()["delete"]()}),n=a.$watch("vm.contributors",function(){angular.forEach(s.contributors,function(e){r.type(e.login).pause()["delete"]()})}),a.$on("$destroy",function(){n()})}function i(e,a){function i(){return t().then(function(){e.info("Activated Contributors View")})}function t(){return a.getContributors(10).then(function(e){return s.contributors=e,s.contributors})}var s=this;s.contributors=[],i()}i.$inject=["$log","githubContributor"];var t={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:a,controller:i,controllerAs:"vm"};return t}e.$inject=["malarkey"],angular.module("kevin").directive("acmeMalarkey",e)}(),function(){"use strict";function e(e,a){function i(i){function s(e){return e.data}function n(a){e.error("XHR Failed for getContributors.\n"+angular.toJson(a.data,!0))}return i||(i=30),a.get(t+"/contributors?per_page="+i).then(s)["catch"](n)}var t="https://api.github.com/repos/Swiip/generator-gulp-angular",s={apiHost:t,getContributors:i};return s}e.$inject=["$log","$http"],angular.module("kevin").factory("githubContributor",e)}(),angular.module("kevin").controller("NotesController",["$state","$window",function(e,a){console.log("notes")}]),angular.module("kevin").controller("HomeController",["$state","$window",function(e,a){var i=this;console.log("home"),i.openSchonell=function(){console.log("open schonell"),a.open("http://admin.schonell.com.sg","_blank")}}]),function(){"use strict";function e(e,a,i,t,s){s.go("index.home")}e.$inject=["$window","$timeout","webDevTec","toastr","$state"],angular.module("kevin").controller("MainController",e)}(),function(){"use strict";function e(e,a,i){i.$state=a,e.debug("runBlock end")}e.$inject=["$log","$state","$rootScope"],angular.module("kevin").run(e)}(),function(){"use strict";function e(e,a,i){e.state("index",{url:"",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"vm"}).state("index.home",{url:"/home",templateUrl:"app/tpl/home.html",controller:"HomeController",controllerAs:"vm"}).state("index.notes",{url:"/notes",templateUrl:"app/tpl/notes.html",controller:"NotesController",controllerAs:"vm"}),a.otherwise("")}e.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],angular.module("kevin").config(e)}(),function(){"use strict";angular.module("kevin").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function e(e,a){e.debugEnabled(!0),a.allowHtml=!0,a.timeOut=3e3,a.positionClass="toast-top-right",a.preventDuplicates=!0,a.progressBar=!0}e.$inject=["$logProvider","toastrConfig"],angular.module("kevin").config(e)}(),angular.module("kevin").run(["$templateCache",function(e){e.put("app/main/main.html",'<nav class="navbar navbar-inverse navbar-fixed-top"><div class=container><div class=navbar-header><button type=button class="navbar-toggle collapsed" data-toggle=collapse data-target=#navbar aria-expanded=false aria-controls=navbar><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a class=navbar-brand>Personal page</a></div><div id=navbar class="collapse navbar-collapse"><ul class="nav navbar-nav"><li ui-sref-active=active><a ui-sref=index.home>Home</a></li><li ui-sref-active=active><a ui-sref=index.notes>Notes</a></li></ul></div><!--/.nav-collapse --></div></nav><div ui-view></div><footer class=footer><div class=container><p class=pull-right>&copy; 2016 Kevin Su ALL RIGHTS RESERVED</p></div></footer>'),e.put("app/tpl/home.html",'<div class=container><section><header><h1>HELLO<br>My name is <strong>Kevin Su</strong>. I am a Web Developer</h1></header><img src=assets/images/line.png class=line><div class=row><div class=col-md-6><!-- Career objective --><h2>Career objective</h2><p>Seeking a position in front-end development that allows me to use my self-motivated attitude and problem solving skills in order to deliver professional websites and ensure all customer needs are met.</p></div><div class="col-md-5 col-md-offset-1"><!-- Contact Me --><h2>Contact Me</h2><ul class=contact-list><li><a href=tel:+61423232153 class="btn btn-success"><i class="fa fa-phone fa-lg"></i> +61423232153</a></li><li><a href=mailto:kevin.suzc@gmail.com class="btn btn-danger"><i class="fa fa-envelope fa-lg"></i> kevin.suzc@gmail.com</a></li><li><a target=_blank href="https://www.linkedin.com/in/zichao-su-9b5a9abb?trk=nav_responsive_tab_profile_pic" class="btn btn-primary"><i class="fa fa-user fa-lg"></i> LinkedIn</a></li></ul></div></div><div class=row><div class=col-md-6><!-- Education --><h2>Education</h2><div class=media><div class=media-body><div><h4 class=media-heading>Master of IT<div class=pull-right>2014 - 2016</div></h4><h4 class=media-heading>University Sydney of Technology</h4></div></div></div><div class=media><div class=media-body><div><h4 class=media-heading>Bachelor of Engineering<div class=pull-right>2011 - 2014</div></h4><h4 class=media-heading>Guangzhou University</h4></div></div></div><!-- Employment --><h2>Employment</h2><div class=media><div class=media-body><div><h4 class=media-heading>Front-end Developer<div class=pull-right>Jun 2016 - Present</div></h4><h4>SK8 Tech Pty Ltd</h4><ul><li>Provided high standard of websites and customer service to customers.</li><li>Maintained and updated the website to ensure aesthetics and functionality.</li></ul><h4>Achievements:</h4><ul><li>Responsible for training new interns.</li><li>Developed efficient time management and multi-tasking skills through managing competing projects and tasks.</li><li>Used Angular to develop a administration platform by my own within schedule.</li></ul></div></div></div><hr><div class=media><div class=media-body><div><h4 class=media-heading>Front-end Developer Intern<div class=pull-right>May 2016 - Jun 2016</div></h4><h4>SK8 Tech Pty Ltd</h4><ul><li>Leaned practical knowledge of front-end development.</li><li>Studied AngularJS and RESTful.</li><li>Used Agile and MVC Methodologies while development.</li></ul><h4>Achievements:</h4><ul><li>Become a high responsibility team member.</li><li>Promoted to regular part-time employee after 1 month from intern position.</li></ul></div></div></div><hr><div class=media><div class=media-body><div><h4 class=media-heading>Volunteer<div class=pull-right>2011 - 2012</div></h4><h4>Guangzhou University</h4><ul><li>Involved in teaching basic computer skills to primary school students in developing region.</li></ul></div></div></div></div><div class="col-md-5 col-md-offset-1"><!-- main Skills --><h2>technical Skills</h2><div class=progress><div class=progress-bar role=progressbar aria-valuenow=60 aria-valuemin=0 aria-valuemax=100 style="width: 100%">HTML</div></div><div class=progress><div class=progress-bar role=progressbar aria-valuenow=60 aria-valuemin=0 aria-valuemax=100 style="width: 100%">CSS</div></div><div class=progress><div class=progress-bar role=progressbar aria-valuenow=60 aria-valuemin=0 aria-valuemax=100 style="width: 100%">JavaScript</div></div><div class=progress><div class=progress-bar role=progressbar aria-valuenow=60 aria-valuemin=0 aria-valuemax=100 style="width: 100%">bootstrap</div></div><div class=progress><div class=progress-bar role=progressbar aria-valuenow=60 aria-valuemin=0 aria-valuemax=100 style="width: 100%">JQuery</div></div><div class=progress><div class=progress-bar role=progressbar aria-valuenow=60 aria-valuemin=0 aria-valuemax=100 style="width: 100%">Angular.js</div></div><!-- used tools --><h2>used tools</h2><div class=row><div class=col-xs-3><img src=assets/images/npm.jpg alt=""></div><div class=col-xs-3><img src=assets/images/gulp-logo.jpg alt=""></div><div class=col-xs-3><img src=assets/images/yeoman.jpg alt=""></div><div class=col-xs-3><img src=assets/images/maxresdefault.jpg alt=""></div></div><div class=row><div class=col-xs-3><img src=assets/images/gitHub.jpg alt=""></div></div><!-- services --><h2>Services</h2><div class="alert alert-success" role=alert>HTML/CSS Web Design</div><div class="alert alert-success" role=alert>Front-end Development</div><div class="alert alert-success" role=alert>Website Maintenance</div><!-- Recent Projects --><h2>Recent Projects</h2><p>Available upon request</p></div></div></section></div>'),e.put("app/tpl/notes.html","<pre><code class=language-css>p { color: red }</code></pre>"),e.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class=container-fluid><div class=navbar-header><a class=navbar-brand href=https://github.com/Swiip/generator-gulp-angular><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id=bs-example-navbar-collapse-6><ul class="nav navbar-nav"><li class=active><a ng-href=#>Home</a></li><li><a ng-href=#>About</a></li><li><a ng-href=#>Contact</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-0a562298fb.js.map
