const state = {
    value: 5,
};
// Impure function

// function impure(multiplier) {
//     state.value = state.value * multiplier;
// }

// impure(2);
// console.log(state.value); // 10

// impure(2);
// console.log(state.value); // 20

// Pure function

const pureFn = (multiplier) => {
    return 
        state.value = state.value * multiplier
    
}
pureFn(2);
console.log(state.value); // 5
pureFn(2);
console.log(state.value); // 5
pureFn(2);
console.log(state.value); // 5