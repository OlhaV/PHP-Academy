var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
  thumbnailData:  [{
    title: 'Show Courses',
    number: 120,
    header: 'Learn React',
    description: 'React is a fantastic new front end library for rendering web pages. React is a fantastic new front end library for rendering web pages.',
    imageUrl: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png',
    phone: '+138 555 777', 
    email: 'support@react.com', 
    skype: 'react'
  },{
    title: 'Show Courses',
    number: 25,
    header: 'Learn Gulp',
    description: 'Gulp will speed up your development workflow.  Gulp will speed up your development workflow.  Gulp will speed up your development workflow.',
    imageUrl: 'http://brunch.io/images/others/gulp.png',
    phone: '+138 111 333', 
    email: 'support@gulp.com', 
    skype: 'gulp'
  }]
};


var element = React.createElement(ThumbnailList, options);
React.render(element, document.querySelector('.container'));