export default function (mbti) {
    const {questions, choices} = mbti;
    let score = {
        E: 0,
        I: 0,
        N: 0,
        S: 0,
        T: 0,
        F: 0,
        P: 0,
        J: 0
    }
    const valueMap = {
        '3': 3,
        '1': 1,
        '0': 0,
        '-1': -1,
        '-3': -3,
    }
    for (let i = 0; i < 28; i++) {
        const value = valueMap[choices[i]?.choice];
        switch (questions[i]?.type) {
            case 'E':
                if (value < 0) {
                    score.I -= value;
                } else {
                    score.E += value;
                }
                break;
            case 'I':
                if (value < 0) {
                    score.E -= value;
                } else {
                    score.I += value;
                }
                break;
            case 'N':
                if (value < 0) {
                    score.S -= value;
                } else {
                    score.N += value;
                }
                break;
            case 'S':
                if (value < 0) {
                    score.N -= value;
                } else {
                    score.S += value;
                }
                break;
            case 'T':
                if (value < 0) {
                    score.F -= value;
                } else {
                    score.T += value;
                }
                break;
            case 'F':
                if (value < 0) {
                    score.T -= value;
                } else {
                    score.F += value;
                }
                break;
            case 'P':
                if (value < 0) {
                    score.J -= value;
                } else {
                    score.P += value;
                }
                break;
            case 'J':
                if (value < 0) {
                    score.P -= value;
                } else {
                    score.J += value;
                }
                break;
        }
    }
    let personality = "";

    // I or E
    if (score.E > score.I) {
        personality += "E"
    } else if (score.E < score.I) {
        personality += "I";
    } else {
        personality += mbti.result[0];
    }
    // N or S
    if (score.N > score.S) {
        personality += "N"
    } else if (score.N < score.S) {
        personality += "S";
    } else {
        personality += mbti.result[1];
    }
    // T or F
    if (score.T > score.F) {
        personality += "T"
    } else if (score.T < score.F) {
        personality += "F";
    } else {
        personality += mbti.result[2];
    }
    // J or P
    if (score.J > score.P) {
        personality += "J"
    } else if (score.J < score.P) {
        personality += "P";
    } else {
        personality += mbti.result[3];
    }

    const result = {
        personality: personality,
        E: score.E / (score.E + score.I),
        I: score.I / (score.E + score.I),
        N: score.N / (score.N + score.S),
        S: score.S / (score.N + score.S),
        T: score.T / (score.T + score.F),
        F: score.F / (score.T + score.F),
        P: score.P / (score.P + score.J),
        J: score.J / (score.P + score.J)
    };


    return result;
};