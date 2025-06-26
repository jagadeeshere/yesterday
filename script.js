const statuses = ["pending", "in-progress", "succeeded", "failed"];

function updateStatus(element) {
  let current = statuses.find(status => element.classList.contains(status)) || "pending";
  let nextIndex = (statuses.indexOf(current) + 1) % statuses.length;
  
  element.classList.remove(...statuses);
  element.classList.add(statuses[nextIndex]);
}
