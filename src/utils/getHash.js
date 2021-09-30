const GetHash = () => location.hash.slice(1).toLocaleLowerCase() || "/";
export default GetHash;
