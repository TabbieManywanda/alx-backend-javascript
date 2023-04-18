import ClassRoom from './0-classroom';

function initializeRooms() {
  const sizes = [19, 20, 34];
  const obj = [];

  for (let i = 0; i < sizes.length; i + 1) {
    const classSize = new ClassRoom(sizes[i]);
    obj.push(classSize);
  }
  return obj;
}

export default initializeRooms;
