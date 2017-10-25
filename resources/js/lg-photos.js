$(document).ready(function() {
  $('#beakerhead2017').on('click', function(e) {
      $(this).lightGallery({
          dynamic: true,
          dynamicEl: [{
              src: '../albums/Beakerhead2017/Photos/ORG_DSC01953.JPG',
              thumb: '../albums/Beakerhead2017/Photos/ORG_DSC01953.JPG'
          },{
              src: '../albums/Beakerhead2017/Photos/ORG_DSC01980.JPG',
              thumb: '../albums/Beakerhead2017/Photos/ORG_DSC01980.JPG',
          }]
      });
  });
});

$(document).ready(function() {
  $('#houston2017').on('click', function(e) {
      $(this).lightGallery({
          dynamic: true,
          dynamicEl: [{
              src: 'http://via.placeholder.com/350x150',
              thumb: 'http://via.placeholder.com/350x150'
          },{
              src: 'https://www.youtube.com/watch?v=meBbDqAXago',
              thumb: 'https://sachinchoolur.github.io/lightGallery/static/img/thumb-v-y-1.jpg',
              poster: 'https://sachinchoolur.github.io/lightGallery/static/img/videos/y-video1-cover.jpg'
          },{
              html: '#video2',
              thumb: 'https://sachinchoolur.github.io/lightGallery/static/img/videos/y-video1-cover.jpg',
              poster: 'https://sachinchoolur.github.io/lightGallery/static/img/thumb-v-y-1.jpg'
          },{
              src: 'https://sachinchoolur.github.io/lightGallery/static/img/4.jpg',
              thumb: 'https://sachinchoolur.github.io/lightGallery/static/img/thumb-4.jpg'
          }]
      });
  });
});