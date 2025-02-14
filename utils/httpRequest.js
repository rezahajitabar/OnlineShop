const BASE_URL = "https://fakestoreapi.com";

export async function postData(path, data) {
    try {
        const response = await fetch(`${BASE_URL}${path}`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });

        // بررسی اینکه آیا پاسخ JSON است
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            throw new Error("Response is not JSON. Possible HTML error page.");
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error("Error in postData:", error);
        alert("An error occurred! Check the console for details.");
        throw error;
    }
}

const getData = async (path) => {
    try {
        const response = await fetch(`${BASE_URL}/${path}`);
        const json = await response.json();
        return json;
    } catch (error) {
        alert("error");
    }
}

export{getData}