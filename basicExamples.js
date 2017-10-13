class location {
  constructor(country, state, city, zip) {
    this.country = country;
    this.state = state;
    this.city = city;
    this.zip = zip;
  }
};
let myLocation = new location("United States", "California", "RSM", 92688);
myLocation;

// --------------------------------------------------
class findObjectVolume {
  constructor(height, width, depth) {
    this.height = height;
    this.width = width;
    this.depth = depth;
  }
  // METHOD
  objectVolume() {
    return this.height * this.width * this.depth;
  }
  // GETTER
  get volume() {
  return this.objectVolume();
  }
};
const cube = new findObjectVolume(10, 10, 10);
cube.volume;
