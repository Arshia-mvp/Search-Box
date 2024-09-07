document.getElementById('search-box').addEventListener('keyup', function() {
    const searchText = this.value.toLowerCase();
    const items = document.querySelectorAll('#items-list li');
    
    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(searchText)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});
function sib () {
    alert('سیب');
}
function holoo () {
    alert('هلو');
}
function moz () {
    alert('موز');
}
function angoor () {
    alert('انگور');
}
function portegal () {
    alert('پرتقال');
}
function anbeh () {
    alert('انبه');
}
function tootfarangi () {
    alert('توت فرنگی');
}
function hendevaneh () {
    alert('هندوانه');
}
function kivi () {
    alert('کیوی');
}
function anar () {
    alert('انار');
}