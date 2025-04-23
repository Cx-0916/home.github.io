const showQQImageLink = document.getElementById('showQQImageLink');
const QQImageContainer = document.getElementById('QQImageContainer');
const showWXImageLink = document.getElementById('showWXImageLink');
const WXImageContainer = document.getElementById('WXImageContainer');

showQQImageLink.addEventListener('click', function (event) {
    event.preventDefault();
    if (QQImageContainer.style.display === 'none') {
        QQImageContainer.style.display = 'block';
    } else {
        QQImageContainer.style.display = 'none';
    }
});

showWXImageLink.addEventListener('click', function (event) {
    event.preventDefault();
    if (WXImageContainer.style.display === 'none') {
        WXImageContainer.style.display = 'block';
    } else {
        WXImageContainer.style.display = 'none';
    }
});