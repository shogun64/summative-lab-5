async function usePatchData(url, id, data) {
    const res = await fetch(`${url}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(`Patching coffee failed: ${res.status}`);
    return res.json();
}

export default usePatchData;