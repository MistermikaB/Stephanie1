(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        s = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (w) {
                            var x = w['get']('player');
                            return x && x['get']('viewerArea') == u;
                        })['map'](function (w) {
                            return w['get']('media')['get']('playList');
                        });
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"scripts":{"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setLocale":TDV.Tour.Script.setLocale,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"openLink":TDV.Tour.Script.openLink,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"cloneBindings":TDV.Tour.Script.cloneBindings,"clone":TDV.Tour.Script.clone,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"showWindow":TDV.Tour.Script.showWindow,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"initQuiz":TDV.Tour.Script.initQuiz,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getComponentByName":TDV.Tour.Script.getComponentByName,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getPixels":TDV.Tour.Script.getPixels,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"executeJS":TDV.Tour.Script.executeJS,"getOverlays":TDV.Tour.Script.getOverlays,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"historyGoBack":TDV.Tour.Script.historyGoBack,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"quizShowScore":TDV.Tour.Script.quizShowScore,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"quizStart":TDV.Tour.Script.quizStart,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"toggleVR":TDV.Tour.Script.toggleVR,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setValue":TDV.Tour.Script.setValue,"getMediaByName":TDV.Tour.Script.getMediaByName,"init":TDV.Tour.Script.init,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"resumePlayers":TDV.Tour.Script.resumePlayers,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"quizFinish":TDV.Tour.Script.quizFinish,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"historyGoForward":TDV.Tour.Script.historyGoForward,"showPopupImage":TDV.Tour.Script.showPopupImage,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"enableVR":TDV.Tour.Script.enableVR,"startMeasurement":TDV.Tour.Script.startMeasurement,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"mixObject":TDV.Tour.Script.mixObject,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"textToSpeech":TDV.Tour.Script.textToSpeech,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"disableVR":TDV.Tour.Script.disableVR,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getKey":TDV.Tour.Script.getKey,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"registerKey":TDV.Tour.Script.registerKey,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"downloadFile":TDV.Tour.Script.downloadFile,"setMapLocation":TDV.Tour.Script.setMapLocation,"shareSocial":TDV.Tour.Script.shareSocial,"existsKey":TDV.Tour.Script.existsKey,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"isPanorama":TDV.Tour.Script.isPanorama,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"playAudioList":TDV.Tour.Script.playAudioList,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getMainViewer":TDV.Tour.Script.getMainViewer,"unregisterKey":TDV.Tour.Script.unregisterKey,"createTween":TDV.Tour.Script.createTween,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"translate":TDV.Tour.Script.translate,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"initAnalytics":TDV.Tour.Script.initAnalytics,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility},"hash": "9ffb149fe70dfa9c2580b1af89447f027989c1f9d05df633e290ca84749a0b2d", "definitions": [{"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","pitch":-0.95,"yaw":19.52},"id":"panorama_BC89C6F2_B07F_92E0_41D5_C3A8D005B364_camera","enterPointingToHorizon":true},{"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","pitch":0,"yaw":0},"id":"panorama_BB48BEE6_B07F_92E3_419D_4D55061FA7AB_camera","enterPointingToHorizon":true},{"class":"Panorama","thumbnailUrl":"media/panorama_BB4AE54B_B07F_B721_41DE_BE67C29CEAD3_t.jpg","label":trans('panorama_BB4AE54B_B07F_B721_41DE_BE67C29CEAD3.label'),"hfov":360,"hfovMin":"120%","overlays":["this.overlay_A145D4CA_B089_B520_41DF_682F77316A80","this.overlay_A2A02233_B08B_8D60_41E5_E13775E522A8"],"id":"panorama_BB4AE54B_B07F_B721_41DE_BE67C29CEAD3","vfov":180,"data":{"label":"Panorama2"},"adjacentPanoramas":[{"class":"AdjacentPanorama","yaw":34.09,"distance":7.16,"data":{"overlayID":"overlay_A145D4CA_B089_B520_41DF_682F77316A80"},"panorama":"this.panorama_BB48B167_B07F_8FE1_41DD_DBB4405BB9AC","select":"this.overlay_A145D4CA_B089_B520_41DF_682F77316A80.get('areas').forEach(function(a){ a.trigger('click') })"}],"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_BB4AE54B_B07F_B721_41DE_BE67C29CEAD3_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","width":18432,"url":"media/panorama_BB4AE54B_B07F_B721_41DE_BE67C29CEAD3_0/{face}/0/{row}_{column}.jpg","rowCount":6,"height":3072,"tags":"ondemand","colCount":36},{"class":"TiledImageResourceLevel","width":9216,"url":"media/panorama_BB4AE54B_B07F_B721_41DE_BE67C29CEAD3_0/{face}/1/{row}_{column}.jpg","rowCount":3,"height":1536,"tags":"ondemand","colCount":18},{"class":"TiledImageResourceLevel","width":6144,"url":"media/panorama_BB4AE54B_B07F_B721_41DE_BE67C29CEAD3_0/{face}/2/{row}_{column}.jpg","rowCount":2,"height":1024,"tags":"ondemand","colCount":12},{"class":"TiledImageResourceLevel","width":3072,"url":"media/panorama_BB4AE54B_B07F_B721_41DE_BE67C29CEAD3_0/{face}/3/{row}_{column}.jpg","rowCount":1,"height":512,"tags":["ondemand","preload"],"colCount":6}]}}],"hfovMax":130},{"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","pitch":0,"yaw":0},"id":"panorama_BB4AE54B_B07F_B721_41DE_BE67C29CEAD3_camera","enterPointingToHorizon":true},{"class":"Panorama","thumbnailUrl":"media/panorama_BB48B167_B07F_8FE1_41DD_DBB4405BB9AC_t.jpg","label":trans('panorama_BB48B167_B07F_8FE1_41DD_DBB4405BB9AC.label'),"hfov":360,"hfovMin":"120%","overlays":["this.overlay_A242D709_B08A_9321_41DB_BEB07D1EF848"],"id":"panorama_BB48B167_B07F_8FE1_41DD_DBB4405BB9AC","vfov":180,"data":{"label":"Panorama3"},"adjacentPanoramas":[{"class":"AdjacentPanorama","yaw":4.81,"distance":10.02,"data":{"overlayID":"overlay_A242D709_B08A_9321_41DB_BEB07D1EF848"},"panorama":"this.panorama_BB48BEE6_B07F_92E3_419D_4D55061FA7AB","select":"this.overlay_A242D709_B08A_9321_41DB_BEB07D1EF848.get('areas').forEach(function(a){ a.trigger('click') })"}],"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_BB48B167_B07F_8FE1_41DD_DBB4405BB9AC_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","width":18432,"url":"media/panorama_BB48B167_B07F_8FE1_41DD_DBB4405BB9AC_0/{face}/0/{row}_{column}.jpg","rowCount":6,"height":3072,"tags":"ondemand","colCount":36},{"class":"TiledImageResourceLevel","width":9216,"url":"media/panorama_BB48B167_B07F_8FE1_41DD_DBB4405BB9AC_0/{face}/1/{row}_{column}.jpg","rowCount":3,"height":1536,"tags":"ondemand","colCount":18},{"class":"TiledImageResourceLevel","width":6144,"url":"media/panorama_BB48B167_B07F_8FE1_41DD_DBB4405BB9AC_0/{face}/2/{row}_{column}.jpg","rowCount":2,"height":1024,"tags":"ondemand","colCount":12},{"class":"TiledImageResourceLevel","width":3072,"url":"media/panorama_BB48B167_B07F_8FE1_41DD_DBB4405BB9AC_0/{face}/3/{row}_{column}.jpg","rowCount":1,"height":512,"tags":["ondemand","preload"],"colCount":6}]}}],"hfovMax":130},{"class":"Panorama","thumbnailUrl":"media/panorama_BC89C6F2_B07F_92E0_41D5_C3A8D005B364_t.jpg","label":trans('panorama_BC89C6F2_B07F_92E0_41D5_C3A8D005B364.label'),"hfov":360,"hfovMin":"120%","overlays":["this.overlay_A07C81E4_B087_8EE7_41E0_872BBCC13302"],"id":"panorama_BC89C6F2_B07F_92E0_41D5_C3A8D005B364","vfov":180,"data":{"label":"Panorama1"},"adjacentPanoramas":[{"class":"AdjacentPanorama","yaw":23.36,"distance":3.62,"data":{"overlayID":"overlay_A07C81E4_B087_8EE7_41E0_872BBCC13302"},"panorama":"this.panorama_BB4AE54B_B07F_B721_41DE_BE67C29CEAD3","select":"this.overlay_A07C81E4_B087_8EE7_41E0_872BBCC13302.get('areas').forEach(function(a){ a.trigger('click') })"}],"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_BC89C6F2_B07F_92E0_41D5_C3A8D005B364_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","width":18432,"url":"media/panorama_BC89C6F2_B07F_92E0_41D5_C3A8D005B364_0/{face}/0/{row}_{column}.jpg","rowCount":6,"height":3072,"tags":"ondemand","colCount":36},{"class":"TiledImageResourceLevel","width":9216,"url":"media/panorama_BC89C6F2_B07F_92E0_41D5_C3A8D005B364_0/{face}/1/{row}_{column}.jpg","rowCount":3,"height":1536,"tags":"ondemand","colCount":18},{"class":"TiledImageResourceLevel","width":6144,"url":"media/panorama_BC89C6F2_B07F_92E0_41D5_C3A8D005B364_0/{face}/2/{row}_{column}.jpg","rowCount":2,"height":1024,"tags":"ondemand","colCount":12},{"class":"TiledImageResourceLevel","width":3072,"url":"media/panorama_BC89C6F2_B07F_92E0_41D5_C3A8D005B364_0/{face}/3/{row}_{column}.jpg","rowCount":1,"height":512,"tags":["ondemand","preload"],"colCount":6}]}}],"hfovMax":130},{"class":"PlayList","items":[{"class":"PanoramaPlayListItem","camera":"this.panorama_BC89C6F2_B07F_92E0_41D5_C3A8D005B364_camera","media":"this.panorama_BC89C6F2_B07F_92E0_41D5_C3A8D005B364","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"class":"PanoramaPlayListItem","camera":"this.panorama_BB4AE54B_B07F_B721_41DE_BE67C29CEAD3_camera","media":"this.panorama_BB4AE54B_B07F_B721_41DE_BE67C29CEAD3","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"class":"PanoramaPlayListItem","camera":"this.panorama_BB48B167_B07F_8FE1_41DD_DBB4405BB9AC_camera","media":"this.panorama_BB48B167_B07F_8FE1_41DD_DBB4405BB9AC","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"class":"PanoramaPlayListItem","camera":"this.panorama_BB48BEE6_B07F_92E3_419D_4D55061FA7AB_camera","media":"this.panorama_BB48BEE6_B07F_92E3_419D_4D55061FA7AB","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)"},{"class":"PanoramaPlayListItem","camera":"this.panorama_BB4F1B23_B07F_F360_41E4_0E235F9D7DCB_camera","media":"this.panorama_BB4F1B23_B07F_F360_41E4_0E235F9D7DCB","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 0)"}],"id":"mainPlayList"},{"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","pitch":0,"yaw":0},"id":"panorama_BB48B167_B07F_8FE1_41DD_DBB4405BB9AC_camera","enterPointingToHorizon":true},{"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","pitch":0,"yaw":0},"id":"panorama_BB4F1B23_B07F_F360_41E4_0E235F9D7DCB_camera","enterPointingToHorizon":true},{"itemLabelFontStyle":"normal","backgroundColorRatios":[0],"minHeight":20,"selectedItemLabelFontColor":"#CC6600","minWidth":20,"itemBackgroundColor":[],"backgroundOpacity":0.75,"toolTipPaddingLeft":6,"left":"0.74%","playList":"this.ThumbnailList_A97115F1_B099_B6E1_41CC_B4DBD35E3953_playlist","itemLabelFontFamily":"Arial","toolTipBackgroundColor":"#F6F6F6","itemThumbnailHeight":75,"selectedItemLabelFontWeight":"bold","itemLabelFontSize":14,"toolTipShadowColor":"#333333","itemBackgroundColorRatios":[],"data":{"name":"ThumbnailList35762"},"itemPaddingRight":3,"toolTipFontColor":"#606060","rollOverItemLabelFontWeight":"bold","toolTipBorderColor":"#767676","toolTipTextShadowColor":"#000000","itemThumbnailShadowSpread":1,"itemLabelFontColor":"#000000","propagateClick":false,"paddingTop":10,"paddingBottom":10,"itemLabelFontWeight":"normal","itemBorderRadius":0,"itemThumbnailScaleMode":"fit_outside","itemLabelGap":8,"tabIndex":0,"backgroundColor":["#FFFFFF"],"itemBackgroundOpacity":0,"id":"ThumbnailList_A97115F1_B099_B6E1_41CC_B4DBD35E3953","itemThumbnailWidth":100,"itemThumbnailShadowColor":"#000000","itemPaddingBottom":3,"class":"ThumbnailList","paddingLeft":20,"itemLabelTextDecoration":"none","itemThumbnailBorderRadius":5,"itemPaddingLeft":3,"scrollBarMargin":2,"paddingRight":20,"itemThumbnailOpacity":1,"rollOverItemBackgroundOpacity":0,"toolTipPaddingBottom":4,"itemThumbnailShadowOpacity":0.27,"bottom":"2.6%","width":"55.684%","itemThumbnailShadow":true,"itemBackgroundColorDirection":"vertical","toolTipPaddingRight":6,"toolTipPaddingTop":4,"height":112.4,"itemPaddingTop":3,"toolTipFontFamily":"Arial","scrollBarColor":"#FFFFFF","itemThumbnailShadowBlurRadius":8,"layout":"horizontal","borderRadius":5,"gap":13},{"class":"PlayList","items":[{"class":"PanoramaPlayListItem","camera":"this.panorama_BC89C6F2_B07F_92E0_41D5_C3A8D005B364_camera","media":"this.panorama_BC89C6F2_B07F_92E0_41D5_C3A8D005B364","player":"this.MainViewerPanoramaPlayer"},{"class":"PanoramaPlayListItem","camera":"this.panorama_BB4AE54B_B07F_B721_41DE_BE67C29CEAD3_camera","media":"this.panorama_BB4AE54B_B07F_B721_41DE_BE67C29CEAD3","player":"this.MainViewerPanoramaPlayer"},{"class":"PanoramaPlayListItem","camera":"this.panorama_BB48B167_B07F_8FE1_41DD_DBB4405BB9AC_camera","media":"this.panorama_BB48B167_B07F_8FE1_41DD_DBB4405BB9AC","player":"this.MainViewerPanoramaPlayer"},{"class":"PanoramaPlayListItem","camera":"this.panorama_BB48BEE6_B07F_92E3_419D_4D55061FA7AB_camera","media":"this.panorama_BB48BEE6_B07F_92E3_419D_4D55061FA7AB","player":"this.MainViewerPanoramaPlayer"},{"class":"PanoramaPlayListItem","camera":"this.panorama_BB4F1B23_B07F_F360_41E4_0E235F9D7DCB_camera","media":"this.panorama_BB4F1B23_B07F_F360_41E4_0E235F9D7DCB","player":"this.MainViewerPanoramaPlayer"}],"id":"ThumbnailList_A97115F1_B099_B6E1_41CC_B4DBD35E3953_playlist"},{"class":"Panorama","thumbnailUrl":"media/panorama_BB4F1B23_B07F_F360_41E4_0E235F9D7DCB_t.jpg","label":trans('panorama_BB4F1B23_B07F_F360_41E4_0E235F9D7DCB.label'),"hfov":360,"hfovMin":"120%","overlays":["this.overlay_A31F9DA3_B0F9_9761_41A4_DBF2C0EA66A4","this.overlay_A264597D_B0FA_BFE0_41E0_7976C2085C59"],"id":"panorama_BB4F1B23_B07F_F360_41E4_0E235F9D7DCB","vfov":180,"data":{"label":"Panorame6"},"adjacentPanoramas":[{"class":"AdjacentPanorama","yaw":48.22,"distance":9.45,"data":{"overlayID":"overlay_A264597D_B0FA_BFE0_41E0_7976C2085C59"},"panorama":"this.panorama_BC89C6F2_B07F_92E0_41D5_C3A8D005B364","select":"this.overlay_A264597D_B0FA_BFE0_41E0_7976C2085C59.get('areas').forEach(function(a){ a.trigger('click') })"}],"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_BB4F1B23_B07F_F360_41E4_0E235F9D7DCB_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","width":18432,"url":"media/panorama_BB4F1B23_B07F_F360_41E4_0E235F9D7DCB_0/{face}/0/{row}_{column}.jpg","rowCount":6,"height":3072,"tags":"ondemand","colCount":36},{"class":"TiledImageResourceLevel","width":9216,"url":"media/panorama_BB4F1B23_B07F_F360_41E4_0E235F9D7DCB_0/{face}/1/{row}_{column}.jpg","rowCount":3,"height":1536,"tags":"ondemand","colCount":18},{"class":"TiledImageResourceLevel","width":6144,"url":"media/panorama_BB4F1B23_B07F_F360_41E4_0E235F9D7DCB_0/{face}/2/{row}_{column}.jpg","rowCount":2,"height":1024,"tags":"ondemand","colCount":12},{"class":"TiledImageResourceLevel","width":3072,"url":"media/panorama_BB4F1B23_B07F_F360_41E4_0E235F9D7DCB_0/{face}/3/{row}_{column}.jpg","rowCount":1,"height":512,"tags":["ondemand","preload"],"colCount":6}]}}],"hfovMax":130},{"horizontalAlign":"center","click":"this.openLink(this.translate('LinkBehaviour_AA0E1749_B087_F321_41D1_BC9E1BAE6415.source'), '_blank')","minHeight":1,"verticalAlign":"middle","minWidth":1,"id":"Image_AADE1D43_B089_B721_41C1_BBF021D2CD61","backgroundOpacity":0,"right":"0.82%","class":"Image","url":trans('Image_AADE1D43_B089_B721_41C1_BBF021D2CD61.url'),"data":{"name":"Image13496"},"width":"11.137%","top":"1.62%","height":"6.946%","scaleMode":"fit_inside","propagateClick":false},{"height":"100%","playbackBarHeadWidth":6,"progressBackgroundColorRatios":[0],"subtitlesBackgroundOpacity":0.2,"firstTransitionDuration":0,"minHeight":50,"subtitlesTextShadowOpacity":1,"progressRight":"33%","minWidth":100,"playbackBarProgressBorderSize":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"playbackBarRight":0,"toolTipPaddingLeft":6,"progressOpacity":0.7,"subtitlesBorderColor":"#FFFFFF","progressBarBackgroundColorDirection":"horizontal","playbackBarBackgroundOpacity":1,"progressBorderRadius":2,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBarBackgroundColorRatios":[0],"toolTipShadowColor":"#333138","progressBarBorderColor":"#000000","progressLeft":"33%","data":{"name":"Main Viewer"},"playbackBarProgressBackgroundColorRatios":[0],"toolTipFontColor":"#606060","playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadowBlurRadius":3,"toolTipBorderColor":"#767676","toolTipTextShadowColor":"#000000","subtitlesFontColor":"#FFFFFF","playbackBarHeadHeight":15,"playbackBarLeft":0,"playbackBarBorderColor":"#FFFFFF","toolTipFontSize":"1.11vmin","subtitlesTop":0,"subtitlesTextShadowHorizontalLength":1,"playbackBarBorderRadius":0,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","playbackBarProgressBorderColor":"#000000","playbackBarHeadBorderSize":0,"subtitlesFontFamily":"Arial","progressBorderColor":"#000000","propagateClick":false,"progressBarBackgroundColor":["#3399FF"],"subtitlesTextShadowColor":"#000000","surfaceReticleColor":"#FFFFFF","playbackBarHeadShadow":true,"vrPointerColor":"#FFFFFF","vrPointerSelectionColor":"#FF6600","playbackBarHeadBackgroundColor":["#111111","#666666"],"vrThumbstickRotationStep":20,"id":"MainViewer","progressBackgroundColor":["#000000"],"playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","subtitlesGap":0,"vrPointerSelectionTime":2000,"subtitlesBottom":50,"playbackBarBorderSize":0,"subtitlesTextShadowVerticalLength":1,"class":"ViewerArea","playbackBarBottom":5,"subtitlesBackgroundColor":"#000000","toolTipPaddingRight":6,"progressBottom":10,"toolTipFontFamily":"Arial","progressHeight":2,"progressBorderSize":0,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipPaddingBottom":4,"toolTipPaddingTop":4,"progressBarBorderRadius":2,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesFontSize":"3vmin","playbackBarHeight":10,"width":"100%","progressBarBorderSize":0},{"class":"PanoramaPlayer","displayPlaybackBar":true,"aaEnabled":true,"arrowKeysAction":"translate","mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","viewerArea":"this.MainViewer","id":"MainViewerPanoramaPlayer"},{"class":"Panorama","thumbnailUrl":"media/panorama_BB48BEE6_B07F_92E3_419D_4D55061FA7AB_t.jpg","label":trans('panorama_BB48BEE6_B07F_92E3_419D_4D55061FA7AB.label'),"hfov":360,"hfovMin":"120%","overlays":["this.overlay_A22A0FEE_B08B_B2E3_41B3_AE79501A51A1","this.overlay_A25E0475_B08B_95E1_41B1_053DA1959198","this.overlay_A49AC27E_B089_8DE0_41D6_4DF58A023873"],"id":"panorama_BB48BEE6_B07F_92E3_419D_4D55061FA7AB","vfov":180,"data":{"label":"Panorama4"},"adjacentPanoramas":[{"class":"AdjacentPanorama","yaw":18.02,"distance":12.13,"data":{"overlayID":"overlay_A22A0FEE_B08B_B2E3_41B3_AE79501A51A1"},"panorama":"this.panorama_BB4F1B23_B07F_F360_41E4_0E235F9D7DCB","select":"this.overlay_A22A0FEE_B08B_B2E3_41B3_AE79501A51A1.get('areas').forEach(function(a){ a.trigger('click') })"}],"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_BB48BEE6_B07F_92E3_419D_4D55061FA7AB_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","width":18432,"url":"media/panorama_BB48BEE6_B07F_92E3_419D_4D55061FA7AB_0/{face}/0/{row}_{column}.jpg","rowCount":6,"height":3072,"tags":"ondemand","colCount":36},{"class":"TiledImageResourceLevel","width":9216,"url":"media/panorama_BB48BEE6_B07F_92E3_419D_4D55061FA7AB_0/{face}/1/{row}_{column}.jpg","rowCount":3,"height":1536,"tags":"ondemand","colCount":18},{"class":"TiledImageResourceLevel","width":6144,"url":"media/panorama_BB48BEE6_B07F_92E3_419D_4D55061FA7AB_0/{face}/2/{row}_{column}.jpg","rowCount":2,"height":1024,"tags":"ondemand","colCount":12},{"class":"TiledImageResourceLevel","width":3072,"url":"media/panorama_BB48BEE6_B07F_92E3_419D_4D55061FA7AB_0/{face}/3/{row}_{column}.jpg","rowCount":1,"height":512,"tags":["ondemand","preload"],"colCount":6}]}}],"hfovMax":130},{"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_A14AA4D2_B089_B520_41E1_BC19AF5CD3C2"],"items":[{"class":"HotspotPanoramaOverlayImage","yaw":34.09,"distance":100,"pitch":-13.35,"hfov":10.5,"image":"this.AnimatedImageResource_A7BAE37A_B0B9_93E3_41DF_05DB3D070821","scaleMode":"fit_inside","vfov":9.45,"data":{"label":"Arrow 01"}}],"enabledInCardboard":true,"data":{"label":"Arrow 01","hasPanoramaAction":true},"useHandCursor":true,"maps":[],"id":"overlay_A145D4CA_B089_B520_41DF_682F77316A80"},{"class":"HotspotPanoramaOverlay","items":[{"class":"HotspotPanoramaOverlayImage","yaw":48.17,"distance":50,"pitch":4.25,"hfov":6.2,"image":"this.res_A200751C_B086_9727_41C7_7C20AF9B481A","scaleMode":"fit_inside","vfov":3.37,"data":{"label":"Image"}}],"areas":["this.HotspotPanoramaOverlayArea_A2F47246_B08B_8D23_41E4_C7F1EBA719EF"],"enabledInCardboard":true,"data":{"label":"Image"},"useHandCursor":true,"maps":[],"id":"overlay_A2A02233_B08B_8D60_41E5_E13775E522A8"},{"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_A3A0E729_B08A_9360_41D0_E39E9C4672AB"],"items":[{"class":"HotspotPanoramaOverlayImage","yaw":4.81,"distance":100,"pitch":-9.62,"hfov":10.5,"image":"this.AnimatedImageResource_A7B4937B_B0B9_93E1_41CA_84B3D03A4C78","scaleMode":"fit_inside","vfov":9.45,"data":{"label":"Arrow 01"}}],"enabledInCardboard":true,"data":{"label":"Arrow 01","hasPanoramaAction":true},"useHandCursor":true,"maps":[],"id":"overlay_A242D709_B08A_9321_41DB_BEB07D1EF848"},{"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_A1FC225F_B087_8D21_41AC_771916513B82"],"items":[{"class":"HotspotPanoramaOverlayImage","yaw":23.36,"distance":100,"pitch":-25.16,"hfov":10.5,"image":"this.AnimatedImageResource_A7BB337A_B0B9_93E3_41DE_6BBCF9BFFAE4","scaleMode":"fit_inside","vfov":9.45,"data":{"label":"Arrow 01"}}],"enabledInCardboard":true,"data":{"label":"Arrow 01","hasPanoramaAction":true},"useHandCursor":true,"maps":[],"id":"overlay_A07C81E4_B087_8EE7_41E0_872BBCC13302"},{"class":"HotspotPanoramaOverlay","items":[{"class":"HotspotPanoramaOverlayImage","yaw":0.89,"distance":50,"pitch":2.51,"hfov":7.52,"image":"this.res_A200751C_B086_9727_41C7_7C20AF9B481A","scaleMode":"fit_inside","vfov":3.84,"data":{"label":"Image"}}],"areas":["this.HotspotPanoramaOverlayArea_A2EA8E7B_B0F9_95E1_41D0_67FA55806A57"],"enabledInCardboard":true,"data":{"label":"Image"},"useHandCursor":true,"maps":[],"id":"overlay_A31F9DA3_B0F9_9761_41A4_DBF2C0EA66A4"},{"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_A3AD9998_B0FA_BF2F_41DA_228A8C15B214"],"items":[{"class":"HotspotPanoramaOverlayImage","yaw":48.22,"distance":50,"pitch":-10.18,"hfov":10.5,"image":"this.AnimatedImageResource_A7B3937E_B0B9_93E3_41E4_AB809A87F2F1","scaleMode":"fit_inside","vfov":6.75,"data":{"label":"Arrow 05a Right-Up"}}],"enabledInCardboard":true,"data":{"label":"Arrow 05a Right-Up","hasPanoramaAction":true},"useHandCursor":true,"maps":[],"id":"overlay_A264597D_B0FA_BFE0_41E0_7976C2085C59"},{"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_A215DFF4_B08B_B2E0_41CA_AB585DB2557E"],"items":[{"class":"HotspotPanoramaOverlayImage","yaw":18.02,"distance":100,"pitch":-7.97,"hfov":10.5,"image":"this.AnimatedImageResource_A7BA737B_B0B9_93E1_41E3_7C9029CA70FC","scaleMode":"fit_inside","vfov":9.45,"data":{"label":"Arrow 01"}}],"enabledInCardboard":true,"data":{"label":"Arrow 01","hasPanoramaAction":true},"useHandCursor":true,"maps":[],"id":"overlay_A22A0FEE_B08B_B2E3_41B3_AE79501A51A1"},{"class":"HotspotPanoramaOverlay","items":[{"class":"HotspotPanoramaOverlayImage","yaw":49.15,"distance":50,"pitch":1.77,"hfov":3.66,"image":"this.res_A200751C_B086_9727_41C7_7C20AF9B481A","scaleMode":"fit_inside","vfov":2.95,"data":{"label":"Image"}}],"areas":["this.HotspotPanoramaOverlayArea_A2B1E543_B08B_9720_41C0_90B7279549F2"],"enabledInCardboard":true,"data":{"label":"Image"},"useHandCursor":true,"maps":[],"id":"overlay_A25E0475_B08B_95E1_41B1_053DA1959198"},{"class":"HotspotPanoramaOverlay","items":[{"class":"HotspotPanoramaOverlayImage","yaw":-22.82,"distance":50,"pitch":1.22,"hfov":4.09,"image":"this.res_A200751C_B086_9727_41C7_7C20AF9B481A","scaleMode":"fit_inside","vfov":3.2,"data":{"label":"Image"}}],"areas":["this.HotspotPanoramaOverlayArea_A487C292_B089_8D23_41D4_82D735925B8B"],"enabledInCardboard":true,"data":{"label":"Image"},"useHandCursor":true,"maps":[],"id":"overlay_A49AC27E_B089_8DE0_41D6_4DF58A023873"},{"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","mapColor":"any","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_A14AA4D2_B089_B520_41E1_BC19AF5CD3C2"},{"class":"AnimatedImageResource","frameCount":9,"frameDuration":62,"finalFrame":"first","rowCount":3,"colCount":3,"levels":[{"class":"ImageResourceLevel","width":300,"url":"media/res_A20F151A_B086_9723_41DB_6BC28AA7F8A0_0.png","height":270}],"id":"AnimatedImageResource_A7BAE37A_B0B9_93E3_41DF_05DB3D070821"},{"class":"ImageResource","id":"res_A200751C_B086_9727_41C7_7C20AF9B481A","levels":[{"class":"ImageResourceLevel","width":123,"url":"media/res_A200751C_B086_9727_41C7_7C20AF9B481A_0.png","height":104}]},{"class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_A3C9CBE8_B08E_92E0_41BA_F4250D48AB8E.source'), '_blank')","mapColor":"any","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_A2F47246_B08B_8D23_41E4_C7F1EBA719EF"},{"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 3)","mapColor":"any","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_A3A0E729_B08A_9360_41D0_E39E9C4672AB"},{"class":"AnimatedImageResource","frameCount":9,"frameDuration":62,"finalFrame":"first","rowCount":3,"colCount":3,"levels":[{"class":"ImageResourceLevel","width":300,"url":"media/res_A20F151A_B086_9723_41DB_6BC28AA7F8A0_0.png","height":270}],"id":"AnimatedImageResource_A7B4937B_B0B9_93E1_41CA_84B3D03A4C78"},{"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"any","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_A1FC225F_B087_8D21_41AC_771916513B82"},{"class":"AnimatedImageResource","frameCount":9,"frameDuration":62,"finalFrame":"first","rowCount":3,"colCount":3,"levels":[{"class":"ImageResourceLevel","width":300,"url":"media/res_A20F151A_B086_9723_41DB_6BC28AA7F8A0_0.png","height":270}],"id":"AnimatedImageResource_A7BB337A_B0B9_93E3_41DE_6BBCF9BFFAE4"},{"class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_A3EF99F3_B0FA_BEE0_41E2_E92F8DAC1BF9.source'), '_blank')","mapColor":"any","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_A2EA8E7B_B0F9_95E1_41D0_67FA55806A57"},{"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","mapColor":"any","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_A3AD9998_B0FA_BF2F_41DA_228A8C15B214"},{"class":"AnimatedImageResource","frameCount":24,"frameDuration":41,"finalFrame":"first","rowCount":6,"colCount":4,"levels":[{"class":"ImageResourceLevel","width":560,"url":"media/res_A2454662_B0F9_75E3_41E1_7B244C069618_0.png","height":540}],"id":"AnimatedImageResource_A7B3937E_B0B9_93E3_41E4_AB809A87F2F1"},{"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 4)","mapColor":"any","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_A215DFF4_B08B_B2E0_41CA_AB585DB2557E"},{"class":"AnimatedImageResource","frameCount":9,"frameDuration":62,"finalFrame":"first","rowCount":3,"colCount":3,"levels":[{"class":"ImageResourceLevel","width":300,"url":"media/res_A20F151A_B086_9723_41DB_6BC28AA7F8A0_0.png","height":270}],"id":"AnimatedImageResource_A7BA737B_B0B9_93E1_41E3_7C9029CA70FC"},{"class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_A3E99652_B08A_9520_41DD_ACE99355AFF1.source'), '_blank')","mapColor":"any","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_A2B1E543_B08B_9720_41C0_90B7279549F2"},{"class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_A4E43341_B086_F321_41C8_9128C0214F60.source'), '_blank')","mapColor":"any","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_A487C292_B089_8D23_41D4_82D735925B8B"}],"backgroundColorRatios":[0],"minHeight":0,"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_A97115F1_B099_B6E1_41CC_B4DBD35E3953_playlist]); this.syncPlaylists([this.ThumbnailList_A97115F1_B099_B6E1_41CC_B4DBD35E3953_playlist,this.mainPlayList]); this.syncPlaylists([this.ThumbnailList_A97115F1_B099_B6E1_41CC_B4DBD35E3953_playlist,this.mainPlayList]); this.syncPlaylists([this.ThumbnailList_A97115F1_B099_B6E1_41CC_B4DBD35E3953_playlist,this.mainPlayList]); this.syncPlaylists([this.ThumbnailList_A97115F1_B099_B6E1_41CC_B4DBD35E3953_playlist,this.mainPlayList]); this.syncPlaylists([this.ThumbnailList_A97115F1_B099_B6E1_41CC_B4DBD35E3953_playlist,this.mainPlayList])","minWidth":0,"backgroundColor":["#FFFFFF"],"data":{"locales":{"es":"locale/es.txt"},"displayTooltipInTouchScreens":true,"history":{},"name":"Player475","textToSpeechConfig":{"rate":1,"pitch":1,"speechOnTooltip":false,"speechOnInfoWindow":false,"volume":1,"stopBackgroundAudio":false,"speechOnQuizQuestion":false},"defaultLocale":"es"},"children":["this.MainViewer","this.Image_AADE1D43_B089_B721_41C1_BBF021D2CD61","this.ThumbnailList_A97115F1_B099_B6E1_41CC_B4DBD35E3953"],"id":"rootPlayer","class":"Player","scrollBarMargin":2,"width":"100%","height":"100%","scrollBarColor":"#000000","gap":10,"layout":"absolute","propagateClick":false,"defaultMenu":["fullscreen","mute","rotation"]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.15.js.map
})();
//Generated with v2024.0.15, Tue Dec 10 2024