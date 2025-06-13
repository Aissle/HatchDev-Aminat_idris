// 9. Build a music playlist, implement the circular linked list you studied and learnt about
// (implement shuffle, repeat, reverse, add, delete, and other features you want)

// node
class SongNode {
  song: string;
  next: SongNode | null = null;
  prev: SongNode | null = null;

  constructor(Ivalue: string) {
    this.song = Ivalue;
  }
}

//doubly linkedList
class MusicPlayer {
  title: string;
  firstSong: SongNode | null;

  constructor(title: string, Ivalue: string) {
    this.title = title;
    if (Ivalue == undefined) this.firstSong = null;
    else {
      const head = new SongNode(Ivalue);
      this.firstSong = head;
    }
    console.log(`${this.title} music player created`);
  }

  public addSong(song: string) {
    const newNode = new SongNode(song);
    if (!this.firstSong) this.firstSong = newNode;
    else {
      let currentNode = this.firstSong;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      newNode.prev = currentNode;
      currentNode.next = newNode;
    }
    console.log(`song ${song} added to ${this.title} music player`);
  }

  public deleteSong(song: string) {
    if (!this.firstSong) console.log("Nothing to remove");
    else {
      let currentNode: SongNode | null = this.firstSong;
      while (currentNode !== null) {
        if (currentNode.song === song) break;
        currentNode = currentNode.next;
      }
      currentNode!.next!.prev = currentNode!.prev;
      currentNode!.prev!.next = currentNode!.next;
    }
    console.log(`song ${song} deleted from ${this.title} music player`);
  }

  public DisplayPlaylist() {
    if (!this.firstSong) console.log("No songs yet.");
    else {
      let currentNode: SongNode | null = this.firstSong;
      let i = 1;
      console.log("SONGS:");
      while (currentNode !== null) {
        console.log(`${i}. ${currentNode.song}`);
        i++;
        currentNode = currentNode.next;
      }
      console.log("Done");
    }
  }

  public play() {
    if (!this.firstSong) console.log("No songs yet.");
    else {
      let currentNode: SongNode | null = this.firstSong;
      while (currentNode !== null) {
        console.log(`${currentNode.song} is playing`);
        currentNode = currentNode.next;
      }
      console.log("Done");
    }
  }

  public playReverse() {
    if (!this.firstSong) console.log("No songs yet.");
    else {
      let currentNode: SongNode | null = this.firstSong;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      while (currentNode !== null) {
        console.log(`${currentNode.song} is playing`);
        currentNode = currentNode.prev;
      }
      console.log("Done");
    }
  }

  public shuffle() {
    //let i = Math.random;
  }

  public repeat(song: string) {
    if (!this.firstSong)
      console.log(`Song does not exist in ${this.title} Music player yet.`);
    else {
      let currentNode: SongNode | null = this.firstSong;
      while (currentNode !== null) {
        if (currentNode.song === song) break;
        currentNode = currentNode.next;
      }
      for (let i = 1; i <= 6; i++) {
        console.log(`${currentNode!.song} is playing`);
      }
      console.log("Done");
    }
  }
}

//class usuing list
// class MusicPlayer {
//   playList: PlayList | null;
//   constructor(playList: PlayList) {
//     this.playList = playList;
//   }
// }
