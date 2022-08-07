export const setDataLocalDB = (data) => {
    let myOrder = getDataLocalDB();
    if (myOrder) {
        myOrder = [...myOrder, data]
        localStorage.setItem("myOrder", JSON.stringify(myOrder));
    } else {
        myOrder = [data]
        localStorage.setItem("myOrder", JSON.stringify(myOrder));
    }
    console.log(myOrder)
}

export const getDataLocalDB = () => {
    const data = localStorage.getItem("myOrder");
    return JSON.parse(data) 
}