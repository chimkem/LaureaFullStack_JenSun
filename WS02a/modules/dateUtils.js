function date() {
    const time = new Date();
    return time.toString();
}
function format() {
    const time = new Date().toISOString().replace(/T/,' ').replace(/\..+/,' ');
    return time;
}
module.exports = { date, format };