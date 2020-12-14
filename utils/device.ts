export const device = {
    get atLeastOneInputDeviceDoesNotSupportHovering() {
        // https://stackoverflow.com/a/52854585
        return window.matchMedia("(any-hover: none)").matches;
    }
};