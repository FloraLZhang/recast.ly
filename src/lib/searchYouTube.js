import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback, errorCB = null) => {
  // TODO
  const url ='https://app-hrsei-api.herokuapp.com/api/recastly/videos';
  $.ajax({
    url: url,
    type: 'GET',
    data: {
      q: query,
      youtube_api_key:YOUTUBE_API_KEY,
    },
    success: (data) => {
      callback(data);
    },
    error: errorCB  || function(response) { console.log('Youtube Search Error:', response)}
  });
};

export default searchYouTube;
