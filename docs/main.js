"use strict";
(self["webpackChunkmy_storybook"] = self["webpackChunkmy_storybook"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _view_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~view/home/home.component */ 4750);
/* harmony import */ var _view_stories_stories_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~view/stories/stories.component */ 6530);
/* harmony import */ var _view_achievements_achievements_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~view/achievements/achievements.component */ 4788);
/* harmony import */ var _view_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~view/introduction/introduction.component */ 7133);
/* harmony import */ var _components_stories_story_photos_story_photos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~components/stories/story-photos/story-photos.component */ 8350);
/* harmony import */ var _components_stories_story_videos_story_videos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~components/stories/story-videos/story-videos.component */ 7471);
/* harmony import */ var _components_achievements_achievement_photos_achievement_photos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~components/achievements/achievement-photos/achievement-photos.component */ 1411);
/* harmony import */ var _components_achievements_achievement_videos_achievement_videos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~components/achievements/achievement-videos/achievement-videos.component */ 3669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);











const routes = [
    { path: 'home', component: _view_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: 'introduction', component: _view_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_3__.IntroductionComponent },
    { path: 'stories', component: _view_stories_stories_component__WEBPACK_IMPORTED_MODULE_1__.StoriesComponent },
    { path: 'stories/photos', component: _components_stories_story_photos_story_photos_component__WEBPACK_IMPORTED_MODULE_4__.StoryPhotosComponent },
    { path: 'stories/videos', component: _components_stories_story_videos_story_videos_component__WEBPACK_IMPORTED_MODULE_5__.StoryVideosComponent },
    { path: 'achievements', component: _view_achievements_achievements_component__WEBPACK_IMPORTED_MODULE_2__.AchievementsComponent },
    { path: 'achievements/photos', component: _components_achievements_achievement_photos_achievement_photos_component__WEBPACK_IMPORTED_MODULE_6__.AchievementPhotosComponent },
    { path: 'achievements/videos', component: _components_achievements_achievement_videos_achievement_videos_component__WEBPACK_IMPORTED_MODULE_7__.AchievementVideosComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _components_icons_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~components/icons/icons.component */ 1992);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class AppComponent {
    constructor() {
        this.title = 'my-storybook';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "my-storybook-icons")(1, "router-outlet");
    } }, directives: [_components_icons_icons_component__WEBPACK_IMPORTED_MODULE_0__.IconsComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~pipes/safe.pipe */ 5436);
/* harmony import */ var _view_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~view/home/home.component */ 4750);
/* harmony import */ var _view_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~view/introduction/introduction.component */ 7133);
/* harmony import */ var _view_achievements_achievements_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~view/achievements/achievements.component */ 4788);
/* harmony import */ var _view_stories_stories_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~view/stories/stories.component */ 6530);
/* harmony import */ var _components_icons_icons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~components/icons/icons.component */ 1992);
/* harmony import */ var _components_achievements_achievement_photos_achievement_photos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~components/achievements/achievement-photos/achievement-photos.component */ 1411);
/* harmony import */ var _components_achievements_achievement_videos_achievement_videos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~components/achievements/achievement-videos/achievement-videos.component */ 3669);
/* harmony import */ var _components_stories_story_photos_story_photos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~components/stories/story-photos/story-photos.component */ 8350);
/* harmony import */ var _components_stories_story_videos_story_videos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~components/stories/story-videos/story-videos.component */ 7471);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _view_home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent,
        _view_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_4__.IntroductionComponent,
        _view_achievements_achievements_component__WEBPACK_IMPORTED_MODULE_5__.AchievementsComponent,
        _view_stories_stories_component__WEBPACK_IMPORTED_MODULE_6__.StoriesComponent,
        _components_icons_icons_component__WEBPACK_IMPORTED_MODULE_7__.IconsComponent,
        _components_achievements_achievement_photos_achievement_photos_component__WEBPACK_IMPORTED_MODULE_8__.AchievementPhotosComponent,
        _components_achievements_achievement_videos_achievement_videos_component__WEBPACK_IMPORTED_MODULE_9__.AchievementVideosComponent,
        _components_stories_story_photos_story_photos_component__WEBPACK_IMPORTED_MODULE_10__.StoryPhotosComponent,
        _components_stories_story_videos_story_videos_component__WEBPACK_IMPORTED_MODULE_11__.StoryVideosComponent,
        _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_2__.SafePipe], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 1411:
/*!********************************************************************************************!*\
  !*** ./src/app/components/achievements/achievement-photos/achievement-photos.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AchievementPhotosComponent": () => (/* binding */ AchievementPhotosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



function AchievementPhotosComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AchievementPhotosComponent_ng_container_9_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const image_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectPhoto(image_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const image_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + image_r1.src + ")");
} }
class AchievementPhotosComponent {
    constructor() {
        this.currentImgSrc = '';
        this.images = [
            { id: 1, src: 'assets/images/achievements/achievement1.png' },
            { id: 2, src: 'assets/images/achievements/achievement2.png' },
            { id: 3, src: 'assets/images/achievements/achievement3.png' },
            { id: 4, src: 'assets/images/achievements/achievement4.png' },
            { id: 5, src: 'assets/images/achievements/achievement5.jpg' }
        ];
    }
    ngOnInit() {
        this.currentImgSrc = this.images[0].src;
    }
    selectPhoto(image) {
        this.currentImgSrc = image.src;
    }
}
AchievementPhotosComponent.ɵfac = function AchievementPhotosComponent_Factory(t) { return new (t || AchievementPhotosComponent)(); };
AchievementPhotosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AchievementPhotosComponent, selectors: [["my-storybook-achievement-photos"]], decls: 10, vars: 3, consts: [[1, "main-container"], ["title", "\u8FD4\u56DE", 1, "back-btn", 3, "routerLink"], ["width", "24", "height", "24", 1, "icon"], [0, "xlink", "href", "#back", "href", "#back"], [1, "photos-container"], [1, "photo-details"], ["alt", "The achievement photo", 3, "src"], [1, "photo-list"], [4, "ngFor", "ngForOf"], [1, "photo-list-item", 3, "click"]], template: function AchievementPhotosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "use", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AchievementPhotosComponent_ng_container_9_Template, 2, 2, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "../../achievements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.currentImgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: [".main-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: auto;\n  background: url('achievement-photo-bg.jpg') center center;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjaGlldmVtZW50LXBob3Rvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLHlEQUFBO0VBQ0Esc0JBQUE7QUFDRiIsImZpbGUiOiJhY2hpZXZlbWVudC1waG90b3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2ltYWdlcy9hY2hpZXZlbWVudC1waG90by1iZy5qcGcpIGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 3669:
/*!********************************************************************************************!*\
  !*** ./src/app/components/achievements/achievement-videos/achievement-videos.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AchievementVideosComponent": () => (/* binding */ AchievementVideosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~pipes/safe.pipe */ 5436);




function AchievementVideosComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AchievementVideosComponent_ng_container_10_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const video_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.selectVideo(video_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const video_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](video_r1.name);
} }
class AchievementVideosComponent {
    constructor() {
        this.currentVideoSrc = '';
        this.videos = [
            { id: 1, name: 'Some More AP', src: '//player.bilibili.com/player.html?aid=471706662&bvid=BV1tT411L7KV&cid=793681359&page=1' },
            { id: 2, name: 'Ring Ding Dong AP', src: '//player.bilibili.com/player.html?aid=899244885&bvid=BV1PN4y157iS&cid=793687633&page=1' },
            { id: 3, name: '爱河 AP', src: '//player.bilibili.com/player.html?aid=856630342&bvid=BV1wV4y177JU&cid=793720951&page=1' },
            { id: 4, name: '冰河时代 差点AP', src: '//player.bilibili.com/player.html?aid=344201258&bvid=BV1nd4y1N78T&cid=793729784&page=1' },
            { id: 5, name: '冰河时代 又差点AP', src: '//player.bilibili.com/player.html?aid=686657132&bvid=BV1oU4y1Y7TH&cid=793736597&page=1' },
            { id: 6, name: '团队自制逆风碾压', src: '//player.bilibili.com/player.html?aid=514242295&bvid=BV1Hg411y7xd&cid=793753522&page=1' },
            { id: 7, name: '午夜游乐园MVP', src: '//player.bilibili.com/player.html?aid=344211705&bvid=BV15d4y1N7o1&cid=793852346&page=1' }
        ];
    }
    ngOnInit() {
        this.currentVideoSrc = this.videos[0].src;
    }
    selectVideo(video) {
        this.currentVideoSrc = video.src;
    }
}
AchievementVideosComponent.ɵfac = function AchievementVideosComponent_Factory(t) { return new (t || AchievementVideosComponent)(); };
AchievementVideosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AchievementVideosComponent, selectors: [["my-storybook-achievement-videos"]], decls: 11, vars: 6, consts: [[1, "main-container"], ["title", "\u8FD4\u56DE", 1, "back-btn", 3, "routerLink"], ["width", "24", "height", "24", 1, "icon"], [0, "xlink", "href", "#back", "href", "#back"], [1, "videos-container"], [1, "video-details"], ["scrolling", "no", "border", "0", "frameborder", "no", "framespacing", "0", "allowfullscreen", "true", 3, "src"], [1, "vertical-divider"], [1, "video-list"], [4, "ngFor", "ngForOf"], [1, "video-list-item", 3, "click"]], template: function AchievementVideosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "use", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "iframe", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AchievementVideosComponent_ng_container_10_Template, 3, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "../../achievements");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 3, ctx.currentVideoSrc, "resourceUrl"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.videos);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], pipes: [_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_0__.SafePipe], styles: [".main-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: auto;\n  background: url('story-bg1.jpg') center center;\n  background-size: cover;\n}\n\nvideo[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\niframe[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjaGlldmVtZW50LXZpZGVvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLDhDQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUNGIiwiZmlsZSI6ImFjaGlldmVtZW50LXZpZGVvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vaW1hZ2VzL3N0b3J5LWJnMS5qcGcpIGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxudmlkZW8ge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaWZyYW1lIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 1992:
/*!*****************************************************!*\
  !*** ./src/app/components/icons/icons.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconsComponent": () => (/* binding */ IconsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class IconsComponent {
    constructor() { }
    ngOnInit() {
    }
}
IconsComponent.ɵfac = function IconsComponent_Factory(t) { return new (t || IconsComponent)(); };
IconsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconsComponent, selectors: [["my-storybook-icons"]], decls: 3, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", 1, "svg-hidden"], ["id", "back", "viewBox", "0 0 512 512"], ["fill", "currentColor", "d", "M480 256c0 123.4-100.5 223.9-223.9 223.9c-48.84 0-95.17-15.58-134.2-44.86c-14.12-10.59-16.97-30.66-6.375-44.81c10.59-14.12 30.62-16.94 44.81-6.375c27.84 20.91 61 31.94 95.88 31.94C344.3 415.8 416 344.1 416 256s-71.69-159.8-159.8-159.8c-37.46 0-73.09 13.49-101.3 36.64l45.12 45.14c17.01 17.02 4.955 46.1-19.1 46.1H35.17C24.58 224.1 16 215.5 16 204.9V59.04c0-24.04 29.07-36.08 46.07-19.07l47.6 47.63C149.9 52.71 201.5 32.11 256.1 32.11C379.5 32.11 480 132.6 480 256z"]], template: function IconsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0)(1, "symbol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: [".svg-hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGIiwiZmlsZSI6Imljb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN2Zy1oaWRkZW4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 8350:
/*!***************************************************************************!*\
  !*** ./src/app/components/stories/story-photos/story-photos.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoryPhotosComponent": () => (/* binding */ StoryPhotosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



function StoryPhotosComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoryPhotosComponent_ng_container_9_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const image_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectPhoto(image_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const image_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + image_r1.src + ")");
} }
class StoryPhotosComponent {
    constructor() {
        this.currentImgSrc = '';
        this.images = [
            { id: 8, src: 'assets/images/stories/story8.png' },
            { id: 9, src: 'assets/images/stories/story9.png' },
            { id: 10, src: 'assets/images/stories/story10.png' },
            { id: 1, src: 'assets/images/stories/story1.png' },
            { id: 2, src: 'assets/images/stories/story2.png' },
            { id: 3, src: 'assets/images/stories/story3.png' },
            { id: 4, src: 'assets/images/stories/story4.png' },
            { id: 5, src: 'assets/images/stories/story5.png' },
            { id: 6, src: 'assets/images/stories/story6.png' },
            { id: 7, src: 'assets/images/stories/story7.png' },
            { id: 11, src: 'assets/images/stories/story11.png' },
            { id: 12, src: 'assets/images/stories/story12.png' },
            { id: 13, src: 'assets/images/stories/story13.png' },
            { id: 14, src: 'assets/images/stories/story14.png' },
            { id: 15, src: 'assets/images/stories/story15.png' },
            { id: 16, src: 'assets/images/stories/story16.png' },
            { id: 17, src: 'assets/images/stories/story17.png' },
            { id: 18, src: 'assets/images/stories/story18.png' },
            { id: 19, src: 'assets/images/stories/story19.png' },
            { id: 20, src: 'assets/images/stories/story20.png' },
            { id: 21, src: 'assets/images/stories/story21.png' },
            { id: 22, src: 'assets/images/stories/story22.png' },
            { id: 23, src: 'assets/images/stories/story23.png' },
            { id: 24, src: 'assets/images/stories/story24.png' },
            { id: 25, src: 'assets/images/stories/story25.png' },
            { id: 26, src: 'assets/images/stories/story26.png' },
            { id: 27, src: 'assets/images/stories/story27.png' },
            { id: 28, src: 'assets/images/stories/story28.png' }
        ];
    }
    ngOnInit() {
        this.currentImgSrc = this.images[0].src;
    }
    selectPhoto(image) {
        this.currentImgSrc = image.src;
    }
}
StoryPhotosComponent.ɵfac = function StoryPhotosComponent_Factory(t) { return new (t || StoryPhotosComponent)(); };
StoryPhotosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoryPhotosComponent, selectors: [["my-storybook-story-photos"]], decls: 10, vars: 3, consts: [[1, "main-container"], ["title", "\u8FD4\u56DE", 1, "back-btn", 3, "routerLink"], ["width", "24", "height", "24", 1, "icon"], [0, "xlink", "href", "#back", "href", "#back"], [1, "photos-container"], [1, "photo-details"], ["alt", "The story photo", 3, "src"], [1, "photo-list"], [4, "ngFor", "ngForOf"], [1, "photo-list-item", 3, "click"]], template: function StoryPhotosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "use", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, StoryPhotosComponent_ng_container_9_Template, 2, 2, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "../../stories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.currentImgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: [".main-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: auto;\n  background: url('story-photo-bg.jpg') center center;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3J5LXBob3Rvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLG1EQUFBO0VBQ0Esc0JBQUE7QUFDRiIsImZpbGUiOiJzdG9yeS1waG90b3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2ltYWdlcy9zdG9yeS1waG90by1iZy5qcGcpIGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 7471:
/*!***************************************************************************!*\
  !*** ./src/app/components/stories/story-videos/story-videos.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoryVideosComponent": () => (/* binding */ StoryVideosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~pipes/safe.pipe */ 5436);




function StoryVideosComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StoryVideosComponent_ng_container_10_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const video_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.selectVideo(video_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const video_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](video_r1.name);
} }
class StoryVideosComponent {
    constructor() {
        this.currentVideoSrc = '';
        this.videos = [
            { id: 1, name: '梦想海岸', src: '//player.bilibili.com/player.html?aid=471580612&bvid=BV18T41177HD&cid=790178126&page=1' },
            { id: 2, name: '结情缘', src: '//player.bilibili.com/player.html?aid=771669402&bvid=BV12r4y157xX&cid=793759339&page=1' }
        ];
    }
    ngOnInit() {
        this.currentVideoSrc = this.videos[0].src;
    }
    selectVideo(video) {
        this.currentVideoSrc = video.src;
    }
}
StoryVideosComponent.ɵfac = function StoryVideosComponent_Factory(t) { return new (t || StoryVideosComponent)(); };
StoryVideosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StoryVideosComponent, selectors: [["my-storybook-story-videos"]], decls: 11, vars: 6, consts: [[1, "main-container"], ["title", "\u8FD4\u56DE", 1, "back-btn", 3, "routerLink"], ["width", "24", "height", "24", 1, "icon"], [0, "xlink", "href", "#back", "href", "#back"], [1, "videos-container"], [1, "video-details"], ["scrolling", "no", "border", "0", "frameborder", "no", "framespacing", "0", "allowfullscreen", "true", 3, "src"], [1, "vertical-divider"], [1, "video-list"], [4, "ngFor", "ngForOf"], [1, "video-list-item", 3, "click"]], template: function StoryVideosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "use", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "iframe", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, StoryVideosComponent_ng_container_10_Template, 3, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "../../stories");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 3, ctx.currentVideoSrc, "resourceUrl"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.videos);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], pipes: [_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_0__.SafePipe], styles: [".main-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: auto;\n  background: url('story-video-bg.jpg') center center;\n  background-size: cover;\n}\n\nvideo[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\niframe[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3J5LXZpZGVvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLG1EQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUNGIiwiZmlsZSI6InN0b3J5LXZpZGVvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vaW1hZ2VzL3N0b3J5LXZpZGVvLWJnLmpwZykgY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG52aWRlbyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pZnJhbWUge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 5436:
/*!************************************!*\
  !*** ./src/app/pipes/safe.pipe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafePipe": () => (/* binding */ SafePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 318);


class SafePipe {
    /**
     * Pipe Constructor
     *
     * @param _sanitizer: DomSanitezer
     */
    // tslint:disable-next-line
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    /**
     * Transform
     *
     * @param value: string
     * @param type: string
     */
    transform(value, type) {
        switch (type) {
            case 'html':
                return this._sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this._sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this._sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this._sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this._sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                return this._sanitizer.bypassSecurityTrustHtml(value);
        }
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16)); };
SafePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });


/***/ }),

/***/ 4788:
/*!*************************************************************!*\
  !*** ./src/app/view/achievements/achievements.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AchievementsComponent": () => (/* binding */ AchievementsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class AchievementsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AchievementsComponent.ɵfac = function AchievementsComponent_Factory(t) { return new (t || AchievementsComponent)(); };
AchievementsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AchievementsComponent, selectors: [["my-storybook-achievements"]], decls: 19, vars: 3, consts: [[1, "main-container"], ["title", "\u8FD4\u56DE", 1, "back-btn", 3, "routerLink"], ["width", "24", "height", "24", 1, "icon"], [0, "xlink", "href", "#back", "href", "#back"], [1, "page-title"], [1, "achievements-container"], [1, "achievement-line"], [1, "avatar-container", 3, "routerLink"], [1, "avatar", "avatar1"], [1, "title"], [1, "avatar", "avatar2"]], template: function AchievementsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "use", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u6211\u4EEC\u7684\u6218\u7EE9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9)(12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u56FE \u7247");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9)(17, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u89C6 \u9891");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "../home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/achievements/photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/achievements/videos");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink], styles: [".main-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: url('achievement-bg.jpg') center center;\n  background-size: cover;\n  overflow: auto;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  text-align: center;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 80px;\n  color: #554e92;\n  padding: 20px;\n  background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));\n}\n\n.achievements-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  margin: 20vh auto;\n}\n\n.achievements-container[_ngcontent-%COMP%]   .achievement-line[_ngcontent-%COMP%] {\n  position: fixed;\n  border: 2px solid white;\n  top: -60vh;\n  left: -30vw;\n  right: -30vw;\n  bottom: 60vh;\n  border-radius: 50%;\n  z-index: -1;\n}\n\n.achievements-container[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%] {\n  width: 10%;\n  position: relative;\n  cursor: pointer;\n}\n\n.achievements-container[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]:hover   .avatar[_ngcontent-%COMP%] {\n  transition: ease 1s;\n  box-shadow: 0 0 28px #f2f0f4;\n  transform: scale(1.1);\n}\n\n.achievements-container[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.achievements-container[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  margin: auto;\n  border: 2px solid white;\n  border-radius: 50%;\n  width: 100%;\n  height: 0;\n  padding-bottom: 100%;\n}\n\n.achievements-container[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar1[_ngcontent-%COMP%] {\n  background: url('achievement-avatar3.jpg') no-repeat center center;\n  background-size: cover;\n}\n\n.achievements-container[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar2[_ngcontent-%COMP%] {\n  background: url('achievement-avatar4.jpg') no-repeat center center;\n  background-size: cover;\n}\n\n.achievements-container[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5em;\n  transition: ease 0.5s;\n}\n\n@media (max-width: 768px) {\n  .achievements-container[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%] {\n    width: 35%;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 1024px) {\n  .achievements-container[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .achievements-container[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n}\n\n@media (min-width: 1200px) {\n  .achievements-container[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%] {\n    width: 20%;\n  }\n}\n\n@media (min-width: 1400px) {\n  .achievements-container[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%] {\n    width: 15%;\n  }\n}\n\n.achievements-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2em;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjaGlldmVtZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsbURBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsK0dBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNFO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdNO0VBQ0UsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0FBRFI7O0FBSU07RUFDRSxVQUFBO0FBRlI7O0FBTUk7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7QUFKTjs7QUFPSTtFQUNFLGtFQUFBO0VBQ0Esc0JBQUE7QUFMTjs7QUFRSTtFQUNFLGtFQUFBO0VBQ0Esc0JBQUE7QUFOTjs7QUFTSTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFQTjs7QUFVSTtFQWxERjtJQW1ESSxVQUFBO0VBUEo7QUFDRjs7QUFTSTtFQXRERjtJQXVESSxVQUFBO0VBTko7QUFDRjs7QUFRSTtFQTFERjtJQTJESSxVQUFBO0VBTEo7QUFDRjs7QUFPSTtFQTlERjtJQStESSxVQUFBO0VBSko7QUFDRjs7QUFNSTtFQWxFRjtJQW1FSSxVQUFBO0VBSEo7QUFDRjs7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFKSiIsImZpbGUiOiJhY2hpZXZlbWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2ltYWdlcy9hY2hpZXZlbWVudC1iZy5qcGcpIGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLnBhZ2UtdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDgwcHg7XHJcbiAgY29sb3I6ICM1NTRlOTI7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU1LDI1NSwyNTUsMCksIHJnYmEoMjU1LDI1NSwyNTUsMC44KSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7O1xyXG59XHJcblxyXG4uYWNoaWV2ZW1lbnRzLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgbWFyZ2luOiAyMHZoIGF1dG87XHJcblxyXG4gIC5hY2hpZXZlbWVudC1saW5lIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgdG9wOiAtNjB2aDtcclxuICAgIGxlZnQ6IC0zMHZ3O1xyXG4gICAgcmlnaHQ6IC0zMHZ3O1xyXG4gICAgYm90dG9tOiA2MHZoO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG5cclxuICAuYXZhdGFyLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAuYXZhdGFyIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBlYXNlIDFzO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAyOHB4ICNmMmYwZjQ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYXZhdGFyIHtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuYXZhdGFyMSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2ltYWdlcy9hY2hpZXZlbWVudC1hdmF0YXIzLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIH1cclxuXHJcbiAgICAuYXZhdGFyMiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2ltYWdlcy9hY2hpZXZlbWVudC1hdmF0YXI0LmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIH1cclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgIHRyYW5zaXRpb246IGVhc2UgMC41cztcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgd2lkdGg6IDM1JTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgd2lkdGg6IDMwJTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgICB3aWR0aDogMjAlO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcclxuICAgICAgd2lkdGg6IDE1JTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 4750:
/*!*********************************************!*\
  !*** ./src/app/view/home/home.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



const _c0 = function (a0) { return { hidden: a0 }; };
class HomeComponent {
    constructor() {
        this.isAvatar1Active = false;
        this.isAvatar2Active = false;
        this.isAvatar3Active = false;
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["my-storybook-home"]], decls: 36, vars: 15, consts: [[1, "main-container"], [1, "avatar-container"], [1, "avatar", "avatar1", 3, "routerLink", "mouseenter", "mouseleave"], [1, "avatar", "avatar2", 3, "routerLink", "mouseenter", "mouseleave"], [1, "avatar", "avatar3", 3, "routerLink", "mouseenter", "mouseleave"], [1, "content-container"], [1, "content"], [1, "content-home", 3, "ngClass"], [1, "title"], [1, "highlight"], [1, "content1", 3, "ngClass"], [1, "content2", 3, "ngClass"], [2, "text-align", "right"], [1, "content3", 3, "ngClass"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HomeComponent_Template_div_mouseenter_2_listener() { return ctx.isAvatar1Active = true; })("mouseleave", function HomeComponent_Template_div_mouseleave_2_listener() { return ctx.isAvatar1Active = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HomeComponent_Template_div_mouseenter_3_listener() { return ctx.isAvatar2Active = true; })("mouseleave", function HomeComponent_Template_div_mouseleave_3_listener() { return ctx.isAvatar2Active = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HomeComponent_Template_div_mouseenter_4_listener() { return ctx.isAvatar3Active = true; })("mouseleave", function HomeComponent_Template_div_mouseleave_4_listener() { return ctx.isAvatar3Active = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u6211\u4EEC\u7684\u6545\u4E8B\u4E66");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u8FD9\u662F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u4F74\u4E5D\u826F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u548C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u4F74\u4E5D\u6B4C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u7684\u6545\u4E8B\u4E66\uFF0C\u65E5\u5E38\u6253\u6B4C\u3001\u505A\u4EFB\u52A1\u3001\u73A9\u6E38\u4E50\u573A\u3001\u68A6\u60F3\u57CE\u3001\u5230\u5904\u55E8\u7684\u8BB0\u5F55\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10)(19, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u6211\u4EEC\u7684\u7B80\u4ECB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u4E0A\u5E1D\u7528\u5C18\u571F\u9020\u4E86\u4E00\u4E2A\u7537\u4EBA\uFF0C\u53C8\u628A\u751F\u6C14\u5439\u8FDB\u4ED6\u7684\u9F3B\u5B54\u91CC\uFF0C\u4ED6\u5C31\u6210\u4E86\u6709\u7075\u7684\u6D3B\u4EBA\uFF0C\u53EB\u4E9A\u5F53\u3002\u4E9A\u5F53\u611F\u89C9\u81EA\u5DF1\u5F88\u5B64\u5355\uFF0C\u4E0A\u5E1D\u770B\u51FA\u4E86\u4E9A\u5F53\u7684\u5FC3\u601D\uFF0C\u5C31\u8BA9\u4E9A\u5F53\u6C89\u7761\uFF0C\u4ECE\u4ED6\u8EAB\u4E0A\u53D6\u4E0B\u4E00\u6839\u80C1\u9AA8\uFF0C\u9020\u6210\u4E00\u4E2A\u5973\u4EBA\uFF0C\u53EB\u590F\u5A03\u3002\u4E0A\u5E1D\u5631\u5490\u4ED6\u4EEC\uFF0C\u4F60\u4EEC\u597D\u597D\u76F8\u7230\uFF0C\u597D\u597D\u6CBB\u7406\uFF0C\u7BA1\u7406\u5929\u4E0A\uFF0C\u5730\u4E0A\uFF0C\u6D77\u91CC\u7684\u4E00\u5207\uFF0C\u5E76\u4E14\u8981\u751F\u517B\u4F17\u591A\uFF0C\u904D\u6EE1\u5730\u9762\uFF0C\u5E76\u8981\u4FEE\u7406\u597D\u4F0A\u7538\u56ED\u5B50\u3002\u8FD9\u5BF9\u7537\u5973\u5C31\u662F\u4E16\u754C\u4E0A\u7B2C\u4E00\u5BF9\u60C5\u4FA3\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11)(24, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u6211\u4EEC\u7684\u6545\u4E8B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u7231\u662F\u6052\u4E45\u5FCD\u8010\uFF0C\u53C8\u6709\u6069\u6148\uFF1B\u7231\u662F\u4E0D\u5AC9\u5992\uFF0C\u7231\u662F\u4E0D\u81EA\u5938\uFF0C\u4E0D\u5F20\u72C2\uFF0C\u4E0D\u4F5C\u5BB3\u7F9E\u7684\u4E8B\uFF0C\u4E0D\u6C42\u81EA\u5DF1\u7684\u76CA\u5904\uFF0C\u4E0D\u8F7B\u6613\u53D1\u6012\uFF0C\u4E0D\u8BA1\u7B97\u4EBA\u7684\u6076\uFF0C\u4E0D\u559C\u6B22\u4E0D\u4E49\uFF0C\u53EA\u559C\u6B22\u771F\u7406\uFF1B\u51E1\u4E8B\u5305\u5BB9\uFF0C\u51E1\u4E8B\u76F8\u4FE1\uFF0C\u51E1\u4E8B\u76FC\u671B\uFF0C\u51E1\u4E8B\u5FCD\u8010\uFF1B\u7231\u662F\u6C38\u4E0D\u6B62\u606F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "---\u300A\u65B0\u7EA6\u00B7\u54E5\u6797\u591A\u524D\u4E66\u300B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13)(32, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u6211\u4EEC\u7684\u6218\u7EE9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u8D77\u521D\u795E\u9020\u7684\u4E0D\u662F\u4EBA\uFF0C\u662F\u5929\u4F7F\uFF0C\u6700\u6709\u667A\u6167\uFF0C\u6700\u7F8E\u4E3D\u7684\u5929\u4F7F\u505A\u4E86\u5929\u4F7F\u957F\u3002\u540E\u6765\u4ED6\u9A84\u50B2\u4E86\uFF0C\u60F3\u8981\u548C\u4E0A\u5E1D\u5E73\u8D77\u5E73\u5750\uFF0C\u4E5F\u8981\u50CF\u4E0A\u5E1D\u4E00\u6837\u53D7\u5176\u4ED6\u5929\u4F7F\u7684\u656C\u62DC\uFF0C\u4E8E\u662F\u4E0A\u5E1D\u5C31\u5BA1\u5224\u4E86\u4ED6\uFF0C\u4E5F\u5BA1\u5224\u4E86\u8FD9\u4E2A\u4E16\u754C\uFF0C\u4ECE\u6B64\u4E16\u754C\u4E00\u7247\u6DF7\u6C8C\uFF0C\u6E0A\u9762\u9ED1\u6697\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "../introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "../stories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "../achievements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.isAvatar1Active || ctx.isAvatar2Active || ctx.isAvatar3Active));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, !ctx.isAvatar1Active));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, !ctx.isAvatar2Active));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, !ctx.isAvatar3Active));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass], styles: [".main-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: url('home-without-line.jpg') center center;\n  background-size: cover;\n  overflow: auto;\n}\n\n.avatar-container[_ngcontent-%COMP%] {\n  position: fixed;\n  border: 2px solid white;\n  top: -30vh;\n  left: 15%;\n  right: -30vw;\n  bottom: 20%;\n  border-radius: 50%;\n}\n\n.avatar-container[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: fixed;\n  border: 2px solid white;\n  border-radius: 50%;\n  height: 200px;\n  width: 200px;\n}\n\n.avatar-container[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]:hover {\n  transition: ease 1s;\n  box-shadow: 0 0 28px #f2f0f4;\n  transform: scale(1.2);\n}\n\n.avatar-container[_ngcontent-%COMP%]   .avatar1[_ngcontent-%COMP%] {\n  top: 20vh;\n  left: 8%;\n  background: url('home-avatar1.jpg') no-repeat center center;\n  background-size: cover;\n}\n\n.avatar-container[_ngcontent-%COMP%]   .avatar2[_ngcontent-%COMP%] {\n  top: 50vh;\n  left: 20%;\n  background: url('home-avatar2.jpg') no-repeat center center;\n  background-size: cover;\n}\n\n.avatar-container[_ngcontent-%COMP%]   .avatar3[_ngcontent-%COMP%] {\n  top: 65vh;\n  left: 45%;\n  background: url('home-avatar3.jpg') no-repeat center center;\n  background-size: cover;\n}\n\n@media (max-width: 1080px) {\n  .avatar-container[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n    width: 175px;\n    height: 175px;\n  }\n}\n\n@media (max-width: 800px) {\n  .avatar-container[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 150px;\n  }\n}\n\n.content-container[_ngcontent-%COMP%] {\n  padding: 5% 20%;\n  position: relative;\n  left: 20vw;\n  margin-right: 20vw;\n  color: white;\n  z-index: -1;\n}\n\n.content-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.content-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 3.5em;\n}\n\n.content-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-indent: 2em;\n  font-size: 2em;\n  line-height: 1.3em;\n}\n\n.content-container[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: red;\n}\n\n@media (max-width: 1080px) {\n  .content-container[_ngcontent-%COMP%] {\n    padding: 5% 15%;\n  }\n  .content-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 3em;\n  }\n  .content-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n  }\n}\n\n@media (max-width: 800px) {\n  .content-container[_ngcontent-%COMP%] {\n    padding: 5% 5% 0 20%;\n  }\n  .content-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 2.5em;\n  }\n  .content-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLHNEQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0k7RUFDRSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7QUFDTjs7QUFHRTtFQUNFLFNBQUE7RUFDQSxRQUFBO0VBQ0EsMkRBQUE7RUFDQSxzQkFBQTtBQURKOztBQUlFO0VBQ0UsU0FBQTtFQUNBLFNBQUE7RUFDQSwyREFBQTtFQUNBLHNCQUFBO0FBRko7O0FBS0U7RUFDRSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDJEQUFBO0VBQ0Esc0JBQUE7QUFISjs7QUFNRTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUFKSjtBQUNGOztBQU9FO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQUxKO0FBQ0Y7O0FBU0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQU5GOztBQVFFO0VBQ0UsZ0JBQUE7QUFOSjs7QUFRSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFOTjs7QUFTSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBUE47O0FBV0U7RUFDRSxpQkFBQTtFQUNBLFVBQUE7QUFUSjs7QUFZRTtFQTVCRjtJQTZCSSxlQUFBO0VBVEY7RUFZSTtJQUNFLGNBQUE7RUFWTjtFQWFJO0lBQ0UsZ0JBQUE7RUFYTjtBQUNGOztBQWVFO0VBMUNGO0lBMkNJLG9CQUFBO0VBWkY7RUFlSTtJQUNFLGdCQUFBO0VBYk47RUFnQkk7SUFDRSxjQUFBO0VBZE47QUFDRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9pbWFnZXMvaG9tZS13aXRob3V0LWxpbmUuanBnKSBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5hdmF0YXItY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgdG9wOiAtMzB2aDtcclxuICBsZWZ0OiAxNSU7XHJcbiAgcmlnaHQ6IC0zMHZ3O1xyXG4gIGJvdHRvbTogMjAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbiAgLmF2YXRhciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zaXRpb246IGVhc2UgMXM7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAyOHB4ICNmMmYwZjQ7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hdmF0YXIxIHtcclxuICAgIHRvcDogMjB2aDtcclxuICAgIGxlZnQ6IDglO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vaW1hZ2VzL2hvbWUtYXZhdGFyMS5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLmF2YXRhcjIge1xyXG4gICAgdG9wOiA1MHZoO1xyXG4gICAgbGVmdDogMjAlO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vaW1hZ2VzL2hvbWUtYXZhdGFyMi5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLmF2YXRhcjMge1xyXG4gICAgdG9wOiA2NXZoO1xyXG4gICAgbGVmdDogNDUlO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vaW1hZ2VzL2hvbWUtYXZhdGFyMy5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwODBweCkge1xyXG4gICAgLmF2YXRhciB7XHJcbiAgICAgIHdpZHRoOiAxNzVweDtcclxuICAgICAgaGVpZ2h0OiAxNzVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLmF2YXRhciB7XHJcbiAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogNSUgMjAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAyMHZ3O1xyXG4gIG1hcmdpbi1yaWdodDogMjB2dztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgei1pbmRleDogLTE7XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDMuNWVtO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICB0ZXh0LWluZGVudDogMmVtO1xyXG4gICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuM2VtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhpZ2hsaWdodCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTA4MHB4KSB7XHJcbiAgICBwYWRkaW5nOiA1JSAxNSU7XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIHBhZGRpbmc6IDUlIDUlIDAgMjAlO1xyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 7133:
/*!*************************************************************!*\
  !*** ./src/app/view/introduction/introduction.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroductionComponent": () => (/* binding */ IntroductionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class IntroductionComponent {
    constructor() { }
    ngOnInit() {
    }
}
IntroductionComponent.ɵfac = function IntroductionComponent_Factory(t) { return new (t || IntroductionComponent)(); };
IntroductionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroductionComponent, selectors: [["my-storybook-introduction"]], decls: 89, vars: 1, consts: [[1, "main-container"], ["title", "\u8FD4\u56DE", 1, "back-btn", 3, "routerLink"], ["width", "24", "height", "24", 1, "icon"], [0, "xlink", "href", "#back", "href", "#back"], [1, "introduction-container"], [1, "left-container"], [1, "container-bg"], [1, "avatar-container"], [1, "avatar", "avatar1"], [1, "title"], [1, "description"], [1, "description-details"], [1, "right-container"], [1, "avatar", "avatar2"]], template: function IntroductionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "use", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9)(10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u4F74\u4E5D\u6B4C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u6211\u662F\u5927\u4F6C\u4E00\u822C\u7684\u5B58\u5728\uFF0C\u65C1\u8FB9\u8FD9\u4E2A\u4F60\u4E0D\u8BB8\u60F9\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "table")(17, "tr")(18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u8EAB\u9AD8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "158cm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr")(23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u4F53\u91CD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "39kg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr")(28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u661F\u5EA7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u72EE\u5B50\u5EA7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr")(33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u6700\u559C\u6B22");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u5C0F\u88E4\u88E4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr")(38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u6700\u8BA8\u538C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u80D6\u5B50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr")(43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u4E3B\u8981\u804C\u8D23");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u6253\u6B4C\uFF0C\u627E\u573A\u5B50\uFF0C\u5E2E\u67D0\u4EBA\u6253\u6392\u4F4D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 9)(52, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u4F74\u4E5D\u826F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 10)(55, "div", 11)(56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u6211\u662F\u9017\u6BD4\u4E00\u822C\u7684\u5B58\u5728\uFF0C\u65C1\u8FB9\u8FD9\u4E2A\u6211\u60F9\u4E0D\u8D77\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "table")(59, "tr")(60, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u8EAB\u9AD8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "172cm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tr")(65, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u4F53\u91CD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "49kg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tr")(70, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\u661F\u5EA7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\u53CC\u5B50\u5EA7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "tr")(75, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\u6700\u559C\u6B22");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\u5403");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "tr")(80, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\u6700\u8BA8\u538C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\u4E0D\u4E0A\u8FDB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "tr")(85, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\u4E3B\u8981\u804C\u8D23");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\u793E\u4EA4\uFF0C\u966A\u73A9\uFF0C\u6253\u8F85\u52A9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "../home");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink], styles: [".main-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: url('introduction-bg.jpg') center center;\n  background-size: cover;\n  overflow: auto;\n}\n\n.introduction-container[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n  display: flex;\n  height: 100vh;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.introduction-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%], .introduction-container[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%] {\n  min-height: 80vh;\n  width: 40%;\n  position: relative;\n}\n\n.introduction-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .container-bg[_ngcontent-%COMP%], .introduction-container[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%]   .container-bg[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(230, 226, 241, 0.8));\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  top: 0;\n  z-index: -1;\n}\n\n.introduction-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%], .introduction-container[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  margin: 80px auto 20px auto;\n  border: 2px solid #5253a6;\n  border-radius: 50%;\n  width: 200px;\n  height: 200px;\n}\n\n.introduction-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar1[_ngcontent-%COMP%], .introduction-container[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar1[_ngcontent-%COMP%] {\n  background: url('avatar1.jpg') no-repeat center center;\n  background-size: cover;\n}\n\n.introduction-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar2[_ngcontent-%COMP%], .introduction-container[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar2[_ngcontent-%COMP%] {\n  background: url('avatar2.jpg') no-repeat center center;\n  background-size: cover;\n}\n\n.introduction-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .introduction-container[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #5253a6;\n}\n\n.introduction-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%], .introduction-container[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  margin: 20px auto;\n  color: #5253a6;\n  text-align: center;\n}\n\n.introduction-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .description-details[_ngcontent-%COMP%], .introduction-container[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .description-details[_ngcontent-%COMP%] {\n  border: 1px solid #433c80;\n  border-radius: 8px;\n  margin: 0 10%;\n  padding: 20px 0;\n}\n\n.introduction-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .introduction-container[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  margin: 20px auto;\n  width: 80%;\n}\n\n.introduction-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .introduction-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .introduction-container[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .introduction-container[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 12px 40px;\n}\n\n@media (max-width: 1080px) {\n  .introduction-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%], .introduction-container[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%], .introduction-container[_ngcontent-%COMP%]   .container-bg[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvZHVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esb0RBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDSTtFQUNFLG1GQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQUNOOztBQUdNO0VBQ0UsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFEUjs7QUFJTTtFQUNFLHNEQUFBO0VBQ0Esc0JBQUE7QUFGUjs7QUFLTTtFQUNFLHNEQUFBO0VBQ0Esc0JBQUE7QUFIUjs7QUFPSTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQUxOOztBQVFJO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFOTjs7QUFRTTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQU5SOztBQVNNO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0FBUFI7O0FBU1E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBUFY7O0FBY0U7RUFDRTtJQUNFLFdBQUE7RUFaSjtBQUNGIiwiZmlsZSI6ImludHJvZHVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vaW1hZ2VzL2ludHJvZHVjdGlvbi1iZy5qcGcpIGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmludHJvZHVjdGlvbi1jb250YWluZXIge1xyXG4gIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAubGVmdC1jb250YWluZXIsIC5yaWdodC1jb250YWluZXIge1xyXG4gICAgbWluLWhlaWdodDogODB2aDtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgLmNvbnRhaW5lci1iZyB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwyNTUsMjU1LDApLCByZ2JhKDIzMCwyMjYsMjQxLDAuOCkpO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgei1pbmRleDogLTE7XHJcbiAgICB9XHJcblxyXG4gICAgLmF2YXRhci1jb250YWluZXIge1xyXG4gICAgICAuYXZhdGFyIHtcclxuICAgICAgICBtYXJnaW46IDgwcHggYXV0byAyMHB4IGF1dG87XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzUyNTNhNjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hdmF0YXIxIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9pbWFnZXMvYXZhdGFyMS5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmF2YXRhcjIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2ltYWdlcy9hdmF0YXIyLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogIzUyNTNhNjtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgICAgY29sb3I6ICM1MjUzYTY7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgIC5kZXNjcmlwdGlvbi1kZXRhaWxzIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNDMzYzgwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBtYXJnaW46IDAgMTAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGFibGUge1xyXG4gICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcblxyXG4gICAgICAgIHRoLCB0ZCB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgcGFkZGluZzogMTJweCA0MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDgwcHgpIHtcclxuICAgIC5sZWZ0LWNvbnRhaW5lciwgLnJpZ2h0LWNvbnRhaW5lciwgLmNvbnRhaW5lci1iZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 6530:
/*!***************************************************!*\
  !*** ./src/app/view/stories/stories.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoriesComponent": () => (/* binding */ StoriesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class StoriesComponent {
    constructor() { }
    ngOnInit() {
    }
}
StoriesComponent.ɵfac = function StoriesComponent_Factory(t) { return new (t || StoriesComponent)(); };
StoriesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoriesComponent, selectors: [["my-storybook-stories"]], decls: 19, vars: 3, consts: [[1, "main-container"], ["title", "\u8FD4\u56DE", 1, "back-btn", 3, "routerLink"], ["width", "24", "height", "24", 1, "icon"], [0, "xlink", "href", "#back", "href", "#back"], [1, "page-title"], [1, "stories-container"], [1, "story-line"], [1, "avatar-container", 3, "routerLink"], [1, "avatar", "avatar1"], [1, "title"], [1, "avatar", "avatar2"]], template: function StoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "use", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u6211\u4EEC\u7684\u6545\u4E8B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9)(12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u56FE \u7247");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9)(17, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u89C6 \u9891");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "../home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/stories/photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/stories/videos");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink], styles: [".main-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  \n  background: url('home-avatar2.jpg') center center;\n  background-size: cover;\n  overflow: auto;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  text-align: center;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 80px;\n  color: #554e92;\n  padding: 20px;\n  background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));\n}\n\n.stories-container[_ngcontent-%COMP%] {\n  display: flex;\n  height: 76vh;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  align-items: center;\n  margin: 12vh auto;\n}\n\n.stories-container[_ngcontent-%COMP%]   .story-line[_ngcontent-%COMP%] {\n  position: fixed;\n  border: 2px solid white;\n  top: 48vh;\n  left: -30vw;\n  right: -30vw;\n  bottom: -48vh;\n  border-radius: 50%;\n}\n\n.stories-container[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%] {\n  width: 40%;\n  position: relative;\n  cursor: pointer;\n}\n\n.stories-container[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]:hover   .avatar[_ngcontent-%COMP%] {\n  transition: ease 1s;\n  box-shadow: 0 0 28px #f2f0f4;\n  transform: scale(1.1);\n}\n\n.stories-container[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.stories-container[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  margin: auto;\n  border: 2px solid white;\n  border-radius: 50%;\n  width: 100%;\n  height: 0;\n  padding-bottom: 100%;\n}\n\n.stories-container[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar1[_ngcontent-%COMP%] {\n  background: url('story-avatar1.jpg') no-repeat center center;\n  background-size: cover;\n}\n\n.stories-container[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar2[_ngcontent-%COMP%] {\n  background: url('story-avatar2.jpg') no-repeat center center;\n  background-size: cover;\n}\n\n.stories-container[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5em;\n  transition: ease 0.5s;\n}\n\n@media (min-width: 1024px) {\n  .stories-container[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n}\n\n@media (min-width: 1400px) {\n  .stories-container[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%] {\n    width: 20%;\n  }\n}\n\n.stories-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2em;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLHVFQUFBO0VBQ0EsaURBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsK0dBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNFO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR007RUFDRSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7QUFEUjs7QUFJTTtFQUNFLFVBQUE7QUFGUjs7QUFNSTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtBQUpOOztBQU9JO0VBQ0UsNERBQUE7RUFDQSxzQkFBQTtBQUxOOztBQVFJO0VBQ0UsNERBQUE7RUFDQSxzQkFBQTtBQU5OOztBQVNJO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQVBOOztBQVVJO0VBbERGO0lBbURJLFVBQUE7RUFQSjtBQUNGOztBQVNJO0VBdERGO0lBdURJLFVBQUE7RUFOSjtBQUNGOztBQVNFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQVBKIiwiZmlsZSI6InN0b3JpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgLypiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zdG9yeS1iZzMuanBnKSBjZW50ZXIgY2VudGVyOyovXHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2ltYWdlcy9ob21lLWF2YXRhcjIuanBnKSBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5wYWdlLXRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiA4MHB4O1xyXG4gIGNvbG9yOiAjNTU0ZTkyO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwyNTUsMjU1LDApLCByZ2JhKDI1NSwyNTUsMjU1LDAuOCksIHJnYmEoMjU1LDI1NSwyNTUsMCkpOztcclxufVxyXG5cclxuLnN0b3JpZXMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogNzZ2aDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDEydmggYXV0bztcclxuXHJcbiAgLnN0b3J5LWxpbmUge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICB0b3A6IDQ4dmg7XHJcbiAgICBsZWZ0OiAtMzB2dztcclxuICAgIHJpZ2h0OiAtMzB2dztcclxuICAgIGJvdHRvbTogLTQ4dmg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG5cclxuICAuYXZhdGFyLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAuYXZhdGFyIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBlYXNlIDFzO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAyOHB4ICNmMmYwZjQ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYXZhdGFyIHtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuYXZhdGFyMSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2ltYWdlcy9zdG9yeS1hdmF0YXIxLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIH1cclxuXHJcbiAgICAuYXZhdGFyMiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2ltYWdlcy9zdG9yeS1hdmF0YXIyLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIH1cclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgIHRyYW5zaXRpb246IGVhc2UgMC41cztcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkge1xyXG4gICAgICB3aWR0aDogMjAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map