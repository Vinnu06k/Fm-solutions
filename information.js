function scrollToMember(memberId) {
    const memberElement = document.getElementById(memberId);
    if (memberElement) {
        memberElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}