let fn = (input) => {
    let pair = {
        "}": "{",
        ")": "(",
        "]": "[",
    };
    const start_pair = Object.values(pair);
    const end_pair = Object.keys(pair);
    let temp = [];
    let top;

    for (const i of input) {
        if (start_pair.indexOf(i) != -1) {
            temp.push(i);
        }
        if (end_pair.indexOf(i) != -1) {
            top = temp.pop();
            if (pair[i] !== top) {
                return false
            }
        }
    }
    return  temp.length == 0
}

fn("{[]}") //true
fn("{{]") //false
fn("[{abc}]") //true
fn(123) //error