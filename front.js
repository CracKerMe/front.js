;function front(templateString, sourceData, targetNode) {
  "use strict";

  var dataArray = Array.isArray(sourceData) ? sourceData : [sourceData];
  var htmlString = "";

  var retrieveSource = function(sourceObject, dataPath) {
    var keys = dataPath.split('.');
    var source = sourceObject;
    var key;
    while(keys.length) {
      key = keys.shift();
      if(typeof source === 'object' && key in source) {
        source = source[key];
      } else {
        return false;
      }
    }
    return source;
  };

  dataArray.forEach(function(data) {
    var template = templateString.replace(/@if\{\{([\w\s-_\.]+)\}\}([\s\S]+?)(@else([\s\S]+?))?@endif/g, function($, $1, $2, $3, $4) {
      return retrieveSource(data, $1) ? $2 : ($3 ? $4 : "");
    });

    htmlString += template.replace(/\{\{([\w\s-_\.]+)\}\}/g, function($, $1) {
      return retrieveSource(data, $1) || $;
    });
  });

  if(targetNode) {
    targetNode.innerHTML = htmlString;
  } else {
    return htmlString;
  }
}

if(typeof define === "function") {
  define('front.js/front', [], function() {
    return { render: front };
  });
}