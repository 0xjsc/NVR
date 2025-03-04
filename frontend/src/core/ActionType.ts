// top = lowest priority
// bottom = highest priority
// (because enums starts indexing from 0 and for us, higher index = higher priority)

enum ActionPriority {
    COMPATIBILITY,
    BIOMEHAT,
    AUTOHAT,
    BULLTICK,
    ANTITRAP,
    AUTOBREAK,
    ANTIBULL,
    ANTIREFLECT,
    SPIKESYNC,
    ANTIINSTA,
    
    FORCED
}

enum ActionType {
    HAT,
    TAIL,
    ATTACK,
    WEAPON
}

export { ActionPriority, ActionType }