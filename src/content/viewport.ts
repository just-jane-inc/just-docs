let scrollTimeoutID: undefined|number;

// Scroll the viewport to the element that matches the hash in the address bar.
export const scrollToUrlFragment = (debounce = 100) => {
    // Get the correct tooling to debounce multiple calls to this function.
    const { clearTimeout, setTimeout } = window;

    // If a previous call to this function already set a timeout, we simply
    //   prevent its execution.
    if (scrollTimeoutID !== undefined) {
        clearTimeout(scrollTimeoutID);
    }

    // If there is nothing to scroll to, we simply unset the timeout ID.
    if (!location.hash) {
        scrollTimeoutID = undefined;
        return;
    }

    // After <debounce> milliseconds, find the element that matches the URL
    //   fragment and scroll it into view.
    scrollTimeoutID = setTimeout(() => {
        // Take the most recent location hash, to let the user navigate away
        //   from any initially set URL fragment.
        const { hash } = location;

        if (hash) {
            // Remove the leading hash from the name.
            const name = hash.replace('#', '');

            // Find a target by ID or if it's a named anchor.
            const target = document.querySelector(`#${name},a[name="${name}"]`);

            if (target) {
                target.scrollIntoView();
            }
        }

        // Unset the timeout ID.
        scrollTimeoutID = undefined;
    }, debounce);
}