export default class Multimedia {
    webId = "";
    
  
    constructor(url, date, author, name) {  
      this.url=url;
      this.date=date;
      this.author=author; 
      this.name = name;     
    }
  
    getIdMedia() {     
      return `${'img'}_${this.name}_${this.author}`;
    }
  }