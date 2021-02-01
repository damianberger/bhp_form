export default function authorizationHeader() {
    const token = JSON.parse(localStorage.getItem("token"));

    if (token) {
        return { Authorization: "Bearer " + token };

    } else {
        return {};
    }
}
