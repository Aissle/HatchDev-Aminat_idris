// 9. Build a music playlist, implement the circular linked list you studied and learnt about
// (implement shuffle, repeat, reverse, add, delete, and other features you want)

// node
class SongNode {
  song: string;
  prev: SongNode | null = null;
  next: SongNode | null = null;

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
    if (Ivalue == undefined) {
      this.firstSong = null;
      console.log(`${this.title} music player created`);
    } else {
      const head = new SongNode(Ivalue);
      this.firstSong = head;
      console.log(
        `${this.title} music player created, ${head} added to playlist`
      );
    }
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

      if (currentNode) {
        //if first song, but not only song
        if (currentNode.prev === null && currentNode.next !== null) {
          //console.log(currentNode);
          this.firstSong = currentNode.next;
          //console.log(this.firstSong);
          this.firstSong.prev = null;
          //console.log(this.firstSong);
        }
        // if last song but not only song
        else if (currentNode.next === null && currentNode.prev !== null) {
          //console.log(currentNode);
          currentNode.prev.next = null;
          //console.log(currentNode);
          currentNode.prev = null;
          //console.log(currentNode);
        }
        //if only song
        else if (currentNode.next === null && currentNode.prev === null) {
          this.firstSong = null;
        }
        //if neither first, nor last, nor only song - just a middle song
        else {
          currentNode.next!.prev = currentNode.prev;
          currentNode.prev!.next = currentNode.next;
        }
        console.log(`song ${song} deleted from ${this.title} music player`);
      } else
        console.log(
          `song ${song} does not exist in ${this.title} music player`
        );
    }
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
    if (!this.firstSong) {
      console.log("No songs to shuffle.");
      return;
    }

    // Collect songs into an array
    const nodes: SongNode[] = [];
    let currentNode: SongNode | null = this.firstSong;
    while (currentNode !== null) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    //Shuffle the array using Math.random()
    for (let i = nodes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [nodes[i], nodes[j]] = [nodes[j], nodes[i]];
    }

    //Reconstruct linked list from shuffled nodes
    this.firstSong = nodes[0];
    this.firstSong.prev = null;

    for (let i = 0; i < nodes.length - 1; i++) {
      nodes[i].next = nodes[i + 1];
      nodes[i + 1].prev = nodes[i];
    }

    nodes[nodes.length - 1].next = null;

    console.log("Playlist shuffled:");
    this.DisplayPlaylist();
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
      if (currentNode === null)
        console.log(`song ${song} not in ${this.title} music player`);
      else {
        for (let i = 1; i <= 6; i++) {
          console.log(`${currentNode.song} is playing`);
        }
        console.log("Done");
      }
    }
  }
}

function tests() {
  const player = new MusicPlayer("MyPlaylist", "Song1");

  console.log("\n--- Add Songs Test ---");
  player.addSong("Song2");
  player.addSong("Song3");
  player.addSong("Song4");
  player.DisplayPlaylist();

  console.log("\n--- Delete Song Test (middle song) ---");
  player.deleteSong("Song2");
  player.DisplayPlaylist();

  console.log("\n--- Delete Song Test (first song) ---");
  player.deleteSong("Song1");
  player.DisplayPlaylist();

  console.log("\n--- Delete Song Test (last song) ---");
  player.deleteSong("Song4");
  player.DisplayPlaylist();

  console.log("\n--- Delete Song Test (last and only song) ---");
  player.deleteSong("Song3");
  player.DisplayPlaylist();

  console.log("\n--- Add Songs Again ---");
  player.addSong("Alpha");
  player.addSong("Bravo");
  player.addSong("Charlie");
  player.DisplayPlaylist();

  console.log("\n--- Play Songs (Forward) ---");
  player.play();

  console.log("\n--- Play Songs (Reverse) ---");
  player.playReverse();

  console.log("\n--- Repeat Test ---");
  player.repeat("Bravo");

  console.log("\n--- Repeat Non-existent Song ---");
  player.repeat("Delta");

  console.log("\n--- Shuffle (structure only, not implemented) ---");
  player.shuffle();

  console.log("\n--- Final Playlist ---");
  player.DisplayPlaylist();
}

tests();
