export class Player {
    name: string = "";
    role: string = "";
    trophies: string = "";
    tag: string = "";

    constructor(name: string, role: string, trophies: string, tag: string) {
      this.name = name;
      this.role = role;
      this.trophies = trophies;
      this.tag = tag;
    }
  }