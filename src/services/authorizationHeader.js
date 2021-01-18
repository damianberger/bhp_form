export default function authorizationHeader() {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.accessToken

    if (user) {
        return { Authorization: "Bearer " + token };

    } else {
        return {};
    }
}
