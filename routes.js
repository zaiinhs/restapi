'use strict';

const { json } = require('body-parser');

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
    app.route('/ubah')
        .put(jsonku.ubahdata);
    app.route('/hapus')
        .delete(jsonku.hapusdata);
}