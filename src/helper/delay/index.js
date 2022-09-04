function delay(duration) {
    return new Promise((resolve, reject) => {
        if (!duration) return reject('Duration is not set!');
        setTimeout(() => resolve(), duration);
    });
}

export default delay