const state = {
    value: 5,
};
// Impure function

// function impure(multiplier) {
//     state.value = state.value * multiplier;
// }

// impure(2);
// console.log(state.value);

// impure(2);
// console.log(state.value);

// Pure function

const pureFn = (multiplier) => {
    return 
        state.value = state.value * multiplier
    
}
pureFn(2);
console.log(state.value);
pureFn(2);
console.log(state.value);
pureFn(2);
console.log(state.value);