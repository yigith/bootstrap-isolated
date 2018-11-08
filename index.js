var replace = require("replace");
 
replace({
  regex: ".bs4 html",
  replacement: ".bs4",
  paths: ['bs4.css'],
  recursive: false,
  silent: false,
});

replace({
  regex: ".bs4 body",
  replacement: ".bs4",
  paths: ['bs4.css'],
  recursive: false,
  silent: false,
});