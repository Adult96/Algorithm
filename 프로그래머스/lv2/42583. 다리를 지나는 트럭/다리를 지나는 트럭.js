function solution(
  bridge_length = 2,
  weight = 10,
  truck_weights = [7, 4, 5, 6]
) {
  let time = 0;
  let trucks_on_bridge = Array(bridge_length).fill(0);
  let current_weight_on_bridge = 0;

  while (truck_weights.length) {
    current_weight_on_bridge -= trucks_on_bridge.shift();

    if (current_weight_on_bridge + truck_weights[0] <= weight) {
      let truck_weight = truck_weights.shift();
      trucks_on_bridge.push(truck_weight);
      current_weight_on_bridge += truck_weight;
    } else {
      trucks_on_bridge.push(0);
    }

    time++;
  }

  return time + bridge_length;
}