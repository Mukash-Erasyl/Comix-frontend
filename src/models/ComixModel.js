class ComixModel {
    constructor(title, description, genre, year, publisher, status, coverImage, tags, inTop, images, translations, similarComix) {
      this.title = title;
      this.description = description;
      this.genre = genre;
      this.year = year;
      this.publisher = publisher;
      this.status = status;
      this.coverImage = coverImage;
      this.tags = tags;
      this.inTop = inTop;
      this.images = images;
      this.translations = translations;
      this.similarComix = similarComix;
    }
  }
  
  export default Comix;
  