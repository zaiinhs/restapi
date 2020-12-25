'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampildata);

    app.route('/tampil/:id')
        .get(jsonku.tampildataberdasarkanid);
    app.route('/tambah')
        .post(jsonku.tambahdata);
}