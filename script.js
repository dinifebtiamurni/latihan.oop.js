
class BankAccount {
    // Properti privat
    #saldo;

    // Constructor
    constructor(namaPemilik, saldoAwal) {
        this.namaPemilik = namaPemilik;
        this.#saldo = saldoAwal;
    }

    // Method deposit
    deposit(jumlah) {
        if (jumlah > 0) {
            this.#saldo += jumlah;
            return true;
        }
        return false;
    }

    // Method withdraw
    withdraw(jumlah) {
        if (jumlah > 0 && jumlah <= this.#saldo) {
            this.#saldo -= jumlah;
            return true;
        }
        return false;
    }

    // Method getsaldo
    getsaldo() {
        return this.#saldo;
    }
}

// Variabel akun
let akun = null;

// Membuat akun
function buatAkun() {
    const nama = document.getElementById("nama").value;
    const saldoAwal = Number(document.getElementById("saldoAwal").value);

    if (nama.trim() === "" || saldoAwal < 0 || !Number.isFinite(saldoAwal)) {
        alert("Masukkan nama dan saldo awal yang valid!");
        return;
    }

    akun = new BankAccount(nama, saldoAwal);

    document.getElementById("namaPemilik").innerText = 
        "Halo, " + nama;

    document.getElementById("menuAkun").style.display = "block";

    tampilkanSaldo();
}

// Menampilkan saldo
function tampilkanSaldo() {
    document.getElementById("saldo").innerText =
        "Rp " + akun.getsaldo().toLocaleString("id-ID");
}

// Deposit
function deposit() {
    const jumlah = Number(document.getElementById("jumlah").value);

    if (akun.deposit(jumlah)) {
        document.getElementById("pesan").innerText =
            "Deposit berhasil!";
        document.getElementById("pesan").style.color = "green";
    } else {
        document.getElementById("pesan").innerText =
            "Deposit gagal! Jumlah harus lebih dari 0.";
        document.getElementById("pesan").style.color = "red";
    }

    tampilkanSaldo();
    document.getElementById("jumlah").value = "";
}

// Withdraw
function withdraw() {
    const jumlah = Number(document.getElementById("jumlah").value);

    if (akun.withdraw(jumlah)) {
        document.getElementById("pesan").innerText =
            "Penarikan berhasil!";
        document.getElementById("pesan").style.color = "green";
    } else {
        document.getElementById("pesan").innerText =
            "Penarikan gagal! Saldo tidak cukup atau jumlah tidak valid.";
        document.getElementById("pesan").style.color = "red";
    }

    tampilkanSaldo();
    document.getElementById("jumlah").value = "";
}

// Cek saldo
function cekSaldo() {
    document.getElementById("pesan").innerText =
        "Saldo Anda: Rp " + akun.getsaldo().toLocaleString("id-ID");

    document.getElementById("pesan").style.color = "blue";
}
