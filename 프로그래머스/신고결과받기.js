function solution(id_list, report, k) {

  const warning = {};
  const stop = {};
  const set = new Set(report);
  const new_report = [...set];
  let i;
  const arr = {};
  for (i = 0; i < id_list.length; i++) {
    warning[id_list[i]] = 0;
    stop[id_list[i]] = 0;
  }

  for (i = 0; i < new_report.length; i++) {
    let temp = new_report[i].split(" ");
    stop[temp[1]] += 1;
    if (stop[temp[1]] == k) {
      arr[temp[1]] = 0;
    }
  }

  for (const list of new_report) {
    const temp = list.split(" ");
    if (temp[1] in arr) {
      warning[temp[0]] += 1;
    }
  }

  const res = Object.keys(warning).map((key) => warning[key]);
  return res;
}
