var lagi = true;
while (lagi) {
    // menangkap tebakan angka dari player
    alert('Mari main tebak angka 1 sampai 10. \nKamu hanya punya 3 kesempatan.');

    // menentukan angka tebakan
    // membangkitkan bilangan random 
    var angka = Math.floor(Math.random()*10 + 1);

    // menentukan rules
    for (var i = 1; i <= 3; i++) {

        var ruleAngka = true;
        while (ruleAngka) {
            var player = parseInt(prompt('Masukkan angka tebakan dari 1 - 10'));
            if (player < 1 || player > 10) {
                alert('Angka harus dari 1 sampai 10')
                ruleAngka = true;
            } else {
                ruleAngka = false;
            }
        }

        if (player > angka) {

            if (i !== 3) { 
                alert('Angka terlalu TINGGI! \nCoba lagi, kesempatanmu tersisa ' + (3 - i));
            } else {
                alert('Game over. \nAngka yang benar adalah ' + angka);
            }

        } else if (player < angka) {
            
            if (i !== 3) {
                alert('Angka terlalu RENDAH! \nCoba lagi, kesempatanmu tersisa ' + (3 - i));
            } else {
                alert('Game over. \nAngka yang benar adalah ' + angka);
            }

        } else if (player === angka) {

            alert('Kamu benar! \nAngka yang dicari adalah ' + angka);
            i = 4;

        } else {
            i--;
        }
    }
    // console.log(angka, player);
    
    lagi = confirm('Mau main lagi?');
}
alert('Terima kasih sudah bermain.');