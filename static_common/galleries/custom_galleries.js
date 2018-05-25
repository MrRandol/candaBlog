function initialize_select(galleries) {
    var sel = document.getElementById('gallery-select');
    for(var i = 0; i < galleries.length; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = galleries[i].name;
        opt.value = galleries[i].name;
        sel.appendChild(opt);
    }
}

function change_gallery() {
    var gallery = document.getElementById('gallery-select').value
    init_gallery(gallery)
}

function init_gallery(gallery_name, containerId  ='juicebox-container') {
    new juicebox({
        baseUrl: '/photos_gallery' + gallery_name,
        configUrl: '/photos_gallery' + gallery_name + '/config.xml',
        containerId: containerId,
        galleryWidth: '100%',
        galleryHeight: '100%',
        backgroundColor: 'rgba(34,34,34,1)'
    });
}