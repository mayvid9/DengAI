
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"245",
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date;return a.getTime()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(new Date).getTime()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=2;return function(a){a.set(\"dimension\"+b,a.get(\"clientId\"))}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(new Date).getTime()+\".\"+Math.random().toString(36).substring(5)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b,c,d){if(a.addEventListener)a.addEventListener(b,c,d);else if(a.attachEvent)a.attachEvent(\"on\"+b,function(b){c.call(a,b)});else if(\"undefined\"===typeof a[\"on\"+b]||null===a[\"on\"+b])a[\"on\"+b]=function(b){c.call(a,b)}}})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_mkto_trk"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],";return a.substring(a.indexOf(\"id:\")+3,a.indexOf(\"\\x26\"))})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=document.location.hostname,a=jQuery(document).find(\"div.secondary\").find(\"h2\");if(\/^pages\\.\/i.test(b)\u0026\u0026a.length)return a.text()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.location.href,b=jQuery(\"#layoutcontent_0_contentmain_0_ctl00_Wizard1_ucWebAppointmentStep1_drpDepartment option:selected\").text(),c=\/\\.org\\\/WebContact\\\/WebAppointment\/i;if(c.test(a))return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.location.href,b=jQuery(\"#layoutcontent_0_contentmain_0_ctl00_drpSubjectMessage option:selected\").text(),c=\/\\.org\\\/WebContact\\\/WebMail\/i;if(c.test(a))return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=document.location.href,a=document.title,c=\/\\\/events\\\/calendar\\\/[a-z 0-9]\/i;if(c.test(b))return a.substring(0,a.lastIndexOf(\"|\")-1)})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_ga"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",11],8,16],".match(\/\\d+\\.\\d+$\/)[0]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"undefined\"===typeof kWidget||null===kWidget?!1:!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"undefined\"===typeof MktoForms2||null===MktoForms2?!1:!0})();"]
    },{
      "function":"__u",
      "vtp_component":"PROTOCOL"
    },{
      "function":"__u",
      "vtp_component":"PATH"
    },{
      "function":"__u",
      "vtp_component":"QUERY"
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT"
    },{
      "function":"__c",
      "vtp_value":"pagename,chatid,ceros"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var protocol=",["escape",["macro",15],8,16],";var path=",["escape",["macro",16],8,16],";var qs=",["escape",["macro",17],8,16],";var hash=",["escape",["macro",18],8,16],";var whitelist=",["escape",["macro",19],8,16],".split(\",\");var cleanedQs=scrubQueryParams(qs);return path+(cleanedQs?\"?\"+cleanedQs:\"\")+(hash?\"#\"+hash:\"\");function scrubQueryParams(str){if(!str)return;str=\"\\x26\"+str;var result=[];var paramKey;var param;var val;var i;for(i=0;i\u003Cwhitelist.length;i++){param=whitelist[i].replace(\/^\\s+\/g,\"\").replace(\/\\s+$\/g,\"\");paramKey=\"\\x26\"+param+\n\"\\x3d\";if(str.indexOf(paramKey)\u003E-1){val=str.split(paramKey)[1].split(\"\\x26\")[0];result.push([param,val].join(\"\\x3d\"))}}return result.join(\"\\x26\")}})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",21],8,16],",b=$(document).find(\"input#search-input\"),c=$(document).find('input[type\\x3d\"search\"]');return a.match(\/my\\.clevelandclinic\\.org\/)\u0026\u0026b.length\u0026\u0026c.length?!0:!1})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"s"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",23],8,16],",b=RegExp(\/\\+\/,\"g\");return a.replace(b,\" \")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=angular.element(document.body).injector().get(\"$state\");return a.current.name})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(document).find(\"h1\"),b=a.length-1;return a=a[b].textContent.trim()})();"]
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"URL",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"URL"
    },{
      "function":"__u",
      "vtp_component":"HOST"
    },{
      "function":"__u",
      "vtp_component":"URL"
    },{
      "function":"__c",
      "vtp_value":"clevelandclinic.org,digestive.ccf.org,giving.ccf.org,exemplo-portal2.net,ceros.com"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"la"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"letter"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"attributes.primaryLocationId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"attributes.physicianId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"attributes.instituteId"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",2]],["map","fieldName","allowLinker","value","true"],["map","fieldName","page","value",["macro",20]]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_autoLinkDomains":["macro",32],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",3]],["map","index","4","dimension",["macro",1]],["map","index","7","dimension",["macro",33]],["map","index","8","dimension",["macro",34]],["map","index","18","dimension",["macro",35]],["map","index","19","dimension",["macro",36]],["map","index","20","dimension",["macro",37]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-718476-2",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"TEXT"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"CLASSES"
    },{
      "function":"__r"
    },{
      "function":"__u"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoName"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-718476-2",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"mktoFormAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"mktoFormDetail"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conversionId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"clickedButton"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"mktoFormId"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",55],
      "vtp_map":["list",["map","key","1497","value","Health Essentials for Parents"],["map","key","1618","value","Integrative \u0026 Lifestyle Medicine e-news Sign Up"],["map","key","1933","value","Health \u0026 Wellness Events \u0026 Programs"],["map","key","3703","value","Digestive Disease \u0026 Surgery Institute Newsletter"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"not_set",
      "vtp_name":"attributes.inputName"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchCheck"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"locationType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"locationSpec"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"locationServ"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"physicianAge"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"physicianCare"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"physicianCity"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"physicianGender"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"resultsCount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchInput"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",31],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"(not set)",
      "vtp_map":["list",["map","key",".*health\\.clevelandclinic.org\\\/(.*)\\?s=","value","Health Essentials"],["map","key",".*consultqd\\.clevelandclinic.org\\\/(.*)?s=","value","Consult QD"],["map","key",".*newsroom\\.clevelandclinic.org\\\/(.*)?s=","value","Newsroom"]]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"entryPointId"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_component":"PATH"
    },{
      "function":"__f"
    },{
      "function":"__e"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ELEMENT"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ID"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"TARGET"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.dataset[full-url]"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"attributes.inputClasses"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    }],
  "tags":[{
      "function":"__cl",
      "tag_id":13
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",38],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":34
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",27],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-718476-2",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":35
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"outbound-article",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",27],
      "vtp_eventLabel":["macro",41],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-718476-2",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":36
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"banner click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",29],
      "vtp_eventLabel":["macro",41],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-718476-2",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":38
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_groupTag":"ccmas00",
      "vtp_useImageTag":false,
      "vtp_activityTag":"cance0",
      "vtp_ordinalType":"STANDARD",
      "vtp_advertiserId":"1646427",
      "vtp_ordinalStandard":["macro",43],
      "vtp_url":["macro",44],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":39
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"tab click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",29],
      "vtp_eventLabel":["macro",27],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-718476-2",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":42
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"email click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",27],
      "vtp_eventLabel":["macro",29],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-718476-2",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":43
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_groupTag":"ortho15",
      "vtp_useImageTag":false,
      "vtp_activityTag":"cccom0",
      "vtp_ordinalType":"STANDARD",
      "vtp_advertiserId":"1646427",
      "vtp_ordinalStandard":["macro",43],
      "vtp_url":["macro",44],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":76
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_groupTag":"ortho15",
      "vtp_useImageTag":false,
      "vtp_activityTag":"cccom00",
      "vtp_ordinalType":"STANDARD",
      "vtp_advertiserId":"1646427",
      "vtp_ordinalStandard":["macro",43],
      "vtp_url":["macro",44],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":77
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_groupTag":"ortho15",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ccmas0",
      "vtp_ordinalType":"STANDARD",
      "vtp_advertiserId":"1646427",
      "vtp_ordinalStandard":["macro",43],
      "vtp_url":["macro",44],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":78
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"click to call",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",27],
      "vtp_eventLabel":["macro",29],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-718476-2",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":79
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"appointment buttons",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"schedule",
      "vtp_eventLabel":["macro",40],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-718476-2",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":85
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"appointment buttons",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"request",
      "vtp_eventLabel":["macro",40],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-718476-2",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":86
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_groupTag":"ccmaspc",
      "vtp_useImageTag":false,
      "vtp_activityTag":"cccom0",
      "vtp_ordinalType":"STANDARD",
      "vtp_advertiserId":"1646427",
      "vtp_ordinalStandard":["macro",43],
      "vtp_url":["macro",44],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":88
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"1004166257",
      "vtp_conversionLabel":"xLHWCMbctGcQ8bjp3gM",
      "vtp_url":["macro",44],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":89
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"1004166257",
      "vtp_conversionLabel":"je6LCP20ymcQ8bjp3gM",
      "vtp_url":["macro",44],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":90
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"1004166257",
      "vtp_conversionLabel":"PiPMCPS7uGcQ8bjp3gM",
      "vtp_url":["macro",44],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":91
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"1004166257",
      "vtp_conversionLabel":"fQkuCIK1uGcQ8bjp3gM",
      "vtp_url":["macro",44],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":92
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"post internal link click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",27],
      "vtp_eventLabel":["macro",41],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-718476-2",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":93
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"1066235518",
      "vtp_conversionLabel":"9_7XCI_Pg2gQ_uy1_AM",
      "vtp_url":["macro",44],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":94
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_groupTag":"ccmassh",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ccmas0",
      "vtp_ordinalType":"STANDARD",
      "vtp_advertiserId":"1646427",
      "vtp_ordinalStandard":["macro",43],
      "vtp_url":["macro",44],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":97
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_groupTag":"ccmassh",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ccmas00",
      "vtp_ordinalType":"STANDARD",
      "vtp_advertiserId":"1646427",
      "vtp_ordinalStandard":["macro",43],
      "vtp_url":["macro",44],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":98
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"1004166257",
      "vtp_conversionLabel":"tjfKCN-dzGgQ8bjp3gM",
      "vtp_url":["macro",44],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":100
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"1004166257",
      "vtp_conversionLabel":"Bo-VCPb7uGgQ8bjp3gM",
      "vtp_url":["macro",44],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":101
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"1004166257",
      "vtp_conversionLabel":"TlRtCJzP2GkQ8bjp3gM",
      "vtp_url":["macro",44],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":102
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"1004166257",
      "vtp_conversionLabel":"fQ5GCPbp8WkQ8bjp3gM",
      "vtp_url":["macro",44],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":103
    },{
      "function":"__flc",
      "vtp_groupTag":"ccbari",
      "vtp_useImageTag":false,
      "vtp_activityTag":"bari-0",
      "vtp_ordinalType":"STANDARD",
      "vtp_advertiserId":"1646427",
      "vtp_ordinalStandard":["macro",43],
      "vtp_url":["macro",44],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":108
    },{
      "function":"__flc",
      "vtp_groupTag":"ccbari",
      "vtp_useImageTag":false,
      "vtp_activityTag":"bari-00",
      "vtp_ordinalType":"STANDARD",
      "vtp_advertiserId":"1646427",
      "vtp_ordinalStandard":["macro",43],
      "vtp_url":["macro",44],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":109
    },{
      "function":"__flc",
      "vtp_groupTag":"ccbari",
      "vtp_useImageTag":false,
      "vtp_activityTag":"bari-000",
      "vtp_ordinalType":"STANDARD",
      "vtp_advertiserId":"1646427",
      "vtp_ordinalStandard":["macro",43],
      "vtp_url":["macro",44],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":110
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"1004166257",
      "vtp_conversionLabel":"3FTpCMGG724Q8bjp3gM",
      "vtp_url":["macro",44],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":111
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"1004166257",
      "vtp_conversionLabel":"5GonCNCz1W4Q8bjp3gM",
      "vtp_url":["macro",44],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":112
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"1004166257",
      "vtp_conversionLabel":"HwW-CJO26W4Q8bjp3gM",
      "vtp_url":["macro",44],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":113
    },{
      "function":"__flc",
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"agcolon",
      "vtp_useImageTag":false,
      "vtp_activityTag":"akron0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"6356982",
      "vtp_ordinalStandard":["macro",43],
      "vtp_url":["macro",44],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":117
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"outbound-article",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",27],
      "vtp_eventLabel":["macro",41],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-718476-2",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":121
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"1004166257",
      "vtp_conversionLabel":"1ymRCML79HEQ8bjp3gM",
      "vtp_url":["macro",44],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":122
    },{
      "function":"__flc",
      "vtp_groupTag":"ccmassh",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ccmas000",
      "vtp_ordinalType":"STANDARD",
      "vtp_advertiserId":"1646427",
      "vtp_ordinalStandard":["macro",43],
      "vtp_url":["macro",44],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":123
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"1004166257",
      "vtp_conversionLabel":"0tzWCPqXinMQ8bjp3gM",
      "vtp_url":["macro",44],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":130
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1004166257",
      "vtp_conversionLabel":"Sg1rCOvpuocBEPG46d4D",
      "vtp_url":["macro",44],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":155
    },{
      "function":"__flc",
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"ccfla",
      "vtp_useImageTag":false,
      "vtp_activityTag":"coron0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"1646427",
      "vtp_ordinalStandard":["macro",43],
      "vtp_url":["macro",44],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":169
    },{
      "function":"__flc",
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"ccfla",
      "vtp_useImageTag":false,
      "vtp_activityTag":"atria0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"1646427",
      "vtp_ordinalStandard":["macro",43],
      "vtp_url":["macro",44],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":170
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1004166257",
      "vtp_conversionLabel":"CwnTCM2WtnwQ8bjp3gM",
      "vtp_url":["macro",44],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":181
    },{
      "function":"__flc",
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"ccmas00",
      "vtp_useImageTag":false,
      "vtp_activityTag":"colon0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"1646427",
      "vtp_ordinalStandard":["macro",43],
      "vtp_url":["macro",44],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":182
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":187
    },{
      "function":"__flc",
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"ccmaspc",
      "vtp_useImageTag":false,
      "vtp_activityTag":"prost0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"1646427",
      "vtp_ordinalStandard":["macro",43],
      "vtp_url":["macro",44],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":193
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1004166257",
      "vtp_conversionLabel":"aRUkCPr7tYMBEPG46d4D",
      "vtp_url":["macro",44],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":195
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"download button",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",38],
      "vtp_eventAction":"download",
      "vtp_eventLabel":["macro",29],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":198
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"video events",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",38],
      "vtp_eventAction":["macro",48],
      "vtp_eventLabel":["macro",49],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":200
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",2]],["map","fieldName","allowLinker","value","true"]],
      "vtp_eventCategory":"form submission",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":["macro",51],
      "vtp_eventLabel":["macro",52],
      "vtp_dimension":["list",["map","index","3","dimension",["macro",3]],["map","index","4","dimension",["macro",1]],["map","index","6","dimension",["macro",53]]],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":203
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"form submission",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",38],
      "vtp_eventAction":"online assessments",
      "vtp_eventLabel":"colon cancer risk assessment",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":204
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"form submission",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",38],
      "vtp_eventAction":"online appointment",
      "vtp_eventLabel":["macro",8],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":205
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"form submission",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",38],
      "vtp_eventAction":"webmail",
      "vtp_eventLabel":["macro",9],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":206
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"events",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",38],
      "vtp_eventAction":"event registration",
      "vtp_eventLabel":["macro",10],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":207
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"email subscriptions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",38],
      "vtp_eventAction":["macro",56],
      "vtp_eventLabel":"main",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":208
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"ceros click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",29],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-718476-2",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":210
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"form tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",38],
      "vtp_eventAction":"online appointment",
      "vtp_eventLabel":["macro",57],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":211
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"form tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",38],
      "vtp_eventAction":"webmail",
      "vtp_eventLabel":["macro",57],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":212
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"form tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",38],
      "vtp_eventAction":"online appointment",
      "vtp_eventLabel":"next page",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":213
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"form tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",38],
      "vtp_eventAction":"online assessment",
      "vtp_eventLabel":["template","colon cancer risk: ",["macro",57]],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":214
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",2]]],
      "vtp_eventCategory":"site search",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",38],
      "vtp_eventAction":["macro",60],
      "vtp_eventLabel":"custom filter",
      "vtp_dimension":["list",["map","index","3","dimension",["macro",3]],["map","index","4","dimension",["macro",1]],["map","index","10","dimension",["macro",61]],["map","index","11","dimension",["macro",62]],["map","index","12","dimension",["macro",63]],["map","index","13","dimension",["macro",64]],["map","index","14","dimension",["macro",65]],["map","index","15","dimension",["macro",66]],["map","index","16","dimension",["macro",67]],["map","index","17","dimension",["macro",68]]],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":237
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",2]]],
      "vtp_eventCategory":"site search",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",38],
      "vtp_eventAction":["macro",60],
      "vtp_eventLabel":["macro",69],
      "vtp_dimension":["list",["map","index","3","dimension",["macro",3]],["map","index","4","dimension",["macro",1]],["map","index","10","dimension",["macro",61]],["map","index","11","dimension",["macro",62]],["map","index","12","dimension",["macro",63]],["map","index","13","dimension",["macro",64]],["map","index","14","dimension",["macro",65]],["map","index","15","dimension",["macro",66]],["map","index","16","dimension",["macro",67]],["map","index","17","dimension",["macro",68]]],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":238
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"site search",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",38],
      "vtp_eventAction":["macro",70],
      "vtp_eventLabel":["macro",24],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":239
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"agortho",
      "vtp_useImageTag":false,
      "vtp_activityTag":"akron0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"6356982",
      "vtp_ordinalStandard":["macro",43],
      "vtp_url":["macro",44],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":240
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1004166257",
      "vtp_conversionLabel":"MUDsCJjV34gBEPG46d4D",
      "vtp_url":["macro",44],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":241
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1004166257",
      "vtp_conversionLabel":"z4jHCIyE2IgBEPG46d4D",
      "vtp_url":["macro",44],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":242
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"form tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",38],
      "vtp_eventAction":"live chat",
      "vtp_eventLabel":["macro",57],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":243
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1004166257",
      "vtp_conversionLabel":"t05PCIfXy4kBEPG46d4D",
      "vtp_url":["macro",44],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":246
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"form submission",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",38],
      "vtp_eventAction":"chat launch",
      "vtp_eventLabel":["macro",71],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":247
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"form submission",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",38],
      "vtp_eventAction":"chat unavailable",
      "vtp_eventLabel":["macro",71],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":248
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"form submission",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",38],
      "vtp_eventAction":"sitecore forms",
      "vtp_eventLabel":["macro",26],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":249
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"cta click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",38],
      "vtp_eventAction":["macro",47],
      "vtp_eventLabel":["macro",40],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":250
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1004166257",
      "vtp_conversionLabel":"XCcsCN-knooBEPG46d4D",
      "vtp_url":["macro",44],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":251
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1004166257",
      "vtp_conversionLabel":"CW6jCM3lkIoBEPG46d4D",
      "vtp_url":["macro",44],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":252
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",2]],["map","fieldName","allowLinker","value","true"]],
      "vtp_eventCategory":"form submission",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"other form",
      "vtp_eventLabel":["template","marketo embedded on ",["macro",29]],
      "vtp_dimension":["list",["map","index","3","dimension",["macro",3]],["map","index","4","dimension",["macro",1]],["map","index","6","dimension",["macro",53]]],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":253
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"108141_39",
      "tag_id":254
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"108141_40",
      "tag_id":255
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"108141_45",
      "tag_id":256
    },{
      "function":"__cl",
      "tag_id":257
    },{
      "function":"__cl",
      "tag_id":258
    },{
      "function":"__cl",
      "tag_id":259
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"108141_54",
      "tag_id":260
    },{
      "function":"__cl",
      "tag_id":261
    },{
      "function":"__cl",
      "tag_id":262
    },{
      "function":"__cl",
      "tag_id":263
    },{
      "function":"__cl",
      "tag_id":264
    },{
      "function":"__cl",
      "tag_id":265
    },{
      "function":"__cl",
      "tag_id":266
    },{
      "function":"__cl",
      "tag_id":267
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"108141_84",
      "tag_id":268
    },{
      "function":"__cl",
      "tag_id":269
    },{
      "function":"__cl",
      "tag_id":270
    },{
      "function":"__cl",
      "tag_id":271
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"108141_93",
      "tag_id":272
    },{
      "function":"__cl",
      "tag_id":273
    },{
      "function":"__cl",
      "tag_id":274
    },{
      "function":"__cl",
      "tag_id":275
    },{
      "function":"__cl",
      "tag_id":276
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"108141_153",
      "tag_id":277
    },{
      "function":"__cl",
      "tag_id":278
    },{
      "function":"__cl",
      "tag_id":279
    },{
      "function":"__cl",
      "tag_id":280
    },{
      "function":"__cl",
      "tag_id":281
    },{
      "function":"__cl",
      "tag_id":282
    },{
      "function":"__cl",
      "tag_id":283
    },{
      "function":"__cl",
      "tag_id":284
    },{
      "function":"__cl",
      "tag_id":285
    },{
      "function":"__cl",
      "tag_id":286
    },{
      "function":"__cl",
      "tag_id":287
    },{
      "function":"__cl",
      "tag_id":288
    },{
      "function":"__cl",
      "tag_id":289
    },{
      "function":"__cl",
      "tag_id":290
    },{
      "function":"__cl",
      "tag_id":291
    },{
      "function":"__cl",
      "tag_id":292
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"108141_250",
      "tag_id":293
    },{
      "function":"__cl",
      "tag_id":294
    },{
      "function":"__cl",
      "tag_id":295
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"108141_280",
      "tag_id":296
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"108141_281",
      "tag_id":297
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"108141_283",
      "tag_id":298
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"108141_285",
      "tag_id":299
    },{
      "function":"__cl",
      "tag_id":300
    },{
      "function":"__cl",
      "tag_id":301
    },{
      "function":"__cl",
      "tag_id":302
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"108141_310",
      "tag_id":303
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"108141_352",
      "tag_id":304
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"108141_354",
      "tag_id":305
    },{
      "function":"__html",
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/d3xl0zyjyljwa.cloudfront.net\/px\/t\/os-152-0.js\"\u003E\u003C\/script\u003E\n",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":17
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function b(){!1===c\u0026\u0026(c=!0,Munchkin.init(\"434-PSA-612\"))}var c=!1,a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/munchkin.marketo.net\/munchkin.js\";a.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||b()};a.onload=b;document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":19
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/siteimproveanalytics.com\/js\/siteanalyze_69111.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":33
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"5283048\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E\u003Cnoscript\u003E\u003Cimg src=\"\/\/bat.bing.com\/action\/0?ti=5283048\u0026amp;Ver=2\" height=\"0\" width=\"0\" style=\"display:none; visibility: hidden;\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":95
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){var c=\"7203\",d=\"Landing_page_StemCell\",b=a.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=\"\/\/o2.eyereturn.com\/?site\\x3d\"+c+\"\\x26page\\x3d\"+d;a=a.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(document);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":104
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Evar _comscore=_comscore||[];_comscore.push({c1:\"2\",c2:\"6036459\"});(function(){var a=document.createElement(\"script\"),b=document.getElementsByTagName(\"script\")[0];a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/sb\":\"http:\/\/b\")+\".scorecardresearch.com\/beacon.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg src=\"http:\/\/b.scorecardresearch.com\/p?c1=2\u0026amp;c2=6036459\u0026amp;cv=2.0\u0026amp;cj=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":105
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cimg src=\"http:\/\/conv.tubemogul.com\/stats\/1\/conv?cpk=8SXGuguQNeJy7ZY3jXnY\u0026amp;cak=3oboBQJO3yj0aFVbmW7t\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":114
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cimg src=\"http:\/\/conv.tubemogul.com\/stats\/1\/conv?cpk=sJ00xoLHVLapH3wxKtSi\u0026amp;cak=3oboBQJO3yj0aFVbmW7t\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":115
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cimg src=\"http:\/\/conv.tubemogul.com\/stats\/1\/conv?cpk=HLxdvrPE2x3GPAnXOTNW\u0026amp;cak=3oboBQJO3yj0aFVbmW7t\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":116
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ealert(\"test\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":120
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar ssaUrl=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"centro.pixel.ad\/iap\/6572666eef04e158\";(new Image).src=ssaUrl;(function(a){var c=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"centro.pixel.ad\/dmp\/asyncPixelSync\",b=a.createElement(\"iframe\");(b.frameElement||b).style.cssText=\"width: 0; height: 0; border: 0;\";b.src=\"javascript:false\";a.body.appendChild(b);a=b.contentWindow.document;a.open().write(\"\\x3cbody onload\\x3d\\\"window.location.href\\x3d'\"+c+\"'\\\"\\x3e\");a.close()})(document);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":124
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar ssaUrl=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"clickserv.basis.net\/conv\/cdec4ec92db16e62\";(new Image).src=ssaUrl;\n(function(a){var c=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"pixel-a.basis.net\/dmp\/asyncPixelSync\",b=a.createElement(\"iframe\");(b.frameElement||b).style.cssText=\"width: 0; height: 0; border: 0;\";b.src=\"javascript:false\";a.body.appendChild(b);a=b.contentWindow.document;a.open().write(\"\\x3cbody onload\\x3d\\\"window.location.href\\x3d'\"+c+\"'\\\"\\x3e\");a.close()})(document);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":183
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cimg src=\"https:\/\/rtd-tm.everesttech.net\/upi\/?sid=nIyGGy5qBZvKxk5xaKqE\u0026amp;cs=1\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":186
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar ssaUrl=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"clickserv.basis.net\/conv\/1ca45ccaa37e4834\";(new Image).src=ssaUrl;\n(function(a){var c=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"pixel-a.basis.net\/dmp\/asyncPixelSync\",b=a.createElement(\"iframe\");(b.frameElement||b).style.cssText=\"width: 0; height: 0; border: 0;\";b.src=\"javascript:false\";a.body.appendChild(b);a=b.contentWindow.document;a.open().write(\"\\x3cbody onload\\x3d\\\"window.location.href\\x3d'\"+c+\"'\\\"\\x3e\");a.close()})(document);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":189
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/cdn.callrail.com\/companies\/726243215\/73fc3dfe082348ad8cbe\/12\/swap.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":190
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nvq9b\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":192
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar ssaUrl=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"clickserv.basis.net\/conv\/2698d2ef9ebdaa59\";(new Image).src=ssaUrl;\n(function(a){var c=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"pixel-a.basis.net\/dmp\/asyncPixelSync\",b=a.createElement(\"iframe\");(b.frameElement||b).style.cssText=\"width: 0; height: 0; border: 0;\";b.src=\"javascript:false\";a.body.appendChild(b);a=b.contentWindow.document;a.open().write(\"\\x3cbody onload\\x3d\\\"window.location.href\\x3d'\"+c+\"'\\\"\\x3e\");a.close()})(document);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":194
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript id=\"marketo-form-tracking\" type=\"text\/gtmscript\"\u003EMktoForms2.whenReady(function(a){var c=Math.floor(1E4+9E5*Math.random())+\".\"+",["escape",["macro",1],8,16],";a.addHiddenFields({googleClientID:",["escape",["macro",12],8,16],"});a.addHiddenFields({convertroID:c});a.vals();a=a.getId();var b=$(document).find(\"div.secondary\").find(\"h2\").text(),d=$(document).find(\"div#form-wrap\").find(\"h3\").text()||$(document).find(\"h1\").text().trim();b=b.length?b:d;dataLayer.push({event:\"marketoFormRender\",url:",["escape",["macro",29],8,16],",mktoFormAction:b.length?\"guide download\":\"other form\",mktoFormId:a,\nconversionId:c,mktoFormDetail:b.length?b:\"other form\"})});MktoForms2.whenReady(function(a){a.onSubmit(function(){var c=$(document).find(\"div.secondary\").find(\"h2\").text(),b=$(document).find(\"div.form-wrap\").find(\"h3\").text();c=c.length?c:b;a.vals();b=a.getId();var d=a.getValues().convertroID;dataLayer.push({event:\"marketoFormSubmit\",url:",["escape",["macro",29],8,16],",mktoFormAction:c.length?\"guide download\":\"other form\",mktoFormId:b,conversionId:d,mktoFormDetail:c.length?c:\"other form\"})})});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":196
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript id=\"gtm-form-listener\" type=\"text\/gtmscript\"\u003E(function(f,n){function r(f,l,b,a){var c;for(c=0;c\u003Cl.length;c++)d(f,l[c],b,a)}function g(){function d(b){var a=b.target,c=a.className,d=a.id,g=c+d;var e=a.id;e=(e=f.querySelector('label[for\\x3d\"'+e+'\"]'))?e.textContent:void 0;e=e||a.id;var m=+new Date;b=b.type;var h=a.type;if(\"password\"!==h)if(\"SELECT\"===a.tagName){var k=a.options[a.selectedIndex];k=k.textContent||k.innerText}else k=\"checkbox\"===h||\"radio\"===h?a.checked:a.value;h=a.form\u0026\u0026a.form.action?a.form.action:\"No Form Target Detected\";var n=\na.name||$(a).attr(\"name\");a=$(a).attr(\"max-checked-leafs\");var p;\"focus\"===b\u0026\u0026(q[g]=m);\"blur\"===b\u0026\u0026(p=m-(q[g]||m));dataLayer.push({event:\"form\"+l(b),attributes:{id:d,label:e,timestamp:m,timing:p,value:k,form:h,inputName:n,inputClasses:c,checkedLeafs:a}})}function l(b){return b.split(\/\\s|-|_\/g).map(function(a){a=a.toLowerCase().split(\"\");a[0]=a[0].toUpperCase();return a.join(\"\")}).join(\" \")}r(f.body,[\"change\",\"blur\",\"focus\"],d,!0)}var d=",["escape",["macro",4],8,16],",q={};\"complete\"===f.readyState?g():d(n,\n\"load\",g)})(document,window);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":197
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EkWidget.addReadyCallback(function(b){var a=document.getElementById(b);a.kBind(\"mediaReady.mr\",function(){a.evaluate(\"{mediaProxy.entry.name}\");dataLayer.push({event:\"kalturaVideo\",eventType:\"video events\",videoAction:\"video impression\",videoName:a.evaluate(\"{mediaProxy.entry.name}\")});a.kUnbind(\".mr\")});a.kBind(\"openFullScreen.of\",function(){dataLayer.push({event:\"kalturaVideo\",eventType:\"video events\",videoAction:\"open full screen\",videoName:a.evaluate(\"{mediaProxy.entry.name}\")});a.kUnbind(\".of\")});\na.kBind(\"closeFullScreen.cf\",function(){dataLayer.push({event:\"kalturaVideo\",eventType:\"video events\",videoAction:\"close full screen\",videoName:a.evaluate(\"{mediaProxy.entry.name}\")});a.kUnbind(\".cf\")});a.kBind(\"doSeek.ds\",function(){dataLayer.push({event:\"kalturaVideo\",eventType:\"video events\",videoAction:\"use scrubber\",videoName:a.evaluate(\"{mediaProxy.entry.name}\")});a.kUnbind(\".cf\")});a.kBind(\"playerPlayed.pl\",function(){dataLayer.push({event:\"kalturaVideo\",eventType:\"video events\",videoAction:\"play\",\nvideoName:a.evaluate(\"{mediaProxy.entry.name}\")})});a.kBind(\"firstQuartile.1q\",function(){dataLayer.push({event:\"kalturaVideo\",eventType:\"video events\",videoAction:\"25%\",videoName:a.evaluate(\"{mediaProxy.entry.name}\")});a.kUnbind(\".1q\")});a.kBind(\"secondQuartile.2q\",function(){dataLayer.push({event:\"kalturaVideo\",eventType:\"video events\",videoAction:\"50%\",videoName:a.evaluate(\"{mediaProxy.entry.name}\")});a.kUnbind(\".2q\")});a.kBind(\"thirdQuartile.3q\",function(){dataLayer.push({event:\"kalturaVideo\",\neventType:\"video events\",videoAction:\"75%\",videoName:a.evaluate(\"{mediaProxy.entry.name}\")});a.kUnbind(\".3q\")});a.kBind(\"playerPlayEnd.pe\",function(){dataLayer.push({event:\"kalturaVideo\",eventType:\"video events\",videoAction:\"complete\",videoName:a.evaluate(\"{mediaProxy.entry.name}\")});a.kUnbind(\".pe\")});a.kBind(\"playerPaused.pp\",function(){dataLayer.push({event:\"kalturaVideo\",eventType:\"video events\",videoAction:\"pause\",videoName:a.evaluate(\"{mediaProxy.entry.name}\")})})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":199
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar ssaUrl=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"clickserv.basis.net\/conv\/a1d7fdec59bb799f\";(new Image).src=ssaUrl;\n(function(a){var c=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"pixel-a.basis.net\/dmp\/asyncPixelSync\",b=a.createElement(\"iframe\");(b.frameElement||b).style.cssText=\"width: 0; height: 0; border: 0;\";b.src=\"javascript:false\";a.body.appendChild(b);a=b.contentWindow.document;a.open().write(\"\\x3cbody onload\\x3d\\\"window.location.href\\x3d'\"+c+\"'\\\"\\x3e\");a.close()})(document);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":201
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar ssaUrl=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"clickserv.basis.net\/conv\/62f7afa4b44b8404\";(new Image).src=ssaUrl;\n(function(a){var c=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"pixel-a.basis.net\/dmp\/asyncPixelSync\",b=a.createElement(\"iframe\");(b.frameElement||b).style.cssText=\"width: 0; height: 0; border: 0;\";b.src=\"javascript:false\";a.body.appendChild(b);a=b.contentWindow.document;a.open().write(\"\\x3cbody onload\\x3d\\\"window.location.href\\x3d'\"+c+\"'\\\"\\x3e\");a.close()})(document);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":202
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar id=",["escape",["macro",58],8,16],",regex=\/layoutcontent_0_contentmain_0_ctl00_.*btnSubmit\/i,regexTwo=\/.*\/i;regex.test(id)\u0026\u0026dataLayer.push({event:\"buttonClick\",clickedButton:",["escape",["macro",58],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":215
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar ssaUrl=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"clickserv.basis.net\/conv\/7e68d95a47222a41\";(new Image).src=ssaUrl;\n(function(a){var c=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"pixel-a.basis.net\/dmp\/asyncPixelSync\",b=a.createElement(\"iframe\");(b.frameElement||b).style.cssText=\"width: 0; height: 0; border: 0;\";b.src=\"javascript:false\";a.body.appendChild(b);a=b.contentWindow.document;a.open().write(\"\\x3cbody onload\\x3d\\\"window.location.href\\x3d'\"+c+\"'\\\"\\x3e\");a.close()})(document);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":217
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript async data-gtmsrc=\"https:\/\/i.simpli.fi\/dpx.js?cid=149442\u0026amp;action=100\u0026amp;segment=entercomeccsite\u0026amp;m=1\u0026amp;sifi_tuid=71433\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":218
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript async data-gtmsrc=\"https:\/\/i.simpli.fi\/dpx.js?cid=149445\u0026amp;action=100\u0026amp;segment=entercomconciergesite\u0026amp;m=1\u0026amp;sifi_tuid=71434\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":219
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript async data-gtmsrc=\"https:\/\/i.simpli.fi\/dpx.js?cid=149442\u0026amp;conversion=10\u0026amp;campaign_id=0\u0026amp;m=1\u0026amp;c=entercomeccconversion\u0026amp;sifi_tuid=71433\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript async data-gtmsrc=\"https:\/\/i.simpli.fi\/dpx.js?cid=149445\u0026amp;conversion=10\u0026amp;campaign_id=0\u0026amp;m=1\u0026amp;c=entercomconciergeconversion\u0026amp;sifi_tuid=71434\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":220
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript id=\"cc-custom-search\" type=\"text\/gtmscript\"\u003E(function(){var b=document.location.href;if(b.match(\/\\.org\\\/staff\\?q=\/i)||b.match(\/\\.org\\\/locations\\?q=\/i)){b=$(\"#search-input\").val();var c=$(document).find(\"a.breadcrumb__current\").text().trim(),l=$(document).find(\"h2.search-facets-title__total\").find(\"span.highlight\").text().trim();c=\/^search\/i.test(c)?\"General Search\":\/location\/i.test(c)?\"find a location\":\"find a doctor\";dataLayer.push({event:\"customSearch\",searchType:c,searchInput:b,resultsCount:l})}})();\nvar search,typingTimer,doneTypingInterval=2E3,$input=$(\"#search-input\"),input=$(\"#search-input\"),val=$input.val();input.keyup(function(b){val!=(val=$(this).val())\u0026\u0026(clearTimeout(typingTimer),search=\"true\",typingTimer=setTimeout(doneTyping,doneTypingInterval))});$input.on(\"keydown\",function(){$(\"#search-input\").val();clearTimeout(typingTimer)});\nfunction doneTyping(){var b=$(\"#search-input\").val(),c=$(document).find(\"a.breadcrumb__current\").text().trim(),l=$(document).find(\"h2.search-facets-title__total\").find(\"span.highlight\").text().trim();c=\/^search\/i.test(c)?\"General Search\":\/location\/i.test(c)?\"find a location\":\"find a doctor\";b.match(\/.*[a-z 0-9]+.*\/i)\u0026\u0026dataLayer.push({event:\"customSearch\",searchType:c,searchInput:b,resultsCount:l});search=\"false\"}\n$(function(){$(\"body\").click(function(b){$(b.target).parents(\"#facets\").length||$(b.target).parents(\"#doctor-filters-mobile\").length?dataLayer.push({event:\"searchLocation\",searchCheck:\"trueFilter\"}):dataLayer.push({event:\"searchLocation\",searchCheck:\"falseFilter\"})})});\nvar contentDiv=document.querySelector(\"#facets\"),MutationObserver=window.MutationObserver||window.WebKitMutationObserver,observer=new MutationObserver(function(b){b.forEach(function(c){if(\"childList\"===c.type){console.log(search);c=$(\"#types_chosen\").find(\"li.search-choice\");for(var b=[],a=0;a\u003C=c.length;a++)void 0!==c[a]\u0026\u0026b.push(c[a].textContent);c=b.join(\", \");b=$(\"#specialties_chosen\").find(\"li.search-choice\");var d=[];for(a=0;a\u003C=b.length;a++)void 0!==b[a]\u0026\u0026d.push(b[a].textContent);b=d.join(\", \");\nd=$(\"#services_chosen\").find(\"li.search-choice\");var e=[];for(a=0;a\u003C=d.length;a++)void 0!==d[a]\u0026\u0026e.push(d[a].textContent);d=e.join(\", \");e=$(\"#practiceLocationAddressLocalityRegions_chosen\").find(\"li.search-choice\");var f=[];for(a=0;a\u003C=e.length;a++)void 0!==e[a]\u0026\u0026f.push(e[a].textContent);e=f.join(\", \");f=$(\"#departmentAliases_chosen\").find(\"li.search-choice\");var g=[];for(a=0;a\u003C=f.length;a++)void 0!==f[a]\u0026\u0026g.push(f[a].textContent);f=g.join(\", \");g=$(\"#languages_chosen\").find(\"li.search-choice\");var h=\n[];for(a=0;a\u003C=g.length;a++)void 0!==g[a]\u0026\u0026h.push(g[a].textContent);a=h.join(\", \");var m=[];$('input[name\\x3d\"filteredTypes\"]:checked').each(function(){$(this).is(\":checked\")\u0026\u0026m.push($(this).val())});g=m.join(\", \");var n=[];$('input[name\\x3d\"careTypes\"]:checked').each(function(){$(this).is(\":checked\")\u0026\u0026n.push($(this).val())});h=n.join(\", \");var p=[];$('input[name\\x3d\"gender\"]:checked').each(function(){$(this).is(\":checked\")\u0026\u0026p.push($(this).val())});var q=p.join(\", \"),r=$(\"#search-input\").val(),k=$(document).find(\"a.breadcrumb__current\").text().trim();\nk=\/^search\/i.test(k)?\"General Search\":\/location\/i.test(k)?\"find a location\":\"find a doctor\";var t=$(document).find(\"h2.search-facets-title__total\").find(\"span.highlight\").text().trim();dataLayer.push({event:\"customFilter\",searchType:k,searchInput:r,locationType:c,locationSpec:b,locationServ:d,physicianCity:e,physicianDepart:f,physicianLang:a,physicianAge:g,physicianCare:h,physicianGender:q,resultsCount:t})}})}),config={attributes:!0,childList:!0,characterData:!0};observer.observe(contentDiv,config);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":231
    }],
  "predicates":[{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"pain-management-guide.pdf"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"gtm.linkClick"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"http:\/\/www.clevelandclinic.org\/lp\/pain-management\/lpthankyou.html"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"health.clevelandclinic.org"
    },{
      "function":"_cn",
      "arg0":["macro",30],
      "arg1":"digestive.ccf.org"
    },{
      "function":"_cn",
      "arg0":["macro",30],
      "arg1":"exemplo-portal2.net"
    },{
      "function":"_cn",
      "arg0":["macro",30],
      "arg1":"pages.clevelandclinic.org"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"consultqd.clevelandclinic.org"
    },{
      "function":"_cn",
      "arg0":["macro",30],
      "arg1":"my.clevelandclinic.org"
    },{
      "function":"_re",
      "arg0":["macro",30],
      "arg1":"dev\\.my|mycc\\.|author\\.|authorccfweb\\.my|qa\\.my|dev\\.my|qa8\\.my",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"http:\/\/www.clevelandclinic.org\/lp\/uterus-transplant\/"
    },{
      "function":"_re",
      "arg0":["macro",30],
      "arg1":"newsroom.clevelandclinic.org"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"\/lp\/annual-report"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"www.clevelandclinic.org\/lp\/"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"www.clevelandclinic.org\/healthinfo\/"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"org\/ungc"
    },{
      "function":"_cn",
      "arg0":["macro",30],
      "arg1":"ceros.com"
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":".*\\.(mp3|ashx|zip|pdf|ppt|xlsx|png|docx|jpg|doc|xls).*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(^$|((^|,)108141_39($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":"affiliatenetwork.clevelandclinic.org|c5research.clevelandclinic.org|chat.clevelandclinic.org|civiceducation.clevelandclinic.org|clevelandclinic.org|consultqd.clevelandclinic.org|digestive.ccf.org|employer.clevelandclinic.org|giving.ccf.org|giving.clevelandclinic.org|health.clevelandclinic.org|innovations.clevelandclinic.org|m.clevelandclinic.org|mds.clevelandclinic.org|my.clevelandclinic.org|pages.clevelandclinic.org|portals.clevelandclinic.org|simcenter.clevelandclinic.org|www.clevelandclinic.org|floridacampaign.clevelandclinic.org|innovationsportal.clevelandclinic.org|pamc.clevelandclinic.org|summit.clevelandclinic.org|dev\\.my|newsroom.clevelandclinic.org|javascript",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(^$|((^|,)108141_40($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",40],
      "arg1":"^(mailto:|tel:)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(^$|((^|,)108141_310($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",42],
      "arg1":"track-banner"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(^$|((^|,)108141_45($|,)))"
    },{
      "function":"_sw",
      "arg0":["macro",31],
      "arg1":"http:\/\/digestive.ccf.org\/scores\/results"
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":"taba|\\-tab"
    },{
      "function":"_re",
      "arg0":["macro",30],
      "arg1":"digestive.ccf.org|exemplo-portal2.net|pages.clevelandclinic.org|health.clevelandclinic.org|consultqd.clevelandclinic.org|my.clevelandclinic.org|www.clevelandclinic.org|newsroom.clevelandclinic.org"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"gtm.click"
    },{
      "function":"_sw",
      "arg0":["macro",27],
      "arg1":"mailto:"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(^$|((^|,)108141_54($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"pages.clevelandclinic.org\/arthritis-lpthankyou.html"
    },{
      "function":"_eq",
      "arg0":["macro",29],
      "arg1":"http:\/\/www.clevelandclinic.org\/lp\/juvenile-arthritis\/lpthankyou.html?Status=Success"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"pages.clevelandclinic.org\/joint-replacement-lpthankyou.html"
    },{
      "function":"_sw",
      "arg0":["macro",27],
      "arg1":"tel:"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(^$|((^|,)108141_84($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",45],
      "arg1":"open-scheduling"
    },{
      "function":"_css",
      "arg0":["macro",46],
      "arg1":"ul#appointment-expander \u003E li \u003E a"
    },{
      "function":"_cn",
      "arg0":["macro",45],
      "arg1":"button"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(^$|((^|,)108141_354($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",40],
      "arg1":"webappointment(fla|\\.aspx)\\?PhysicianFirstName",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(^$|((^|,)108141_93($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"pages.clevelandclinic.org\/prostate-cancer-lpthankyou.html"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"https:\/\/www.clevelandclinic.org\/lp\/knee_pain\/lpthankyou.html"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"https:\/\/www.clevelandclinic.org\/lp\/hip_pain\/lpthankyou.html"
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":"affiliatenetwork.clevelandclinic.org|c5research.clevelandclinic.org|chat.clevelandclinic.org|civiceducation.clevelandclinic.org|clevelandclinic.org|consultqd.clevelandclinic.org|digestive.ccf.org|employer.clevelandclinic.org|giving.ccf.org|giving.clevelandclinic.org|health.clevelandclinic.org|innovations.clevelandclinic.org|m.clevelandclinic.org|mds.clevelandclinic.org|my.clevelandclinic.org|pages.clevelandclinic.org|portals.clevelandclinic.org|simcenter.clevelandclinic.org|www.clevelandclinic.org|floridacampaign.clevelandclinic.org|innovationsportal.clevelandclinic.org|pamc.clevelandclinic.org|summit.clevelandclinic.org|dev\\.my|newsroom.clevelandclinic.org"
    },{
      "function":"_re",
      "arg0":["macro",29],
      "arg1":"consultqd\\.clevelandclinic\\.org|health\\.clevelandclinic\\.org|newsroom\\.clevelandclinic\\.org"
    },{
      "function":"_css",
      "arg0":["macro",46],
      "arg1":".entry-content a"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"lpthankyou"
    },{
      "function":"_sw",
      "arg0":["macro",29],
      "arg1":"https:\/\/pages.clevelandclinic.org\/sports-injuries-lpthankyou.html"
    },{
      "function":"_sw",
      "arg0":["macro",29],
      "arg1":"https:\/\/pages.clevelandclinic.org\/running-injuries-lpthankyou.html"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"www.clevelandclinic.org\/lp\/back-pain\/lpthankyou.html"
    },{
      "function":"_cn",
      "arg0":["macro",47],
      "arg1":"Online Seminar"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"pages.clevelandclinic.org\/bariatric-weight-loss-program.html"
    },{
      "function":"_cn",
      "arg0":["macro",47],
      "arg1":"In-Person Seminar"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"mktoButton ccfSubmit"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"mychart.clevelandclinic.org"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(^$|((^|,)108141_153($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"adult-epilepsy-surgery-lpthankyou"
    },{
      "function":"_cn",
      "arg0":["macro",45],
      "arg1":"mktoButton"
    },{
      "function":"_sw",
      "arg0":["macro",29],
      "arg1":"https:\/\/my.clevelandclinic.org\/departments\/orthopaedics-rheumatology\/depts\/sports-health\/competitive-edge-newsletter"
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"\/second-opinion-lpthankyou.html|\/thankyou-all-brtv-cancer.html"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"pages.clevelandclinic.org\/florida-coronary-artery-disease-lpthankyou.html"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"pages.clevelandclinic.org\/atrial-fibrillation-florida-lpthankyou.html"
    },{
      "function":"_sw",
      "arg0":["macro",40],
      "arg1":"http:\/\/digestive.ccf.org\/scores\/go"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(^$|((^|,)108141_250($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"livechat.clevelandclinic.org"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"https:\/\/pages.clevelandclinic.org\/veintreatment-lpthankyou.html"
    },{
      "function":"_re",
      "arg0":["macro",29],
      "arg1":"heart-surgery-index.html|Joint-Replacement-index.html|multiple-sclerosis-ohio-index-2.html|pediatric-epilepsy-surgery-index.html|pelvic-organ-prolapse-incontinence-index.html",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"kalturaVideo"
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"pages.clevelandclinic.org"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"marketoFormSubmit"
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"digestive.ccf.org\/scores?from_name=go_start"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(^$|((^|,)108141_285($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"\/WebContact\/WebAppointmentThankYou.aspx"
    },{
      "function":"_eq",
      "arg0":["macro",54],
      "arg1":"layoutcontent_0_contentmain_0_ctl00_btnSubmit"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(^$|((^|,)108141_283($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"\/events\/calendar(.*)success=1",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"gtm.dom"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"[0-9]+",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"view.ceros.com"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"my.clevelandclinic.org\/WebContact\/WebAppointment"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"formFocus"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"my.clevelandclinic.org\/webcontact\/webmail.aspx"
    },{
      "function":"_eq",
      "arg0":["macro",58],
      "arg1":"layoutcontent_0_contentmain_0_ctl00_Wizard1_StartNavigationTemplateContainerID_btnNext"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(^$|((^|,)108141_281($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"digestive.ccf.org"
    },{
      "function":"_eq",
      "arg0":["macro",59],
      "arg1":"trueFilter"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"customFilter"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"customSearch"
    },{
      "function":"_eq",
      "arg0":["macro",70],
      "arg1":"(not set)"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"pages.clevelandclinic.org\/Akron-Joint-Replacement-TY.html"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"pages.clevelandclinic.org\/22-0010-JointReplacement_04-TY-Lorain.html"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"livechat.clevelandclinic.org\/system\/templates\/chat\/ccf\/index.html"
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"not_set"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"\/cosmetic-plastic-surgery\/sign-up"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"chat.interaction"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"livechat.clevelandclinic.org"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"chat.chat-unavailable"
    },{
      "function":"_re",
      "arg0":["macro",72],
      "arg1":"\\\/form\\\/Index\\?wffm\\.FormItemId\\=.*\u0026wffm\\.Id="
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(^$|((^|,)108141_352($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"pages.clevelandclinic.org\/SpineSurgery-Index"
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"my.clevelandclinic.org"
    },{
      "function":"_re",
      "arg0":["macro",29],
      "arg1":"digestive.ccf.org|exemplo-portal2.net|pages.clevelandclinic.org|health.clevelandclinic.org|consultqd.clevelandclinic.org|my.clevelandclinic.org|www.clevelandclinic.org|newsroom.clevelandclinic.org"
    },{
      "function":"_re",
      "arg0":["macro",30],
      "arg1":"authorccfweb\\.my|qa\\.my|dev\\.my|author\\.|qa8\\.my"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"http:\/\/my.clevelandclinic.org\/canada\/services\/prp-stem-cell-injections"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"qa.my.clevelandclinic.org\/analyticstest"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"https:\/\/my.clevelandclinic.org\/landing\/akron-lifestyles-membership"
    },{
      "function":"_cn",
      "arg0":["macro",45],
      "arg1":"btn  btn-default"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"digestive\\.ccf|webContact\\\/web(appointment|mail)|livechat\\.clevelandclinic\\.org",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"\/WebContact\/"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"my.clevelandclinic.org\/florida\/patients\/doctor-visit"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"my.clevelandclinic.org\/florida\/departments\/concierge-medicine"
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"my.clevelandclinic.org\/florida\/WebContact\/WebAppointmentThankYouFla.aspx|my.clevelandclinic.org\/florida\/WebContact\/WebMailThankYoufla.aspx|my.clevelandclinic.org\/florida\/patients\/phone-directory"
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"true",
      "ignore_case":true
    }],
  "rules":[
    [["if",0,1],["add",0]],
    [["if",2,3],["add",0,26]],
    [["if",3,4],["add",1,126]],
    [["if",3,5],["add",1]],
    [["if",3,6],["add",1]],
    [["if",3,7],["add",1,140,141]],
    [["if",3,8],["add",1,136,138,141]],
    [["if",3,9],["unless",10],["add",1]],
    [["if",3,11],["add",1]],
    [["if",3,12],["add",1]],
    [["if",3,13],["add",1]],
    [["if",3,14],["add",1]],
    [["if",3,15],["add",1]],
    [["if",3,16],["add",1]],
    [["if",3,17],["add",1]],
    [["if",1,18,19],["add",2]],
    [["if",1,21],["unless",20],["add",3]],
    [["if",1,24,25],["add",4]],
    [["if",3,26],["add",5,33]],
    [["if",27,28,29],["add",6]],
    [["if",1,30,31],["add",7]],
    [["if",3,32],["add",8,18,147]],
    [["if",3,33],["add",9]],
    [["if",3,34],["add",10,15,146]],
    [["if",1,35,36],["add",11]],
    [["if",28,29,37],["add",12]],
    [["if",1,28,41,42],["add",13]],
    [["if",3,43],["add",14,44,72,142]],
    [["if",3,44],["add",16]],
    [["if",3,45],["add",17]],
    [["if",29,46,47,48],["add",19]],
    [["if",3,49],["add",20,129]],
    [["if",3,50],["add",21,23]],
    [["if",3,51],["add",22,24]],
    [["if",3,52],["add",25]],
    [["if",29,53,54],["add",27,32,134]],
    [["if",29,54,55],["add",28,31,133]],
    [["if",29,54,56],["add",29,30,132]],
    [["if",1,57,58],["add",34]],
    [["if",3,59],["add",35]],
    [["if",29,60,61],["add",36,37]],
    [["if",3,62],["add",38,149]],
    [["if",3,63],["add",39]],
    [["if",3,64],["add",40]],
    [["if",1,65,66],["add",41,42,137]],
    [["if",28,29,67],["add",43]],
    [["if",3,68],["add",45]],
    [["if",29,60,69],["add",46]],
    [["if",70],["add",47]],
    [["if",71,72],["add",48]],
    [["if",73,74,75],["add",49]],
    [["if",3,76],["add",50]],
    [["if",74,77,78],["add",51]],
    [["if",79,80],["add",52]],
    [["if",72,81],["add",53],["block",73]],
    [["if",29,82],["add",54]],
    [["if",83,84],["add",55]],
    [["if",84,85],["add",56]],
    [["if",74,83,86,87],["add",57]],
    [["if",84,88],["add",58]],
    [["if",89,90],["add",59]],
    [["if",91],["add",60]],
    [["if",3],["unless",92],["add",61]],
    [["if",3,93],["add",62,63]],
    [["if",3,94],["add",64]],
    [["if",84,95],["unless",96],["add",65]],
    [["if",72,97],["add",66]],
    [["if",84,98,99],["add",67]],
    [["if",84,99,100],["add",68]],
    [["if",74,101,102],["add",69]],
    [["if",1,38,39,40],["add",70],["block",12,13]],
    [["if",72,103],["add",71]],
    [["if",72,104],["add",73]],
    [["if",3,28],["add",74,75,80,88,97]],
    [["if",3,105],["add",76]],
    [["if",3],["add",77,78,79,81,82,83,84,85,86,87,89,90,91,92,93,94,95,96,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125]],
    [["if",3],["unless",106],["add",127,128,131]],
    [["if",3,107],["add",130]],
    [["if",3,108],["add",135]],
    [["if",29,109,110],["add",139]],
    [["if",111,112],["add",143]],
    [["if",3,113],["add",144]],
    [["if",80,114],["add",145]],
    [["if",29,115],["add",148]],
    [["if",3,116],["add",150]],
    [["if",3,117],["add",151]],
    [["if",3,118],["add",152]],
    [["if",80,119],["add",153]],
    [["if",1,22,23],["block",3]]]
},
"runtime":[
[],[]
]
};
var f,aa=this,fa=function(){if(null===ba)a:{var a=aa.document,b=a.querySelector&&a.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");if(c&&ea.test(c)){ba=c;break a}}ba=""}return ba},ea=/^[\w+/_-]+[=]{0,2}$/,ba=null,ha=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ia=function(a,b){function c(){}c.prototype=b.prototype;a.$g=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Jg=function(a,c,g){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-
2]=arguments[e];return b.prototype[c].apply(a,d)}};var ja=function(a,b){this.C=a;this.cf=b};ja.prototype.uf=function(){return this.C};ja.prototype.getData=function(){return this.cf};ja.prototype.getData=ja.prototype.getData;ja.prototype.getType=ja.prototype.uf;var ka=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},la=function(){this.Ca={};this.Wa=!1};la.prototype.get=function(a){return this.Ca["dust."+a]};la.prototype.set=function(a,b){!this.Wa&&(this.Ca["dust."+a]=b)};la.prototype.has=function(a){return this.Ca.hasOwnProperty("dust."+a)};var ma=function(a){var b=[],c;for(c in a.Ca)a.Ca.hasOwnProperty(c)&&b.push(c.substr(5));return b};
la.prototype.remove=function(a){!this.Wa&&delete this.Ca["dust."+a]};la.prototype.N=function(){this.Wa=!0};var n=function(a){this.Ha=new la;this.m=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ka(b)?this.m[Number(b)]=a[Number(b)]:this.Ha.set(b,a[b]))};f=n.prototype;f.toString=function(){for(var a=[],b=0;b<this.m.length;b++){var c=this.m[b];null===c||void 0===c?a.push(""):a.push(c.toString())}return a.join(",")};f.set=function(a,b){if("length"==a){if(!ka(b))throw Error("RangeError: Length property must be a valid integer.");this.m.length=Number(b)}else ka(a)?this.m[Number(a)]=b:this.Ha.set(a,b)};
f.get=function(a){return"length"==a?this.length():ka(a)?this.m[Number(a)]:this.Ha.get(a)};f.length=function(){return this.m.length};f.da=function(){for(var a=ma(this.Ha),b=0;b<this.m.length;b++)a.push(b+"");return new n(a)};f.remove=function(a){ka(a)?delete this.m[Number(a)]:this.Ha.remove(a)};f.pop=function(){return this.m.pop()};f.push=function(a){return this.m.push.apply(this.m,Array.prototype.slice.call(arguments))};f.shift=function(){return this.m.shift()};
f.splice=function(a,b,c){return new n(this.m.splice.apply(this.m,arguments))};f.unshift=function(a){return this.m.unshift.apply(this.m,Array.prototype.slice.call(arguments))};f.has=function(a){return ka(a)&&this.m.hasOwnProperty(a)||this.Ha.has(a)};n.prototype.unshift=n.prototype.unshift;n.prototype.splice=n.prototype.splice;n.prototype.shift=n.prototype.shift;n.prototype.push=n.prototype.push;n.prototype.pop=n.prototype.pop;n.prototype.remove=n.prototype.remove;n.prototype.getKeys=n.prototype.da;
n.prototype.get=n.prototype.get;n.prototype.set=n.prototype.set;var na=function(){function a(a,b){c[a]=b}function b(){c={};h=!1}var c={},d,e,g={},h=!1,k={add:a,gd:function(a,b,c){g[a]||(g[a]={});g[a][b]=c},create:function(g){var k={add:a,assert:function(a,b){if(!h){var k=c[a]||d;k&&k.apply(g,Array.prototype.slice.call(arguments,0));e&&e.apply(g,Array.prototype.slice.call(arguments,0))}},reset:b};k.add=k.add;k.assert=k.assert;k.reset=k.reset;return k},Ed:function(a){return g[a]?(b(),c=g[a],!0):!1},Ia:function(a){d=a},Ja:function(a){e=a},reset:b,Pd:function(a){h=
a}};k.add=k.add;k.addToCache=k.gd;k.loadFromCache=k.Ed;k.registerDefaultPermission=k.Ia;k.registerGlobalPermission=k.Ja;k.reset=k.reset;k.setPermitAllAsserts=k.Pd;return k};var oa=function(){function a(a,c){if(b[a]){if(b[a].xb+c>b[a].max)throw Error("Quota exceeded");b[a].xb+=c}}var b={},c=void 0,d=void 0,e={Wf:function(a){c=a},hd:function(){c&&a(c,1)},Xf:function(a){d=a},ca:function(b){d&&a(d,b)},rg:function(a,c){b[a]=b[a]||{xb:0};b[a].max=c},tf:function(a){return b[a]&&b[a].xb||0},reset:function(){b={}},Xe:a};e.onFnConsume=e.Wf;e.consumeFn=e.hd;e.onStorageConsume=e.Xf;e.consumeStorage=e.ca;e.setMax=e.rg;e.getConsumed=e.tf;e.reset=e.reset;e.consume=e.Xe;return e};var ra=function(a,b,c){this.O=a;this.I=b;this.ja=c;this.m=new la;this.Bb=void 0};f=ra.prototype;f.add=function(a,b){this.m.Wa||(this.O.ca(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.m.set(a,b))};f.set=function(a,b){this.m.Wa||(this.ja&&this.ja.has(a)?this.ja.set(a,b):(this.O.ca(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.m.set(a,b)))};f.get=function(a){return this.m.has(a)?this.m.get(a):this.ja?this.ja.get(a):void 0};
f.has=function(a){return!!this.m.has(a)||!(!this.ja||!this.ja.has(a))};f.L=function(){return this.O};f.S=function(a){this.Bb=a};f.N=function(){this.m.N()};ra.prototype.has=ra.prototype.has;ra.prototype.get=ra.prototype.get;ra.prototype.set=ra.prototype.set;ra.prototype.add=ra.prototype.add;var sa=function(){},ta=function(a){return"function"==typeof a},t=function(a){return"string"==typeof a},va=function(a){return"number"==typeof a&&!isNaN(a)},wa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},xa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},ya=function(a,b){if(a&&wa(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},za=function(a,b){if(!va(a)||
!va(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Aa=function(a){return Math.round(Number(a))||0},Ba=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Da=function(a){var b=[];if(wa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ea=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Fa=function(){return(new Date).getTime()},Ga=function(){this.prefix="gtm.";this.values={}};Ga.prototype.set=function(a,b){this.values[this.prefix+a]=b};
Ga.prototype.get=function(a){return this.values[this.prefix+a]};Ga.prototype.contains=function(a){return void 0!==this.get(a)};var Ha=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ia=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ja=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ka=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},La=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};var x=function(a,b){la.call(this);this.Fd=a;this.qf=b};ia(x,la);var Na=function(a,b){for(var c,d=0;d<b.length&&!(c=Ma(a,b[d]),c instanceof ja);d++);return c},Ma=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof x))throw Error("Attempting to execute non-function "+b[0]+".");return c.B.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.Bb;d&&d(e);throw e;}};x.prototype.toString=function(){return this.Fd};x.prototype.getName=function(){return this.Fd};x.prototype.getName=x.prototype.getName;
x.prototype.da=function(){return new n(ma(this))};x.prototype.getKeys=x.prototype.da;x.prototype.B=function(a,b){var c,d={H:function(){return a},evaluate:function(b){var c=a;return wa(b)?Ma(c,b):b},Ua:function(b){return Na(a,b)},L:function(){return a.L()},F:function(){c||(c=a.I.create(d));return c}};a.L().hd();return this.qf.apply(d,Array.prototype.slice.call(arguments,1))};x.prototype.invoke=x.prototype.B;
x.prototype.ka=function(a,b){try{return this.B.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};x.prototype.safeInvoke=x.prototype.ka;var Oa=function(){la.call(this)};ia(Oa,la);Oa.prototype.da=function(){return new n(ma(this))};Oa.prototype.getKeys=Oa.prototype.da;var Pa=/^([a-z]*):(!|\?)(\*|string|boolean|number|Fn|Map|List)$/i,Qa={Fn:"function",Map:"Object",List:"Array"},Ra=function(a,b){for(var c=0;c<a.length;c++){var d=Pa.exec(a[c]);if(!d)throw Error("Internal Error");var e=d[1],g="!"===d[2],h=d[3],k=b[c],l=typeof k;if(null===k||"undefined"===l){if(g)throw Error("Required argument "+e+" not supplied.");}else if("*"!==h){var m=typeof k;k instanceof x?m="Fn":k instanceof n?m="List":k instanceof Oa&&(m="Map");if(m!=h)throw Error("Argument "+e+" does not match required type "+
(Qa[h]||h)+".");}}};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Sa=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ta=function(a){if(null==a)return String(a);var b=Sa.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ua=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Va=function(a){if(!a||"object"!=Ta(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ua(a,"constructor")&&!Ua(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ua(a,b)},y=function(a,b){var c=b||("array"==Ta(a)?[]:{}),d;for(d in a)if(Ua(a,d)){var e=a[d];"array"==Ta(e)?("array"!=Ta(c[d])&&(c[d]=[]),c[d]=y(e,c[d])):Va(e)?(Va(c[d])||(c[d]={}),c[d]=y(e,c[d])):c[d]=e}return c};var Wa=function(a){if(a instanceof n){for(var b=[],c=a.length(),d=0;d<c;d++)a.has(d)&&(b[d]=Wa(a.get(d)));return b}if(a instanceof Oa){for(var e={},g=a.da(),h=g.length(),k=0;k<h;k++)e[g.get(k)]=Wa(a.get(g.get(k)));return e}return a instanceof x?function(){for(var b=Array.prototype.slice.call(arguments,0),c=0;c<b.length;c++)b[c]=Xa(b[c]);var d=new ra(oa(),na());return Wa(a.B.apply(a,[d].concat(b)))}:a},Xa=function(a){if(wa(a)){for(var b=[],c=0;c<a.length;c++)a.hasOwnProperty(c)&&(b[c]=Xa(a[c]));return new n(b)}if(Va(a)){var d=
new Oa,e;for(e in a)a.hasOwnProperty(e)&&d.set(e,Xa(a[e]));return d}if("function"===typeof a)return new x("",function(b){for(var c=Array.prototype.slice.call(arguments,0),d=0;d<c.length;d++)c[d]=Wa(this.evaluate(c[d]));return Xa(a.apply(a,c))});var g=typeof a;if(null===a||"string"===g||"number"===g||"boolean"===g)return a};var Ya={control:function(a,b){return new ja(a,this.evaluate(b))},fn:function(a,b,c){var d=this.H(),e=this.evaluate(b);if(!(e instanceof n))throw Error("Error: non-List value given for Fn argument names.");var g=Array.prototype.slice.call(arguments,2);this.L().ca(a.length+g.length);return new x(a,function(){return function(a){var b=new ra(d.O,d.I,d);d.Bb&&b.S(d.Bb);for(var c=Array.prototype.slice.call(arguments,0),h=0;h<c.length;h++)if(c[h]=this.evaluate(c[h]),c[h]instanceof ja)return c[h];for(var p=
e.get("length"),q=0;q<p;q++)q<c.length?b.set(e.get(q),c[q]):b.set(e.get(q),void 0);b.set("arguments",new n(c));var r=Na(b,g);if(r instanceof ja)return"return"===r.C?r.getData():r}}())},list:function(a){var b=this.L();b.ca(arguments.length);for(var c=new n,d=0;d<arguments.length;d++){var e=this.evaluate(arguments[d]);"string"===typeof e&&b.ca(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.L(),c=new Oa,d=0;d<arguments.length-1;d+=2){var e=this.evaluate(arguments[d])+"",g=
this.evaluate(arguments[d+1]),h=e.length;h+="string"===typeof g?g.length:1;b.ca(h);c.set(e,g)}return c},undefined:function(){}};var Za=function(){this.O=oa();this.I=na();this.Ba=new ra(this.O,this.I)};f=Za.prototype;f.ba=function(a,b){var c=new x(a,b);c.N();this.Ba.set(a,c)};f.fd=function(a,b){Ya.hasOwnProperty(a)&&this.ba(b||a,Ya[a])};f.L=function(){return this.O};f.Fb=function(){this.O=oa();this.Ba.O=this.O};f.og=function(){this.I=na();this.Ba.I=this.I};f.S=function(a){this.Ba.S(a)};f.M=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.xc(c)};
f.xc=function(a){for(var b,c=0;c<arguments.length;c++){var d=Ma(this.Ba,arguments[c]);b=d instanceof ja||d instanceof x||d instanceof n||d instanceof Oa||null===d||void 0===d||"string"===typeof d||"number"===typeof d||"boolean"===typeof d?d:void 0}return b};f.N=function(){this.Ba.N()};Za.prototype.makeImmutable=Za.prototype.N;Za.prototype.run=Za.prototype.xc;Za.prototype.execute=Za.prototype.M;Za.prototype.resetPermissions=Za.prototype.og;Za.prototype.resetQuota=Za.prototype.Fb;
Za.prototype.getQuota=Za.prototype.L;Za.prototype.addNativeInstruction=Za.prototype.fd;Za.prototype.addInstruction=Za.prototype.ba;var $a=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var ab={wg:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof n)for(var g=arguments[e],h=0;h<g.length();h++)c.push(g.get(h));else c.push(arguments[e]);return new n(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&
!b.B(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.B(a,this.get(e),e,this)&&d.push(this.get(e));return new n(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.B(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var g=e;g<d;g++)if(this.has(g)&&this.get(g)===
b)return g;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var g=e;0<=g;g--)if(this.has(g)&&this.get(g)===b)return g;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.B(a,this.get(e),e,this));return new n(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,Array.prototype.slice.call(arguments,
1))},reduce:function(a,b,c){var d=this.length(),e,g;if(void 0!==c)e=c,g=0;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");var h;for(h=0;h<d;h++)if(this.has(h)){e=this.get(h);g=h+1;break}if(h==d)throw Error("TypeError: Reduce on List with no elements.");}for(var k=g;k<d;k++)this.has(k)&&(e=b.B(a,e,this.get(k),k,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,g;if(void 0!==c)e=c,g=d-1;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
var h;for(h=1;h<=d;h++)if(this.has(d-h)){e=this.get(d-h);g=d-(h+1);break}if(h>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var k=g;0<=k;k--)this.has(k)&&(e=b.B(a,e,this.get(k),k,this));return e},reverse:function(){for(var a=$a(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):this.remove(c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?
d:0>c?Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],g=b;g<c;g++)e.push(this.get(g));return new n(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.B(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=$a(this);void 0===b?c.sort():c.sort(function(c,d){return Number(b.B(a,c,d))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):this.remove(d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var z={yd:{ADD:0,AND:1,APPLY:2,ASSIGN:3,BREAK:4,CASE:5,CONTINUE:6,CONTROL:49,CREATE_ARRAY:7,CREATE_OBJECT:8,DEFAULT:9,DEFN:50,DIVIDE:10,DO:11,EQUALS:12,EXPRESSION_LIST:13,FN:51,FOR:14,FOR_IN:47,GET:15,GET_CONTAINER_VARIABLE:48,GET_INDEX:16,GET_PROPERTY:17,GREATER_THAN:18,GREATER_THAN_EQUALS:19,IDENTITY_EQUALS:20,IDENTITY_NOT_EQUALS:21,IF:22,LESS_THAN:23,LESS_THAN_EQUALS:24,MODULUS:25,MULTIPLY:26,NEGATE:27,NOT:28,NOT_EQUALS:29,NULL:45,OR:30,PLUS_EQUALS:31,POST_DECREMENT:32,POST_INCREMENT:33,PRE_DECREMENT:34,
PRE_INCREMENT:35,QUOTE:46,RETURN:36,SET_PROPERTY:43,SUBTRACT:37,SWITCH:38,TERNARY:39,TYPEOF:40,UNDEFINED:44,VAR:41,WHILE:42}},bb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),cb=new ja("break"),db=new ja("continue");z.add=function(a,b){return this.evaluate(a)+this.evaluate(b)};z.and=function(a,b){return this.evaluate(a)&&this.evaluate(b)};
z.apply=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!(c instanceof n))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"==typeof a){if(0<=xa(bb,b))return Xa(a[b].apply(a,$a(c)));throw Error("TypeError: "+b+" is not a function");
}if(a instanceof n){if(a.has(b)){var d=a.get(b);if(d instanceof x){var e=$a(c);e.unshift(this.H());return d.B.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=xa(ab.wg,b)){var g=$a(c);g.unshift(this.H());return ab[b].apply(a,g)}}if(a instanceof x||a instanceof Oa){if(a.has(b)){var h=a.get(b);if(h instanceof x){var k=$a(c);k.unshift(this.H());return h.B.apply(h,k)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof x?a.getName():a.toString();if("hasOwnProperty"==
b)return a.has.apply(a,$a(c))}throw Error("TypeError: Object has no '"+b+"' property.");};z.assign=function(a,b){a=this.evaluate(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");var c=this.H();if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.evaluate(b);c.set(a,d);return d};z["break"]=function(){return cb};z["case"]=function(a){for(var b=this.evaluate(a),c=0;c<b.length;c++){var d=this.evaluate(b[c]);if(d instanceof ja)return d}};
z["continue"]=function(){return db};z.df=function(a,b,c){var d=new n;b=this.evaluate(b);for(var e=0;e<b.length;e++)d.push(b[e]);var g=[z.yd.FN,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.H().set(a,this.evaluate(g))};z.hf=function(a,b){return this.evaluate(a)/this.evaluate(b)};z.lf=function(a,b){return this.evaluate(a)==this.evaluate(b)};z.nf=function(a){for(var b,c=0;c<arguments.length;c++)b=this.evaluate(arguments[c]);return b};
z.rf=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.H();if("string"==typeof b)for(var e=0;e<b.length;e++){d.set(a,e);var g=this.Ua(c);if(g instanceof ja){if("break"==g.C)break;if("return"==g.C)return g}}else if(b instanceof Oa||b instanceof n||b instanceof x)for(var h=b.da(),k=h.length(),l=0;l<k;l++){d.set(a,h.get(l));var m=this.Ua(c);if(m instanceof ja){if("break"==m.C)break;if("return"==m.C)return m}}};z.get=function(a){return this.H().get(this.evaluate(a))};
z.sd=function(a,b){var c;a=this.evaluate(a);b=this.evaluate(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");a instanceof Oa||a instanceof n||a instanceof x?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:ka(b)&&(c=a[b]));return c};z.vf=function(a,b){return this.evaluate(a)>this.evaluate(b)};z.wf=function(a,b){return this.evaluate(a)>=this.evaluate(b)};z.Df=function(a,b){return this.evaluate(a)===this.evaluate(b)};
z.Ef=function(a,b){return this.evaluate(a)!==this.evaluate(b)};z["if"]=function(a,b,c){var d=[];this.evaluate(a)?d=this.evaluate(b):c&&(d=this.evaluate(c));var e=this.Ua(d);if(e instanceof ja)return e};z.Mf=function(a,b){return this.evaluate(a)<this.evaluate(b)};z.Nf=function(a,b){return this.evaluate(a)<=this.evaluate(b)};z.Rf=function(a,b){return this.evaluate(a)%this.evaluate(b)};z.multiply=function(a,b){return this.evaluate(a)*this.evaluate(b)};z.Sf=function(a){return-this.evaluate(a)};z.Tf=function(a){return!this.evaluate(a)};
z.Uf=function(a,b){return this.evaluate(a)!=this.evaluate(b)};z["null"]=function(){return null};z.or=function(a,b){return this.evaluate(a)||this.evaluate(b)};z.Ld=function(a,b){var c=this.evaluate(a);this.evaluate(b);return c};z.Md=function(a){return this.evaluate(a)};z.quote=function(a){return Array.prototype.slice.apply(arguments)};z["return"]=function(a){return new ja("return",this.evaluate(a))};
z.setProperty=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof x||a instanceof n||a instanceof Oa)&&a.set(b,c);return c};z.vg=function(a,b){return this.evaluate(a)-this.evaluate(b)};
z["switch"]=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!wa(b)||!wa(c))throw Error("Error: Malformed switch instruction.");for(var d,e=!1,g=0;g<b.length;g++)if(e||a===this.evaluate(b[g]))if(d=this.evaluate(c[g]),d instanceof ja){var h=d.C;if("break"==h)return;if("return"==h||"continue"==h)return d}else e=!0;if(c.length==b.length+1&&(d=this.evaluate(c[c.length-1]),d instanceof ja&&("return"==d.C||"continue"==d.C)))return d};
z.xg=function(a,b,c){return this.evaluate(a)?this.evaluate(b):this.evaluate(c)};z["typeof"]=function(a){a=this.evaluate(a);return a instanceof x?"function":typeof a};z.undefined=function(){};z["var"]=function(a){for(var b=this.H(),c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}};
z["while"]=function(a,b,c,d){var e,g=this.evaluate(d);if(this.evaluate(c)&&(e=this.Ua(g),e instanceof ja)){if("break"==e.C)return;if("return"==e.C)return e}for(;this.evaluate(a);){e=this.Ua(g);if(e instanceof ja){if("break"==e.C)break;if("return"==e.C)return e}this.evaluate(b)}};var fb=function(){this.xd=!1;this.A=new Za;eb(this);this.xd=!0};fb.prototype.Jf=function(){return this.xd};fb.prototype.isInitialized=fb.prototype.Jf;fb.prototype.M=function(a){this.A.I.Ed(String(a[0]))||(this.A.I.reset(),this.A.I.Pd(!0));return this.A.xc(a)};fb.prototype.execute=fb.prototype.M;fb.prototype.N=function(){this.A.N()};fb.prototype.makeImmutable=fb.prototype.N;
var eb=function(a){function b(a,b){e.A.fd(a,String(b))}function c(a,b){e.A.ba(String(d[a]),b)}var d=z.yd,e=a;b("control",d.CONTROL);b("fn",d.FN);b("list",d.CREATE_ARRAY);b("map",d.CREATE_OBJECT);b("undefined",d.UNDEFINED);c("ADD",z.add);c("AND",z.and);c("APPLY",z.apply);c("ASSIGN",z.assign);c("BREAK",z["break"]);c("CASE",z["case"]);c("CONTINUE",z["continue"]);c("DEFAULT",z["case"]);c("DEFN",z.df);c("DIVIDE",z.hf);c("EQUALS",z.lf);c("EXPRESSION_LIST",z.nf);c("FOR_IN",z.rf);c("GET",z.get);c("GET_INDEX",
z.sd);c("GET_PROPERTY",z.sd);c("GREATER_THAN",z.vf);c("GREATER_THAN_EQUALS",z.wf);c("IDENTITY_EQUALS",z.Df);c("IDENTITY_NOT_EQUALS",z.Ef);c("IF",z["if"]);c("LESS_THAN",z.Mf);c("LESS_THAN_EQUALS",z.Nf);c("MODULUS",z.Rf);c("MULTIPLY",z.multiply);c("NEGATE",z.Sf);c("NOT",z.Tf);c("NOT_EQUALS",z.Uf);c("NULL",z["null"]);c("OR",z.or);c("POST_DECREMENT",z.Ld);c("POST_INCREMENT",z.Ld);c("PRE_DECREMENT",z.Md);c("PRE_INCREMENT",z.Md);c("QUOTE",z.quote);c("RETURN",z["return"]);c("SET_PROPERTY",z.setProperty);
c("SUBTRACT",z.vg);c("SWITCH",z["switch"]);c("TERNARY",z.xg);c("TYPEOF",z["typeof"]);c("VAR",z["var"]);c("WHILE",z["while"])};fb.prototype.ba=function(a,b){this.A.ba(a,b)};fb.prototype.addInstruction=fb.prototype.ba;fb.prototype.L=function(){return this.A.L()};fb.prototype.getQuota=fb.prototype.L;fb.prototype.Fb=function(){this.A.Fb()};fb.prototype.resetQuota=fb.prototype.Fb;fb.prototype.Ia=function(a){this.A.I.Ia(a)};fb.prototype.Ja=function(a){this.A.I.Ja(a)};
fb.prototype.vb=function(a,b,c){this.A.I.gd(a,b,c)};fb.prototype.S=function(a){this.A.S(a)};var gb=function(){this.Cb={}};gb.prototype.get=function(a){return this.Cb.hasOwnProperty(a)?this.Cb[a]:void 0};gb.prototype.add=function(a,b){if(this.Cb.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(!b)throw"Attempting to add an undefined function: "+a+".";var c=new x(a,function(){for(var a=Array.prototype.slice.call(arguments,0),c=0;c<a.length;c++)a[c]=this.evaluate(a[c]);return b.apply(this,a)});c.N();this.Cb[a]=c};
gb.prototype.addAll=function(a){for(var b in a)a.hasOwnProperty(b)&&this.add(b,a[b])};var B=window,C=document,hb=navigator,lb=C.currentScript&&C.currentScript.src,mb=function(a,b){var c=B[a];B[a]=void 0===c?b:c;return B[a]},nb=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},ob=function(a,b,c){var d=C.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;nb(d,b);c&&(d.onerror=c);fa()&&d.setAttribute("nonce",fa());var e=C.getElementsByTagName("script")[0]||C.body||C.head;
e.parentNode.insertBefore(d,e);return d},pb=function(){if(lb){var a=lb.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},qb=function(a,b){var c=C.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=C.body&&C.body.lastChild||C.body||C.head;d.parentNode.insertBefore(c,d);nb(c,b);void 0!==a&&(c.src=a);return c},rb=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=
function(){d.onerror=null;c&&c()};d.src=a},sb=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},tb=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},E=function(a){B.setTimeout(a,0)},vb=function(a){var b=C.getElementById(a);if(b&&ub(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(ub(document.all[a][c],"id")==a)return document.all[a][c];return b},ub=function(a,b){return a&&b&&a.attributes&&
a.attributes[b]?a.attributes[b].value:null},wb=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},xb=function(a){var b=C.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},yb=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},Ab=function(a){hb.sendBeacon&&hb.sendBeacon(a)||rb(a)};var Bb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Cb=/:[0-9]+$/,Db=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")==b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},Fb=function(a,b,c,d,e){var g,h=function(a){return a?a.replace(":","").toLowerCase():""},k=h(a.protocol)||h(B.location.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":g=Eb(a);break;case "protocol":g=k;break;case "host":g=(a.hostname||B.location.hostname).replace(Cb,
"").toLowerCase();if(c){var l=/^www\d*\./.exec(g);l&&l[0]&&(g=g.substr(l[0].length))}break;case "port":g=String(Number(a.hostname?a.port:B.location.port)||("http"==k?80:"https"==k?443:""));break;case "path":g="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=g.split("/");0<=xa(d||[],m[m.length-1])&&(m[m.length-1]="");g=m.join("/");break;case "query":g=a.search.replace("?","");e&&(g=Db(g,e));break;case "extension":var p=a.pathname.split(".");g=1<p.length?p[p.length-1]:"";g=g.split("/")[0];
break;case "fragment":g=a.hash.replace("#","");break;default:g=a&&a.href}return g},Eb=function(a){var b="";a&&a.href&&(b=a.hash?a.href.replace(a.hash,""):a.href);return b},H=function(a){var b=C.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(c="/"+c);var d=b.hostname.replace(Cb,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var Gb=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Jb=function(a,b,c,d){var e=Hb(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Ib(e,function(a){return a.jf},b);if(1===e.length)return e[0].id;e=Ib(e,function(a){return a.$f},c);return e[0]?e[0].id:void 0}},Mb=function(a,b,c,d,e,
g){c=c||"/";var h=d=d||"auto",k=c;if(Kb.test(document.location.hostname)||"/"===k&&Lb.test(h))return!1;g&&(b=encodeURIComponent(b));var l=b;l&&1200<l.length&&(l=l.substring(0,1200));b=l;var m=a+"="+b+"; path="+c+"; ";void 0!==e&&(m+="expires="+e.toUTCString()+"; ");if("auto"===d){var p=!1,q;a:{var r=[],u=document.location.hostname.split(".");if(4===u.length){var w=u[u.length-1];if(parseInt(w,10).toString()===w){q=["none"];break a}}for(var v=u.length-2;0<=v;v--)r.push(u.slice(v).join("."));r.push("none");
q=r}for(var D=q,G=0;G<D.length&&!p;G++)p=Mb(a,b,c,D[G],e);return p}d&&"none"!==d&&(m+="domain="+d+";");var A=document.cookie;document.cookie=m;return A!=document.cookie||0<=Gb(a).indexOf(b)};function Ib(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function Hb(a,b){for(var c=[],d=Gb(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),jf:1*k[0]||1,$f:1*k[1]||1}))}}return c}var Lb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Kb=/(^|\.)doubleclick\.net$/i;var Pb=function(){this.Fa=new fb;var a=new gb;a.addAll(Nb());Ob(this,function(b){return a.get(b)})},Nb=function(){return{callInWindow:Qb,callLater:Rb,copyFromWindow:Sb,createQueue:Tb,createArgumentsQueue:Ub,encodeURI:Vb,encodeURIComponent:Wb,getCookieValues:Xb,getReferrer:Yb,getUrl:Zb,getUrlFragment:$b,isPlainObject:ac,injectHiddenIframe:bc,injectScript:cc,logToConsole:ec,queryPermission:fc,removeUrlFragment:gc,replaceAll:hc,sendPixel:ic,setInWindow:jc}};Pb.prototype.M=function(a){return this.Fa.M(a)};
Pb.prototype.execute=Pb.prototype.M;var Ob=function(a,b){a.Fa.ba("require",b)};Pb.prototype.Ia=function(a){this.Fa.Ia(a)};Pb.prototype.Ja=function(a){this.Fa.Ja(a)};Pb.prototype.vb=function(a,b,c){this.Fa.vb(a,b,c)};Pb.prototype.S=function(a){this.Fa.S(a)};function Qb(a,b){Ra(["path:!string"],[a]);for(var c=a.split("."),d=B,e=d[c[0]],g=1;e&&g<c.length;g++)d=e,e=e[c[g]];if("function"==Ta(e)){for(var h=[],k=1;k<arguments.length;k++)h.push(Wa(arguments[k]));e.apply(d,h)}}
function Rb(a){Ra(["fn:!Fn"],arguments);var b=this.H();E(function(){a instanceof x&&a.ka(b)})}function Sb(a){Ra(["path:!string"],arguments);this.F().assert("access_globals","read",a);var b=a.split("."),c=B,d;for(d=0;d<b.length-1;d++)if(c=c[b[d]],void 0===c||null===c)return;return Xa(c[b[d]])}function Xb(a){Ra(["name:!string"],arguments);this.F().assert("get_cookies",a);return Gb(a)}function Yb(){return C.referrer}
function Zb(a,b,c,d){Ra(["component:?string","stripWww:?boolean","defaultPages:?List","queryKey:?string"],arguments);this.F().assert("get_url",a,d);var e=B.location.href,g;if(c){g=[];for(var h=0;h<c.length();h++){var k=c.get(h);"string"==typeof k&&g.push(k)}}return Fb(H(e),a,b,g,d)}function $b(a){Ra(["url:!string"],arguments);return Fb(H(a),"fragment")}function ac(a){return a instanceof Oa}
function bc(a,b){Ra(["url:!string","onSuccess:?Fn"],arguments);this.F().assert("inject_hidden_iframe",a);var c=this.H();qb(a,function(){b instanceof x&&b.ka(c)})}var kc={};
function cc(a,b,c,d){Ra(["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);this.F().assert("inject_script",a);var e=this.H(),g=function(){b instanceof x&&b.ka(e)},h=function(){c instanceof x&&c.ka(e)};if(d){var k=d;kc[k]?(kc[k].onSuccess.push(g),kc[k].onFailure.push(h)):(kc[k]={onSuccess:[g],onFailure:[h]},g=function(){for(var a=kc[k].onSuccess,b=0;b<a.length;b++)E(a[b]);a.push=function(a){E(a);return 0}},h=function(){for(var a=kc[k].onFailure,b=0;b<a.length;b++)E(a[b]);
kc[k]=null},ob(a,g,h))}else ob(a,g,h)}function ec(){try{this.F().assert("logging")}catch(c){return}for(var a=Array.prototype.slice.call(arguments,0),b=0;b<a.length;b++)a[b]=Wa(a[b]);console.log.apply(console,a)}function gc(a){return Eb(H(a))}function hc(a,b,c){Ra(["string:!string","regex:!string","replacement:!string"],arguments);return a.replace(new RegExp(b,"g"),c)}
function ic(a,b,c){Ra(["url:!string","onSuccess:?Fn","onFailure:?Fn"],arguments);this.F().assert("send_pixel",a);var d=this.H();rb(a,function(){b instanceof x&&b.ka(d)},function(){c instanceof x&&c.ka(d)})}function jc(a,b,c){Ra(["path:!string","value:?*","overrideExisting:?boolean"],arguments);this.F().assert("access_globals","readwrite",a);var d=a.split("."),e=B,g;for(g=0;g<d.length-1;g++)if(e=e[d[g]],void 0===e)return!1;return void 0===e[d[g]]||c?(e[d[g]]=Wa(b),!0):!1}
function Tb(a){Ra(["path:!string"],arguments);this.F().assert("access_globals","readwrite",a);var b=lc(a),c=a.split(".").pop(),d=b[c];void 0===d&&(d=[],b[c]=d);return Xa(function(){if(!ta(d.push))throw Error("Object at "+a+" in window is not an array.");mc(arguments);d.push.apply(d,Array.prototype.slice.call(arguments,0))})}
function Ub(a,b){Ra(["functionPath:!string","arrayPath:!string"],arguments);this.F().assert("access_globals","readwrite",a);this.F().assert("access_globals","readwrite",b);var c=lc(a),d=a.split(".").pop(),e=c[d];if(e&&!ta(e))return null;if(e){var g=e;e=function(){mc(arguments);g.apply(g,Array.prototype.slice.call(arguments,0))};return Xa(e)}var h;e=function(){if(!ta(h.push))throw Error("Object at "+b+" in window is not an array.");h.push.call(h,arguments)};c[d]=e;var k=lc(b),l=b.split(".").pop();
h=k[l];void 0===h&&(h=[],k[l]=h);return Xa(function(){mc(arguments);e.apply(e,Array.prototype.slice.call(arguments,0))})}function mc(a){for(var b=0;b<a.length;b++){var c=a[b];c&&ha(c)&&Object.defineProperty(c,"gtm",{value:{fromContainer:!0}})}}function lc(a){for(var b=a.split("."),c=B,d=0;d<b.length-1;d++)if(c=c[b[d]],void 0===c)throw Error("Path "+a+" does not exist.");return c}
function fc(a,b){Ra(["permission:!string"],[a]);try{return this.F().assert.apply(null,Array.prototype.slice.call(arguments,0)),!0}catch(c){return!1}}function Vb(a){Ra(["uri:!string"],arguments);return encodeURI(a)}function Wb(a){Ra(["uri:!string"],arguments);return encodeURIComponent(a)};
var nc=[],oc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},pc=function(a){return oc[a]},qc=/[\x00\x22\x26\x27\x3c\x3e]/g;var uc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,vc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},wc=function(a){return vc[a]};
nc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(uc,wc)+"'"}};var Ec=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Fc={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Gc=function(a){return Fc[a]};nc[16]=function(a){return a};var Jc,Kc=[],Lc=[],Mc=[],Nc=[],Oc=[],Pc={},Qc,Rc,Sc,Tc=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Uc=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!Pc[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?Pc[c](e):Jc(c,e,b)},Wc=function(a,b,c,d){c=c||[];d=d||sa;var e={},g;for(g in a)a.hasOwnProperty(g)&&(e[g]=Vc(a[g],b,c,d));
return e},Xc=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Pc[b];return c?c.b||0:0},Vc=function(a,b,c,d){if(wa(a)){var e;switch(a[0]){case "function_id":return a[1];case "list":e=[];for(var g=1;g<a.length;g++)e.push(Vc(a[g],b,c,d));return e;case "macro":var h=a[1];if(c[h])return;var k=Kc[h];if(!k||b(k))return;c[h]=!0;try{var l=Wc(k,b,c,d);e=Uc(l);Sc&&(e=Sc.Ze(e,l))}catch(G){d(h,G),e=!1}c[h]=!1;return e;case "map":e={};for(var m=1;m<a.length;m+=
2)e[Vc(a[m],b,c,d)]=Vc(a[m+1],b,c,d);return e;case "template":e=[];for(var p=!1,q=1;q<a.length;q++){var r=Vc(a[q],b,c,d);Rc&&(p=p||r===Rc.pb);e.push(r)}return Rc&&p?Rc.$e(e):e.join("");case "escape":e=Vc(a[1],b,c,d);if(Rc&&wa(a[1])&&"macro"===a[1][0]&&Rc.Kf(a))return Rc.cg(e);e=String(e);for(var u=2;u<a.length;u++)nc[a[u]]&&(e=nc[a[u]](e));return e;case "tag":var w=a[1];if(!Nc[w])throw Error("Unable to resolve tag reference "+w+".");return e={nd:a[2],index:w};case "zb":var v={arg0:a[2],arg1:a[3],
ignore_case:a[5]};v["function"]=a[1];var D=Yc(v,b,c,d);a[4]&&(D=!D);return D;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Yc=function(a,b,c,d){try{return Qc(Wc(a,b,c,d))}catch(e){JSON.stringify(a)}return null};var Zc=null,cd=function(a){function b(a){for(var b=0;b<a.length;b++)d[a[b]]=!0}var c=[],d=[];Zc=$c(a,ad()||function(){});for(var e=0;e<Lc.length;e++){var g=Lc[e],h=bd(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],p=0;p<Nc.length;p++)c[p]&&!d[p]&&(m[p]=!0);return m},bd=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Zc(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=Zc(e[g]);if(null===
h)return null;if(h)return!1}return!0},$c=function(a,b){var c=[];return function(d){void 0===c[d]&&(c[d]=Yc(Mc[d],a,void 0,b));return c[d]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var fd={},gd=null;fd.o="GTM-3M4W";fd.tb="bc0";var hd="www.googletagmanager.com/gtm.js";var id=hd,jd=null,kd=null,ld="//www.googletagmanager.com/a?id="+fd.o+"&cv=245",md={},nd={},od=function(){var a=gd.sequence||0;gd.sequence=a+1;return a};var J=function(a,b,c,d){return(2===pd()||d||"http:"!=B.location.protocol?a:b)+c},pd=function(){var a=pb(),b;if(1===a)a:{var c=id;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=C.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var qd=!1;var N=function(){var a=function(a){return{toString:function(){return a}}};return{Jc:a("convert_case_to"),Kc:a("convert_false_to"),Lc:a("convert_null_to"),Mc:a("convert_true_to"),Nc:a("convert_undefined_to"),wa:a("function"),qe:a("instance_name"),se:a("live_only"),te:a("malware_disabled"),ue:a("once_per_event"),ad:a("once_per_load"),bd:a("setup_tags"),ve:a("tag_id"),cd:a("teardown_tags")}}();var sd=new Ga,td={},wd={set:function(a,b){y(ud(a,b),td)},get:function(a){return vd(a,2)},reset:function(){sd=new Ga;td={}}},vd=function(a,b){return 2!=b?sd.get(a):xd(a)},xd=function(a,b,c){var d=a.split(".");return zd(d)},zd=function(a){for(var b=td,c=0;c<a.length;c++){if(null===
b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Dd=function(a,b){sd.set(a,b);y(ud(a,b),td)},ud=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c};var Ed=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Fd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Gd={cl:["ecl"],customPixels:["customScripts","html"],ecl:["cl"],html:["customScripts"],
customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]};
var Hd=function(a){var b=vd("gtm.whitelist");var c=b&&La(Da(b),Fd),d=vd("gtm.blacklist")||vd("tagTypeBlacklist")||[];
Ed.test(B.location&&B.location.hostname)&&(d=Da(d),d.push("nonGooglePixels","nonGoogleScripts"));var e=d&&La(Da(d),Gd),g={};return function(h){var k=h&&h[N.wa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=nd[k]||[],m=a(k);if(b){var p;if(p=m)a:{if(0>xa(c,k))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>xa(c,l[q])){p=
!1;break a}}else{p=!1;break a}p=!0}m=p}var r=!1;if(d){var u;if(!(u=0<=xa(e,k)))a:{for(var w=l||[],v=new Ga,D=0;D<e.length;D++)v.set(e[D],!0);for(var G=0;G<w.length;G++)if(v.get(w[G])){u=!0;break a}u=!1}r=u}return g[k]=!m||r}};var Id={Ze:function(a,b){b[N.Jc]&&"string"===typeof a&&(a=1==b[N.Jc]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(N.Lc)&&null===a&&(a=b[N.Lc]);b.hasOwnProperty(N.Nc)&&void 0===a&&(a=b[N.Nc]);b.hasOwnProperty(N.Mc)&&!0===a&&(a=b[N.Mc]);b.hasOwnProperty(N.Kc)&&!1===a&&(a=b[N.Kc]);return a}};var Jd=function(a,b,c){this.ag=a;this.Zf=b;this.Qf=c};ia(Jd,Error);Jd.prototype.getParameters=function(){return this.Zf};var Kd={active:!0,isWhitelisted:function(){return!0}},Ld=function(a){var b=gd.zones;!b&&a&&(b=gd.zones=a());return b};var Md=!1,Nd=0,Od=[];function Pd(a){if(!Md){var b=C.createEventObject,c="complete"==C.readyState,d="interactive"==C.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Md=!0;for(var e=0;e<Od.length;e++)E(Od[e])}Od.push=function(){for(var a=0;a<arguments.length;a++)E(arguments[a]);return 0}}}function Qd(){if(!Md&&140>Nd){Nd++;try{C.documentElement.doScroll("left"),Pd()}catch(a){B.setTimeout(Qd,50)}}}var Rd=function(a){Md?a():Od.push(a)};var Sd=function(){function a(a){return!va(a)||0>a?0:a}if(!gd._li&&B.performance&&B.performance.timing){var b=B.performance.timing.navigationStart,c=va(wd.get("gtm.start"))?wd.get("gtm.start"):0;gd._li={cst:a(c-b),cbt:a(jd-b)}}};var Td=!1,Ud=function(){return B.GoogleAnalyticsObject&&B[B.GoogleAnalyticsObject]};var Vd=function(a){B.GoogleAnalyticsObject||(B.GoogleAnalyticsObject=a||"ga");var b=B.GoogleAnalyticsObject;if(!B[b]){var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);B[b]=c}Sd();return B[b]},Wd=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Ud();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Xd=!1;var ce=function(a){};function be(a,b){b.containerId=fd.o;return{type:a,value:b}};
var de=function(){return"&tc="+Nc.filter(function(a){return a}).length},me=function(){ee&&(B.clearTimeout(ee),ee=void 0);void 0===fe||ge[fe]&&!he||(ie[fe]||je.Lf()||0>=ke--?ie[fe]=!0:(je.jg(),rb(le()),ge[fe]=!0,he=""))},le=function(){var a=fe;return void 0===a?"":[ne,ge[a]?"":"&es=1",oe[a],de(),he,"&z=0"].join("")},pe=function(){return[ld,"&v=3&t=t","&pid="+za(),"&rv="+fd.tb].join("")},qe="0.005000">Math.random(),ne=pe(),re=function(){ne=pe()},ge={},he="",fe=void 0,oe={},ie={},ee=
void 0,je=function(a,b){var c=0,d=0;return{Lf:function(){if(c<a)return!1;Fa()-d>=b&&(c=0);return c>=a},jg:function(){Fa()-d>=b&&(c=0);c++;d=Fa()}}}(2,1E3),ke=1E3,se=function(a,b,c){if(qe&&!ie[a]&&b){a!==fe&&(me(),fe=a);var d=c+String(b[N.wa]||"").replace(/_/g,"");he=he?he+"."+d:"&tr="+d;ee||(ee=B.setTimeout(me,500));2022<=le().length&&me()}};function te(a,b,c,d,e,g){var h=Nc[a],k=ue(a,b,c,d,e,g);if(!k)return null;var l=Vc(h[N.bd],g.ia,[],ve());if(l&&l.length){var m=l[0];k=te(m.index,b,k,1===m.nd?e:k,e,g)}return k}
function ue(a,b,c,d,e,g){function h(){if(k[N.te])d();else{var b=Wc(k,g.ia,[],l),e=!1;b.vtp_gtmOnSuccess=function(){if(!e){e=!0;se(g.id,Nc[a],"5");c()}};b.vtp_gtmOnFailure=function(){if(!e){e=!0;se(g.id,Nc[a],"6");d()}};b.vtp_gtmTagId=k.tag_id;se(g.id,k,"1");var h=function(a){if(a instanceof
we)throw a;ce(a);se(g.id,k,"7");e||(e=!0,d());throw new we(a);};try{Uc(b,h)}catch(I){try{h(I)}catch(O){}}}}var k=Nc[a];if(g.ia(k))return null;var l=ve(),m=Vc(k[N.cd],g.ia,[],l);if(m&&m.length){var p=m[0],q=te(p.index,b,c,d,e,g);if(!q)return null;c=q;d=2===p.nd?e:q}if(k[N.ad]||k[N.ue]){var r=k[N.ad]?Oc:b,u=c,w=d;if(!r[a]){h=Ia(h);var v=xe(a,r,h);c=v.X;d=v.Da}return function(){r[a](u,w)}}return h}
function xe(a,b,c){var d=[],e=[];b[a]=ye(d,e,c);return{X:function(){b[a]=ze;for(var c=0;c<d.length;c++)d[c]()},Da:function(){b[a]=Ae;for(var c=0;c<e.length;c++)e[c]()}}}function ye(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function ze(a){a()}function Ae(a,b){b()}function ve(){return function(a,b){ce(b)}}var we=function(){};ia(we,Error);function Be(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ia(function(){b++;d&&b>=c&&a()})},He:function(){d=!0;b>=c&&a()}}}function Ce(a,b){var c,d=b.b,e=a.b;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.Rd,k=b.Rd;g=h>k?1:h<k?-1:0}return g}
function De(a,b){if(!qe)return;var c=function(a){var d=b.ia(Nc[a])?"3":"4",g=Vc(Nc[a][N.bd],b.ia,[],sa);g&&g.length&&c(g[0].index);se(b.id,Nc[a],d);var h=Vc(Nc[a][N.cd],b.ia,[],sa);h&&h.length&&c(h[0].index)};c(a);}var Ee=!1;function ad(){return function(a,b){ce(b)}}var T={Nb:"event_callback",Ob:"event_timeout"};var Ge={},Ie=function(a){var b=fd.o;return function(){var c=arguments[0];if(c&&(Ge[c]||Ge.all)){var d=a.apply(void 0,Array.prototype.slice.call(arguments,0));Ge[c]&&He(b,c,Ge[c],d);Ge.all&&He(b,c,Ge.all,d)}}};
function He(a,b,c,d){for(var e=0;e<c.length;e++){var g=void 0,h="An in-page policy denied the permission request";try{g=c[e].call(void 0,a,b,d),h+="."}catch(k){h="string"===typeof k?h+(": "+k):k instanceof Error?h+(": "+k.message):h+"."}if(!g)throw new Jd(b,{},h);}};var Je=/[A-Z]+/,Ke=/\s/,Le=function(a){if(t(a)&&(a=a.trim(),!Ke.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Je.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],fa:d}}}}};var Me=null,Ne={},Oe={},Pe,Qe=function(a,b){var c={event:a};b&&(c.eventModel=y(b),b[T.Nb]&&(c.eventCallback=b[T.Nb]),b[T.Ob]&&(c.eventTimeout=b[T.Ob]));return c};
var Ue={config:function(a){},
event:function(a){var b=a[1];if(t(b)&&!(3<a.length)){var c;if(2<a.length){if(!Va(a[2]))return;c=a[2]}var d=Qe(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js",
"gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];c&&ha(c)&&c.gtm&&c.gtm.fromContainer||(Ge[b]||(Ge[b]=[]),Ge[b].push(c))}},set:function(a){var b;2==a.length&&Va(a[1])?b=y(a[1]):3==a.length&&t(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=y(b),b.event="gtag.set",b._clear=!0,b}};var $e=!1,af=[];function bf(){if(!$e){$e=!0;for(var a=0;a<af.length;a++)E(af[a])}};var cf=[],df=!1;function ef(a){var b=a.eventCallback,c=Ia(function(){ta(b)&&E(function(){b(fd.o)})}),d=a.eventTimeout;d&&B.setTimeout(c,Number(d));return c}
var ff=function(){for(var a=!1;!df&&0<cf.length;){df=!0;delete td.eventModel;var b=cf.shift();if(ta(b))try{b.call(wd)}catch(Ve){}else if(wa(b)){var c=b;if(t(c[0])){var d=c[0].split("."),e=d.pop(),g=c.slice(1),h=vd(d.join("."),2);if(void 0!==h&&null!==h)try{h[e].apply(h,g)}catch(Ve){}}}else{var k=b;if(k&&("[object Arguments]"==Object.prototype.toString.call(k)||Object.prototype.hasOwnProperty.call(k,"callee"))){a:{if(b.length&&t(b[0])){var l=Ue[b[0]];if(l){b=l(b);break a}}b=void 0}if(!b){df=!1;continue}}var m;
var p=void 0,q=b,r=q._clear;for(p in q)q.hasOwnProperty(p)&&"_clear"!==p&&(r&&Dd(p,void 0),Dd(p,q[p]));var u=q.event;if(u){var w=q["gtm.uniqueEventId"];w||(w=od(),q["gtm.uniqueEventId"]=w,Dd("gtm.uniqueEventId",w));kd=u;var v;var D,G,A=q,I=A.event,O=A["gtm.uniqueEventId"],P=gd.zones;G=P?P.checkState(fd.o,O):Kd;if(G.active){var F=ef(A);c:{var V=G.isWhitelisted;if("gtm.js"==I){if(Ee){D=!1;break c}Ee=!0}var Q=O,K=I;if(qe&&!ie[Q]&&fe!==Q){me();fe=Q;he="";var Z=Q,M,
L=K;M=0===L.indexOf("gtm.")?encodeURIComponent(L):"*";oe[Z]="&e="+M+"&eid="+Q;ee||(ee=B.setTimeout(me,500))}var R=Hd(V),ca={id:O,name:I,callback:F||sa,ia:R,Za:[]};ca.Za=cd(R);for(var qa,Ca=ca,ib=Be(Ca.callback),jb=[],zb=[],kb=0;kb<Nc.length;kb++)if(Ca.Za[kb]){var We=
Nc[kb];var dc=ib.add();try{var Xe=te(kb,jb,dc,dc,dc,Ca);Xe?zb.push({Rd:kb,b:Xc(We),M:Xe}):(De(kb,Ca),dc())}catch(Ve){dc()}}ib.He();zb.sort(Ce);for(var Bd=0;Bd<zb.length;Bd++)zb[Bd].M();qa=0<zb.length;if("gtm.js"===I||"gtm.sync"===I)d:{}if(qa){for(var nh={__cl:!0,
__ecl:!0,__evl:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Hc=0;Hc<ca.Za.length;Hc++)if(ca.Za[Hc]){var Ze=Nc[Hc];if(Ze&&!nh[Ze[N.wa]]){D=!0;break c}}D=!1}else D=qa}v=D?!0:!1}else v=!1;kd=null;m=v}else m=!1;a=m||a}df=!1}return!a},gf=function(){var a=ff();try{var b=B["dataLayer"].hide;if(b&&void 0!==b[fd.o]&&b.end){b[fd.o]=!1;var c=!0,d;for(d in b)if(b.hasOwnProperty(d)&&!0===b[d]){c=!1;break}c&&(b.end(),b.end=null)}}catch(e){}return a},hf=function(){var a=mb("dataLayer",
[]),b=mb("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Od.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});af.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b=[].slice.call(arguments,0);c.apply(a,b);for(cf.push.apply(cf,b);300<this.length;)this.shift();return ff()};cf.push.apply(cf,a.slice(0));E(gf)};var jf={};jf.pb=new String("undefined");
var kf=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===jf.pb?b:a[d]);return c.join("")}};kf.prototype.toString=function(){return this.resolve("undefined")};kf.prototype.valueOf=kf.prototype.toString;jf.we=kf;jf.Yb={};jf.$e=function(a){return new kf(a)};var lf={};jf.kg=function(a,b){var c=od();lf[c]=[a,b];return c};jf.jd=function(a){var b=a?0:1;return function(a){var c=lf[a];if(c&&"function"===typeof c[b])c[b]();lf[a]=void 0}};jf.Kf=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};jf.cg=function(a){if(a===jf.pb)return a;var b=od();jf.Yb[b]=a;return'google_tag_manager["'+fd.o+'"].macro('+b+")"};jf.Pf=function(a,b,c){a instanceof jf.we&&(a=a.resolve(jf.kg(b,c)),b=sa);return{hc:a,X:b}};var mf=new Ga;function nf(a,b){function c(a){var b=H(a),c=Fb(b,"protocol"),d=Fb(b,"host",!0),e=Fb(b,"port"),g=Fb(b,"path").toLowerCase().replace(/\/$/,"");if(void 0===c||"http"==c&&"80"==e||"https"==c&&"443"==e)c="web",e="default";return[c,d,e,g]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0}
function of(a){var b=a.arg0,c=a.arg1;switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var d;a:{if(b){var e=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var g=0;g<e.length;g++)if(b[e[g]]){d=b[e[g]](c);break a}}catch(w){}}d=!1}return d;case "_ew":var h,k;h=String(b);k=String(c);var l=h.length-k.length;return 0<=l&&h.indexOf(k,l)==l;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);
case "_gt":return Number(b)>Number(c);case "_lc":var m;m=String(b).split(",");return 0<=xa(m,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var q=a.ignore_case?"i":void 0;try{var r=String(c)+q,u=mf.get(r);u||(u=new RegExp(c,q),mf.set(r,u));p=u.test(b)}catch(w){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return nf(b,c)}return!1};var pf=function(){return!1};function qf(a,b){Ra(["key:!string","dataLayerVersion:?number"],arguments);this.F().assert("read_data_layer",a);return Xa(vd(a,b||2))}function rf(){return(new Date).getTime()}function sf(a){return Aa(Wa(a))}function tf(a){return null===a?"null":void 0===a?"undefined":a.toString()}function uf(a,b){Ra(["min:!number","max:!number"],arguments);return za(a,b)}
function vf(a,b,c){Ra(["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);for(var d=new Oa,e=!1,g=0;g<a.length();g++){var h=a.get(g);h instanceof Oa&&h.has(b)&&h.has(c)&&(d.set(h.get(b),h.get(c)),e=!0)}return e?d:null}
var wf=function(){var a=new gb,b=Nb();pf()&&(b.injectScript=sa,b.injectHiddenIframe=sa);a.addAll({callLater:b.callLater,copyFromDataLayer:qf,copyFromWindow:b.copyFromWindow,createQueue:b.createQueue,createArgumentsQueue:b.createArgumentsQueue,encodeUri:b.encodeURI,encodeUriComponent:b.encodeURIComponent,generateRandom:uf,getCookieValues:b.getCookieValues,getTimestamp:rf,getUrl:b.getUrl,injectHiddenIframe:b.injectHiddenIframe,injectScript:b.injectScript,logToConsole:b.logToConsole,makeInteger:sf,makeString:tf,
makeTableMap:vf,queryPermission:b.queryPermission,sendPixel:b.sendPixel,setInWindow:b.setInWindow});return function(b){return a.get(b)}};var xf;function yf(){var a=data.runtime||[];xf=new Pb;Jc=function(a,b,c){zf(b);var d=new Oa,e;for(e in b)b.hasOwnProperty(e)&&d.set(e,Xa(b[e]));xf.S(c);var g=xf.M([a,d]);xf.S(void 0);g instanceof ja&&"return"===g.C&&(g=g.getData());return Wa(g)};Qc=of;Ob(xf,wf());for(var b=0;b<a.length;b++){var c=a[b];if(!wa(c)||3>c.length){if(0===c.length)continue;break}xf.M(c)}}
function zf(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;ta(b)&&(a.gtmOnSuccess=function(){E(b)});ta(c)&&(a.gtmOnFailure=function(){E(c)})}
function Af(a){var b={},c=function(a){throw Bf(a,{},"The requested permission is not configured.");};xf.Ia(c);xf.Ja(Ie(function(){var a=arguments[0];return a&&b[a]?b[a].apply(void 0,Array.prototype.slice.call(arguments,0)):{}}));for(var d in a)if(a.hasOwnProperty(d)){var e=a[d],g=!1,h;for(h in e)if(e.hasOwnProperty(h)){g=!0;var k=Cf(h,e[h]);xf.vb(d,h,k.assert);b[h]||(b[h]=k.U)}g||xf.vb(d,"default",c)}}
function Cf(a,b){var c=Tc(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Bf;return Uc(c)}function Bf(a,b,c){return new Jd(a,b,c)};var Df=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Ef=encodeURI,U=encodeURIComponent,Ff=function(a,b){if(!a)return!1;var c=Fb(H(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var Gf=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null},Hf=function(){return!1};var If=function(a){var b={"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||ub(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};b["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return b},Jf=function(a){gd.hasOwnProperty("autoEventsSettings")||(gd.autoEventsSettings={});var b=gd.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Kf=function(a,b,c,d){var e=Jf(a),g=Ha(e,b,d);e[b]=
c(g)},Lf=function(a,b,c){var d=Jf(a);return Ha(d,b,c)};var Nf=function(a,b){if(!Mf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!C.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);return null},Of=!1;
if(C.querySelectorAll)try{var Pf=C.querySelectorAll(":root");Pf&&1==Pf.length&&Pf[0]==C.documentElement&&(Of=!0)}catch(a){}var Mf=Of;var Qf=function(){for(var a=hb.userAgent+(C.cookie||"")+(C.referrer||""),b=a.length,c=B.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Fa()/1E3)].join(".")},Tf=function(a,b,c,d){var e=Rf(b);return Jb(a,e,Sf(c),d)},Uf=function(a,b,c,d){var e=""+Rf(c),g=Sf(d);1<g&&(e+="-"+g);return[b,e,a].join(".")};
function Rf(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length}function Sf(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var Vf=["1"],Wf={},Zf=function(a,b,c){var d=Xf(a);if(!Wf[d]&&!Yf(d,b,c)){var e=Qf(),g=Uf(e,"1",b,c);Mb(d,g,c,b,new Date(Fa()+7776E6));Yf(d,b,c)}};function Yf(a,b,c){var d=Tf(a,b,c,Vf);d&&(Wf[a]=d);return d}function Xf(a){return(a||"_gcl")+"_au"};function $f(){for(var a=ag,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function bg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var ag,cg,dg=function(a){ag=ag||bg();cg=cg||$f();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,p=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(p=64));b.push(ag[l],ag[m],ag[p],ag[q])}return b.join("")},eg=function(a){function b(b){for(;d<a.length;){var c=a.charAt(d++),e=cg[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}ag=ag||bg();cg=cg||
$f();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var fg;function gg(a,b){if(!a||b===C.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}var hg=function(){var a=mb("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var ig=/(.*?)\*(.*?)\*(.*)/,jg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,kg=/^(?:www\.|m\.|amp\.)+/,lg=/([^?#]+)(\?[^#]*)?(#.*)?/,mg=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,og=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(dg(String(d))))}var e=b.join("*");return["1",ng(e),e].join("*")},ng=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=fg)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}fg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^fg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},qg=function(){return function(a){var b=H(B.location.href),c=b.search.replace("?",""),d=Db(c,"_gl",!0)||"";a.query=pg(d)||{};var e=Fb(b,"fragment").match(mg);a.fragment=pg(e&&e[3]||
"")||{}}},pg=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=ig.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],p=0;p<b;++p)if(m===ng(k,p)){l=!0;break a}l=!1}if(l){for(var q={},r=k?k.split("*"):[],u=0;u<r.length;u+=2)q[r[u]]=eg(r[u+1]);return q}}}}catch(w){}};
function rg(a,b,c){function d(a){var b=a,c=mg.exec(b),d=b;if(c){var e=c[2],g=c[4];d=c[1];g&&(d=d+e+g)}a=d;var h=a.charAt(a.length-1);a&&"&"!==h&&(a+="&");return a+l}c=void 0===c?!1:c;var e=lg.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function sg(a,b,c){for(var d={},e={},g=hg().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&gg(k.domains,b)&&(k.fragment?Ja(e,k.callback()):Ja(d,k.callback()))}if(Ka(d)){var l=og(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var p=a.childNodes||[],q=!1,r=0;r<p.length;r++){var u=p[r];if("_gl"===u.name){u.setAttribute("value",l);q=!0;break}}if(!q){var w=C.createElement("input");w.setAttribute("type","hidden");w.setAttribute("name","_gl");w.setAttribute("value",
l);a.appendChild(w)}}else if("post"===m){var v=rg(l,a.action);Bb.test(v)&&(a.action=v)}}}else tg(l,a,!1)}if(!c&&Ka(e)){var D=og(e);tg(D,a,!0)}}function tg(a,b,c){if(b.href){var d=rg(a,b.href,void 0===c?!1:c);Bb.test(d)&&(b.href=d)}}
var ug=function(a){try{var b;a:{for(var c=a.target||a.srcElement||{},d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||sg(e,e.hostname,!1)}}catch(h){}},vg=function(a){try{var b=a.target||a.srcElement||{};if(b.action){var c=Fb(H(b.action),"host");sg(b,c,!0)}}catch(d){}},wg=function(a,b,c,d){var e=hg();e.init||(sb(C,"mousedown",ug),sb(C,"keyup",ug),sb(C,"submit",vg),e.init=!0);var g={callback:a,
domains:b,fragment:"fragment"===c,forms:!!d};hg().decorators.push(g)},xg=function(){var a=C.location.hostname,b=jg.exec(C.referrer);if(!b)return!1;var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}return a.replace(kg,"")===e.replace(kg,"")},yg=function(a,b){return!1===a?!1:a||b||xg()};var zg=/^\w+$/,Ag=/^[\w-]+$/,Bg=/^~?[\w-]+$/,Cg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"},Eg=function(a){var b=Gb(a,C.cookie),c=[];if(!b||0==b.length)return c;for(var d=0;d<b.length;d++){var e=b[d].split(".");3==e.length&&"GCL"==e[0]&&e[1]&&c.push(e[2])}return Dg(c)};function Fg(a){return a&&"string"==typeof a&&a.match(zg)?a:"_gcl"}
var Gg=function(a){if(a){if("string"==typeof a){var b=Fg(a);return{dc:b,aw:b,gf:b,ha:b}}if(a&&"object"==typeof a)return{dc:Fg(a.dc),aw:Fg(a.aw),gf:Fg(a.gf),ha:Fg(a.ha)}}return{dc:"_gcl",aw:"_gcl",gf:"_gcl",ha:"_gcl"}},Ig=function(){var a=H(B.location.href),b=Fb(a,"query",!1,void 0,"gclid"),c=Fb(a,"query",!1,void 0,"gclsrc"),d=Fb(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Db(e,"gclid");c=c||Db(e,"gclsrc")}return Hg(b,c,d)};
function Hg(a,b,c){var d={},e=function(a,b){d[b]||(d[b]=[]);d[b].push(a)};if(void 0!==a&&a.match(Ag))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function Jg(a,b){function c(a,b){var c=Kg(a,d);c&&Mb(c,b,g,e,k,!0)}b=b||{};var d=Gg(b.prefix),e=b.domain||"auto",g=b.path||"/",h=Fa(),k=new Date(h+7776E6),l=Math.round(h/1E3),m=function(a){return["GCL",l,a].join(".")};a.aw&&(!0===b.fh?c("aw",m("~"+a.aw[0])):c("aw",m(a.aw[0])));a.dc&&c("dc",m(a.dc[0]));a.gf&&c("gf",m(a.gf[0]));a.ha&&c("ha",m(a.ha[0]))}
var Kg=function(a,b){var c=Cg[a];if(void 0!==c){var d=b[a];if(void 0!==d)return d+c}},Lg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)},Mg=function(a,b,c,d,e){if(wa(b)){var g=Gg(e);wg(function(){for(var b={},c=0;c<a.length;++c){var d=Kg(a[c],g);if(d){var e=Gb(d,C.cookie);e.length&&(b[d]=e.sort()[e.length-1])}}return b},b,c,d)}},Dg=function(a){return a.filter(function(a){return Bg.test(a)})};var Ng=/^\d+\.fls\.doubleclick\.net$/;function Og(a){var b=H(B.location.href),c=Fb(b,"host",!1);if(c&&c.match(Ng)){var d=Fb(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
var Pg=function(a){var b=Og("gclaw");if(b)return b.split(".");var c=Gg(a);if("_gcl"==c.aw){var d=Ig().aw||[];if(0<d.length)return d}var e=Kg("aw",c);return e?Eg(e):[]},Qg=function(a){var b=Og("gcldc");if(b)return b.split(".");var c=Gg(a);if("_gcl"==c.dc){var d=Ig().dc||[];if(0<d.length)return d}var e=Kg("dc",c);return e?Eg(e):[]},Rg=function(a){var b=Gg(a);if("_gcl"==b.ha){var c=Ig().ha||[];if(0<c.length)return c}return Eg(b.ha+"_ha")},Sg=function(){var a=Og("gac");if(a)return decodeURIComponent(a);
for(var b=[],c=C.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var g=c[e].match(d);g&&b.push({Bc:g[1],value:g[2]})}var h={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].Bc]||(h[b[k].Bc]=[]),h[b[k].Bc].push({timestamp:l[1],sf:l[2]}))}var m=[],p;for(p in h)if(h.hasOwnProperty(p)){for(var q=[],r=h[p],u=0;u<r.length;u++)q.push(r[u].sf);q=Dg(q);q.length&&m.push(p+":"+q.join(","))}return m.join(";")},Tg=function(a,
b,c){Zf(a,b,c);var d=Wf[Xf(a)],e=Ig().dc||[];if(d&&0<e.length){var g=gd.joined_au=gd.joined_au||{},h=a||"_gcl";if(!g[h]){for(var k=!1,l=0;l<e.length;l++){var m="https://adservice.google.com/ddm/regclk";m+="?gclid="+e[l]+"&auiddc="+d;Ab(m);k=!0}if(k){var p=Xf(a);if(Wf[p]){var q=Uf(Wf[p],"1",b,c);Mb(p,q,c,b,new Date(Fa()+7776E6))}g[h]=!0}}}};var Vg={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Ug()};function Ug(){if(3===fd.tb.length)return"g";return"G"}function Wg(){return"w"}
var Xg=function(a){var b=fd.o.split("-"),c=b[0].toUpperCase(),d=Vg[c]||"i",e=a&&"GTM"===c?b[1]:"";return(3===fd.tb.length?"2"+Wg():"")+d+fd.tb+e};
var Yg=function(a){return!(void 0===a||null===a||0===(a+"").length)},Zg=function(a,b){var c;if(2===b.K)return a("ord",za(1E11,1E13)),!0;if(3===b.K)return a("ord","1"),a("num",za(1E11,1E13)),!0;if(4===b.K)return Yg(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.K)c="1";else if(6===b.K)c=b.Nd;else return!1;Yg(c)&&a("qty",c);Yg(b.bc)&&a("cost",b.bc);Yg(b.Cc)&&a("ord",b.Cc);return!0},$g=encodeURIComponent,ah=function(a,b){function c(a,b,c){g.hasOwnProperty(a)||(b+="",e+=";"+a+"="+(c?b:$g(b)))}var d=a.fc,
e=a.protocol;e+=a.Gb?"//"+d+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";e+=";src="+$g(d)+(";type="+$g(a.gc))+(";cat="+$g(a.Sa));var g=a.bf||{},h;for(h in g)g.hasOwnProperty(h)&&(e+=";"+$g(h)+"="+$g(g[h]+""));if(Zg(c,a)){Yg(a.Ec)&&c("u",a.Ec);Yg(a.tran)&&c("tran",a.tran);c("gtm",Xg());!1===a.Ee&&c("npa","1");if(a.ac){var k=Qg(a.za);k&&k.length&&c("gcldc",k.join("."));var l=Pg(a.za);l&&l.length&&c("gclaw",l.join("."));var m=Sg();m&&c("gac",m);
Zf(a.za);var p=Wf[Xf(a.za)];p&&c("auiddc",p);}Yg(a.sc)&&c("prd",a.sc,!0);for(var q in a.ab)a.ab.hasOwnProperty(q)&&c(q,a.ab[q]);e+=b||"";Yg(a.Db)&&c("~oref",a.Db);a.Gb?qb(e+"?",a.X):rb(e+"?",a.X,a.Da)}else E(a.Da)};var dh=!!B.MutationObserver,eh=void 0,fh=function(a){if(!eh){var b=function(){var a=C.body;if(a)if(dh)(new MutationObserver(function(){for(var a=0;a<eh.length;a++)E(eh[a])})).observe(a,{childList:!0,subtree:!0});else{var b=!1;sb(a,"DOMNodeInserted",function(){b||(b=!0,E(function(){b=!1;for(var a=0;a<eh.length;a++)E(eh[a])}))})}};eh=[];C.body?b():E(b)}eh.push(a)};var gh=/\./g;var Ch=B.clearTimeout,Dh=B.setTimeout,W=function(a,b,c){if(pf()){b&&E(b)}else return ob(a,b,c)},Eh=function(){return B.location.href},Fh=function(a){return Fb(H(a),"fragment")},Gh=function(a,b){return vd(a,b||2)},Hh=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return B["dataLayer"].push(a)},Ih=function(a,b){B[a]=b},X=function(a,b,c){b&&(void 0===B[a]||c&&!B[a])&&(B[a]=b);return B[a]},Jh=function(a,
b,c){return Gb(a,b,void 0===c?!0:!!c)},Kh=function(a,b,c){var d={prefix:a,path:b,domain:c},e=Ig();Jg(e,d)},Lh=function(a,b,c,d){var e=qg(),g=hg();g.data||(g.data={query:{},fragment:{}},e(g.data));var h={},k=g.data;k&&(Ja(h,k.query),Ja(h,k.fragment));for(var l=Gg(b),m=0;m<a.length;++m){var p=a[m];if(void 0!==Cg[p]){var q=Kg(p,l),r=h[q];if(r){var u=Math.min(Lg(r),Fa()),w;b:{for(var v=u,D=Gb(q,C.cookie),G=0;G<D.length;++G)if(Lg(D[G])>v){w=!0;break b}w=!1}w||
Mb(q,r,c,d,new Date(u+7776E6),!0)}}}var A={prefix:b,path:c,domain:d};Jg(Hg(h.gclid,h.gclsrc),A);},Mh=function(a,b,c,d,e){Mg(a,b,c,d,e);},Nh=function(a,b){if(pf()){b&&E(b)}else qb(a,b)},Oh=function(a){return!!Lf(a,"init",!1)},Ph=function(a){Jf(a).init=!0},Qh=function(a,b,c){var d=(void 0===c?
0:c)?"www.googletagmanager.com/gtag/js":id;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";if(b)for(var e in b)b[e]&&b.hasOwnProperty(e)&&(d+="&"+e+"="+encodeURIComponent(b[e]));W(J("https://","http://",d))};
var Sh=jf.Pf;var ei=function(a,b,c){this.n=a;this.t=b;this.p=c},fi=function(){this.c=1;this.e=[];this.p=null};function gi(a){var b=gd,c=b.gss=b.gss||{};return c[a]=c[a]||new fi}var hi=function(a,b){gi(a).p=b},ii=function(a,b,c){var d=Math.floor(Fa()/1E3);gi(a).e.push(new ei(b,d,c))},ji=function(a){};var si=window,ti=document,ui=function(a){var b=si._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===si["ga-disable-"+a])return!0;try{var c=si.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=Gb("AMP_TOKEN",ti.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return!1};var zi=function(a){if(1===gi(a).c){gi(a).c=2;var b=encodeURIComponent(a);ob(("http:"!=B.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},Ai=function(a,b){};var Y={a:{}};
Y.a.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.g="jsm";Y.__jsm.h=!0;Y.__jsm.b=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=X("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Y.a.flc=[],function(){function a(a,c){c=c?c.slice(0,-1):void 0;ah(a,c)}(function(a){Y.__flc=a;Y.__flc.g="flc";Y.__flc.h=!0;Y.__flc.b=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=Gf(b.vtp_customVariable||[],"key","value")||{},e={Sa:b.vtp_activityTag,ac:c,za:b.vtp_conversionCookiePrefix||void 0,K:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,fc:b.vtp_advertiserId,gc:b.vtp_groupTag,Da:b.vtp_gtmOnFailure,X:b.vtp_gtmOnSuccess,Db:b.vtp_useImageTag?void 0:
b.vtp_url,protocol:"",Gb:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,tran:b.vtp_transactionVariable,Ec:b.vtp_userVariable,ab:d};if(b.vtp_enableAttribution){var g=b.vtp_attributionFields||[];if(g.length){W("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,X("google_attr").build([Gf(g,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();
Y.a.c=["google"],function(){(function(a){Y.__c=a;Y.__c.g="c";Y.__c.h=!0;Y.__c.b=0})(function(a){return a.vtp_value})}();Y.a.e=["google"],function(){(function(a){Y.__e=a;Y.__e.g="e";Y.__e.h=!0;Y.__e.b=0})(function(){return kd})}();
Y.a.f=["google"],function(){(function(a){Y.__f=a;Y.__f.g="f";Y.__f.h=!0;Y.__f.b=0})(function(a){var b=Gh("gtm.referrer",1)||C.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Fb(H(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Eb(H(String(b))):String(b)})}();
Y.a.cl=["google"],function(){function a(a){var b=a.target;if(b){var d=If(b);d.event="gtm.click";Hh(d)}}(function(a){Y.__cl=a;Y.__cl.g="cl";Y.__cl.h=!0;Y.__cl.b=0})(function(b){if(!Oh("cl")){var c=X("document");sb(c,"click",a,!0);Ph("cl")}E(b.vtp_gtmOnSuccess)})}();Y.a.k=["google"],function(){(function(a){Y.__k=a;Y.__k.g="k";Y.__k.h=!0;Y.__k.b=0})(function(a){return Jh(a.vtp_name,Gh("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
Y.a.r=["google"],function(){(function(a){Y.__r=a;Y.__r.g="r";Y.__r.h=!0;Y.__r.b=0})(function(a){return za(a.vtp_min,a.vtp_max)})}();

Y.a.u=["google"],function(){var a=function(a){return{toString:function(){return a}}};(function(a){Y.__u=a;Y.__u.g="u";Y.__u.h=!0;Y.__u.b=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Gh("gtm.url",1))||Eh();var d=b[a("vtp_component")];return d&&"URL"!=d?Fb(H(String(c)),d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,"QUERY"==d?b[a("vtp_queryKey")]:void 0):Eb(H(String(c)))})}();
Y.a.v=["google"],function(){(function(a){Y.__v=a;Y.__v.g="v";Y.__v.h=!0;Y.__v.b=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Gh(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Y.a.ua=["google"],function(){var a,b=function(b){var c={},e={},g={},h={},k={};if(b.vtp_gaSettings){var l=b.vtp_gaSettings;y(Gf(l.vtp_fieldsToSet,"fieldName","value"),e);y(Gf(l.vtp_contentGroup,"index","group"),g);y(Gf(l.vtp_dimension,"index","dimension"),h);y(Gf(l.vtp_metric,"index","metric"),k);b.vtp_gaSettings=null;l.vtp_fieldsToSet=void 0;l.vtp_contentGroup=void 0;l.vtp_dimension=void 0;l.vtp_metric=void 0;var m=y(l);b=y(b,m)}y(Gf(b.vtp_fieldsToSet,"fieldName","value"),e);y(Gf(b.vtp_contentGroup,
"index","group"),g);y(Gf(b.vtp_dimension,"index","dimension"),h);y(Gf(b.vtp_metric,"index","metric"),k);var p=Vd(b.vtp_functionName),q="",r="";b.vtp_setTrackerName&&"string"==typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(r=b.vtp_trackerName,q=r+"."):(r="gtm"+od(),q=r+".");var u={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,
storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},v=function(a){var b=[].slice.call(arguments,0);b[0]=q+b[0];p.apply(window,b)},D=function(a,b){return void 0===b?b:a(b)},G=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&v("set",a+c,b[c])},A=function(){},I=function(a,b,c){var d=0;if(a)for(var e in a)if(a.hasOwnProperty(e)&&(c&&u[e]||!c&&void 0===u[e])){var g=w[e]?Ba(a[e]):a[e];"anonymizeIp"!=e||g||(g=void 0);b[e]=g;d++}return d},O={name:r};I(e,O,!0);p("create",b.vtp_trackingId||
c.trackingId,O);v("set","&gtm",Xg(!0));(function(a,c){void 0!==b[c]&&v("set",a,b[c])})("nonInteraction","vtp_nonInteraction");G("contentGroup",g);G("dimension",h);G("metric",k);var P={};I(e,P,!1)&&v("set",P);var F;b.vtp_enableLinkId&&v("require","linkid","linkid.js");v("set","hitCallback",function(){var a=e&&e.hitCallback;ta(a)&&
a();b.vtp_gtmOnSuccess()});if("TRACK_EVENT"==b.vtp_trackType){b.vtp_enableEcommerce&&(v("require","ec","ec.js"),A());var V={hitType:"event",eventCategory:String(b.vtp_eventCategory||c.category),eventAction:String(b.vtp_eventAction||c.action),eventLabel:D(String,b.vtp_eventLabel||c.label),eventValue:D(Aa,b.vtp_eventValue||c.value)};I(F,V,!1);v("send",V);}else if("TRACK_SOCIAL"==
b.vtp_trackType){}else if("TRACK_TRANSACTION"==b.vtp_trackType){}else if("TRACK_TIMING"==b.vtp_trackType){}else if("DECORATE_LINK"==b.vtp_trackType){}else if("DECORATE_FORM"==b.vtp_trackType){}else if("TRACK_DATA"==
b.vtp_trackType){}else{b.vtp_enableEcommerce&&(v("require","ec","ec.js"),A());if(b.vtp_doubleClick||"DISPLAY_FEATURES"==b.vtp_advertisingFeaturesType){var ua="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");v("require","displayfeatures",void 0,{cookieName:ua})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==b.vtp_advertisingFeaturesType){var S=
"_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");v("require","adfeatures",{cookieName:S})}F?v("send","pageview",F):v("send","pageview");b.vtp_autoLinkDomains&&Wd(q,b.vtp_autoLinkDomains,!!b.vtp_useHashAutoLink,!!b.vtp_decorateFormsAutoLink);}if(!a){var pa=b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";b.vtp_useInternalVersion&&!b.vtp_useDebugVersion&&
(pa="internal/"+pa);a=!0;W(J("https:","http:","//www.google-analytics.com/"+pa,e&&e.forceSSL),function(){var a=Ud();a&&a.loaded||b.vtp_gtmOnFailure();},b.vtp_gtmOnFailure)}};Y.__ua=b;Y.__ua.g="ua";Y.__ua.h=!0;Y.__ua.b=0}();






Y.a.aev=["google"],function(){var a=void 0,b="",c=0,d=void 0,e={ATTRIBUTE:"gtm.elementAttribute",CLASSES:"gtm.elementClasses",ELEMENT:"gtm.element",ID:"gtm.elementId",HISTORY_CHANGE_SOURCE:"gtm.historyChangeSource",HISTORY_NEW_STATE:"gtm.newHistoryState",HISTORY_NEW_URL_FRAGMENT:"gtm.newUrlFragment",HISTORY_OLD_STATE:"gtm.oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"gtm.oldUrlFragment",TARGET:"gtm.elementTarget"},g=function(a){var b=Gh(e[a.vtp_varType],1);return void 0!==b?b:a.vtp_defaultValue},h=function(a,
b){if(!a)return!1;var c=l(Eh()),d;d=wa(b.vtp_affiliatedDomains)?b.vtp_affiliatedDomains:String(b.vtp_affiliatedDomains||"").replace(/\s+/g,"").split(",");for(var e=[c],g=0;g<d.length;g++)if(d[g]instanceof RegExp){if(d[g].test(a))return!1}else{var h=d[g];if(0!=h.length){if(0<=l(a).indexOf(h))return!1;e.push(l(h))}}return!Ff(a,e)},k=/^https?:\/\//i,l=function(a){k.test(a)||(a="http://"+a);return Fb(H(a),"HOST",!0)};(function(a){Y.__aev=a;Y.__aev.g="aev";Y.__aev.h=!0;Y.__aev.b=0})(function(e){switch(e.vtp_varType){case "TAG_NAME":return Gh("gtm.element",
1).tagName||e.vtp_defaultValue;case "TEXT":var k,l=Gh("gtm.element",1),m=Gh("event",1),u=Number(new Date);a===l&&b===m&&c>u-250?k=d:(d=k=l?wb(l):"",a=l,b=m);c=u;return k||e.vtp_defaultValue;case "URL":var w;a:{var v=String(Gh("gtm.elementUrl",1)||e.vtp_defaultValue||""),D=H(v);switch(e.vtp_component||"URL"){case "URL":w=v;break a;case "IS_OUTBOUND":w=h(v,e);break a;default:w=Fb(D,e.vtp_component,e.vtp_stripWww,e.vtp_defaultPages,e.vtp_queryKey)}}return w;case "ATTRIBUTE":var G;if(void 0===e.vtp_attribute)G=
g(e);else{var A=Gh("gtm.element",1);G=ub(A,e.vtp_attribute)||e.vtp_defaultValue||""}return G;default:return g(e)}})}();
Y.a.gas=["google"],function(){(function(a){Y.__gas=a;Y.__gas.g="gas";Y.__gas.h=!0;Y.__gas.b=0})(function(a){var b=y(a),c=b;c[N.wa]=null;c[N.qe]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Y.a.awct=["google"],function(){var a=!1,b=[],c=function(a){var b=X("google_trackConversion"),c=a.gtm_onFailure;"function"==typeof b?b(a)||c():c()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(c){Sd();var d={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:c.vtp_conversionId,google_conversion_label:c.vtp_conversionLabel,
google_conversion_value:c.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:c.vtp_gtmOnSuccess,gtm_onFailure:c.vtp_gtmOnFailure,google_gtm:Xg()},h=function(a){return function(b,e,g){var h="DATA_LAYER"==a?Gh(g):c[e];h&&(d[b]=h)}},k=h("JSON");k("google_conversion_currency","vtp_currencyCode");k("google_conversion_order_id","vtp_orderId");c.vtp_enableProductReporting&&(k=h(c.vtp_productReportingDataSource),k("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),k("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),k("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),k("google_basket_discount","vtp_discount","discount"),k("google_conversion_items","vtp_items","items"),d.google_conversion_items=d.google_conversion_items.map(function(a){return{value:a.price,quantity:a.quantity,item_id:a.id}}));c.vtp_allowReadGaCookie&&(d.google_read_ga_cookie_opt_in=!0);!c.hasOwnProperty("vtp_enableConversionLinker")||c.vtp_enableConversionLinker?(c.vtp_conversionCookiePrefix&&
(d.google_gcl_cookie_prefix=c.vtp_conversionCookiePrefix),d.google_read_gcl_cookie_opt_out=!1):d.google_read_gcl_cookie_opt_out=!0;b.push(d);a||(a=!0,W("//www.googleadservices.com/pagead/conversion_async.js",g(),e("//www.googleadservices.com/pagead/conversion_async.js")))};Y.__awct=h;Y.__awct.g="awct";Y.__awct.h=!0;Y.__awct.b=0}();

Y.a.remm=["google"],function(){(function(a){Y.__remm=a;Y.__remm.g="remm";Y.__remm.h=!0;Y.__remm.b=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var k=new RegExp(h,e);if(k.test(b)){var l=c[g].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();
Y.a.fsl=[],function(){function a(){var a=X("document"),g=c(),h=HTMLFormElement.prototype.submit;sb(a,"click",function(a){var b=a.target;if(b&&(b=yb(b,["button","input"],100))&&("submit"==b.type||"image"==b.type)&&b.name&&ub(b,"value")){var c;(c=b.form?b.form.tagName?b.form:vb(b.form):yb(b,["form"],100))&&g.store(c,b)}},!1);sb(a,"submit",function(c){var e=c.target;if(!e)return c.returnValue;var k=c.defaultPrevented||!1===c.returnValue,p=!0;if(d(e,function(){if(p){var b=g.get(e),c;b&&(c=a.createElement("input"),
c.type="hidden",c.name=b.name,c.value=b.value,e.appendChild(c));h.call(e);c&&e.removeChild(c)}},k,b(e)&&!k))p=!1;else return k||(c.preventDefault&&c.preventDefault(),c.returnValue=!1),!1;return c.returnValue},!1);HTMLFormElement.prototype.submit=function(){var a=this,c=!0;d(a,function(){c&&h.call(a)},!1,b(a))&&(h.call(a),c=!1)}}function b(a){var b=a.target;return b&&"_self"!==b&&"_parent"!==b&&"_top"!==b?!1:!0}function c(){var a=[],b=function(b){return ya(a,function(a){return a.form===b})};return{store:function(c,
d){var e=b(c);e?e.button=d:a.push({form:c,button:d})},get:function(a){var c=b(a);return c?c.button:null}}}function d(a,b,c,d){var e=Lf("fsl",c?"nv.mwt":"mwt",0),g=If(a);g.event="gtm.formSubmit";var h=a.action;h&&h.tagName&&(h=a.cloneNode(!1).action);g["gtm.elementUrl"]=h;if(c){var k=Lf("fsl","nv.ids",[]).join(",");if(k)g["gtm.triggers"]=k;else return!0}else{var r=Lf("fsl","ids",[]).join(",");g["gtm.triggers"]=r}if(d&&e){if(!Hh(g,b,e))return!1}else Hh(g,function(){},e||2E3);return!0}(function(a){Y.__fsl=
a;Y.__fsl.g="fsl";Y.__fsl.h=!0;Y.__fsl.b=0})(function(b){var c=b.vtp_waitForTags,d=b.vtp_checkValidation,e=Number(b.vtp_waitForTagsTimeout);if(!e||0>=e)e=2E3;var l=b.vtp_uniqueTriggerId||"0";if(c){var m=function(a){return Math.max(e,a)};Kf("fsl","mwt",m,0);d||Kf("fsl","nv.mwt",m,0)}var p=function(a){a.push(l);return a};Kf("fsl","ids",p,[]);d||Kf("fsl","nv.ids",p,[]);Oh("fsl")||(a(),Ph("fsl"));E(b.vtp_gtmOnSuccess)})}();Y.a.smm=["google"],function(){(function(a){Y.__smm=a;Y.__smm.g="smm";Y.__smm.h=!0;Y.__smm.b=0})(function(a){var b=a.vtp_input,c=Gf(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();

Y.a.paused=[],function(){(function(a){Y.__paused=a;Y.__paused.g="paused";Y.__paused.h=!0;Y.__paused.b=0})(function(a){E(a.vtp_gtmOnFailure)})}();
Y.a.html=["customScripts"],function(){function a(b,c,g,h){return function(){try{if(0<c.length){var d=c.shift(),e=a(b,c,g,h);if("SCRIPT"==String(d.nodeName).toUpperCase()&&"text/gtmscript"==d.type){var m=C.createElement("script");m.async=!1;m.type="text/javascript";m.id=d.id;m.text=d.text||d.textContent||d.innerHTML||"";d.charset&&(m.charset=d.charset);var p=d.getAttribute("data-gtmsrc");p&&(m.src=p,nb(m,e));b.insertBefore(m,null);p||e()}else if(d.innerHTML&&0<=d.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];d.firstChild;)q.push(d.removeChild(d.firstChild));b.insertBefore(d,null);a(d,q,e,h)()}else b.insertBefore(d,null),e()}else g()}catch(r){E(h)}}}var c=function(d){if(C.body){var e=
d.vtp_gtmOnFailure,g=Sh(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.hc,k=g.X;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(C.body,xb(h),k,e)()}else Dh(function(){c(d)},
200)};Y.__html=c;Y.__html.g="html";Y.__html.h=!0;Y.__html.b=0}();

Y.a.lcl=[],function(){function a(){var a=X("document"),d=0,e=function(c){var e=c.target;if(e&&3!==c.which&&(!c.timeStamp||c.timeStamp!==d)){d=c.timeStamp;e=yb(e,["a","area"],100);if(!e)return c.returnValue;var g=c.defaultPrevented||!1===c.returnValue,l=Lf("lcl",g?"nv.mwt":"mwt",0),m=If(e);m.event="gtm.linkClick";if(g){var p=Lf("lcl","nv.ids",[]).join(",");if(p)m["gtm.triggers"]=p;else return}else{var q=Lf("lcl","ids",[]).join(",");m["gtm.triggers"]=q}if(b(c,e,a)&&!g&&l&&e.href){var r=X((e.target||
"_self").substring(1)),u=!0;if(Hh(m,function(){u&&r&&(r.location.href=e.href)},l))u=!1;else return c.preventDefault&&c.preventDefault(),c.returnValue=!1}else Hh(m,function(){},l||2E3);return!0}};sb(a,"click",e,!1);sb(a,"auxclick",e,!1)}function b(a,b,e){if(2===a.which||a.ctrlKey||a.shiftKey||a.altKey||a.metaKey)return!1;var c=b.href.indexOf("#"),d=b.target;if(d&&"_self"!==d&&"_parent"!==d&&"_top"!==d||0===c)return!1;if(0<c){var k=Eb(H(b.href)),l=Eb(H(e.location));return k!==l}return!0}(function(a){Y.__lcl=
a;Y.__lcl.g="lcl";Y.__lcl.h=!0;Y.__lcl.b=0})(function(b){var c=void 0===b.vtp_waitForTags?!0:b.vtp_waitForTags,e=void 0===b.vtp_checkValidation?!0:b.vtp_checkValidation,g=Number(b.vtp_waitForTagsTimeout);if(!g||0>=g)g=2E3;var h=b.vtp_uniqueTriggerId||"0";if(c){var k=function(a){return Math.max(g,a)};Kf("lcl","mwt",k,0);e||Kf("lcl","nv.mwt",k,0)}var l=function(a){a.push(h);return a};Kf("lcl","ids",l,[]);e||Kf("lcl","nv.ids",l,[]);Oh("lcl")||(a(),Ph("lcl"));E(b.vtp_gtmOnSuccess)})}();


var Bi={};Bi.macro=function(a){if(jf.Yb.hasOwnProperty(a))return jf.Yb[a]},Bi.onHtmlSuccess=jf.jd(!0),Bi.onHtmlFailure=jf.jd(!1);Bi.dataLayer=wd;Bi.callback=function(a){md.hasOwnProperty(a)&&ta(md[a])&&md[a]();delete md[a]};Bi.Me=function(){gd[fd.o]=Bi;nd=Y.a;Rc=Rc||jf;Sc=Id};
Bi.Gf=function(){gd=B.google_tag_manager=B.google_tag_manager||{};if(gd[fd.o]){var a=gd.zones;a&&a.unregisterChild(fd.o)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Kc.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)Nc.push(e[g]);for(var h=b.predicates||[],k=0;k<h.length;k++)Mc.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var p=l[m],q={},r=0;r<p.length;r++)q[p[r][0]]=Array.prototype.slice.call(p[r],1);Lc.push(q)}Pc=Y;var u=data.permissions||{};yf();Af(u);Bi.Me();
hf();Md=!1;Nd=0;if("interactive"==C.readyState&&!C.createEventObject||"complete"==C.readyState)Pd();else{sb(C,"DOMContentLoaded",Pd);sb(C,"readystatechange",Pd);if(C.createEventObject&&C.documentElement.doScroll){var w=!0;try{w=!B.frameElement}catch(D){}w&&Qd()}sb(B,"load",Pd)}$e=!1;"complete"===C.readyState?bf():sb(B,"load",bf);
a:{if(!qe)break a;B.setInterval(re,864E5);}jd=(new Date).getTime()}};Bi.Gf();

})()
