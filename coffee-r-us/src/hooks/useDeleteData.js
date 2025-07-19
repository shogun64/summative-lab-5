async function useDeleteData(url, id) {
    const res = await fetch(`${url}/${id}`, {
        method: "DELETE",
    });
    if (!res.ok) throw new Error(`Deleting coffee failed: ${res.status}`);
    return res.json();
}

export default useDeleteData;