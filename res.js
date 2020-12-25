'use strict';

exports.ok = function (values, res) {
    var data = {
        'status': 200,
        'values': values
    };

    res.json(data);
    res.end();
}

//respon untuk nested matakuliah
exports.oknested = function (value, res) {
    //akumulasi
    const hasil = value.reduce((akumulasikan, item) => {
        //tentukan key grup
        if (akumulasikan[item.nama]) {
            //buat variabel grup nama mahasiswa
            const group = akumulasikan[item.nama];
            //cek jika isi array adalah matakuliah
            if (Array.isArray(group.matakuliah)) {
                //tambahkan value ke dalam grup matakuliah
                group.matakuliah.push(item.matakuliah);
            } else {
                group.matakuliah = [group.matakuliah, item.matakuliah];
            }
        } else {
            akumulasikan[item.nama] = item;
        }
        return akumulasikan;
    }, {});

    var data = {
        'status': 200,
        'values': hasil
    };
    res.json(data);
    res.end();
}