{
  $('#album-title').text(album.title);
  $('img#album-cover-art').attr('src', album.albumArtUrl);
  $('#artist').text(artist.main);
  $('#release-info').text(release-info.main);
};
