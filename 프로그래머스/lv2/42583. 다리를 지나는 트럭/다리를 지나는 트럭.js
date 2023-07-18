function solution(
  bridge_length = 2,
  weight = 10,
  truck_weights = [7, 4, 5, 6]
) {
  let bridgeOnTruck = Array(bridge_length).fill(0);
  let bridgeOnWeight = 0;
  let time = 0;

  while (truck_weights.length) {
    bridgeOnWeight -= bridgeOnTruck.shift();

    if (truck_weights[0] + bridgeOnWeight <= weight) {
      const truck = truck_weights.shift();

      bridgeOnTruck.push(truck);
      bridgeOnWeight += truck;
    } else {
      bridgeOnTruck.push(0);
    }

    time++;
  }

  return time + bridge_length;
}