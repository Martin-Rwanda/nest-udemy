'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest-udemy documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-475362f32a8a1b6ae0594682834f01e50e4523f830b93afb484d329e7554d96a6b828526d68165a5ea8ab21b808d8f097d9983efab2c43528d8180103c9045f2"' : 'data-bs-target="#xs-controllers-links-module-AppModule-475362f32a8a1b6ae0594682834f01e50e4523f830b93afb484d329e7554d96a6b828526d68165a5ea8ab21b808d8f097d9983efab2c43528d8180103c9045f2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-475362f32a8a1b6ae0594682834f01e50e4523f830b93afb484d329e7554d96a6b828526d68165a5ea8ab21b808d8f097d9983efab2c43528d8180103c9045f2"' :
                                            'id="xs-controllers-links-module-AppModule-475362f32a8a1b6ae0594682834f01e50e4523f830b93afb484d329e7554d96a6b828526d68165a5ea8ab21b808d8f097d9983efab2c43528d8180103c9045f2"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-475362f32a8a1b6ae0594682834f01e50e4523f830b93afb484d329e7554d96a6b828526d68165a5ea8ab21b808d8f097d9983efab2c43528d8180103c9045f2"' : 'data-bs-target="#xs-injectables-links-module-AppModule-475362f32a8a1b6ae0594682834f01e50e4523f830b93afb484d329e7554d96a6b828526d68165a5ea8ab21b808d8f097d9983efab2c43528d8180103c9045f2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-475362f32a8a1b6ae0594682834f01e50e4523f830b93afb484d329e7554d96a6b828526d68165a5ea8ab21b808d8f097d9983efab2c43528d8180103c9045f2"' :
                                        'id="xs-injectables-links-module-AppModule-475362f32a8a1b6ae0594682834f01e50e4523f830b93afb484d329e7554d96a6b828526d68165a5ea8ab21b808d8f097d9983efab2c43528d8180103c9045f2"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-b9a3ec1ccec569a07e9e59339db3375158b4118aedfc790f5b93bd7e5b6468ab4e8c342263b6fe7cb7e401639d241f1ab72e203bbf88aeec50d2bc77476fd4bf"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-b9a3ec1ccec569a07e9e59339db3375158b4118aedfc790f5b93bd7e5b6468ab4e8c342263b6fe7cb7e401639d241f1ab72e203bbf88aeec50d2bc77476fd4bf"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-b9a3ec1ccec569a07e9e59339db3375158b4118aedfc790f5b93bd7e5b6468ab4e8c342263b6fe7cb7e401639d241f1ab72e203bbf88aeec50d2bc77476fd4bf"' :
                                            'id="xs-controllers-links-module-AuthModule-b9a3ec1ccec569a07e9e59339db3375158b4118aedfc790f5b93bd7e5b6468ab4e8c342263b6fe7cb7e401639d241f1ab72e203bbf88aeec50d2bc77476fd4bf"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-b9a3ec1ccec569a07e9e59339db3375158b4118aedfc790f5b93bd7e5b6468ab4e8c342263b6fe7cb7e401639d241f1ab72e203bbf88aeec50d2bc77476fd4bf"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-b9a3ec1ccec569a07e9e59339db3375158b4118aedfc790f5b93bd7e5b6468ab4e8c342263b6fe7cb7e401639d241f1ab72e203bbf88aeec50d2bc77476fd4bf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-b9a3ec1ccec569a07e9e59339db3375158b4118aedfc790f5b93bd7e5b6468ab4e8c342263b6fe7cb7e401639d241f1ab72e203bbf88aeec50d2bc77476fd4bf"' :
                                        'id="xs-injectables-links-module-AuthModule-b9a3ec1ccec569a07e9e59339db3375158b4118aedfc790f5b93bd7e5b6468ab4e8c342263b6fe7cb7e401639d241f1ab72e203bbf88aeec50d2bc77476fd4bf"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-595f13764783aec5f9307c51da25a72ee1e9f536454c7e7d1a1d11034d44c7ddb2bde7b3941c006b100102eaae720646f2cc4c25aeba70283955bf85f12a321f"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-595f13764783aec5f9307c51da25a72ee1e9f536454c7e7d1a1d11034d44c7ddb2bde7b3941c006b100102eaae720646f2cc4c25aeba70283955bf85f12a321f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-595f13764783aec5f9307c51da25a72ee1e9f536454c7e7d1a1d11034d44c7ddb2bde7b3941c006b100102eaae720646f2cc4c25aeba70283955bf85f12a321f"' :
                                            'id="xs-controllers-links-module-PostsModule-595f13764783aec5f9307c51da25a72ee1e9f536454c7e7d1a1d11034d44c7ddb2bde7b3941c006b100102eaae720646f2cc4c25aeba70283955bf85f12a321f"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-595f13764783aec5f9307c51da25a72ee1e9f536454c7e7d1a1d11034d44c7ddb2bde7b3941c006b100102eaae720646f2cc4c25aeba70283955bf85f12a321f"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-595f13764783aec5f9307c51da25a72ee1e9f536454c7e7d1a1d11034d44c7ddb2bde7b3941c006b100102eaae720646f2cc4c25aeba70283955bf85f12a321f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-595f13764783aec5f9307c51da25a72ee1e9f536454c7e7d1a1d11034d44c7ddb2bde7b3941c006b100102eaae720646f2cc4c25aeba70283955bf85f12a321f"' :
                                        'id="xs-injectables-links-module-PostsModule-595f13764783aec5f9307c51da25a72ee1e9f536454c7e7d1a1d11034d44c7ddb2bde7b3941c006b100102eaae720646f2cc4c25aeba70283955bf85f12a321f"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-04d4144a98004848b05773d632d96263a2e6d81021bd270ec219984ee48ace1a2b2dad74d8eaf207fc13badd89ec1ca75e17d73c683147068b14a72f74f96f4b"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-04d4144a98004848b05773d632d96263a2e6d81021bd270ec219984ee48ace1a2b2dad74d8eaf207fc13badd89ec1ca75e17d73c683147068b14a72f74f96f4b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-04d4144a98004848b05773d632d96263a2e6d81021bd270ec219984ee48ace1a2b2dad74d8eaf207fc13badd89ec1ca75e17d73c683147068b14a72f74f96f4b"' :
                                            'id="xs-controllers-links-module-UsersModule-04d4144a98004848b05773d632d96263a2e6d81021bd270ec219984ee48ace1a2b2dad74d8eaf207fc13badd89ec1ca75e17d73c683147068b14a72f74f96f4b"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-04d4144a98004848b05773d632d96263a2e6d81021bd270ec219984ee48ace1a2b2dad74d8eaf207fc13badd89ec1ca75e17d73c683147068b14a72f74f96f4b"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-04d4144a98004848b05773d632d96263a2e6d81021bd270ec219984ee48ace1a2b2dad74d8eaf207fc13badd89ec1ca75e17d73c683147068b14a72f74f96f4b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-04d4144a98004848b05773d632d96263a2e6d81021bd270ec219984ee48ace1a2b2dad74d8eaf207fc13badd89ec1ca75e17d73c683147068b14a72f74f96f4b"' :
                                        'id="xs-injectables-links-module-UsersModule-04d4144a98004848b05773d632d96263a2e6d81021bd270ec219984ee48ace1a2b2dad74d8eaf207fc13badd89ec1ca75e17d73c683147068b14a72f74f96f4b"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/createPostMetaOptionDto.html" data-type="entity-link" >createPostMetaOptionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePostDto.html" data-type="entity-link" >UpdatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});