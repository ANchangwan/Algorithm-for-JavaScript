// # 1
const rank ={
    6:1,
    5:2,
    4:3,
    3:4,
    2:5,
    1:6,
    0:6
}

function solution(lottos, win_nums) {
    const answer = [];
    let cnt = 0;
    const zero = lottos.reduce((cur, prev) => cur + (prev ===0), 0);
    for(const win of win_nums){
        const check = lottos.find(e=> e === win)
        if(check){
            cnt += 1;
        }
    }

    console.log(cnt)
    answer.push(rank[cnt+zero], rank[cnt])
    return answer;
}

// # 2
function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    let zeroCount = lottos.filter(v => !v).length;

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
}