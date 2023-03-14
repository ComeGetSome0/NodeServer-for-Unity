class UnityInstance {
    constructor(instanceType, clientID, localID, position, rotation , currentHealth) {
        this.instanceType = instanceType;
        this.clientID = clientID;
        this.localID = localID;
        this.position = position;
        this.rotation = rotation;
        this.currentHealth = currentHealth;
    }
}

module.exports = UnityInstance;