document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Ambil nilai dari form
    const namaTugas = document.getElementById('namaTugas').value;
    const mataKuliah = document.getElementById('mataKuliah').value;
    const tanggal = document.getElementById('tanggal').value;

    // Tambahkan tugas ke dalam tabel
    const table = document.getElementById('taskTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.innerHTML = `
        <td>${namaTugas}</td>
        <td>${mataKuliah}</td>
        <td>${tanggal}</td>
        <td>
            <button class="edit-btn" onclick="editTask(this)">Edit</button>
            <button class="delete-btn" onclick="deleteTask(this)">Hapus</button>
        </td>
    `;

    // Bersihkan form setelah menyimpan
    document.getElementById('taskForm').reset();
});

// Fungsi untuk mengedit tugas
function editTask(button) {
    const row = button.parentElement.parentElement;
    const namaTugas = row.cells[0].innerText;
    const mataKuliah = row.cells[1].innerText;
    const tanggal = row.cells[2].innerText;

    // Isi form dengan data tugas yang akan diedit
    document.getElementById('namaTugas').value = namaTugas;
    document.getElementById('mataKuliah').value = mataKuliah;
    document.getElementById('tanggal').value = tanggal;

    // Hapus row setelah data diambil untuk diedit
    row.remove();
}

// Fungsi untuk menghapus tugas
function deleteTask(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}

