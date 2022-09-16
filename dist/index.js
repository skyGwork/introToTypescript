//! @ required named
const sendEmailTo = (input) => {
    return `${input.firstName}-${input.lastName}@gmail.com`;
};
// console.log(generateEmail({ firstName: 'max', lastName: 'well' }));
console.log(sendEmailTo({
    lastName: 'well',
    firstName: 'max',
}));
//! @ required positional
//! and optional ?
const demo = (one, two, three) => {
    // positional
    //   console.log(`here is the args\n01:${one}\n02:${two}\n03:${three}`);
    //? optional
    console.log(`here is the args\n01:${one}\n02:${two}`);
};
// demo('@provider', true, 100);
demo(100, '@provider');
