export const scrollToRegistrationForm = () => {
    const element = document.getElementById('registration-form');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
};
