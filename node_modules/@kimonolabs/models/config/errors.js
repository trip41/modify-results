'use strict';

var errors = {
    1: 'DB Failure',
    2: 'Fields and exclude fields are mutually exclusive'
};

exports.getFormattedErr = function(err, errCode) {
    var resp = {
        error: true
    };

    if (err) { resp.errorObj = err; }
    if (errCode) { resp.message = errors[errCode]; }
    return resp;
};