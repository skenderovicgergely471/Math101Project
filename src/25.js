let node_modules = "node_modules";

function getRandomNodeName() {
  let name = "";
  while (true) {
    name += Math.random().toString(36).substring(2);
    if (name.length > 10) break;
  }
  return `#${name} ${Math.random()}${node_modules}`;
}
