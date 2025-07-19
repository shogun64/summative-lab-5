async function usePostData(url, data) {
    console.log(url);
    console.log(data);
    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    console.log(res.json);
    if (!res.ok) throw new Error(`Posting coffee failed: ${res.status}`);    
    return res.json();
}

export default usePostData