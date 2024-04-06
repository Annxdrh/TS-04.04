interface Reception {
    delivery(): void;
    receive(): void;
  }
abstract class Publisher {
    constructor( public title: string, public author: string, public pubYear: number, public copies: number) {}
  
    abstract delivery(): void;
    abstract receive(): void;
  }
  
class Book extends Publisher implements Reception {
    constructor( title: string, author: string, pubYear: number, copies: number, public pages: number) {
      super(title, author, pubYear, copies);
    }
   delivery(): void {}
   receive(): void {}
  }
  
class Magazine extends Publisher implements Reception {
    constructor( title: string, author: string, pubYear: number, copies: number, public issue: number) {
      super(title, author, pubYear, copies);
    }
   delivery(): void {}
   receive(): void {}
  }
  
class Reader {
    constructor( public firstName: string, public lastName: string, public items: Publisher[]) {}
    delivery(item: Publisher): void {}
    receive(item: Publisher): void {}
  }
  
  class Library {
    private publications: Publisher[] = [];
  
    addPublication(publication: Publisher) {
      this.publications.push(publication);
    }
  
    removePublication(publication: Publisher) {
      const index = this.publications.indexOf(publication);
      if (index !== -1) {
        this.publications.splice(index, 1);
      }
    }
  }