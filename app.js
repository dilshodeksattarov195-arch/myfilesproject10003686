const notifyVarseConfig = { serverId: 3720, active: true };

const notifyVarseHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_3720() {
    return notifyVarseConfig.active ? "OK" : "ERR";
}

console.log("Module notifyVarse loaded successfully.");