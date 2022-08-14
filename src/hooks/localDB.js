export const setDataLocalDB = (data) => {
    let myOrder = getDataLocalDB("myOrder");
    if (myOrder) {
        myOrder = [...myOrder, data]
        localStorage.setItem("myOrder", JSON.stringify(myOrder));
    } else {
        myOrder = [data]
        localStorage.setItem("myOrder", JSON.stringify(myOrder));
    }
    console.log(myOrder)
}

export const getDataLocalDB = (itemName) => {
    const data = localStorage.getItem(itemName);
    return JSON.parse(data)
}

export const setUserInfo = (user) => {
    localStorage.setItem("user", JSON.stringify(user))
}

export const getRemoveItemLocalDB = (itemName) => {
    localStorage.removeItem(itemName);
}
