const volume = navigator.volumeManager;

//Taken from KaiOS Tech docs :)
function handleKeyDown(evt) {
    switch (evt.key) {
        case 'SoftLeft':
            map.zoomIn();
            break;
        case 'SoftRight':
            map.zoomOut();
            break;
        case 'Call':
            break;
        case 'Enter':
            break;
        case 'ArrowLeft':
            map.panBy(100, 0);
            break;
        case 'ArrowRight':
            map.panBy(-100, 0);
            break;
        case 'ArrowUp':
            map.panBy(0, 100);
            break;
        case 'ArrowDown':
            map.panBy(0, -100);
            break;
        case '1':
            break;
        case '2':
            break;
        case '3':
            break;

        case '4':
            break;
        case '5':
            break;
        case '6':
            break;
        case '7':
            break;
        case '8':
            break;
        case '9':
            break;
        case '0':
            break;
        case '*':
            var pos = map.getCenter();
            alert('坐标: ' + pos);
            break;
        case '#':
            alert("By:此店不售此书");
            break;
    };
};
document.addEventListener('keydown', handleKeyDown);