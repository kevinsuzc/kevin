!function(){"use strict";angular.module("kevin",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","toastr"])}(),function(){"use strict";function a(){function a(){return e}var e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Less",url:"http://lesscss.org/",description:"Less extends the CSS language, adding features that allow variables, mixins, functions and many other techniques.",logo:"less.png"}];this.getTec=a}angular.module("kevin").service("webDevTec",a)}(),function(){"use strict";function a(){function a(a){var e=this;e.relativeDate=a(e.creationDate).fromNow()}a.$inject=["moment"];var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:a,controllerAs:"vm",bindToController:!0};return e}angular.module("kevin").directive("acmeNavbar",a)}(),function(){"use strict";function a(a){function e(e,t,n,i){var r,s=a(t[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});t.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(a){s.type(a).pause()["delete"]()}),r=e.$watch("vm.contributors",function(){angular.forEach(i.contributors,function(a){s.type(a.login).pause()["delete"]()})}),e.$on("$destroy",function(){r()})}function t(a,e){function t(){return n().then(function(){a.info("Activated Contributors View")})}function n(){return e.getContributors(10).then(function(a){return i.contributors=a,i.contributors})}var i=this;i.contributors=[],t()}t.$inject=["$log","githubContributor"];var n={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:t,controllerAs:"vm"};return n}a.$inject=["malarkey"],angular.module("kevin").directive("acmeMalarkey",a)}(),function(){"use strict";function a(a,e){function t(t){function i(a){return a.data}function r(e){a.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))}return t||(t=30),e.get(n+"/contributors?per_page="+t).then(i)["catch"](r)}var n="https://api.github.com/repos/Swiip/generator-gulp-angular",i={apiHost:n,getContributors:t};return i}a.$inject=["$log","$http"],angular.module("kevin").factory("githubContributor",a)}(),function(){"use strict";function a(a,e,t,n){var i=this;console.log("home"),i.openSchonell=function(){console.log("open schonell"),a.open("http://admin.schonell.com.sg","_blank")}}a.$inject=["$window","$timeout","webDevTec","toastr"],angular.module("kevin").controller("MainController",a)}(),angular.module("kevin").controller("homeController",["$state",function(a){}]),function(){"use strict";function a(a){a.debug("runBlock end")}a.$inject=["$log"],angular.module("kevin").run(a)}(),function(){"use strict";function a(a,e,t){a.state("index",{url:"",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"vm"}).state("index.home",{url:"/home",templateUrl:"app/tpl/home.html"}),e.otherwise("/#/home")}a.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],angular.module("kevin").config(a)}(),function(){"use strict";angular.module("kevin").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function a(a,e){a.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}a.$inject=["$logProvider","toastrConfig"],angular.module("kevin").config(a)}(),angular.module("kevin").run(["$templateCache",function(a){a.put("app/main/main.html",'<nav class="navbar navbar-inverse navbar-fixed-top"><div class=container><div class=navbar-header><button type=button class="navbar-toggle collapsed" data-toggle=collapse data-target=#navbar aria-expanded=false aria-controls=navbar><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a class=navbar-brand href=#>Personal page</a></div><div id=navbar class="collapse navbar-collapse"><ul class="nav navbar-nav"><li class=active><a href=#>Home</a></li></ul></div><!--/.nav-collapse --></div></nav><div ui-view></div><footer><div class=container><p>Copyright &copy; 2016</p></div></footer>'),a.put("app/tpl/home.html",'<div class=container ng-controller="homeController as vm"><section><div class=img align=center><img src=assets/images/person.png alt=person class=profile-img></div><header><h1>HELLO<br>My name is <strong>Kevin Su</strong> and I am a Web Developer</h1></header><img src=assets/images/line.png class=line><div class=row><div class=col-md-7><h2>About Me</h2><p>Hi there, I am an IT student of UTS and a web developer mainly focus on angular. As an employee, I am self motivated and have the can-do attitude to complete tasks.</p></div><div class=col-md-5><h2>Contact Me</h2><ul class=contact-list><li><img src=assets/images/phone.png>0423 232 153</li><li><img src=assets/images/email.png>szc769104@gmail.com</li><li><img src=assets/images/facebook.png>facebook</li></ul></div></div><div class=row><div class=col-md-7><h2>Education & Experience</h2><div class=media><div class=media-body><h4 class=media-heading><strong>Guangzhou University</strong> 2011 - 2014</h4><p>Studied bachelor in engineering and was a part of the student council.</p></div></div><div class=media><div class=media-body><h4 class=media-heading><strong>University Sydney of Technology</strong> 2014 - 2016</h4><p>studied master of IT, majoring in software development and front-end development</p></div></div><div class=media><div class=media-body><h4 class=media-heading><strong>SK8 Tech</strong> 2016.05.02 - 2016.06.12</h4><p>Intern in SK8 Tech company involved in front-end development.</p></div></div><div class=media><div class=media-body><h4 class=media-heading><strong>SK8 Tech</strong> 2016.06.12 - NOW</h4><p>Working part-time in SK8 Tech company involved in front-end development.</p></div></div></div><div class=col-md-5><h2>main Skills</h2><div class=progress><div class=progress-bar role=progressbar aria-valuenow=60 aria-valuemin=0 aria-valuemax=100 style="width: 100%">HTML</div></div><div class=progress><div class=progress-bar role=progressbar aria-valuenow=60 aria-valuemin=0 aria-valuemax=100 style="width: 100%">CSS</div></div><div class=progress><div class=progress-bar role=progressbar aria-valuenow=60 aria-valuemin=0 aria-valuemax=100 style="width: 100%">JavaScript</div></div><div class=progress><div class=progress-bar role=progressbar aria-valuenow=60 aria-valuemin=0 aria-valuemax=100 style="width: 100%">bootstrap</div></div><div class=progress><div class=progress-bar role=progressbar aria-valuenow=60 aria-valuemin=0 aria-valuemax=100 style="width: 100%">JQuery</div></div><div class=progress><div class=progress-bar role=progressbar aria-valuenow=60 aria-valuemin=0 aria-valuemax=100 style="width: 100%">Angular.js</div></div><h2>Other relevant Skills</h2><div class=row><div class=col-xs-3><img src=assets/images/npm.jpg alt=""></div><div class=col-xs-3><img src=assets/images/gulp-logo.jpg alt=""></div><div class=col-xs-3><img src=assets/images/yeoman.jpg alt=""></div><div class=col-xs-3><img src=assets/images/maxresdefault.jpg alt=""></div></div></div></div><div class=row><div class=col-md-7><h2>Services</h2><div class="alert alert-success" role=alert>HTML/CSS Web Design</div><div class="alert alert-success" role=alert>Front-end development</div></div><div class=col-md-5><h2>Recent Projects</h2><div><div ng-click=vm.openSchonell()>Schonell Portal</div></div></div></div></section></div>'),a.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class=container-fluid><div class=navbar-header><a class=navbar-brand href=https://github.com/Swiip/generator-gulp-angular><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id=bs-example-navbar-collapse-6><ul class="nav navbar-nav"><li class=active><a ng-href=#>Home</a></li><li><a ng-href=#>About</a></li><li><a ng-href=#>Contact</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-f86565d5bc.js.map
