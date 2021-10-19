export declare enum EDepth {
    content = "content",
    navbar = "navbar",
    menu = "menu",
    menuDropdown = "menuDropdown",
    modal = "modal",
    overlay = "overlay",
    toast = "toast",
    dialog = "dialog",
    priority = "priority"
}
export declare type TTokenDepthType = keyof typeof EDepth;
