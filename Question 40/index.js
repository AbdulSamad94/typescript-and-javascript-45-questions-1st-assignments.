function makeAlbum(artistName, title, numberOfTrack) {
    var about = {
        artistName: artistName,
        title: title
    };
    if (numberOfTrack !== undefined) {
        about.numberOfTrack = numberOfTrack;
    }
    return about;
}
console.log(makeAlbum("ArjitSing", "FavSongs"));
console.log(makeAlbum("Eminem", "Raps", 99));
console.log(makeAlbum("Oda Sensie", "One piece"));
