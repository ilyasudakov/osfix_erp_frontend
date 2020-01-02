const request = (options, isLogin) => {
    const headers = new Headers({
        "Content-Type": "application/json"
    })

    if (localStorage.getItem("accessToken") && options.url.includes("refreshToken") !== true) {
        headers.append('Authorization', 'Bearer_' + localStorage.getItem("accessToken"))
    }

    const defaults = { headers: headers };

    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        // .then(response =>
        //     response.json().then(json => {
        //         if (!response.ok) {
        //             return Promise.reject(json);
        //         }
        //         return json;
        //     })
        // );
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.error);
            }
            return response;
        }
        );
}

export function getClients() {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/client/",
        method: "GET"
    });
}

export function addClient(newClient) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/client",
        method: "POST",
        body: JSON.stringify(newClient)
    })
}

export function deleteClient(id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/client/" + id,
        method: "DELETE"
    })
}

export function getDocuments() {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/document/",
        method: "GET"
    })
}

export function deleteDocument(id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/document/" + id,
        method: "DELETE"
    })
}

export function getRequests() {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/request/",
        method: "GET"
    })
}

export function deleteRequest(id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/request/" + id,
        method: "DELETE"
    })
}

export function addRequest(newRequest) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/request",
        method: "POST",
        body: JSON.stringify(newRequest)
    })
}

export function addProductsToRequest(newRequest) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/request_product/",
        method: "POST",
        body: JSON.stringify(newRequest)
    })
}

export function editProductsToRequest(newRequest, id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/request_product/" + id,
        method: "PUT",
        body: JSON.stringify(newRequest)
    })
}

export function deleteProductsToRequest(id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/request_product/" + id,
        method: "DELETE"
    })
}

export function addProductsToRequestLEMZ(newRequest) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/lemz_product/",
        method: "POST",
        body: JSON.stringify(newRequest)
    })
}

export function editProductsToRequestLEMZ(newRequest, id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/lemz_product/" + id,
        method: "PUT",
        body: JSON.stringify(newRequest)
    })
}

export function deleteProductsToRequestLEMZ(id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/lemz_product/" + id,
        method: "DELETE"
    })
}

export function getRequestById(id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/request/" + id,
        method: "GET"
    })
}

export function editRequestStatus(newStatus, id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/request/status/" + id,
        method: "PUT",
        body: JSON.stringify(newStatus)
    })
}

export function editRequest(newRequest, id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/request/" + id,
        method: "PUT",
        body: JSON.stringify(newRequest)
    })
}

export function login(loginRequest) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/auth/login",
        method: "POST",
        body: JSON.stringify(loginRequest)
    })
}

export function refreshToken(refreshToken) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/auth/refreshToken",
        method: "POST",
        body: JSON.stringify(refreshToken),
    })
}

export function getUsers() {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/admin/user/",
        method: "GET"
    })
}

export function getUserById(id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/admin/user/" + id,
        method: "GET"
    })
}

export function deleteUser(id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/admin/user/" + id,
        method: "DELETE"
    })
}

export function editUser(newUser, id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/admin/user/" + id,
        method: "PUT",
        body: JSON.stringify(newUser)
    })
}

export function addUser(newUser) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/admin/user/",
        method: "POST",
        body: JSON.stringify(newUser)
    })
}

export function getProducts() {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/product/",
        method: "GET"
    })
}

export function getProductById(id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/product/" + id,
        method: "GET"
    })
}

export function deleteProduct(id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/product/" + id,
        method: "DELETE"
    })
}

export function addProduct(newProduct) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/product/",
        method: "POST",
        body: JSON.stringify(newProduct)
    })
}

export function editProduct(newProduct, id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/product/" + id,
        method: "PUT",
        body: JSON.stringify(newProduct)
    })
}

export function getRequestsLEMZ() {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/lemz/",
        method: "GET"
    })
}

export function deleteRequestLEMZ(id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/lemz/" + id,
        method: "DELETE"
    })
}

export function addRequestLEMZ(newRequest) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/lemz/",
        method: "POST",
        body: JSON.stringify(newRequest)
    })
}

export function getRequestLEMZById(id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/lemz/" + id,
        method: "GET"
    })
}

export function editRequestLEMZStatus(newStatus, id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/lemz/status/" + id,
        method: "PUT",
        body: JSON.stringify(newStatus)
    })
}

export function editRequestLEMZ(newRequest, id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/lemz/" + id,
        method: "PUT",
        body: JSON.stringify(newRequest)
    })
}

export function getMainTasks() {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/mainTask/",
        method: "GET"
    })
}

export function getMainTaskById(id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/mainTask/" + id,
        method: "GET"
    })
}

export function deleteMainTask(id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/mainTask/" + id,
        method: "DELETE"
    })
}

export function addMainTask(newTask) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/mainTask/",
        method: "POST",
        body: JSON.stringify(newTask)
    })
}

export function editMainTask(newTask, id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/mainTask/" + id,
        method: "PUT",
        body: JSON.stringify(newTask)
    })
}

export function getTransportations() {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/shipping/",
        method: "GET"
    })
}

export function getTransportationById(id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/shipping/" + id,
        method: "GET"
    })
}

export function deleteTransportation(id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/shipping/" + id,
        method: "DELETE"
    })
}

export function addTransportation(newTransportation) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/shipping/",
        method: "POST",
        body: JSON.stringify(newTransportation)
    })
}

export function editTransportation(newTransportation, id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/shipping/" + id,
        method: "PUT",
        body: JSON.stringify(newTransportation)
    })
}

export function getParts() {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/detail/",
        method: "GET"
    })
}

export function getPartById(id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/detail/" + id,
        method: "GET"
    })
}

export function deletePart(id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/detail/" + id,
        method: "DELETE"
    })
}

export function addPart(newPart) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/detail/",
        method: "POST",
        body: JSON.stringify(newPart)
    })
}

export function editPart(newPart, id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/detail/" + id,
        method: "PUT",
        body: JSON.stringify(newPart)
    })
}

export function getEmployees() {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/employee/",
        method: "GET"
    })
}

export function getEmployeeById(id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/employee/" + id,
        method: "GET"
    })
}

export function deleteEmployee(id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/employee/" + id,
        method: "DELETE"
    })
}

export function addEmployee(newPart) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/employee/",
        method: "POST",
        body: JSON.stringify(newPart)
    })
}

export function editEmployee(newPart, id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/employee/" + id,
        method: "PUT",
        body: JSON.stringify(newPart)
    })
}

export function getStamp() {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/stamp/",
        method: "GET"
    })
}

export function getStampById(id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/stamp/" + id,
        method: "GET"
    })
}

export function deleteStamp(id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/stamp/" + id,
        method: "DELETE"
    })
}

export function addStamp(newStamp) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/stamp/",
        method: "POST",
        body: JSON.stringify(newStamp)
    })
}

export function editStamp(newStamp, id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/stamp/" + id,
        method: "PUT",
        body: JSON.stringify(newStamp)
    })
}

export function addPartsToStamp(newPart) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/stamp/part/",
        method: "POST",
        body: JSON.stringify(newPart)
    })
}

export function editPartsOfStamp(newPart, id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/stamp/part/" + id,
        method: "PUT",
        body: JSON.stringify(newPart)
    })
}

export function getPartFromStamp(id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/stamp/part/" + id,
        method: "GET"
    })
}

export function editPartFromStamp(newPart, id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/stamp/part/" + id,
        method: "PUT",
        body: JSON.stringify(newPart)
    })
}

export function deletePartsFromStamp(id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/stamp/part/" + id,
        method: "DELETE"
    })
}

export function getMachine() {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/bench/",
        method: "GET"
    })
}

export function getMachineById(id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/bench/" + id,
        method: "GET"
    })
}

export function deleteMachine(id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/bench/" + id,
        method: "DELETE"
    })
}

export function addMachine(newStamp) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/bench/",
        method: "POST",
        body: JSON.stringify(newStamp)
    })
}

export function editMachine(newStamp, id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/bench/" + id,
        method: "PUT",
        body: JSON.stringify(newStamp)
    })
}

export function addPartsToMachine(newPart) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/bench/part/",
        method: "POST",
        body: JSON.stringify(newPart)
    })
}

export function editPartsOfMachine(newPart, id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/bench/part/" + id,
        method: "PUT",
        body: JSON.stringify(newPart)
    })
}

export function getPartFromMachine(id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/bench/part/" + id,
        method: "GET"
    })
}

export function editPartFromMachine(newPart, id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/bench/part/" + id,
        method: "PUT",
        body: JSON.stringify(newPart)
    })
}

export function deletePartsFromMachine(id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/bench/part/" + id,
        method: "DELETE"
    })
}

export function getPressForm() {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/press/",
        method: "GET"
    })
}

export function getPressFormById(id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/press/" + id,
        method: "GET"
    })
}

export function deletePressForm(id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/press/" + id,
        method: "DELETE"
    })
}

export function addPressForm(newStamp) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/press/",
        method: "POST",
        body: JSON.stringify(newStamp)
    })
}

export function editPressForm(newStamp, id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/press/" + id,
        method: "PUT",
        body: JSON.stringify(newStamp)
    })
}

export function addPartsToPressForm(newPart) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/press/part/",
        method: "POST",
        body: JSON.stringify(newPart)
    })
}

export function editPartsOfPressForm(newPart, id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/press/part/" + id,
        method: "PUT",
        body: JSON.stringify(newPart)
    })
}

export function getPartFromPressForm(id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/press/part/" + id,
        method: "GET"
    })
}

export function editPartFromPressForm(newPart, id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/press/part/" + id,
        method: "PUT",
        body: JSON.stringify(newPart)
    })
}

export function deletePartsFromPressForm(id) {
    return request({
        url: process.env.API_BASE_URL + "/api/v1/press/part/" + id,
        method: "DELETE"
    })
}