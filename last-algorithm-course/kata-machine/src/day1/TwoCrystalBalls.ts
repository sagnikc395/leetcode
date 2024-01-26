export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));

    // first crystal ball to check where it does break
    let i = jumpAmount;
    for (; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            break;
        }
    }
    //we now jump back : 0(sqrt(n)) and then walk forward
    i -= jumpAmount;
    for (let j = 0; j < jumpAmount && i < breaks.length; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
}
