const bs = require('bootstrap');

[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    .map((el) => new bs.Popover(el));